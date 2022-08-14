import { Typography } from "@mui/material";
import { Box } from "@mui/system";


export default function ResultStatus({Results,Time}) {
    return (
        <Box paddingY="13px" marginBottom="6px">
            <Typography variant="body2" color="#70757a" fontSize={'14px'}>About {Results} results ({Time} seconds)</Typography>
        </Box>
    );
}