import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Password from "./Components/Password";
import Name from "./Components/Name";

import "./style.css";

function App() {
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

        {/* NAME */}

        <Name />

        {/* PASSWORD */}

        <Password />

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
    </>
  );
}

export default App;
