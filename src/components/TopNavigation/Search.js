import { Close, Search } from "@mui/icons-material";
import { TextField } from "@mui/joy";
import { Divider } from "@mui/material";
import IconButton from '@mui/material/IconButton'
import { Box } from "@mui/system";

export default function SearchBox({Name}) {
    return (
        <Box sx={{
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "24px",
        }}>
        <TextField
            disabled={true}
            value={Name}
            size="lg"
            sx={{
                width: "540px",
                paddingX: "12px",
            }}
            variant="soft"
            endDecorator={
                <>
                <IconButton >
                    <Close />
                </IconButton>
                    <Divider orientation="vertical" flexItem />
                <IconButton>
                    <Search color="primary"/>
                </IconButton>
                </>
  }
/>
        </Box>
    );
    }