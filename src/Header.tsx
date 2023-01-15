import React from "react";
import "./css/header.css"

const Header: React.FC = () => {
  return (
    <div id="header">
      <h2 id="header-name">Jeege Ceana</h2>
      <nav id="header-links-container">
        <a className="header-link" href="/">Home</a>
        <pre> | </pre>
        <a className="header-link" href="/">Portfolio</a>
        <pre> | </pre>
        <a className="header-link" href="/contact-us">Contact Us</a>
      </nav>
    </div>
  )
}

export default Header;