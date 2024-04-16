import NavBar from "./navbar/NavBar.js";
import Home from "./home/Home.js";
// import { useEffect } from "react";
import About from "./About/About.js";
import Project from "./Project/Project.js";
import Contact from "./Contact/Contact.js";
import Footer from "./Footer/footer.js";

function App() {
  // console.log("innerHeight", window.innerHeight);

  // const windowValue = () => {
  //   let data = document.documentElement.scrollTop;
  //   console.log("data", data);
  //   if (data >= 960) {
  //     alert("100");
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", windowValue);
  // }, []);

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
