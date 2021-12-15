import React from "react";
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

import "./style.css";

function App() {
  const [nome, setNome] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <>
      <div className="exemplo">
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
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          className="password"
          type="password"
          sx={{ marginTop: "1.5rem" }}
        />

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
      </div>

   
    </>
  );
}

export default App;
