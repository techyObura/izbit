import "./menuHeader.css";
import { ArrowDropDown } from "@mui/icons-material";
import React from "react";
import MenuHeader2 from "../menuHeader2/MenuHeader2";

const MenuHeader = ({ title, active, setSelected, id, items, setOpenMenu }) => {
  const toggleButton = () => {
    setSelected(!active && id);
  };
  return (
    <div className="outCover">
      <div className="menuElder">
        <h3 onClick={() => setOpenMenu(false)}>
          <a href="f">{title}</a>
        </h3>
        <div
          className={active ? "openImage rotateMenuIcon" : "openImage"}
          onClick={toggleButton}
        >
          <ArrowDropDown style={{ fontSize: "56px" }} />
        </div>
      </div>
      <div className={active ? "inCont inContDisplay" : "inCont"}>
        {items.map((item, index) => {
          return (
            <MenuHeader2
              key={index}
              item={item.item}
              link={item.red}
              setOpenMenu={setOpenMenu}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuHeader;
