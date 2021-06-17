import React, { useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

const Header = () => {
  // Add this in node_modules/react-dom/index.js
  window.React1 = require("react");

  // Add this in your component file
  require("react-dom");
  window.React2 = require("react");
  console.log(window.React1 === window.React2);
//   console.log(useParams());
  return (
    <div>
      <p>hfdhf</p>
    </div>
  );
};

export default Header;
