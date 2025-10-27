import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu } from "../assets";
import myImage from "../assets/personal/my-image.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  // 🧭 Track active section while scrolling (only on Home)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sectionIds = ["home", "projects", "publications", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // 🔗 Handle navigation clicks (with smooth scroll)
  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section)
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(id);
      }, 500);
    } else {
      const section = document.getElementById(id);
      if (section)
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97]`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        {/* ✅ Left Section - Logo + Name */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => {
              window.scrollTo(0, 0);
              setActiveSection("home");
            }}
          >
            <img
              src={myImage}
              alt="Profile"
              className="w-[55px] h-[55px] rounded-full object-cover border-2 border-[#06AED5] shadow-md hover:shadow-lg transition-all"
            />
            <span className="text-eerieBlack font-medium font-mova uppercase text-2xl tracking-wide">
              Churchill Doro
            </span>
          </Link>
        </div>

        {/* 🖥️ Right Section - Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-10">
          {navLinks.map((nav) => {
            const isActive =
              (location.pathname === "/blog" && nav.id === "blog") ||
              (location.pathname === "/" && activeSection === nav.id);

            return (
              <li key={nav.id}>
                {["home", "projects", "publications", "contact"].includes(
                  nav.id
                ) ? (
                  <button
                    onClick={() => handleNavClick(nav.id)}
                    className={`${
                      isActive ? "text-[#06AED5]" : "text-eerieBlack"
                    } hover:text-taupe text-[19px] font-medium font-mova uppercase tracking-[3px] transition-colors`}
                  >
                    {nav.title}
                  </button>
                ) : (
                  <Link
                    to={`/${nav.id}`}
                    onClick={() => setActiveSection(nav.id)}
                    className={`${
                      isActive ? "text-[#06AED5]" : "text-eerieBlack"
                    } hover:text-taupe text-[19px] font-medium font-mova uppercase tracking-[3px] transition-colors`}
                  >
                    {nav.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* 📱 Mobile Menu */}
        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[30px] h-[30px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {toggle && (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
              top-[75px] right-0 mx-4 my-2 min-w-[150px] rounded-xl shadow-md z-10`}
            >
              <ul className="list-none flex flex-col gap-6 items-start font-mova text-[18px] font-medium text-eerieBlack">
                {navLinks.map((nav) => {
                  const isActive =
                    (location.pathname === "/blog" && nav.id === "blog") ||
                    (location.pathname === "/" && activeSection === nav.id);

                  return (
                    <li key={nav.id}>
                      {["home", "projects", "publications", "contact"].includes(
                        nav.id
                      ) ? (
                        <button
                          onClick={() => {
                            handleNavClick(nav.id);
                            setToggle(false);
                          }}
                          className={`${
                            isActive ? "text-[#06AED5]" : "text-eerieBlack"
                          } capitalize transition-colors duration-200`}
                        >
                          {nav.title}
                        </button>
                      ) : (
                        <Link
                          to={`/${nav.id}`}
                          onClick={() => {
                            setActiveSection(nav.id);
                            setToggle(false);
                          }}
                          className={`${
                            isActive ? "text-[#06AED5]" : "text-eerieBlack"
                          } capitalize transition-colors duration-200`}
                        >
                          {nav.title}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
