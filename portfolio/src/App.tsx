import "./App.css";
import { Route, Routes } from "react-router-dom";
import Card from "./componants/Card/Card";
import Projects from "./componants/Projects";
import Test from './componants/testing/test.tsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/card" element={<Card />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
