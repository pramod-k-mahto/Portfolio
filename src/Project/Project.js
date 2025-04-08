import { useEffect } from "react";

function Project() {
  const windowValue = () => {
    let data = document.documentElement.scrollTop;
    
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

    // project 6 blog
    let blog_img_id = document.getElementById("blog_img_id");
    let blog_text_id = document.getElementById("blog_text_id");

    // project 1 food app
    if (data > 800) {
      food_img_id.classList.add("odd_Animation_img");
      food_text_id.classList.add("odd_Animation_text");
    } else {
      food_img_id.classList.remove("odd_Animation_img");
      food_text_id.classList.remove("odd_Animation_text");
    }

    // project 2 quiz
    if (data > 1150) {
      quiz_img_id.classList.add("even_Animation_img");
      quiz_text_id.classList.add("even_Animation_text");
    } else {
      quiz_img_id.classList.remove("even_Animation_img");
      quiz_text_id.classList.remove("even_Animation_text");
    }

    // project 3 Recipe
    if (data > 1600) {
      recipe_img_id.classList.add("odd_Animation_img");
      recipe_text_id.classList.add("odd_Animation_text");
    } else {
      recipe_img_id.classList.remove("odd_Animation_img");
      recipe_text_id.classList.remove("odd_Animation_text");
    }

    // project 4 todo
    if (data > 2000) {
      todo_text_id.classList.add("even_Animation_text");
      todo_img_id.classList.add("even_Animation_img");
    } else {
      todo_text_id.classList.remove("even_Animation_text");
      todo_img_id.classList.remove("even_Animation_img");
    }

    // project 5 job finder
    if (data > 2820) {
      job_img_id.classList.add("odd_Animation_img");
      job_text_id.classList.add("odd_Animation_text");
    } else {
      job_img_id.classList.remove("odd_Animation_img");
      job_text_id.classList.remove("odd_Animation_text");
    }

    // project 6 Blog app
    if (data > 3220) {
      blog_img_id.classList.add("even_Animation_img");
      blog_text_id.classList.add("even_Animation_text");
    } else {
      blog_text_id.classList.remove("even_Animation_text");
      blog_img_id.classList.remove("even_Animation_img");
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
      <div className="parent_div" id="parent_div_id">
        <div className="parent_header">
          <h2>Project</h2>
          <h2>
            Each Project is a Unique piece of development
            <i className="fa-solid fa-hashtag"></i>
          </h2>
        </div>

        {/* Project 1 food */}
        <div className="all_item_Outer_div">
          <div id="food_img_id">
            <img src="/api/placeholder/300/200" className="same_img_class" alt="Food Delivery Website" />
          </div>

          <div id="food_text_id">
            <div className="same_text_class">
              <div>
                <h3>
                  Food Delivery Website<i className="fa-solid fa-briefcase"></i>
                </h3>
                <p>
                  Food delivery platform enabling users to explore menus,
                  reserve tables, and order food. Managed cart processes and
                  implemented a seamless checkout experience. This website
                  redefines food delivery, offering a convenient and enjoyable
                  way for users to discover and order their favorite dishes.
                </p>
                <span>React</span>
                <span>Tailwind Css</span>
              </div>

              <div className="source_code">
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/pramod-k-mahto/FoodDeliveryWebsite"
                  >
                    Code <i className="fa-brands fa-github"></i>
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://yummyfoodnepal.vercel.app/"
                  >
                    Live Demo
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 Quiz */}
        <div className="all_item_Outer_div">
          <div id="quiz_text_id">
            <div className="same_text_class">
              <h3>
                Quiz Website
                <i className="fa-solid fa-briefcase"></i>
              </h3>
              <p>
                Quiz platform crafted with React, CSS, Node.js, and MySQL. Delve
                into a wide array of quizzes, test user knowledge, and instantly
                view scores. As an admin, manage quizzes with ease—add new
                quizzes, update existing ones, and remove outdated content. The
                platform offers a seamless user interface and interactive
                design, ensuring a captivating learning experience for all.
              </p>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Node Js</span>
              <span>MySQL</span>

              <div className="source_code">
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/pramod-k-mahto/quizapp"
                  >
                    Code <i className="fa-brands fa-github"></i>
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nepquiz.vercel.app/"
                  >
                    Live Demo
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div id="quiz_img_id">
            <img src="/api/placeholder/300/200" className="same_img_class" alt="Quiz Website" />
          </div>
        </div>

        {/* Project 3 Recipe*/}
        <div className="all_item_Outer_div">
          <div id="recipe_img_id">
            <img src="/api/placeholder/300/200" className="same_img_class" alt="Recipe Application" />
          </div>
          <div id="recipe_text_id">
            <div className="same_text_class">
              <div>
                <h3>
                  Recipe Application
                  <i className="fa-solid fa-briefcase"></i>
                </h3>
                <p>
                  Recipe platform crafted with HTML, CSS, Node.js, and MySQL.
                  Explore a vast collection of recipes, from traditional
                  favorites to innovative dishes, and elevate users' culinary
                  skills. As an admin, effortlessly manage recipes—add new ones,
                  update existing ones, and remove outdated entries.
                </p>

                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Node Js</span>
                <span>MySQL</span>
              </div>

              <div className="source_code">
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/pramod-k-mahto/Recipe-App-frontend-"
                  >
                    Code <i className="fa-brands fa-github"></i>
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://neprecipe.vercel.app/"
                  >
                    Live Demo
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/*Todo App 4 */}
        <div className="all_item_Outer_div">
          <div id="todo_text_id">
            <div className="same_text_class">
              <h3>
                Todo App
                <i className="fa-solid fa-briefcase"></i>
              </h3>
              <p>
                ToDo application designed with HTML, CSS, Node.js, and MySQL.
                Easily manage your tasks with a user-friendly interface, add new
                tasks, update existing ones, and remove completed items
                effortlessly.
              </p>

              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Node Js</span>
              <span>MySQL</span>

              <div className="source_code">
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/pramod-k-mahto/todo-fronted"
                  >
                    Code <i className="fa-brands fa-github"></i>
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://neptodo.vercel.app/"
                  >
                    Live Demo
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div id="todo_img_id">
            <img src="/api/placeholder/300/200" className="same_img_class" alt="Todo App" />
          </div>
        </div>

        {/* Job finder website 5 */}
        <div className="all_item_Outer_div">
          <div className="project5" id="job_img_id">
            <img src="/api/placeholder/300/200" className="same_img_class" alt="Job Finder" />
          </div>

          <div id="job_text_id" className="same_text_class">
            <div>
              <h3>
                Job Finder <i className="fa-solid fa-blog"></i>
              </h3>
              <p>
                Job Finder application featuring job listings and effortless
                applications, all designed to streamline the job search
                experience.
              </p>
              <span>React</span>
              <span>CSS</span>
              <span>Node Js</span>
              <span>MongoDB</span>
            </div>
            <div className="source_code">
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/pramod-k-mahto/jobfinder.git"
                >
                  Code <i className="fa-brands fa-github"></i>
                </a>
              </span>
              <span>
                {/* Live Demo<i className="fa-solid fa-arrow-up-right-from-square"></i> */}
              </span>
            </div>
          </div>
        </div>

        {/* Project 6 Blog */}
        <div className="all_item_Outer_div">
          <div className="same_text_class" id="blog_text_id">
            <div>
              <h3>
                Blog Website
                <i className="fa-solid fa-briefcase"></i>
              </h3>
              <p>
                Blog platform built with Django, CSS, Python, and SQLite. Dive
                into a diverse range of articles, explore various topics, and
                engage with insightful content. As an admin, effortlessly manage
                blog posts—create new ones, update existing articles, and remove
                outdated content.
              </p>
              <span>Django</span>
              <span>CSS</span>
              <span>Python</span>
              <span>SQLite</span>
            </div>
            <div className="source_code">
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/pramod-k-mahto/Django-college-individual-project"
                >
                  Code <i className="fa-brands fa-github"></i>
                </a>
              </span>
              <span>
                {/* Live Demo<i className="fa-solid fa-arrow-up-right-from-square"></i> */}
              </span>
            </div>
          </div>
          <div id="blog_img_id">
            <img src="/api/placeholder/300/200" className="same_img_class" alt="Blog Website" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .parent_div {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          overflow: hidden;
        }

        .parent_header {
          text-align: center;
          margin-bottom: 50px;
        }

        @media (min-width: 768px) {
          .parent_header {
            margin-left: 200px;
            text-align: left;
          }
        }

        .parent_header h2 {
          margin: 10px 0;
          font-size: 24px;
        }

        .parent_header h2:nth-child(2) {
          font-size: 16px;
          color: #555;
        }

        .parent_header i {
          margin-left: 5px;
        }

        .all_item_Outer_div {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 70px 0px 90px 0px;
          width: 100%;
          overflow: hidden;
          height: auto;
          min-height: 420px;
          gap: 20px;
        }

        @media (min-width: 768px) {
          .all_item_Outer_div {
            margin-left: 100px;
            width: 85%;
          }
        }

        @media (max-width: 767px) {
          .all_item_Outer_div {
            flex-direction: column;
            margin: 40px 0;
            height: auto;
          }
          
          .all_item_Outer_div:nth-child(odd) {
            flex-direction: column;
          }
          
          .all_item_Outer_div:nth-child(even) {
            flex-direction: column-reverse;
          }
        }

        .same_img_class {
          height: 200px;
          width: 300px;
          border: 0.5px solid rgb(175, 170, 170);
          border-radius: 5%;
          margin: 15px;
          transition: transform 0.3s ease;
        }

        .same_img_class:hover {
          transform: scale(1.03);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        @media (max-width: 480px) {
          .same_img_class {
            height: 180px;
            width: 250px;
          }
        }

        .same_text_class {
          height: auto;
          max-height: 400px;
          width: 400px;
          padding: 15px;
          overflow-y: auto;
          text-align: center;
        }

        @media (max-width: 480px) {
          .same_text_class {
            width: 100%;
            max-width: 300px;
          }
        }

        .same_text_class p {
          width: 100%;
          max-width: 350px;
          margin: auto;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .same_text_class h3 {
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }

        .same_text_class h3 i {
          margin-left: 10px;
          color: #333;
        }

        .same_text_class span {
          display: inline-block;
          margin: 4px 6px;
          padding: 3px 10px;
          background-color: #f5f5f5;
          border-radius: 15px;
          font-size: 14px;
          font-weight: bold;
          color: #333;
        }

        .source_code {
          display: flex;
          justify-content: center;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .source_code span {
          margin: 10px 20px;
          background-color: transparent !important;
          font-weight: normal !important;
        }

        .source_code a {
          display: flex;
          align-items: center;
          color: #0366d6;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.2s;
        }

        .source_code a:hover {
          color: #0246a2;
          text-decoration: underline;
        }

        .source_code a i {
          margin-left: 5px;
        }

        /* Animation classes */
        @keyframes Animation_odd_img {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .odd_Animation_img {
          animation: Animation_odd_img 0.5s linear forwards;
          position: relative;
          left: 10px;
        }

        @keyframes Animation_odd_text {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .odd_Animation_text {
          animation: Animation_odd_text 0.5s linear forwards;
          position: relative;
          right: 10px;
        }

        @keyframes Animation_even_img {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .even_Animation_img {
          animation: Animation_even_img 0.5s linear forwards;
          position: relative;
          right: -10px;
        }

        @keyframes Animation_even_text {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .even_Animation_text {
          animation: Animation_even_text 0.5s linear forwards;
          position: relative;
          left: 10px;
        }

        /* Scrollbar styling */
        .same_text_class::-webkit-scrollbar {
          width: 5px;
        }

        .same_text_class::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .same_text_class::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 5px;
        }

        .same_text_class::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        /* For mobile devices, adjust animation trigger points */
        @media (max-width: 767px) {
          .odd_Animation_img, .even_Animation_img {
            left: 0;
            right: 0;
          }

          .odd_Animation_text, .even_Animation_text {
            left: 0;
            right: 0;
          }
          
          @keyframes Animation_odd_img {
            0% {
              transform: translateY(-50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          @keyframes Animation_odd_text {
            0% {
              transform: translateY(50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          @keyframes Animation_even_img {
            0% {
              transform: translateY(50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          @keyframes Animation_even_text {
            0% {
              transform: translateY(-50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        }
      `}</style>
    </>
  );
}

export default Project;