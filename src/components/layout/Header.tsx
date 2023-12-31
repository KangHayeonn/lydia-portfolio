"use client";

import React, { useState } from "react";
import { headerMenu } from "@/constants";
import { useMoveToSection } from "@/hooks/useMoveToSection";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  const { handleMove } = useMoveToSection();

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <header id="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <h1>
            <a href="/">
              portfolio<em>next.js</em>
            </a>
          </h1>
        </div>
        <nav
          className={`header__nav ${show ? "show" : ""}`}
          role="navigation"
          aria-label="메인메뉴"
        >
          <ul>
            {headerMenu.map((nav, key) => (
              <li key={key} onClick={() => handleMove(`${nav.title}`)}>
                <span>{nav.title}</span>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className="header__nav__mobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={show ? "true" : "false"}
          role="button"
          tabIndex={0}
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
