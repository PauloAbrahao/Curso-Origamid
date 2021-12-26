import React from "react";
import TextField from "@mui/material/TextField";

const Name = () => {
  const [nome, setNome] = React.useState("");

  const handleClick = ({ target }) => {
    setNome(target.value);
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        className="name"
        onChange={handleClick}
      />
      {/* <p>{nome}</p> */}
    </>
  );
};

export default Name;
