import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import ArtGallery from "./components/ArtGallery";
import Career from "./components/Career";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={"about"} element={<About />} />
        <Route path={"skills"} element={<Skills />} />
        <Route path={"career"} element={<Career />} />
        <Route path={"art-gallery"} element={<ArtGallery />} />
        <Route path={"contact"} element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
