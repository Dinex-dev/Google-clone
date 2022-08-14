import { Share } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";



export default function NameOcc({Name,Occupation}){
    return(
        <Box sx={{display:'flex', alignItems:'baseline', gap:"2rem",justifyContent:"space-between"}}>
        <Box sx={{paddingY:"12px",paddingX:"15px",display:"flex",flexDirection:"column",gap:"9px"}}>
            <Typography variant="h2" component="h2" sx={{fontSize:"30px"}}>
                {Name}
            </Typography>
            <Typography variant="body2" component="p" sx={{fonstSize:'14px',color:"#70757a"}}>
                {Occupation}
            </Typography>
        </Box>
        <IconButton aria-label="share" sx={{marginRight:"40px"}}>
        <Share sx={{color:"#767676",}}/>
        </IconButton>
        </Box>
    );
}