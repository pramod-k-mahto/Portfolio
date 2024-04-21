import style from "./project.module.css";
import blog from "../image/blog.png";
import food from "../image/food.png";
import quiz from "../image/quiz.png";
import Recipe from "../image/Recipe.png";
import todo from "../image/todo.png";
import job from "../image/job.png";
import { useEffect } from "react";

function Project() {
  const windowValue = () => {
    let data = document.documentElement.scrollTop;
    // console.log(data);
    // project 1 food
    let food_img_id = document.getElementById("food_img_id");
    let food_text_id = document.getElementById("food_text_id");

    // project 2 quiz
    let quiz_text_id = document.getElementById("quiz_text_id");
    let quiz_img_id = document.getElementById("quiz_img_id");

    // project 3 recipe
    let recipe_img_id = document.getElementById("recipe_img_id");
    let recipe_text_id = document.getElementById("recipe_text_id");

    // project 4 todo
    let todo_img_id = document.getElementById("todo_img_id");
    let todo_text_id = document.getElementById("todo_text_id");

    // project 5 job
    let job_img_id = document.getElementById("job_img_id");
    let job_text_id = document.getElementById("job_text_id");

    // project 6 job
    let blog_img_id = document.getElementById("blog_img_id");
    let blog_text_id = document.getElementById("blog_text_id");

    // project 1 food app
    if (data > 800) {
      food_img_id.classList.add(style.odd_Animation_img);
      food_text_id.classList.add(style.odd_Animation_text);
    } else {
      food_img_id.classList.remove(style.odd_Animation_img);
      food_text_id.classList.remove(style.odd_Animation_text);
    }

    // project 2 quiz
    if (data > 1150) {
      quiz_img_id.classList.add(style.even_Animation_img);
      quiz_text_id.classList.add(style.even_Animation_text);
    } else {
      quiz_img_id.classList.remove(style.even_Animation_img);
      quiz_text_id.classList.remove(style.even_Animation_text);
    }

    // project 3 Recipe
    if (data > 1600) {
      recipe_img_id.classList.add(style.odd_Animation_img);
      recipe_text_id.classList.add(style.odd_Animation_text);
    } else {
      recipe_img_id.classList.remove(style.odd_Animation_img);
      recipe_text_id.classList.remove(style.odd_Animation_text);
    }

    // project 4 todo
    if (data > 2000) {
      todo_text_id.classList.add(style.even_Animation_text);
      todo_img_id.classList.add(style.even_Animation_img);
    } else {
      todo_text_id.classList.remove(style.even_Animation_text);
      todo_img_id.classList.remove(style.even_Animation_img);
    }

    // project 5  job finder
    if (data > 2820) {
      job_img_id.classList.add(style.odd_Animation_img);
      job_text_id.classList.add(style.odd_Animation_text);
    } else {
      job_img_id.classList.remove(style.odd_Animation_img);
      job_text_id.classList.remove(style.odd_Animation_text);
    }

    // project 6  Blog app

    if (data > 3220) {
      blog_img_id.classList.add(style.even_Animation_img);
      blog_text_id.classList.add(style.even_Animation_text);
    } else {
      blog_text_id.classList.remove(style.even_Animation_text);
      blog_img_id.classList.remove(style.even_Animation_img);
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
      <div className={style.parent_div} id="parent_div_id">
        {/* <br /> */}
        <div className={style.parent_header}>
          <h2>Project</h2>
          <h2>
            Each Project is a Unique piece of development
            <i class="fa-solid fa-hashtag"></i>
          </h2>
        </div>

        {/* Project 1  food */}

        <div className={style.all_item_Outer_div}>
          <div id="food_img_id">
            <img src={food} className={style.same_img_class} alt="" />
          </div>

          <div id="food_text_id">

            <div className={style.same_text_class}>

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
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/pramod-k-mahto/FoodDeliveryWebsite">
                    Code <i class="fa-brands fa-github"></i>
                  </a>
                </span>
                <span>
                  <a target="_blank" rel="noopener noreferrer" href="https://yummyfoodnepal.vercel.app/">
                    Live Demo
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </span>
              </div>

            </div>


          </div>
        </div>

        {/* Project 2 Quiz */}

        <div className={style.all_item_Outer_div}>
          <div id="quiz_text_id">
            <div  className={style.same_text_class}>
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


              <div className={style.source_code}>
              <span>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/pramod-k-mahto/quizapp">
                  Code <i class="fa-brands fa-github"></i>
                </a>
              </span>
              <span>
                <a target="_blank" rel="noopener noreferrer" href="https://nepquiz.vercel.app/">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </span>
            </div>
            </div>
            
          </div>
          <div id="quiz_img_id">
            <img src={quiz} className={style.same_img_class} alt="" />
          </div>
        </div>

        {/* Project 3 Recipe*/}

        <div className={style.all_item_Outer_div}>
          <div id="recipe_img_id">
            <img src={Recipe} className={style.same_img_class} alt="" />
          </div>
          <div id="recipe_text_id">
            <div className={style.same_text_class}>

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
                  update existing ones, and remove outdated entries. My platform
                  boasts a user-friendly interface and captivating design,
                  ensuring a delightful cooking experience for all. Join today,
                  discover new flavors, and unleash your inner chef!
                </p>

                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Node Js</span>
                <span>MySQL</span>
              </div>

              <div className={style.source_code}>
                <span>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/pramod-k-mahto/Recipe-App-frontend-">
                    Code <i class="fa-brands fa-github"></i>
                  </a>
                </span>
                <span>
                  <a target="_blank" rel="noopener noreferrer" href="https://neprecipe.vercel.app/">
                    Live Demo
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </span>
              </div>
            </div>


          </div>



        </div>

        {/*Todo do App 4 */}

        <div className={style.all_item_Outer_div}>
          <div  id="todo_text_id">
            <div className={style.same_text_class}>
              <h3>
                Todo App
                <i class="fa-solid fa-briefcase"></i>
              </h3>
              <p>
                Experience a streamlined organizational tool with our ToDo
                application, designed with HTML, CSS, Node.js, and MySQL. Easily
                manage your tasks with a user-friendly interface, add new tasks,
                update existing ones, and remove completed items effortlessly.
                Stay organized and productive with our intuitive design. Join
                today, enhance your task management, and achieve your goals
                efficiently!
              </p>

              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Node Js</span>
              <span>MySQL</span>

              <div className={style.source_code}>
              <span>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/pramod-k-mahto/todo-fronted">
                  Code <i class="fa-brands fa-github"></i>
                </a>
              </span>
              <span>
                <a target="_blank" rel="noopener noreferrer" href="https://neptodo.vercel.app/">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </span>
            </div>
            </div>
          </div>
          <div id="todo_img_id">
            <img src={todo} className={style.same_img_class} alt="" />
          </div>
        </div>

        {/* Job finder website 5 */}

        <div className={style.all_item_Outer_div}>
          <div className={style.project5} id="job_img_id">
            <img src={job} className={style.same_img_class} alt="" />
          </div>

          <div id="job_text_id" className={style.same_text_class}>
            <div>
              <h3>
                Job Finder <i class="fa-solid fa-blog"></i>
              </h3>
              <p>
                Explore a cutting-edge job search platform with our Job Finder
                application, featuring job listings and effortless applications,
                all designed to streamline your job search experience. Join
                today and embark on a rewarding career journey!
              </p>
              <span>React</span>
              <span>CSS</span>
              <span>NOde Js</span>
              <span>MongoDb</span>
            </div>
            <div className={style.source_code}>
              <span>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/pramod-k-mahto/job-Finder">
                  Code <i class="fa-brands fa-github"></i>
                </a>
              </span>
              <span>
                {/* Live Demo<i class="fa-solid fa-arrow-up-right-from-square"></i> */}
              </span>
            </div>
          </div>
        </div>

        {/* Project  Blog */}

        <div className={style.all_item_Outer_div}>
          <div className={style.same_text_class} id="blog_text_id">
            <div>
              <h3>
                Blog Website
                <i class="fa-solid fa-briefcase"></i>
              </h3>
              <p>
                Experience a dynamic blogging platform built with Django, CSS,
                Python, andSqlite . Dive into a diverse range of articles,
                explore various topics, and engage with insightful content. As
                an admin, effortlessly manage blog posts—create new ones, update
                existing articles, and remove outdated content.
              </p>
              <span>Django</span>
              <span>CSS</span>
              <span>Python</span>
              <span>Sqlite</span>
            </div>
            <div className={style.source_code}>
              <span>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/pramod-k-mahto/Django-college-individual-project">
                  Code <i class="fa-brands fa-github"></i>
                </a>
              </span>
              <span>
                {/* Live Demo<i class="fa-solid fa-arrow-up-right-from-square"></i> */}
              </span>
            </div>
          </div>
          <div id="blog_img_id">
            <img src={blog} className={style.same_img_class} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
