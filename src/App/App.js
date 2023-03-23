import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Back from "../Components/Back";
import Main from "../Pages/Main/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog";
import ClassApp from "../Pages/Class/Class";
import Contact from "../Pages/Contact/Contact";
import Detail from "../Pages/Detail/Detail";
import Team from "../Pages/Team/Team";

const App = (props) => {
  const { lang, setLang } = props;
  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <Outlet />
      <Footer lang={lang} />
      <Back />
    </>
  );
};

const AppContainer = () => {
  const [lang, setLang] = useState("cn");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App lang={lang} setLang={setLang} />}
        >
          <Route path="/" element={<Main lang={lang} />} />
          <Route path="/Classes" element={<ClassApp lang={lang} />} />
          <Route path="/Team" element={<Team lang={lang} />} />
          <Route path="/Blog" element={<Blog lang={lang} />} />
          <Route path="/Detail" element={<Detail lang={lang} />} />
          <Route path="/About" element={<About lang={lang} />} />
          <Route path="/Contact" element={<Contact lang={lang} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppContainer;
