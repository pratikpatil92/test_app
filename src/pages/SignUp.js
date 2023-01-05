import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputField from "../components/controls/InputField";
import LoginAndSignUpService from "../services/LoginAndSignUpService";
import { useNavigate } from "react-router";
function Login() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "60px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const inputText = {marginBottom:"10px"}
  const navigate= useNavigate()
  const [values, setValues] = useState({
    email: "",
    password: "",
    name:""
  });
  const [errors, setErrors] = useState({});
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("email" in fieldValues)
      temp.email = fieldValues.email ? "" : "This field is required.";
    if ("password" in fieldValues)
      temp.password = fieldValues.password ? "" : "This field is required.";
      if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSignup = () => {
    if (validate()) {
      LoginAndSignUpService.createUser(values).then(()=>{
          navigate("/login")
      })
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>
        <InputField
          name="name"
          label="Name"
          value={values.name}
          onChange={handleInputChange}
          error={errors.name}
          varient="outlined"
          fullWidth
          style={inputText}
          id="name"
        />
        <InputField
          name="email"
          label="Email"
          value={values.email}
          onChange={handleInputChange}
          error={errors.email}
          varient="outlined"
          fullWidth
          style={inputText}
          id="email"
        />

        <InputField
          name="password"
          label="Password"
          value={values.password}
          onChange={handleInputChange}
          error={errors.password}
          varient="outlined"
          fullWidth
          type="password"
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={onSignup}
        >
          Sign up
        </Button>
      </Paper>
    </Grid>
  );
}

export default Login;
