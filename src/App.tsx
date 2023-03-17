import { Component, lazy } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import Footer from "./components/footer/Footer";

import Navbar from "./components/navbar/Navbar";

const App: Component = () => {
  const Home = lazy(() => import("./components/home/Home"));

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />
        <Route
          path="/about"
          element={<div>This site was made with Solid</div>}
        />
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
