import "./menuHeader.css";
import { ArrowDropDown } from "@mui/icons-material";
import React from "react";

const MenuHeader = ({
  title,
  active,
  setSelected,
  id,
  open,
  setOpen,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  setOpenMenu,
}) => {
  const toggleButton = () => {
    setSelected(id);
    setOpen(!open);
  };
  return (
    <div className="outCover">
      <div className="menuElder">
        <h3 onClick={() => setOpenMenu(false)}>
          <a href="f">{title}</a>
        </h3>
        <div
          className={active && open ? "openImage rotateMenuIcon" : "openImage"}
          onClick={toggleButton}
        >
          <ArrowDropDown style={{ fontSize: "56px" }} />
        </div>
      </div>
      <div className={active && open ? "inCont inContDisplay" : "inCont"}>
        <p onClick={() => setOpenMenu(false)}>
          <a href="y">{item1}</a>
        </p>
        <p onClick={() => setOpenMenu(false)}>
          <a href="y">{item2}</a>
        </p>
        <p onClick={() => setOpenMenu(false)}>
          <a href="y">{item3}</a>
        </p>
        <p onClick={() => setOpenMenu(false)}>
          <a href="y">{item4}</a>
        </p>
        <p onClick={() => setOpenMenu(false)}>
          <a href="y">{item5}</a>
        </p>
        <p onClick={() => setOpenMenu(false)}>
          <a href="y">{item6}</a>
        </p>
        <p onClick={() => setOpenMenu(false)}>
          <a href="y">{item7}</a>
        </p>
      </div>
    </div>
  );
};

export default MenuHeader;
