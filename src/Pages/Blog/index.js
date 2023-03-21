import Hero from "./components/Hero";
import BlogStart from "./components/BlogStart";

const Blog = (props) => {
  const { lang } = props
  return (
    <>
      <Hero lang={lang} />
      <BlogStart lang={lang} />
    </>
  );
};

export default Blog;
