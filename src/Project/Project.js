import style from "./project.module.css";
import img from "../image/blog.png";
import food from "../image/food.png";
import lab from "../image/lab.jpg";
import quiz from "../image/quiz.png";
import { useEffect } from "react";
import Recipe from "../image/RecipeWeb.png";

function Project() {
  // const [windowValue1, setWindowValue1] = useState();

  const windowValue = () => {
    let data = document.documentElement.scrollTop;
    // console.log(data);
    let project = document.getElementById("project5");
    let Project_Text = document.getElementById("Project_Text");
    let quiz_text = document.getElementById("quiz_text");
    let Quiz = document.getElementById("Quiz");
    let blog = document.getElementById("blog");
    let blog_text = document.getElementById("blog_text");
    let movie_img = document.getElementById("movie_img");
    let movie_text = document.getElementById("movie_text");
    let NepalMedicalLab_img = document.getElementById("NepalMedicalLab_img");
    let NepalMedicalLab_text = document.getElementById("NepalMedicalLab_text");

    // NepalMedicalLab_img

    // project 1 job finder

    if (data > 800) {
      project.classList.add(style.project5);
      Project_Text.classList.add(style.Project_Text);
    } else {
      project.classList.remove(style.project5);
      Project_Text.classList.remove(style.Project_Text);
    }

    // console.log(data)
    // project 2 movie finder

    if (data > 1150) {
      movie_img.classList.add(style.project_odd_img);
      movie_text.classList.add(style.project_odd_text);
    } else {
      movie_img.classList.remove(style.project_odd_img);
      movie_text.classList.remove(style.project_odd_text);
    }

    // project 3 quiz

    if (data > 1600) {
      Quiz.classList.add(style.project5);
      quiz_text.classList.add(style.Project_Text);
      // console.log(quiz_text , "Quiz");
    } else {
      Quiz.classList.remove(style.project5);
      quiz_text.classList.remove(style.Project_Text);
    }

    // NepalMedicalLab project
    if (data > 2000) {
      NepalMedicalLab_text.classList.add(style.project_odd_text);
      NepalMedicalLab_img.classList.add(style.project_odd_img);
    } else {
      NepalMedicalLab_text.classList.remove(style.project_odd_text);
      NepalMedicalLab_img.classList.remove(style.project_odd_img);
    }

    // project 3 blog

    if (data > 2550) {
      blog.classList.add(style.project5);
      blog_text.classList.add(style.Project_Text);
    } else {
      blog.classList.remove(style.project5);
      blog_text.classList.remove(style.Project_Text);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", windowValue);
    return () => {
      window.removeEventListener("scroll", windowValue);
    };
  }, []);

  return (
    <>
      <div className={style.project_head} id="project">
        <div className={style.Project_title}>
          <h2>Project</h2>
          <h2>
            Each Project is a Unique piece of development
            <i class="fa-solid fa-hashtag"></i>
          </h2>
        </div>

        {/* Project 1 */}

        <div className={style.project_main_div}>
          <div id="project5">
            <img src={food} className={style.blog} alt="" />
          </div>

          <div id="Project_Text" className={style.Project_Text}>
            <div className={style.Project_Text}>
              <div>
                <h3>
                  Food Delivery Website<i class="fa-solid fa-briefcase"></i>
                </h3>
                <p>
                  I spearheaded the development of an innovative food delivery
                  platform that enables users to effortlessly explore menus,
                  reserve tables, and order food. Leveraging my front-end
                  skills, I designed a user-friendly interface, optimized the
                  cart management process, and implemented a seamless checkout
                  experience. This website redefines food delivery, offering a
                  convenient and enjoyable way for users to discover and order
                  their favorite dishes.
                </p>
                <span>React</span>
                <span>Tailwind Css</span>
              </div>
              <div className={style.source_code}>
                <span>
                  <a href="https://github.com/pramod-k-mahto/FoodDeliveryWebsite">
                    Code <i class="fa-brands fa-github"></i>
                  </a>
                </span>
                <span>
                  <a href="https://yummyfoodnepal.vercel.app/">
                    Live Demo
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 Quiz */}

        <div className={style.project_main_div}>
          <div className={style.Project_Text} id="movie_text">
            <div>
              <h3>
                Quiz Website
                <i class="fa-solid fa-briefcase"></i>
              </h3>
              <p>
                Experience an engaging quiz platform crafted with React, CSS,
                Node.js, and MySQL. Delve into a wide array of quizzes, test
                user knowledge, and instantly view scores. As an admin, manage
                quizzes with ease—add new quizzes, update existing ones, and
                remove outdated content. This platform offers a seamless user
                interface and interactive design, ensuring a captivating
                learning experience for all. Join today, embark on a journey of
                knowledge, and elevate your learning experience!
              </p>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Node Js</span>
              <span>MySQL</span>
            </div>
            <div className={style.source_code}>
              <span>
                <a href="https://github.com/pramod-k-mahto/ReactPrject/tree/master/movies">
                  Code <i class="fa-brands fa-github"></i>
                </a>
              </span>
              <span>
                Live Demo<i class="fa-solid fa-arrow-up-right-from-square"></i>
              </span>
            </div>
          </div>
          <div id="movie_img">
            <img src={quiz} className={style.blog} alt="" />
          </div>
        </div>

        {/* Project 3 Recipe*/}

        <div className={style.project_main_div}>
          <div id="Quiz">
            <img src={Recipe} className={style.blog} alt="" />
          </div>
          <div id="quiz_text">
            {/* className={style.Project_Text} */}
            <div className={style.Project_Text}>
              <div>
                <h3>
                  Recipe Application
                  <i class="fa-solid fa-briefcase"></i>
                </h3>
                <p>
                  Experience a flavorful journey with a recipe platform,
                  meticulously crafted using HTML, CSS, Node.js, and MySQL.
                  Explore a vast collection of recipes, from traditional
                  favorites to innovative dishes, and elevate your culinary
                  skills. As an admin, effortlessly manage recipes—add new ones,
                  update existing ones, and remove outdated entries. My
                  platform boasts a user-friendly interface and captivating
                  design, ensuring a delightful cooking experience for all. Join
                  today, discover new flavors, and unleash your inner chef!
                </p>

                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Node Js</span>
                <span>MySQL</span>
              </div>
              <div className={style.source_code}>
                <span>
                  Code <i class="fa-brands fa-github"></i>
                </span>
                <span>
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/*NepalMedicalLab E-Commerce Platform 4 */}

        <div className={style.project_main_div}>
          <div className={style.Project_Text} id="NepalMedicalLab_text">
            <div>
              <h3>
                NepalMedicalLab E-Commerce Platform
                <i class="fa-solid fa-briefcase"></i>
              </h3>
              <p>
                Built an e-commerce platform using React.js with features like
                dynamic routing, cart management, and user-friendly interface.
                Users can browse and purchase medical equipment with ease,
                enhancing the online shopping experience. Growth and to make a
                positive impact.
              </p>
              <span>React</span>
              <span>CSS</span>
              {/* <span>MongoDb</span> */}
            </div>
            <div className={style.source_code}>
              <span>
                Code <i class="fa-brands fa-github"></i>
              </span>
              <span>
                Live Demo<i class="fa-solid fa-arrow-up-right-from-square"></i>
              </span>
            </div>
          </div>
          <div id="NepalMedicalLab_img">
            <img src={lab} className={style.blog} alt="" />
          </div>{" "}
        </div>

        {/* Blog website 5 */}

        <div className={style.project_main_div}>
          <div className={style.project5} id="blog">
            <img src={img} className={style.blog} alt="" />
          </div>

          <div id="blog_text" className={style.Project_Text}>
            <div>
              <h3>
                Blog website <i class="fa-solid fa-blog"></i>
              </h3>
              <p>
                A blog website was developed using the Django framework with an
                SQLite database. The website includes a user authentication
                system with signup, login, and logout functionality. Users can
                view, upload, edit, and delete blog posts.
              </p>
              <span>Django</span>
              <span>CSS</span>
              {/* <span>MongoDb</span> */}
            </div>
            <div className={style.source_code}>
              <span>
                <a href="https://github.com/pramod-k-mahto/Django-college-individual-project">
                  Code <i class="fa-brands fa-github"></i>
                </a>
              </span>
              <span>
                Live Demo<i class="fa-solid fa-arrow-up-right-from-square"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
