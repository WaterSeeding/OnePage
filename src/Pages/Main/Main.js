import "./Main.css";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Programe from "./components/Programe";
import ClassTimetable from "./components/ClassTimetable";
import Facts from "./components/Facts";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";

const Main = () => {
  return (
    <>
      <Carousel />
      <About />
      <Programe />
      <ClassTimetable />
      <Facts />
      <Team />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Main;
