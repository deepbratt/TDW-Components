import React from "react";
import { Button } from "@material-ui/core";

export interface ButtonProps {
  buttonText: string;
}

const CustomButton: React.FC<ButtonProps> = ({ buttonText }) => {
  return <Button>{buttonText}</Button>;
};

export default CustomButton;
