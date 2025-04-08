import { useEffect, useState } from "react";
import style from "./about.module.css";
import logo from "../image/logo.jpg";
import coder from "../image/coder.png";

function About() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={style.About_Main_Div} id="about">
      <div className={style.container}>
        <div className={style.about_image_container}>
          <div className={style.about_image}>
            <div className={style.move2}>
              <img src={logo} className={style.logo} alt="Personal logo" />
            </div>
            <div className={style.micon}>
              <img src={coder} className={style.logo2} alt="Coder icon" />
            </div>
          </div>
        </div>

        <div className={style.about_text}>
          <h2>About Me</h2>
          <h3>
            A Passionate and Enthusiastic Web Developer. Based in Kathmandu, Nepal
            <i className="fa-solid fa-house"></i>
          </h3>
          <div className={style.text}>
            I am currently pursuing BCS (Hons.) at Sunway International Business
            School, where I am honing my skills in various programming languages
            and technologies. With a strong foundation in HTML, CSS, and
            JavaScript, I have expanded my expertise to include Node.js, React.js,
            MongoDB, MySQL, Python, Java, Tailwind CSS, and DSA.
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;