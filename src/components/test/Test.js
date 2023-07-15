import "./test.css";

import React, { useState } from "react";

const Test = () => {
  const [isHovering, setIsHovering] = useState(false);

  const mouseIn = () => {
    setIsHovering(true);
  };

  const mouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="test">
      <div
        className={"box " + (isHovering && "boxSize")}
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}
      ></div>
    </div>
  );
};

export default Test;
