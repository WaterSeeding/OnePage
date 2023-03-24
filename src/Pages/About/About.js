import Hero from "./components/Hero";
import Company from "../Main/components/Testimonial";

const About = (props) => {
  const { lang } = props;
  return (
    <>
      <Hero lang={lang} />
      <Company lang={lang} />
    </>
  );
};

export default About;
