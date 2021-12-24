import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import "./style.css";

function App() {
  const [nome, setNome] = React.useState("");
  const [pass, setPass] = React.useState("");

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClick = ({ target }) => {
    setNome(target.value);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box
        sx={{
          m: 1,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "Center",
        }}
      >
        <Avatar sx={{ bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <h1
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "1.5rem",
          }}
        >
          Sign in
        </h1>

        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          className="name"
          onChange={handleClick}
        />

        <FormControl
          className="password"
          variant="outlined"
          sx={{ marginTop: "1.2rem" }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <div className="checkbox">
          <FormControlLabel control={<Checkbox />} label="Remember me" />
        </div>

        <Button
          variant="contained"
          className="signIn"
          sx={{ marginTop: "1.2rem", width: "30%" }}
        >
          SIGN IN
        </Button>

        <div className="forgotCreate">
          <a> Forgot password? </a>
          <a> Don't have an account? Sign Up </a>
        </div>
      </Box>
      <p>{nome}</p>
    </>
  );
}

export default App;
