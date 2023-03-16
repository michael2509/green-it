import { Component, lazy } from "solid-js";
import { Route, Routes } from "@solidjs/router";

import Navbar from "./components/Navbar";

const App: Component = () => {
  const Home = lazy(() => import("./components/Home"));

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
    </>
  );
};

export default App;
