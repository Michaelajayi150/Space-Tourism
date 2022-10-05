import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Crew from "../pages/crew";
import Destination from "../pages/destination";
import Technologies from "../pages/technologies";
import { Data } from "../data";

function Main({ classNaming }) {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        path="/dist"
        element={
          <Destination classNaming={classNaming} data={Data.destinations} />
        }
      />
      <Route
        path="/crew"
        element={<Crew classNaming={classNaming} data={Data.crew} />}
      />
      <Route
        path="/tech"
        element={
          <Technologies classNaming={classNaming} data={Data.technology} />
        }
      />
    </Routes>
  );
}

export default Main;
