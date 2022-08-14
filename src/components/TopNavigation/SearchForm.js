import { Box } from "@mui/system";
import FormLogo from "./FormLogo";
import ProfileSettings from "./ProfileSettings";

export default function SearchForm({Name,ProfileImage}) {
    return(
        
    <Box sx={{
        display:"flex",
        marginTop: '26px',
        alignItems:"center",
        maxHeight:"46px",
        justifyContent:"space-between",
    }}>
    <FormLogo Name={Name}/>
    <ProfileSettings image={ProfileImage}/>
    </Box>
    );
}
