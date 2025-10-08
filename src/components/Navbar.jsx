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

    const sectionIds = ["home", "projects", "publications"];
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

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      }, 500);
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* ✅ Logo */}
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
          <span className="text-eerieBlack font-medium font-mova uppercase text-2xl  tracking-wide">
            Churchill Doro
          </span>
        </Link>

        {/* 🖥️ Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2 ">
          {navLinks.map((nav) => {
            const isActive =
              (location.pathname === "/blog" && nav.id === "blog") ||
              (location.pathname === "/" && activeSection === nav.id);

            return (
              <li key={nav.id}>
                {["home", "projects", "publications"].includes(nav.id) ? (
                  <button
                    onClick={() => handleNavClick(nav.id)}
                    className={`${
                      isActive ? "text-[#06AED5]" : "text-eerieBlack"
                    } hover:text-taupe text-[21px] font-medium font-mova uppercase tracking-[3px] transition-colors`}
                  >
                    {nav.title}
                  </button>
                ) : (
                  <Link
                    to={`/${nav.id}`}
                    onClick={() => setActiveSection(nav.id)}
                    className={`${
                      isActive ? "text-[#06AED5]" : "text-eerieBlack"
                    } hover:text-taupe text-[21px] font-medium font-mova uppercase tracking-[3px] transition-colors`}
                  >
                    {nav.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* 📱 Mobile Menu */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10`}
            >
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(false)}
                />
              </div>

              <ul className="list-none flex flex-col gap-8 items-start justify-end mt-[10rem] px-6">
                {navLinks.map((nav) => {
                  const isActive =
                    (location.pathname === "/blog" && nav.id === "blog") ||
                    (location.pathname === "/" && activeSection === nav.id);

                  return (
                    <li key={nav.id}>
                      {["home", "projects", "publications"].includes(nav.id) ? (
                        <button
                          onClick={() => {
                            handleNavClick(nav.id);
                            setToggle(false);
                          }}
                          className={`${
                            isActive ? "text-[#06AED5]" : "text-eerieBlack"
                          } text-[48px] font-bold font-arenq uppercase tracking-[1px]`}
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
                          } text-[48px] font-bold font-arenq uppercase tracking-[1px]`}
                        >
                          {nav.title}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(true)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
