import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import style from "./NavBar.module.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={style.nav_div}>
      <div className={style.container}>
        <div className={style.logo}>
          <ScrollLink to="home" smooth={true} duration={500} className={style.ScrollLink}>
            <span>Logo</span>
          </ScrollLink>
        </div>
        
        <div className={`${style.hamburger} ${isOpen ? style.active : ""}`} onClick={toggleMenu}>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
        </div>
        
        <ul className={`${style.nav_menu} ${isOpen ? style.active : ""}`}>
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className={style.ScrollLink}
              onClick={() => setIsOpen(false)}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className={style.ScrollLink}
              onClick={() => setIsOpen(false)}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="parent_div_id"
              smooth={true}
              duration={500}
              className={style.ScrollLink}
              onClick={() => setIsOpen(false)}
            >
              Project
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className={style.ScrollLink}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;