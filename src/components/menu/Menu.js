import "./menu.css";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import MenuHeader from "../menuHeader/MenuHeader";
import { data } from "../../data";
import { motion } from "framer-motion";

const Menu = ({ openMenu, setOpenMenu }) => {
  const [selected, setSelected] = useState(false && " ");

  return (
    <motion.div className={openMenu ? "menu menuActive" : "menu"}>
      <div className="menuInnerContainer">
        <div className="miniSearch">
          <form className="miniSearchContainer">
            <div className="conti">
              <input type="text" placeholder="Search" />
              <div className="miniTech">
                <p>Izbit Tech</p>
              </div>
            </div>
            <button className="miniSearchIcon">
              <Search />
            </button>
          </form>
        </div>
        <div className="takeAction">
          <div className="giveBox">
            <a href="g">Give</a>
          </div>
          <div className="contactBox">
            <a href="g">Contact Us</a>
          </div>
        </div>
        {/* Lists of Items in the Menu */}
        <div className="itemLists">
          {data.map((item) => {
            return (
              <MenuHeader
                active={selected === item.id}
                id={item.id}
                items={item.items}
                setSelected={setSelected}
                title={item.title}
                setOpenMenu={setOpenMenu}
              />
            );
          })}
        </div>
        <div className="infoLists"></div>
      </div>
    </motion.div>
  );
};

export default Menu;
