import { Button as MuiButton } from "@mui/material";
import type { ButtonProps } from "@mui/material";

const Button = ({
  className,
  variant,
  type,
  children,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <MuiButton
      className={className}
      variant={variant}
      type={type}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
