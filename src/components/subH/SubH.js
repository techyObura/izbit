import "./subH.css";

import React, { useState } from "react";
import { menuLinks } from "../../data";
import SubSubH from "../subSubH/SubSubH";

const SubH = () => {
  const [isHovering, setIsHovering] = useState(" ");

  return (
    <div className="subHContainer">
      <div className="subHeader">
        {menuLinks.map((item) => {
          return (
            <SubSubH
              active={isHovering === item.id}
              id={item.id}
              setIsHovering={setIsHovering}
              title={item.title}
              items={item.items}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SubH;
