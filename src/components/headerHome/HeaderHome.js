import "./headerHome.css";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { Close } from "@mui/icons-material";
import Menu from "../menu/Menu";

const HeaderHome = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchBtn, setSearchBtn] = useState(false);
  return (
    <>
      <div className="heada">
        <div className="menContainer" onClick={() => setOpenMenu(!openMenu)}>
          <div className={"hamburger " + (openMenu && "activeHamburger")}>
            <span className="line1"></span>
            <span className="line2"></span>
            <p className={"menuWord " + (openMenu && "activeMenuWord")}>Menu</p>
          </div>
        </div>
        <div
          className={
            "closeBtnContainer " + (openMenu && "activeCloseBtnContainer")
          }
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Close
            className="closeBtn"
            style={{ fontSize: "50px", fontWeight: "light" }}
          />
        </div>

        <div className="companName">
          <div className="logContainer">
            <p>Iz</p>
          </div>
          <h1>Izbit Tech</h1>
        </div>
        <div className="oWorkContainer">
          <form
            className={"searchAra " + (searchBtn && "searchAreaOpacityOne")}
          >
            <div className="searchTet">
              <p>Search</p>
            </div>
            <div className="searchAraContainer">
              <input type="text" name="" id="" />
              <div className="selecContainer">
                <p>Izbit Tech</p>
              </div>
            </div>
            <button className="goBox">
              <p>Go</p>
            </button>
          </form>
          <ul className={"onWorkList " + (searchBtn && "onWorkListOpacity")}>
            <li>
              <a href="x">About Us</a>
            </li>
            <li>
              <a href="x">Projects</a>
            </li>
            <li>
              <a href="x">Reviews</a>
            </li>
            <li>
              <a href="x">Team</a>
            </li>
            <li>
              <a href="x">Blog</a>
            </li>
            <li>
              <a href="x">Tech Links</a>
            </li>
          </ul>
          <div
            className="searchButtonContainer"
            onClick={() => setSearchBtn(!searchBtn)}
          >
            <button className={"searchBtn " + (searchBtn && "searchBtnActive")}>
              <Search />
            </button>
          </div>
          <div className="contactBox1">
            <div className="give1">Give</div>
            <div className="contactUs1">Contact Us</div>
          </div>
        </div>
      </div>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default HeaderHome;
