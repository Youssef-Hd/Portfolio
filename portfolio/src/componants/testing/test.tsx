import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./test.css";
import logoabout from "../../assets/logoAbout.png";
import Aplogo from "../../assets/Aplogo.png";
import angelsgif from '../../assets/angelsprotectorsgif.gif'

const test = () => {
  const [isFlipped, setIsflipped] = useState(false);

  const handleClick = () => {
    setIsflipped(!isFlipped);
  };

  return (
    <div>
    </div>
  );
};

export default test;
