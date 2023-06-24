import "./App.css";
import { Route, Routes } from "react-router-dom";
import Card from "./componants/Card/Card";
import Projects from "./componants/Projects";

function App() {

  return (
    <>
    {/* <Card /> */}
      <Routes>
        <Route path="/card" element={<Card />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
