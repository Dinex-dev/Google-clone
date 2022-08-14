import { Box } from "@mui/system";
import ResultCard from "./ResultCard";
import ResultStatus from "./ResultStatus";

import InfoCard from "./InfoCard/InfoCard";
export default function Body({data}) {
  return (
    <Box sx={{  marginLeft:"174px",
                paddingY:"0px",
                '@media (max-width: 1300px)': {
                marginLeft:"35px",
            },
    }}>
      <ResultStatus Results={data.ResultCount} Time={data.TimeTaken} />
      <Box sx={{
        display:"flex",
        gap:'100px',
      }}>
      <Box sx={{
        display:'flex',
        gap:"30px",
        flexDirection:"column",}}>

        {data.Links.map((item)=>{
            return <ResultCard  Title={item.Title} link={item.link} SubTitle={item.SubTitle}/>
          })}
          
      </Box>
      <InfoCard NameOccupation={data.InfoCard.NameOccupation} AboutData={data.InfoCard.AboutData} ItemData={data.InfoCard.ItemData}/>
      </Box>
    </Box >
  );
}