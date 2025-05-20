"use client";
import React, { useEffect } from "react";
import Link from "next/link";

function Navbar({ borderBottom }) {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const menu = document.querySelector(".topnav");

    if (window.scrollY > 100) menu.classList.add("nav-scroll");
    else menu.classList.remove("nav-scroll");
  }

  function toggleMenu() {
    const navDark = document.querySelector(".topnav");

    document.querySelector(".hamenu").classList.toggle("open");
    document.querySelector(".topnav .menu-icon").classList.toggle("open");
    navDark.classList.toggle("navlit");

    if (
      document.querySelector(".topnav .menu-icon").classList.contains("open")
    ) {
      document.querySelector(".hamenu").style.top = "0";
    } else {
      document.querySelector(".hamenu").style.top = "-100%";
    }
  }

  return (
    <div
      id="navi"
      className={`topnav blur ${borderBottom ? "bord-thin-bottom" : ""}`}
    >
      <div className="container">
        <div className={`logo icon-img-${borderBottom ? "100" : "90"}`}>
          <Link href="/">
            <img src="/assets/imgs/logo-light.png" alt="" />
          </Link>
        </div>
        <div className="menu-icon cursor-pointer">
          <a
            href="#"
            className="butn-square"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("team")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Book now</span>
          </a>
          <a
            href="#"
            className="butn-square"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Contact us</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
