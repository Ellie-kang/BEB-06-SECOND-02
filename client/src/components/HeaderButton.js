import React from "react";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

const HeaderButton = ({name, cb}) => {
  console.log(name)
  return (
    <Button sx={{bgcolor: "inherit", boxShadow: 0, transition: "0.4s", borderRadius: 3, size: "small" }}
    variant="string" component="label" onClick={() => cb()} >
      <Typography sx={{fontSize:"18px",color: "text.primary",fontWeight: 550}}>{name}</Typography></Button>
  )
};

export default HeaderButton;
