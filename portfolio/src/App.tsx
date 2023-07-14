import "./App.css";
import { Route, Routes } from "react-router-dom";
import Card from "./componants/Card/Card";
import Projects from "./componants/Projects/Projects.tsx";
import Test from './componants/testing/test.tsx'
import Testo from './componants/testing/Testo.tsx'

function App() {

  return (
 
    <>
      <Routes>
        <Route path="/card" element={<Card />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/test" element={<Test />} />
        <Route path="/testo" element={<Testo />} />
      </Routes>
    </>
  );
}

export default App;
