import { Container } from "@mui/joy";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";




export default function About({About,Data}){
    const keys= Object.keys(Data);
    return (
    <Container maxWidth="sm" sx={{marginY:"29px",fontSize:'14px'}}>
        <Typography variant="body" sx={{color:"#4d5156",marginY:"13px",lineHeight:"1.58"}} component="p">
            {About}
        </Typography>
        <Box >
        {
            keys.map((key)=>{
                return(
                <Box marginY="7px" >
                    <span><strong>{key} : </strong>{Data[key]}</span>
                </Box>
                )
            })
        }
        </Box>
    </Container >
    );
}