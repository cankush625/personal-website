import "./App.scss";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";

const Contact = lazy(() => import("./components/Contact"));
const Skills = lazy(() => import("./components/Skills"));
const ArtGallery = lazy(() => import("./components/ArtGallery"));
const Career = lazy(() => import("./components/Career"));
const PaperShelf = lazy(() => import("./components/PaperShelf"));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"skills"} element={<Skills />} />
          <Route path={"career"} element={<Career />} />
          <Route path={"paper-shelf"} element={<PaperShelf />} />
          <Route path={"art-gallery"} element={<ArtGallery />} />
          <Route path={"contact"} element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
