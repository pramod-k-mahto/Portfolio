import style from "./about.module.css";
import logo from '../image/logo.jpg'
import coder from '../image/coder.png'

function About() {
  return (
    <>
      <div className={style.About_Main_Div} id='about' >
        <div className={style.about_image}>

        <div className={style.move2}>
          <img src={logo} className={style.logo} alt="log" />


        </div>
        <div className={style.micon}>
        <img src={coder} className={style.logo2} alt="log" />
        </div>
        </div>


        <div className={style.about_text}>
          <h2>About Me </h2>
          <h3>
            A passionate and enthusiastic web Developer.
            <br />
            Based in Kathamandu,Nepal<i class="fa-solid fa-house"></i>
          </h3>
          <p>
            I am currently pursuing BCS (Hons.) at Sunway International Business
            School, where I am honing my skills in various programming languages
            and technologies. With a strong foundation in HTML, CSS, and
            JavaScript, I have expanded my expertise to include Node.js,
            React.js, MongoDB, MySQL, Python, Java, Bootstrap, and basic DSA.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
