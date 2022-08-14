import { Divider } from "@mui/material";
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";

export default function TopNav({SearchTerm,Image}) {
    return (
        <div>
        <SearchForm ProfileImage={Image} Name={SearchTerm}/>
        <Navigation/>
        <Divider/>
        </div>
    );
}