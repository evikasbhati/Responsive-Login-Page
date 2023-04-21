import { useEffect } from "react"
import Footer from "./components/Footer"
import Top from "./components/Top"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/material"

const boxStyle={
    width:"100%",
    height:"90vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
}

const Welcome=()=>{
    const user= JSON.parse(localStorage.getItem("user"))
    const navigate=useNavigate()

    useEffect(()=>{
        if(user!==null ){
            setTimeout(()=>{
                localStorage.setItem("user",null);
                if(window.location.pathname="/welcome"){
                    window.location.replace("/")
                }
                navigate("/")
            },10000)
        }
    },[])
    
    return(
        <>
        <Box sx={boxStyle} >
        <Top input={user && `, ${user?.username}`} />
        </Box>
        <Footer />
        </>
    )
}
export default Welcome