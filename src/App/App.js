import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Back from "../Components/Back";
import Main from "../Pages/Main/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import ClassApp from "../Pages/Class/Class";
import Contact from "../Pages/Contact/Contact";
import Detail from "../Pages/Detail/Detail";
import Team from "../Pages/Team/Team";
import Testimonial from "../Pages/Testimonial/Testimonial";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Back />
    </>
  );
};

const AppContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="Main" element={<Main />} />
          <Route path="About" element={<About />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Classes" element={<ClassApp />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Detail" element={<Detail />} />
          <Route path="Team" element={<Team />} />
          <Route path="Testimonial" element={<Testimonial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppContainer;
