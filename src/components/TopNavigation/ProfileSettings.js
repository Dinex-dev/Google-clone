import { AppsOutlined, SettingsOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { Box } from "@mui/system";

export default function ProfileSettings({image}) {
    return (
        <Box sx={{
            display:"flex",
            alignItems:"center",
            gap:"5px",
            marginRight:'30px',
        }}>
            <IconButton>
                <SettingsOutlined/>            
            </IconButton>
            <IconButton>
                <AppsOutlined/>
            </IconButton>
            <IconButton>
            <Avatar src={image} sx={{height:'32px',width:"32px"}}/>
            </IconButton>
        </Box>
    );
    }