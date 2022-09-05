import React from 'react';
import Button from '@mui/material/Button';
import { useFormikContext } from 'formik';
import UnstyledButtonCustom from './AnimateButton';

const SubmitButtonWrapper = ({
  children,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  }

  const configButton = {
    variant: 'contained',
    color: 'primary',
    // fullWidth: true,
    onClick: handleSubmit
  }

  return (
    <Button className="btn btn-primary animateBtn" fullWidth  sx={{'--content': "'Login'",padding: '10px',borderRadius: '40px'}}
      {...configButton}

    >
        <div class="left"></div>
        {children}
    <div class="right"></div>
     
    </Button>
  );
};

export default SubmitButtonWrapper;