import "./Main.css";
import Poster from "./components/Carousel";
import Rfq from "./components/About";
import Brands from "./components/ClassTimetable";
import Company from "./components/Testimonial";
import Product from "./components/Blog";

const Main = (props) => {
  const { lang } = props
  return (
    <>
      <Poster lang={lang} />
      <Brands lang={lang} />
      <Rfq lang={lang} />
      <Product lang={lang} />
      <Company lang={lang} />
    </>
  );
};

export default Main;
