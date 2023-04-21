import { Avatar, Box,  Typography } from "@mui/material";
import hIcon from "../icons/ic_user.svg";
// import hIcon from "./icons/ic_user.svg";


const circle={
    width:"12.5rem",
    height:"12.5rem",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:"6.25rem",
    backgroundColor:"#EFEFEF"

}
const avtarStyle={
    width:"100px",
    height:"100px",
    backgroundColor:"#EFEFEF"
}

const Top=({input})=>{
    return(
        <>
        <Box sx={circle} >
                <Avatar sx={avtarStyle} alt="accountIcon" src={hIcon} />
            </Box>
            <Typography variant="h3" align="center" sx={{fontSize:"48px",color:"#0B3558",fontFamily: "Open Sans",fontWeight: "bold",'@media(max-width: 400px)' : {fontSize: '24px'},marginTop:"10px"}}>Welcome! {input}</Typography>
        </>
    )
}
export default Top;