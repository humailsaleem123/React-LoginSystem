import React from 'react';
import TextField from '@mui/material/TextField';
import { useField } from 'formik';
import { withStyles , makeStyles } from '@mui/styles';

const CssTextField = withStyles({

    root: {
        
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'purple',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
        //   borderColor: 'white',
        borderColor: 'transparent',
          borderRadius:'40px',
          background:'rgba(255, 255, 255, 0.08)',
        },
        '&:hover fieldset': {
          borderColor: 'white',
          background:'transparent',
          transition: '0.5s',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#B8B8B8',
        },
        "& .Mui-error": {
            color: "green",
          },
          "& .MuiFormHelperText-root": {
            color: "green",
          },
      },
    },
  })(TextField);



const TextfieldWrapper = ({
  name,
  ...otherProps
}) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
    margin:"dense"
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }


  return (

    <CssTextField autoComplete='off' InputLabelProps={{
        style: { color: '#D3D3D3' },
      }} sx={{ input: { color: 'white' } } }  {...configTextfield} />

  );
};

export default TextfieldWrapper;