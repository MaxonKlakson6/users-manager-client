import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material";

const Input = ({
  name,
  type,
  placeholder,
  value,
  className,
  onChange,
}: TextFieldProps) => {
  return (
    <TextField
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      className={className}
      onChange={onChange}
    />
  );
};

export default Input;
