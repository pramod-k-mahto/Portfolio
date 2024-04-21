import { Link as ScrollLink } from "react-scroll";
import style from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <div className={style.nav_div}>
        <ul>
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className={style.ScrollLink}
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
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
