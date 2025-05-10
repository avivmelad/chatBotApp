import { Box, Typography } from "@mui/material";
import Message from "./Message";
import { format } from "date-fns";

export default function MessageList({ messages }) {
    return (
        <Box sx={{ flexGrow: 1, overflowY: "auto", padding: 2 }}>
            {messages.map((msg, index) => (
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
                                ? format(new Date(msg.created_at), "MMM dd, yyyy, hh:mm a")
                                : ""}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}