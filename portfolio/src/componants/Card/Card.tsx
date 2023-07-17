import { useState } from "react";
import { motion, spring } from "framer-motion";
import "./Card.css";
import usef from "../../../src/assets/Usef.png";
import Ellipse from "../../../src/assets/Ellipse 5.png";
import footer from "../../../src/assets/Footer.png";
import { SiMinutemailer, SiMiro, SiMongoose, SiMysql } from "react-icons/si";
import { FcIphone } from "react-icons/fc";
import Projects from "../Projects/Projects.tsx";
import { DiJavascript1, DiSqllite } from "react-icons/di";
import { AiFillHtml5, AiFillApi } from "react-icons/ai";
import { FaLaravel } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { CgFigma } from "react-icons/cg";
import agile from "../../assets/kisspng-agile-software-development-scrum-computer-icons-ag-5afc42d617c5b6.9834140115264816220974.png";
import express from "../../assets/expressjs.svg";
import {
  BiLogoNodejs,
  BiLogoReact,
  BiLogoMongodb,
  BiLogoRedux,
} from "react-icons/bi";
import {
  BsGit,
  BsTrello,
  BsFiletypePhp,
  BsFillBootstrapFill,
  BsFiletypeCss,
  BsGithub,
} from "react-icons/bs";

const Card = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <motion.div className={toggle ? "appopen" : "app"}>
        <div className="background-container">
          <img
            className="img-moon"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
            alt=""
          />
          <div className="stars"> </div>

          <div className="twinkling"> </div>

          <div id="cloudz-index" className="clouds"></div>
        </div>
        <motion.div
          id={toggle ? "my__card-open" : "my__card"}
          transition={{ layout: { duration: 0.6, type: spring } }}
          layout="position"
          onClick={() => setToggle(!toggle)}
          className="card"
          style={{
            borderRadius: "1rem",

            // boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",
            // boxShadow: "0px 10px 30px white"
          }}
        >
          <motion.h1
            transition={{ layout: { duration: 0.6, type: spring } }}
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
            <motion.div className="div__card--closed-h4-p-img">
              <motion.h3
                layout="position"
                className="div__card--closed-h3-about"
              >
                About Me
              </motion.h3>
              <motion.p
                layout="position"
                transition={{ layout: { duration: 0.6, type: spring } }}
                className="div__card--closed-p"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                dolore.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ut, dolore.Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Ut, dolore.
              </motion.p>

              <motion.div className="div__card--closed-ellipse">
                <img className="ww" src={Ellipse} />
                <motion.div className="label__phone">
                  <motion.div className="label__phone-div">
                    <FcIphone size={32} />
                    +961 76645651
                  </motion.div>
                  <motion.div className="div__card--closed-email">
                    <SiMinutemailer
                      size={32}
                      color="rgb(227, 137, 57)"
                      style={{ marginRight: "10px" }}
                      className="ss"
                    />
                    Youssefhamadi94@gmail.com
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {toggle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
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
                    <span> A Freelancer</span>
                  </li>
                </ul>
              </motion.div>
              <motion.img
                layout="position"
                className="card__open-img"
                src={usef}
              />
              <motion.div
                transition={{ layout: { duration: 0.6, type: spring } }}
                layout="position"
                className="div__card--open-div"
              >
                <motion.h2
                  layout="position"
                  className="div__card--open-h2-about"
                >
                  About Me
                </motion.h2>

                <motion.p layout className="div__open-p">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                  commodi quo placeat rerum veniam. Vitae est iure commodi cum
                  numquam! Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Qui commodi quo placeat rerum veniam. Vitae est iure
                  commodi cum numquam! Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Qui commodi quo placeat rerum veniam. Vitae
                  est iure commodi cum numquam!lit. Qui commodi quo placeat
                  rerum veniam. Vitae est iure commodi cum numquam! Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Qui commodi quo
                  placeat rerum veniam. Vitae est iure commodi cum numquam!lit.
                  Qui commodi quo placeat rerum veniam. Vitae est iure commodi
                  cum numquam! Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Qui commodi quo placeat rerum veniam. Vitae
                  est iure commodi cum numquam!
                </motion.p>
              </motion.div>

              <motion.div className="card__z-index">
                <div className="blob-string-div">
                  {/* <div className="string-color"></div> */}
                  <div className="blob__card-div">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 500"
                      width="100%"
                      // width={400}
                      // height={350}
                      id="blobSvg"
                      filter="blur(0px)"
                      style={{ opacity: 1 }}
                      transform="rotate(0)"
                      className="blobb-title"
                    >
                      {" "}
                      <defs>
                        {" "}
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          {" "}
                          <stop
                            offset="0%"
                            style={{ stopColor: "rgb(0, 0, 0)" }}
                          ></stop>{" "}
                          <stop
                            offset="100%"
                            style={{ stopColor: "rgb(0, 0, 0)" }}
                          ></stop>{" "}
                        </linearGradient>{" "}
                      </defs>{" "}
                      <path id="blobSvg" fill="white" style={{ opacity: 1 }}>
                        <animate
                          attributeName="d"
                          dur="5s"
                          repeatCount="indefinite"
                          values="M388.67097,319.27849Q360.55699,388.55699,291.23441,379.72688Q221.91183,370.89678,145.00645,354.28387Q68.10108,337.67097,71.32903,251.33548Q74.55699,165,142.39247,119.95591Q210.22796,74.91183,286.12043,91.61398Q362.0129,108.31613,389.39892,179.15806Q416.78495,250,388.67097,319.27849Z;M420.7122,331.4339Q380.09423,412.86779,301.16508,392.29219Q222.23594,371.7166,157.11322,349.24982Q91.99051,326.78305,53.64135,232.38203Q15.29219,137.98101,118.09898,129.47187Q220.90577,120.96273,294.67458,111.25967Q368.44339,101.55661,414.88678,175.77831Q461.33017,250,420.7122,331.4339Z;M390.7302,319.10952Q360.37524,388.21905,284.62068,409.39959Q208.86612,430.58014,161.11156,373.20082Q113.35701,315.8215,88.46857,238.04463Q63.58014,160.26776,136.76776,117.04463Q209.95537,73.8215,303.79007,69.52027Q397.62476,65.21905,409.35497,157.60952Q421.08517,250,390.7302,319.10952Z;M400,314Q352,378,277,420Q202,462,143,396Q84,330,66.5,241.5Q49,153,125.5,97.5Q202,42,298.5,55Q395,68,421.5,159Q448,250,400,314Z;M429.79847,339.54154Q392.67727,429.08308,294.97368,455.00137Q197.27008,480.91966,143.94598,403.56786Q90.62188,326.21607,83.52769,246.22992Q76.43351,166.24376,136.8518,92.77008Q197.27008,19.29641,287.1482,55Q377.02632,90.70359,421.97299,170.3518Q466.91966,250,429.79847,339.54154Z;M411.71818,339.87391Q393.61186,429.74783,302.23794,426.16285Q210.86403,422.57787,122.32727,388.31581Q33.79051,354.05375,61.55534,263.35692Q89.32016,172.66008,145.95613,107.46324Q202.59209,42.2664,289.95613,66.5581Q377.32016,90.8498,403.57233,170.4249Q429.82451,250,411.71818,339.87391Z;M436.87032,349.05548Q408.4258,448.11097,306.06935,451.62968Q203.7129,455.14839,157.4258,385.87516Q111.13871,316.60194,93.22677,241.12968Q75.31484,165.65742,135.48613,87.80097Q195.65742,9.94452,281.80097,56.34258Q367.94452,102.74064,416.62968,176.37032Q465.31484,250,436.87032,349.05548Z;M392.2525,331.53996Q379.05994,413.07992,285.7525,456.15485Q192.44505,499.22978,100.80019,432.44731Q9.15533,365.66484,30.81018,260.57493Q52.46503,155.48501,121.45005,74.10764Q190.43506,-7.26974,268.13261,60.97003Q345.83016,129.2098,375.63761,189.6049Q405.44505,250,392.2525,331.53996Z;M388.67097,319.27849Q360.55699,388.55699,291.23441,379.72688Q221.91183,370.89678,145.00645,354.28387Q68.10108,337.67097,71.32903,251.33548Q74.55699,165,142.39247,119.95591Q210.22796,74.91183,286.12043,91.61398Q362.0129,108.31613,389.39892,179.15806Q416.78495,250,388.67097,319.27849Z"
                        ></animate>
                      </path>
                      <text
                        // className="animated-text"
                        x="50%"
                        y="50%"
                        text-anchor="middle"
                        dominant-baseline="middle"
                        fill="orange"
                        font-size="50"
                      >
                        <animateMotion dur="5s" repeatCount="indefinite">
                          <mpath href="#blobSvg"></mpath>
                        </animateMotion>
                        Projects
                      </text>
                    </svg>
                  </div>
                </div>
                <Projects />
              </motion.div>
              <div className="blob__card-div-skills">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 500"
                  width="30%"
                  // width={400}
                  // height={350}
                  id="blobSvg"
                  filter="blur(0px)"
                  style={{ opacity: 1 }}
                  transform="rotate(0)"
                  className="blobb-title"
                >
                  {" "}
                  <defs>
                    {" "}
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      {" "}
                      <stop
                        offset="0%"
                        style={{ stopColor: "rgb(0, 0, 0)" }}
                      ></stop>{" "}
                      <stop
                        offset="100%"
                        style={{ stopColor: "rgb(0, 0, 0)" }}
                      ></stop>{" "}
                    </linearGradient>{" "}
                  </defs>{" "}
                  <path id="blobSvg" fill="white" style={{ opacity: 1 }}>
                    <animate
                      attributeName="d"
                      dur="5s"
                      repeatCount="indefinite"
                      values="M388.67097,319.27849Q360.55699,388.55699,291.23441,379.72688Q221.91183,370.89678,145.00645,354.28387Q68.10108,337.67097,71.32903,251.33548Q74.55699,165,142.39247,119.95591Q210.22796,74.91183,286.12043,91.61398Q362.0129,108.31613,389.39892,179.15806Q416.78495,250,388.67097,319.27849Z;M420.7122,331.4339Q380.09423,412.86779,301.16508,392.29219Q222.23594,371.7166,157.11322,349.24982Q91.99051,326.78305,53.64135,232.38203Q15.29219,137.98101,118.09898,129.47187Q220.90577,120.96273,294.67458,111.25967Q368.44339,101.55661,414.88678,175.77831Q461.33017,250,420.7122,331.4339Z;M390.7302,319.10952Q360.37524,388.21905,284.62068,409.39959Q208.86612,430.58014,161.11156,373.20082Q113.35701,315.8215,88.46857,238.04463Q63.58014,160.26776,136.76776,117.04463Q209.95537,73.8215,303.79007,69.52027Q397.62476,65.21905,409.35497,157.60952Q421.08517,250,390.7302,319.10952Z;M400,314Q352,378,277,420Q202,462,143,396Q84,330,66.5,241.5Q49,153,125.5,97.5Q202,42,298.5,55Q395,68,421.5,159Q448,250,400,314Z;M429.79847,339.54154Q392.67727,429.08308,294.97368,455.00137Q197.27008,480.91966,143.94598,403.56786Q90.62188,326.21607,83.52769,246.22992Q76.43351,166.24376,136.8518,92.77008Q197.27008,19.29641,287.1482,55Q377.02632,90.70359,421.97299,170.3518Q466.91966,250,429.79847,339.54154Z;M411.71818,339.87391Q393.61186,429.74783,302.23794,426.16285Q210.86403,422.57787,122.32727,388.31581Q33.79051,354.05375,61.55534,263.35692Q89.32016,172.66008,145.95613,107.46324Q202.59209,42.2664,289.95613,66.5581Q377.32016,90.8498,403.57233,170.4249Q429.82451,250,411.71818,339.87391Z;M436.87032,349.05548Q408.4258,448.11097,306.06935,451.62968Q203.7129,455.14839,157.4258,385.87516Q111.13871,316.60194,93.22677,241.12968Q75.31484,165.65742,135.48613,87.80097Q195.65742,9.94452,281.80097,56.34258Q367.94452,102.74064,416.62968,176.37032Q465.31484,250,436.87032,349.05548Z;M392.2525,331.53996Q379.05994,413.07992,285.7525,456.15485Q192.44505,499.22978,100.80019,432.44731Q9.15533,365.66484,30.81018,260.57493Q52.46503,155.48501,121.45005,74.10764Q190.43506,-7.26974,268.13261,60.97003Q345.83016,129.2098,375.63761,189.6049Q405.44505,250,392.2525,331.53996Z;M388.67097,319.27849Q360.55699,388.55699,291.23441,379.72688Q221.91183,370.89678,145.00645,354.28387Q68.10108,337.67097,71.32903,251.33548Q74.55699,165,142.39247,119.95591Q210.22796,74.91183,286.12043,91.61398Q362.0129,108.31613,389.39892,179.15806Q416.78495,250,388.67097,319.27849Z"
                    ></animate>
                  </path>
                  <text
                    // className="animated-text"
                    x="50%"
                    y="50%"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    fill="orange"
                    font-size="50"
                  >
                    <animateMotion dur="5s" repeatCount="indefinite">
                      <mpath href="#blobSvg"></mpath>
                    </animateMotion>
                    Skills
                  </text>
                </svg>
              </div>
              <div className="headers_skills-div">
                <h2 className="h2_skills">Frontend</h2>
                <h2 className="h2_skills">Backend</h2>
                <h2 className="h2_skills">Others</h2>
              </div>
              <div className="skills_div-content">
                <div className="containers_div">
                  <div className="frontend_div">
                    <ul>
                      <li>
                        <div className="react-icons-div">
                          <AiFillHtml5 />
                          <span className="color-skills"> HTML</span>
                        </div>
                      </li>
                      <li>
                        <div className="react-icons-div">
                          <BsFiletypeCss />{" "}
                          <span className="color-skills"> CSS</span>
                        </div>
                      </li>
                      <li>
                        <div className="react-icons-div">
                          <DiJavascript1 />
                          <span className="color-skills"> JavaScript</span>
                        </div>
                      </li>
                      <li>
                        <div className="react-icons-div">
                          <BiLogoReact />
                          <span className="color-skills"> React</span>
                        </div>
                      </li>
                      <li>
                        <div className="react-icons-div">
                          <BiLogoRedux />
                          <span className="color-skills">Redux </span>
                        </div>
                      </li>
                      <li>
                        <div className="react-icons-div">
                          <BsFillBootstrapFill />{" "}
                          <span className="color-skills"> Bootstrap</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="backend_div">
                    <ul className="ul_skills-width">
                      <li>
                        <div className="react-icons-div">
                          <BiLogoNodejs />
                          <span className="color-skills">NodeJS</span>
                        </div>
                      </li>
                      <li>
                        <div className="react-icons-div">
                          <img
                            src={express}
                            alt="yellow"
                            className="react-icons-div img-agile"
                          />
                          <span className="color-skills">Expressjs</span>
                        </div>
                      </li>
                      <li>
                        <div className="react-icons-div">
                          <BiLogoMongodb />
                          <span className="color-skills"> MongoDB</span>
                        </div>
                      </li>
                      <li>
                        <div className="react-icons-div">
                          <SiMongoose />
                          <span className="color-skills"> Mongoose</span>
                        </div>
                      </li>
                      <li>
                        <div className="react-icons-div">
                          <BsFiletypePhp />
                          <span className="color-skills"> PHP</span>
                        </div>
                      </li>
                      <li>
                        <div className="react-icons-div">
                          <FaLaravel />
                          <span className="color-skills"> Laravel</span>
                        </div>
                      </li>
                      <li>
                        <div className="react-icons-div">
                          <SiMysql />
                          <span className="color-skills">MySQL</span>
                        </div>
                      </li>
                      <li>
                        <div className="react-icons-div">
                          <AiFillApi />{" "}
                          <span className="color-skills"> Restful APIs</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="others_div">
                    <ul>
                      <li>
                        <div className="react-icons-div">
                          <BsGit /> <span className="color-skills">Git</span>
                        </div>
                      </li>
                      <li>
                        <div className="react-icons-div">
                          <BsGithub />
                          <span className="color-skills">Github</span>
                        </div>
                      </li>
                      <li>
                        <div className="react-icons-div">
                          <TbBrandVscode />
                          <span className="color-skills"> VS Code</span>
                        </div>
                      </li>
                      <li>
                        <div className="react-icons-div">
                          <BsTrello />
                          <span className="color-skills"> Trello</span>
                        </div>
                      </li>
                      <li>
                        <div className="react-icons-div">
                          <CgFigma />{" "}
                          <span className="color-skills">Figma</span>
                        </div>
                      </li>
                      <li>
                        <div className="react-icons-div">
                          <SiMiro />{" "}
                          <span className="color-skills"> Miro.com</span>
                        </div>
                      </li>
                      <li>
                        <div className="react-icons-div">
                          <img src={agile} alt="" className="img-agile" />{" "}
                          <span className="color-skills"> Agile Methodology</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer_open-div">
                <img src={footer} alt="" />
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Card;
