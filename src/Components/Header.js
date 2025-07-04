import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  let [btn, setbtn] = useState("Login");

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo-image" src={LOGO_URL}></img>
      </div>

      {/* <div className="search-container">
        <input
          aria-labelledby="search-filter"
          type="text"
          placeholder="Search Food"
        ></input>
        <img src="headersearch.png"></img>
      </div> */}

      <nav className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li
            className="log-btn"
            onClick={() => {
              setbtn(btn === "Login" ? "Logout" : "Login");
            }}
          >
            {btn}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
