import "./Main.css";
import Carousel from "./components/Carousel";
import About from "./components/About";
import ClassTimetable from "./components/ClassTimetable";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Blog from "../../Pages/Blog/Blog";

const Main = () => {
  return (
    <>
      <Carousel />
      <ClassTimetable />
      <About />
      <Blog />
      <Team />
      <Testimonial />
    </>
  );
};

export default Main;
