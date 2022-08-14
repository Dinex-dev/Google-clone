
import { MoreVert } from "@mui/icons-material";
import { Box, Breadcrumbs, Link, Typography } from "@mui/joy";



export default function ResultLink({link}) {    
    return (
        <Box sx={{
            display:"flex",
            alignItems:"center",
            gap:"14px",
            }}>
            <Link href='#' underline="none" textColor='#5f6368'>
            <Breadcrumbs separator="›" aria-label="breadcrumbs" sx={{padding:0}}>
                {link = link.split("/")}
                <Typography sx={{fontSize:"14px"}} variant="body2" textColor="#202124">
                    {`${link[0]}//`}{link[2]}
                </Typography>
                {
                    link.slice(3).map((item,index)=>{
                        return (
                            <Typography sx={{fontSize:"14px"}} variant="body2">
                                {item}
                            </Typography>
                        )
                    }
                    )
                }
            </Breadcrumbs>
            </Link>
            <MoreVert fontSize="small" sx={{color:"#5f6368",fontSize:"14px"}}/>
            
        </Box>
    );
    }