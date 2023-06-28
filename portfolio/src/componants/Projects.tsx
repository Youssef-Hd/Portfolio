import "./Projects.css";
import Aplogo from "../assets/angelsimg.png";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import angelsgif from '../assets/angelsprotectorsgif.gif'


const Projects = () => {
  const [isFlipped, setIsflipped] = useState(false)

  const handleClick = () => {
    setIsflipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
    <div className="projects__div">
    <div className="angels__projects" onClick={handleClick}>
      <h2 className="h2__projects">Angels Protectors</h2>
      <img className="img__projects" src={Aplogo} alt="AngelsProtectors" />
      <label className="label__projects">
        Description
        <p className="p__projects">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          inventore doloribus consequuntur a impedit ducimus odio magnam
          iste, tempore excepturi dolorem modi cupiditate quaerat assumenda
          explicabo perferendis quod quas commodi.
        </p>
      </label>
    </div>
    </div>
    <div className="projects__div">
    <div className="back__card" onClick={handleClick}>
      <img  className="img__back-card" src={angelsgif}/>
    </div>
    </div>
  </ReactCardFlip>
   
    
  );
};

export default Projects;
