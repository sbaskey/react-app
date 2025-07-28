import React from "react";
import "./App.css";
import photo11 from "./photo11.jpg";
import OnlineServices from "./OnlineServices.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import cicd from "./cicd.jpg"
function App() {
  return (
    <>
    <div className="nav">
      <h2>Logo</h2>
      <div class="nav-part2">
        <h4>Store</h4>
        <h4>Course</h4>
        <h4>Blog</h4>
        <h4>Contact</h4>
        <i class="ri-menu-line"></i>

      </div>
      
    </div>
    <div className="content">
      <div class="left">
        <h1>Learn from <span>National Informatics Center</span>,Boudh.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi totam molestiae placeat voluptatibus dignissimos minus ipsum nam eaque iure neque provident accusantium illo ipsam sapiente nemo, cupiditate culpa at fugiat.</p>
        <button>Explore Now</button>
      </div>
      <div className="right">
         <img src={cicd} alt="cicd" className="cicd-image" />
      </div>
    </div>
    </>
  );
}

export default App;
