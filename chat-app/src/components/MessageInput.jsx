import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function MessageInput({ onSend }) {
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            onSend(input.trim());
            setInput("");
        }
    };

    return (
        <Box sx={{ display: "flex", flexDirection: 'column', padding: 2, borderTop: "1px solid #ccc" }}>
            <TextField
                label="Your message"
                multiline
                minRows={5}
                fullWidth
                sx={{ marginTop: 2 }}
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <Button onClick={handleSend} variant="contained" sx={{ marginLeft: 1, marginTop:'30px',maxWidth:'100px', alignSelf:'flex-end' }}>
                Send
            </Button>
        </Box>
    );
}