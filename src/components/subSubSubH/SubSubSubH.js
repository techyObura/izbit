import "./subSubSubH.css";

import React from "react";

const SubSubSubH = ({ item, link }) => {
  return (
    <>
      <a href={link}>{item}</a>
      <br /> <br />
    </>
  );
};

export default SubSubSubH;
