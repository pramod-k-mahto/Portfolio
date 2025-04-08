import { useEffect, useState } from "react";
import style from "./Home.module.css";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener("resize", checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className={style.top_div}>
      <div className={style.first_rotate}></div>

      <div className={style.rotate}>
        <div className={style.main_div} id="home">
          <div className={style.summary}>
            <div className={style.text}>
              <h1>
                Web Developer <i className="fa-regular fa-hand-peace"></i>
              </h1>
              <p>
                Hi, I'm Pramod, a Passionate and Enthusiastic Web Developer.
                <br className={style.desktop_break} />
                Based in Kathmandu, Nepal
                <i className="fa-solid fa-house"></i>.
              </p>
              <div className={style.social_links}>
                <a href="https://www.linkedin.com/in/pramod-mahto-4309aa222/" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/pramod-k-mahto" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <div className={style.skill}>
                <div className={style.skill_header}>
                  <strong>Tech Stack</strong> |
                </div>
                <div className={style.skill_icons}>
                  <span>
                    <i className="fa-brands fa-html5"></i>
                  </span>
                  <span>
                    <i className="fa-brands fa-css3"></i>
                  </span>
                  <span>
                    <i className="fa-brands fa-js"></i>
                  </span>
                  <span>
                    <i className="fa-brands fa-react"></i>
                  </span>
                  <span>
                    <i className="fa-brands fa-java"></i>
                  </span>
                  <span>
                    <i className="fa-brands fa-python"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className={style.first_div}>
              <div className={style.second_div}>
                <div className={style.img_div}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;