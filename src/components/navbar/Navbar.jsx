import React, { useState } from "react";
import "./navbar.css";
const Navbar = ({ onSearch, cartCount }) => {
  const [typedItem, setTypedItem] = useState("");

  return (
    <div className="navbar">
      <img
        src="https://cdn.worldvectorlogo.com/logos/carrefour-c.svg"
        alt="logo"
      />
      <div className="searchBarDiv">
        <input
          type="text"
          placeholder="Search items here...."
          onChange={(event) => {
            setTypedItem(event.target.value);
            onSearch(event.target.value);
          }}
        />
        <button
          className="search"
          onClick={() => {
            onSearch(typedItem);
          }}
        >
          Search ({cartCount})
        </button>
      </div>
    </div>
  );
};

export default Navbar;
