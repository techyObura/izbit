import "./menuHeader2.css";
import React from "react";

const MenuHeader2 = ({ setOpenMenu, item, link }) => {
  return (
    <>
      <p onClick={() => setOpenMenu(false)}>
        <a href={link}>{item}</a>
      </p>
    </>
  );
};

export default MenuHeader2;
