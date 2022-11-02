import React from "react";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

const HeaderButton = ({name, cb}) => {
  return (
    <Button sx={{"&.MuiButtonBase-root:hover": {
      bgcolor: "transparent"
    }}}
    variant="string" component="label" onClick={() => cb()} >
      <Typography sx={{fontSize:"18px",color: "text.primary",fontWeight: 550}}>{name}</Typography></Button>
  )
};

export default HeaderButton;
