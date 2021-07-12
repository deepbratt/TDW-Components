import * as React from "react";
import { Button as MuiButton, ButtonProps } from "@material-ui/core";
import Breakpoints from "../Utils/Breakpoints";

interface IButtonProps extends ButtonProps {
  fullWidth?: boolean;
  color?: any;
  variant?: any;
  radius?: string;
  styles?: string;
  size?: "small" | "medium" | "large";
  handleClick?: () => void;
}

function CustomButton({
  fullWidth,
  variant,
  radius,
  styles,
  color,
  handleClick,
  size,
  children,
  ...rest
}: IButtonProps) {
  return (
    <MuiButton
      onClick={handleClick}
      size={size ? size : Breakpoints()}
      className={styles}
      style={{ borderRadius: radius }}
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </MuiButton>
  );
}

CustomButton.defaultProps = {
  fullWidth: false,
  color: "primary",
  variant: "contained",
  radius: "4px",
  handleClick: () => console.log("buttonClicked"),
};

export default CustomButton;
