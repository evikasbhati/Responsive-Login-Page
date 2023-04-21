import {  Box,  CircularProgress, IconButton, InputAdornment,  Typography } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Top from "./components/Top";
import { useNavigate } from "react-router-dom";
import InputField from "./components/InputField";

const boxStyle={
    width:"100%",
    '@media(max-width: 400px)' : {width: '23.25rem'},
    height:"90vh",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"column",
}

const signInButtonStyle={
    width:"31.25rem",    
    '@media(min-width: 200px)' : {width: '20.25rem'},
    '@media(min-width: 450px)' : {width: '25.25rem'},
    '@media(min-width: 550px)' : {width: '31.25rem'},
    height:"3.82rem",
    backgroundColor:"#003FB9",
    color:"#FFFFFF",
    boxShadow: "0px 3px 6px #00000029",
    borderRadius:"4px",
    "&:hover":{
        cursor:"pointer",
        backgroundColor:"#003FB9"
    },
    " & .MuiLoadingButton-loadingIndicator":{
        color:"white",
    },
    " & .MuiLoadingButton-iconSizeLarge":{
        fontSize:"40px"
    }
}

const Login=()=>{

    const [showPassword,setShowPassord]=useState(false);
    const [userData,setUserData]=useState(null);
    const [loader,setLoader]=useState(false)
    const [inputData,setInputData]=useState({
        email:"",
        password:""
    })
    const [error,SetError]=useState({
        email:false,
        password:false
    })
            
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const navigate=useNavigate()

    const handleShowPassword=()=>{
        setShowPassord(!showPassword)
    }

    const handleChange=(e)=>{
        if(e.target.id==="email"){
            setInputData((prev)=>({...prev,email:e.target.value}))
        }else{
            setInputData((prev)=>({...prev,password:e.target.value}))
        }
    }

    const handleSignIn=(e)=>{
        e.preventDefault();
        setLoader(true)
        axios.post("http://localhost:5000/login",inputData)
        .then((res)=>{
            setUserData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
        
        if(!regex.test(inputData.email)){
            SetError((prev)=>({...prev,email:true}))
        }else{
            SetError((prev)=>({...prev,email:false}))
        }
        if(inputData.password.length<8){
            SetError((prev)=>({...prev,password:true}))
        }else{
            SetError((prev)=>({...prev,password:false}))
        }
    }
    
    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false)
            if(userData){
                navigate("/welcome")
                localStorage.setItem("user",JSON.stringify(userData))
            }
        },1000)
    },[userData])

    
    return(
        <>
        <Box sx={boxStyle} >
            <Top />
            <Box sx={{display:"flex",justifyContent:"flex-end",width:"20rem", }}>
            <Typography variant="subtitle1" align="center" sx={{fontSize:"20px",color:"#0B3558",fontFamily: "Open sans-serif",fontWeight: "400",lineHeight:"1.5rem",mb:"1rem"}}>Let's connect to your workspace. Please enter your email to continue.</Typography>
            </Box>
            <InputField
            Id="email"
            color="secondary"
            label="Email Address"
            placeholder="Email Address"
            value={inputData.email}
            handleChange={handleChange}
            helperText="Please enter a valid email."
            type="email"
            error={error.email}
            />

            <InputField
            Id="password"
            value={inputData.password}
            color="secondary"
            label="Password"
            placeholder="Password"
            handleChange={handleChange}
            helperText="Password must be 8 character long."
            type={showPassword?"text":"password"}
            error={error.password}
            InputProps={{
                endAdornment:  
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    edge="end"
                    >
                    {showPassword ? <VisibilityOutlinedIcon />: <VisibilityOffOutlinedIcon /> }
                  </IconButton>
                </InputAdornment>
                }}
                />
            <Box sx={{display:"flex",justifyContent:"flex-end",width:"31.25rem",' @media(min-width: 200px)' : {width: '20.25rem'},'@media(min-width: 450px)' : {width: '25.25rem'},'@media(min-width: 550px)' : {width: '31.25rem'},}}>
            <Typography variant="h3" sx={{fontSize:"20px",color:"#003FB9",fontFamily: "Open Sans",fontWeight: "500"}}>Foget Password?</Typography>
            </Box>
            <LoadingButton sx={signInButtonStyle}  size="large"  onClick={handleSignIn}>{!loader || !userData ? "Sign In":<CircularProgress size={30} sx={{color:"white"}}  />}  </LoadingButton>
        </Box>
            <Footer />
        </>
    )
}
export default Login;