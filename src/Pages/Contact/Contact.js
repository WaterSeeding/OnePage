import Hero from "./components/Hero";
import ContactStart from "./components/ContactStart";

const Contact = (props) => {
  const { lang } = props;
  return (
    <>
      <Hero lang={lang} />
      <ContactStart lang={lang} />
    </>
  );
};

export default Contact;
