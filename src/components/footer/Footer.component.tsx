import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
// import logo from "../../images/logo.svg";

function Footer() {
  return (
	  <footer>
			<Link to="/">
				© 2022 Miami Martians
			</Link>
	  </footer>
  );
}

export default Footer;
