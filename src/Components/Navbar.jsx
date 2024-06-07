import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav class="navbar">
        <div class="wrapper d-flex space-between justify-content align-items">
          <div class="navbar__left">
            <i
              class="fa fa-bars navbar__left__hamburger"
              aria-hidden="true"
            ></i>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
              alt="youtube"
              width="60px"
              class="navbar__left__logo"
            />
          </div>
          <div class="navbar__center">
            <i
              class="fa fa-arrow-left navbar__center__arrow"
              aria-hidden="true"
            ></i>
            <input
              type="text"
              class="navbar__center__input"
              placeholder="Search"
            />
            <button class="navbar__center__search-btn">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>

          <div class="navbar__right">
            <i class="fa fa-search navbar__right__icon" aria-hidden="true"></i>
            <i
              class="fa fa-video-camera navbar__right__icon"
              aria-hidden="true"
            ></i>
            <i class="fa fa-th navbar__right__icon" aria-hidden="true"></i>
            <i class="fa fa-bell navbar__right__icon" aria-hidden="true"></i>
            <i class="fa fa-user navbar__right__icon" aria-hidden="true"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
