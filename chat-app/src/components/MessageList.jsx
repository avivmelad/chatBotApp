import { Box, Typography } from "@mui/material";
import Message from "./Message";
import { format } from "date-fns";


export default function MessageList({ messages }) {
    return (
        <Box sx={{ flexGrow: 1, overflowY: "auto", padding: 2, minHeight: '200px' }}>
            {messages.length === 0 ? (
                <Typography sx={{ textAlign: "center", color: "gray" }}>
                    No messages yet. Be the first to say something!
                </Typography>
            ) : messages.map((msg, index) => (
                <Box key={index}>
                    <Message text={msg.text} isUser={msg.is_user} />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: msg.is_user ? "flex-end" : "flex-start",
                        }}
                    >
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ marginTop: "4px" }}
                        >
                            {msg.created_at
                                ? "Chat -" + format(new Date(msg.created_at), "MMM dd, yyyy, hh:mm a")
                                : ""}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}
