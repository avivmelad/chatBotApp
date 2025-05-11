import { Box, Typography } from "@mui/material";

export default function Message({ text, isUser }) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: isUser ? "flex-end" : "flex-start",
                alignItems: "center",
                padding: 1,
                gap: '15px',
            }}
        >
            <Typography sx={{
                bgcolor: isUser ? "#0099FF" : "grey.300",
                width: "50px",
                height: "50px",
                padding: 1,
                borderRadius: '50%',
                maxWidth: "70%",
                order: isUser ? '2' : '1',
            }}></Typography>
            <Box
                sx={{
                    bgcolor: isUser ? "#E6F4FD" : "grey.300",
                    color: "black",
                    padding: 1,
                    borderRadius: 0,
                    maxWidth: "70%",
                    display: "flex",
                    textAlign: "center",
                    height: "fit-content",
                    order: isUser ? '1' : '2',
                }}
            >
                <Typography>{text}</Typography>
            </Box>
        </Box>
    );
}