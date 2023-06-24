import { useState } from "react";
import { motion, spring } from "framer-motion";
import "./Card.css"
import usef from "../../../src/assets/Usef.png"
import Ellipse from "../../../src/assets/Ellipse 5.png"
import { SiMinutemailer } from "react-icons/si";
import { FcIphone } from "react-icons/fc";

const Card = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className={toggle ? "appopen" : "app"}>
        <motion.div
          transition={{ layout: { duration: 1, type: spring } }}
          layout
          onClick={() => setToggle(!toggle)}
          className="card"
          style={{
            borderRadius: "1rem",
            boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",
          }}
        >
          <motion.h1
            transition={{ layout: { duration: 1, type: spring } }}
            layout="position"
            className={toggle ? "h1-none" : "div__card--title-h1"}
          >
            Full Stack Web Developer
          </motion.h1>
          <motion.div className={toggle ? "none" : "div__card--closed"}>
            <div>
              <motion.h3 layout="position" className="div__card--closed-h3">
                Youssef Hamadi
              </motion.h3>
              <motion.div className="img-divv">
                <img src={usef} className="photo__img" />
              </motion.div>
            </div>
            <div className="div__card--closed-h4-p-img">
              <motion.h3
                layout="position"
                className="div__card--closed-h3-about"
              >
                About Me
              </motion.h3>
              <motion.p layout="position" className="div__card--closed-p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                dolore.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ut, dolore.Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Ut, dolore.
              </motion.p>

              <div className="div__card--closed-ellipse">
                <img className="ww" src={Ellipse} />
                <div className="label__phone">
                  <div className="label__phone-div">
                    <FcIphone size={32} />
                    +961 76645651
                  </div>
                  <div className="div__card--closed-email">
                    <SiMinutemailer
                      size={32}
                      color="rgb(227, 137, 57)"
                      style={{ marginRight: "10px" }}
                      className="ss"
                    />
                    Youssefhamadi94@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {toggle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0 }}
              className="div__card-open"
              
            >
              <motion.div layout className="wrapper">
                <div className="static-txt">I'm</div>
                <ul className="dynamic-txts">
                  <li>
                    <span>Youssef Hamadi</span>
                  </li>
                  <li>
                    <span>A Full Stack Developer</span>
                  </li>
                  <li>
                    <span> A Freelancerer</span>
                  </li>
                </ul>
              </motion.div>

              <motion.img
                layout="position"
                className="card__open-img"
                src={usef}
              />
              <div className="div__card--open-div">
                <motion.h3
                  layout="position"
                  className="div__card--open-h3-about"
                >
                  About Me
                </motion.h3>
                <motion.p layout className="div__open-p">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                  commodi quo placeat rerum veniam. Vitae est iure commodi cum
                  numquam! Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Qui commodi quo placeat rerum veniam. Vitae est iure
                  commodi cum numquam! Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Qui commodi quo placeat rerum veniam. Vitae
                  est iure commodi cum numquam!
                </motion.p>
              </div>
                <motion.div className="div__open-h2-div">
                  <motion.h2 className="div__open-h2-projects">
                    Projects
                  </motion.h2>
                </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Card;
