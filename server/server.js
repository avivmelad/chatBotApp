import express from "express";
import cors from "cors";
import pkg from "pg";
import fs from "fs";
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const botReplies = JSON.parse(fs.readFileSync("./messages.json", "utf-8")).replies;

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "chatapp",
    password: "123",
    port: 5433,
});

const replyState = {};

pool.connect()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch(err => console.error("Connection error", err.stack));


app.get("/conversations/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const convoResult = await pool.query("SELECT * FROM conversations WHERE id = $1", [id]);
        const messagesResult = await pool.query("SELECT * FROM messages WHERE conversation_id = $1 ORDER BY created_at", [id]);


        if (convoResult.rows.length === 0) {
            return res.status(404).json({ error: "Conversation not found" });
        }


        res.json({
            conversation: convoResult.rows[0],
            messages: messagesResult.rows
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



app.post("/messages", async (req, res) => {
    const { conversation_id, text, is_user } = req.body;

    try {

        const userMessage = await pool.query(
            "INSERT INTO messages (conversation_id, text, is_user) VALUES ($1, $2, $3) RETURNING *",
            [conversation_id, text, is_user]
        );


        const replyIndex = replyState[conversation_id] || 0;
        const botReplyText = botReplies[replyIndex] || botReplies[botReplies.length - 1];


        const botMessage = await pool.query(
            "INSERT INTO messages (conversation_id, text, is_user) VALUES ($1, $2, $3) RETURNING *",
            [conversation_id, botReplyText, false]
        );


        replyState[conversation_id] = Math.min(replyIndex + 1, botReplies.length - 1);

        await pool.query(
            "UPDATE conversations SET last_updated = NOW() WHERE id = $1",
            [conversation_id]
        );


        res.status(201).json({
            userMessage: userMessage.rows[0],
            botReply: botMessage.rows[0],
        });


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));