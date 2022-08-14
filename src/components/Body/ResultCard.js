import { Box } from "@mui/system";
import ResultCardData from "./ResultCardData";
import ResultLink from "./ResultLink";

export default function ResultCard({Title,link,SubTitle}) {
    return (
        <Box sx={{
            display:'flex',
                gap:"5px",
                flexDirection:"column",
                width:"650px",
        }}>
            <ResultLink link={link}/>
            <ResultCardData Title={Title} SubTitle={SubTitle}/>
        </Box>
    );
    }