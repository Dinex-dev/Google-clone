import { Card, Divider } from "@mui/material";
import About from "./About";
import ImageGrid from "./ImageGrid";
import NameOcc from "./NameOcc";

  


export default function InfoCard({NameOccupation,AboutData,ItemData}){
    return (
        <Card sx={{maxWidth:"366px"}}>
        <ImageGrid itemData={ItemData}/>
        <Divider/>
        <NameOcc Name={NameOccupation.name} Occupation={NameOccupation.occupation}/>
        <Divider/>
        <About Data={NameOccupation} About={AboutData}/> 
        </Card>

    );
}