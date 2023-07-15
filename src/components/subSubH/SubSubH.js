import "./subSubH.css";
import React, { useState } from "react";
import { ArrowDropDown } from "@mui/icons-material";
import SubSubSubH from "../subSubSubH/SubSubSubH";

const SubSubH = ({ active, setIsHovering, id, items, title }) => {
  const [hover, setHover] = useState(false);
  const mouseIn = () => {
    setIsHovering(id);
    setHover(true);
  };

  const mouseOut = () => {
    setIsHovering(id);
    setHover(false);
  };
  return (
    <>
      <div className={"element1"}>
        <div
          className={"about2 " + (hover && active && "about2A")}
          onMouseEnter={mouseIn}
          onMouseLeave={mouseOut}
        >
          <a
            href="a"
            className={"aboutA " + (hover && active && "isHovering2")}
          >
            {title}
          </a>
          <ArrowDropDown style={{ fontSize: "36px" }} />
        </div>
        <div
          className={"missionS " + (hover && active && "missionSActive")}
          onMouseEnter={mouseIn}
          onMouseLeave={mouseOut}
        >
          <p>
            {items.map((item) => {
              return <SubSubSubH item={item.item} link={item.red} />;
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default SubSubH;
