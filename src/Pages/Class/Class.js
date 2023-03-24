import Hero from "./components/Hero";
import Rfq from "../Main/components/About";

const ClassApp = (props) => {
  const { lang } = props;

  return (
    <>
      <Hero lang={lang} />
      <Rfq lang={lang} />
    </>
  );
};

export default ClassApp;
