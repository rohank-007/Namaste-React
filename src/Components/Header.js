import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
