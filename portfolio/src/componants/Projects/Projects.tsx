import "./Projects.css";
import Aplogo from "../../assets/angelsimg.png";
import angelsgif from "../../assets/angelsprotectorsgif.gif";

const Projects = () => {
  return (
    <div className="w2-cards">
      <div className="projects__div">
        <div className="card-angels">
          <div className="angels__projects-div">
             <h2 className="h2__projects">Angels Protectors</h2>
            <img
              className="img__projects"
              src={Aplogo}
              alt="AngelsProtectors"
            />
            <label className="label__projects">
              Description
              <p className="p__projects">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                inventore doloribus consequuntur a impedit ducimus odio magnam
                iste, tempore excepturi dolorem modi cupiditate quaerat
                assumenda explicabo perferendis quod quas commodi.
              </p>  
            </label> 
          </div>
          <div className="back__card">
            <img className="img__back-card" src={angelsgif} />
          </div>
        </div>
     </div>
     <div className="projects__div">

     <div className="card-angels">
          <div className="angels__projects-div">
             <h2 className="h2__projects">Angels Protectors</h2>
            <img
              className="img__projects"
              src={Aplogo}
              alt="AngelsProtectors"
            />
            <label className="label__projects">
              Description
              <p className="p__projects">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                inventore doloribus consequuntur a impedit ducimus odio magnam
                iste, tempore excepturi dolorem modi cupiditate quaerat
                assumenda explicabo perferendis quod quas commodi.
              </p>
            </label> 
          </div>
          <div className="back__card">
            <img className="img__back-card" src={angelsgif} />
          </div>
        </div>
        </div>
        <div className="projects__div">

<div className="card-angels">
     <div className="angels__projects-div">
        <h2 className="h2__projects">Angels Protectors</h2>
       <img
         className="img__projects"
         src={Aplogo}
         alt="AngelsProtectors"
       />
       <label className="label__projects">
         Description
         <p className="p__projects">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
           inventore doloribus consequuntur a impedit ducimus odio magnam
           iste, tempore excepturi dolorem modi cupiditate quaerat
           assumenda explicabo perferendis quod quas commodi.
         </p>
       </label> 
     </div>
     <div className="back__card">
       <img className="img__back-card" src={angelsgif} />
     </div>
   </div>
   </div>
     </div>
  );
};

export default Projects;
