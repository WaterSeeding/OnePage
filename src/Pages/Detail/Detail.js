import Hero from "./components/Hero";
import DetailStart from "./components/DetailStart";

const Detail = (props) => {
  const { lang } = props;
  return (
    <>
      <Hero lang={lang} />
      <DetailStart lang={lang} />
    </>
  );
};

export default Detail;
