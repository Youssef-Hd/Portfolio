import { useState } from "react";
import { motion, spring } from "framer-motion";
import "./App.css";
import usef from "../src/assets/Usef.png";
import Ellipse from "../src/assets/Ellipse 5.png";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="app">
        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          onClick={() => setToggle(!toggle)}
          className="card"
          style={{
            borderRadius: "1rem",
            boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",
          }}
        >
          <motion.h2 layout="position" className="div__card--title-h2">
            Full Stack Web Developer
          </motion.h2>
          <motion.div className="div__card--closed">
            <div>
              <h3 className="div__card--closed-h3">Youssef Hamadi</h3>
              <img src={usef} className="photo__img" />
            </div>
            <div className="div__card--closed-h4-p">
              <h4 className="div__card--closed-h4">About Me</h4>
              <p className="div__card--closed-p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                dolore.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ut, dolore.Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Ut, dolore.
              </p>
              <div>
                <img src={Ellipse} className="div__card--closed-ellipse" />
              </div>
            </div>
          </motion.div>
          {toggle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                commodi quo placeat rerum veniam. Vitae est iure commodi cum
                numquam!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                porro!
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
}

export default App;
