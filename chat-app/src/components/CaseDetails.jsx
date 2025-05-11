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
                <Typography variant="body2" sx={{ display: 'flex', gap: '5px', color: '#5F6368' }} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7l-5 4V6a2 2 0 0 1 2-2z" fill="none" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Case ID: {caseInfo.caseId}
                </Typography>
                <Typography variant="body2" sx={{ display: 'flex', gap: '5px', color: '#5F6368' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <rect x="2" y="6" width="20" height="12" rx="2" ry="2" fill="none" stroke="#9CA3AF" stroke-width="2" />
                        <rect x="6" y="9" width="12" height="1.5" fill="#9CA3AF" />
                        <rect x="6" y="12" width="8" height="1.5" fill="#9CA3AF" />
                    </svg>
                    Product Name: {caseInfo.productName}
                </Typography>
                <Typography variant="body2" sx={{ color: '#5F6368' }}>Create At: {formatDateToIsraelTime(caseInfo.createAt)}</Typography>
                <Typography variant="body2" sx={{ color: '#5F6368' }}>Last Update: {formatDateToIsraelTime(caseInfo.lastUpdate)}</Typography>
            </div>
        </Box >
    );
}