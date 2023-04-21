import { TextField } from "@mui/material";

const textFieldStyle={
    width:"31.25rem",
    height:"3.45rem",
    '@media(min-width: 200px)' : {width: '20.25rem'},
    '@media(min-width: 450px)' : {width: '25.25rem'},
    '@media(min-width: 550px)' : {width: '31.25rem'},

    '& label.Mui-focused': {
        color: '#003FB9',
        fontSize:"16px",      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#A2A2A2',
        },
        '&:hover fieldset': {
          borderColor: '#003FB9',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#003FB9',
        },
      },
}

const InputField=(props)=>{
    const {Id,handleChange,label,type,placeholder,InputProps,helperText,error}=props;

    return(
        <>
         <TextField
            id={Id}
            sx={textFieldStyle }
            style={{marginBottom: error ? "1rem":"0rem"}}
            color="secondary"
            label={label}
            placeholder={placeholder}
            onChange={handleChange}
            helperText={error && helperText}
            type={type}
            error={error}
            InputProps={
                InputProps
            }
            />

        </>
    )
}
export default InputField