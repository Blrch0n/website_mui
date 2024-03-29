"use client";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState, HTMLInputTypeAttribute } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
type CustomInputProps = {
  label?: string;
  value?: string;
  width?: string;
  height?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  type?: HTMLInputTypeAttribute;
  size?: "small" | "medium";
};

export const CustomInput = (props: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    label,
    value,
    placeholder,
    onChange,
    type = "text",
    size = "medium",
  } = props;
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Stack
      gap={0.5}
      sx={{
        width: type === "search" ? "260px" : "384px",
      }}
    >
      {label ? <Typography fontSize={14}>{label}</Typography> : null}
      <TextField
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type === "password" && showPassword ? "text" : type}
        sx={{ bgcolor: "#ECEDF0" }}
        inputProps={{
          style: {
            padding: size === "small" ? "8px" : "14px 16px",
          },
        }}
        InputProps={{
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: type === "search" && (
            <InputAdornment position="start">
              <IconButton onClick={handleShowPassword}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
    </Stack>
  );
};
