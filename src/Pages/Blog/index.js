import Hero from "./components/Hero";
import Product from "../Main/components/Blog";

const Blog = (props) => {
  const { lang } = props
  return (
    <>
      <Hero lang={lang} />
      <Product lang={lang} />
    </>
  );
};

export default Blog;
