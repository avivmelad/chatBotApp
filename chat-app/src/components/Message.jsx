import { Box, Typography } from "@mui/material";

export default function Message({ text, isUser }) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: isUser ? "flex-end" : "flex-start",
                padding: 1,
            }}
        >
            <Box
                sx={{
                    bgcolor: isUser ? "blue" : "grey.300",
                    color: isUser ? "white" : "black",
                    padding: 1,
                    borderRadius: 2,
                    maxWidth: "70%",
                }}
            >
                <Typography>{text}</Typography>
            </Box>
        </Box>
    );
}