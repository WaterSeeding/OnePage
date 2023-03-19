import "./Main.css";
import Carousel from "./components/Carousel";
import About from "./components/About";
import ClassTimetable from "./components/ClassTimetable";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";

const Main = () => {
  return (
    <>
      <Carousel />
      <ClassTimetable />
      <About />
      <Blog />
      <Testimonial />
    </>
  );
};

export default Main;
