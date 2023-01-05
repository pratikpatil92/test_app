import { TextField } from "@material-ui/core";
import React from "react";

export default function InputField(props) {
    const {value, onChange, inputProps,error=null, label, varient="standard",...others} = props
  return (
    <div>
      <TextField
        id="input-with-icon-textfield"
        label={label}
        InputProps={inputProps}
        variant={varient}
        value={value}
        onChange={onChange}
        {...others}
        {...(error && {error:true,helperText:error})}
      />
    </div>
  );
}
