import React from "react";
import Navbar from "../Navbar/Navar";
function Layout({ children }) {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}
export default Layout;
