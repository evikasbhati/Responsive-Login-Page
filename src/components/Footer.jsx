import { Avatar, Box, Typography } from "@mui/material";
import CLogo from "../icons/zaperon_logo.png"
const boxStyle={
    '@media(max-width: 480px)' : {
        width: '23.25rem',
        flexDirection:"column",
        height:"20vh"
    },
    height:"20vh",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
}

const inBoxStyle={
    '@media(max-width: 400px)' : {
        margin:"0rem 0rem 0rem 3rem" ,
        height:"25vh"
    },
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    margin:"0rem 3rem" 
}

const Footer=()=>{
    return(
        <>
        <Box sx={boxStyle}>
        <Box sx={inBoxStyle}>
            <Typography style={{marginRight:"0.3rem"}} color="#728391" >Powerd By</Typography>
            <img  alt="accountIcon" src={CLogo} />
        </Box>
        <Box sx={inBoxStyle}>
            <Typography  sx={{fontSize:"20px",color:"#003FB9",fontFamily: "Open Sans",fontWeight: "200",marginRight:"2rem" }} >Need Help?</Typography>
            <Typography align="center" sx={{fontSize:"20px",color:"#003FB9",fontFamily: "Open Sans",fontWeight: "200"}} >Privacy Policy & Terms</Typography>
        </Box>
        </Box>
        </>
    )
}
export default Footer;