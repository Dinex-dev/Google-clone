import { Link, Sheet, Typography } from "@mui/joy";



export default function ResultCardData({Title,SubTitle,}) {
    
    return (
        
        <Sheet >
        <Link underline="hover" variant="h3" sx={{fontSize:"20px", color:"#1a0dab"}} >
            {Title}
        </Link>
        <Typography variant="body1" sx={{fontSize:"14px", color:"#4d5156",lineHeight:"1.58"}}>
        {SubTitle+" ..."}
        </Typography>
        </Sheet>
    );
    }