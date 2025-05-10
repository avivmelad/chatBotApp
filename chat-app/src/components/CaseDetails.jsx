import { Box, Typography, Button } from "@mui/material";


function formatDateToIsraelTime(isoString) {
    const date = new Date(isoString);
    return date.toLocaleString('en-US', {
        timeZone: 'Asia/Jerusalem',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
}

export default function CaseDetails({ caseInfo }) {
    return (
        <Box sx={{ padding: 2, borderBottom: "1px solid #ccc" }}>
            <div className="title-block">
                <Typography sx={{ fontWeight: 'bold' }} variant="h6">{caseInfo.title}</Typography>
            </div>
            <div className="info-block">
                <Typography variant="body2">Case ID: {caseInfo.caseId}</Typography>
                <Typography variant="body2">Product Name: {caseInfo.productName}</Typography>
                <Typography variant="body2">Create At: {formatDateToIsraelTime(caseInfo.createAt)}</Typography>
                <Typography variant="body2">Last Update: {formatDateToIsraelTime(caseInfo.lastUpdate)}</Typography>
            </div>
        </Box >
    );
}