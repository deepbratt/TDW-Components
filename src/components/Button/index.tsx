import React from "react";
import { Button } from "@material-ui/core";
import img from "../../assets/powerplatform.png"

// const myImg = new URL('../../assets/powerplatform.png', import.meta.url);
// const img = require('../../assets/powerplatform.png')


interface ButtonProps {
  buttonText: string;
}

const CommonButton: React.FC<ButtonProps> = ({ buttonText }) => {
  return( <Button variant="contained" color="primary" onClick={()=>console.log(buttonText)}>
    <img src={img} height="10" width="10"/>
    {buttonText}
    </Button>);
};

export default CommonButton;
