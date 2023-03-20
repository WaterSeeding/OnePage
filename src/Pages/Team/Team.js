import Hero from "./components/Hero";
import TeamStart from "./components/TeamStart";

const Team = (props) => {
  const { lang } = props;
  return (
    <>
      <Hero lang={lang} />
      <TeamStart lang={lang} />
    </>
  );
};

export default Team;
