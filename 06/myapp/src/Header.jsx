import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    color: "tomato",
  };

  const location = useLocation();

  React.useEffect(() => {
    console.log("A rota mudou");
  }, [location]);

  return (
    <div>
      <nav>
        <NavLink to="/" end activeStyle={activeStyle}>
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink to="sobre" activeStyle={activeStyle}>
          Sobre
        </NavLink>{" "}
      </nav>
    </div>
  );
};

export default Header;
