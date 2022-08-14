import { Box } from "@mui/system";
import SearchBox from "./Search";

export default function FormLogo({Name}) {
    return(
        <Box sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            gap:"45px",
            marginLeft:'30px',
            
        }}>
        <Box><img src="google.png" alt="logo" height='30' width='92' /></Box>
        <SearchBox  Name={Name}/>
        </Box>
    );
}