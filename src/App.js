import React, { useState } from "react";
import Slide from "./components/Slide/Slide";
import LandRecordsTable from "./LandRecordsTable/LandRecordsTable";
import "./App.css";
import photo11 from "./photo11.jpg";
import OnlineServices from "./OnlineServices.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup,faIdCard,faUserPlus,faCogs} from '@fortawesome/free-solid-svg-icons';

function App() {
   const componentMap = {
    A: <Slide src={photo11}/>,
    B: <LandRecordsTable />,
  };
  const [activeComponent, setActiveComponent] = useState('A');


  return (
    <>
      <div className="nav">
        <img src={OnlineServices} alt="Logo" className="header-logo" />
      </div>

      <div className="content">
       {componentMap[activeComponent]}
        <div className="features">
          <div className="styled-card" onClick={() => setActiveComponent('B')} 
  style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faLayerGroup} style={{ color: 'red', fontSize: '3vw'}}/>
            <span className="icon-text">Land Record Services</span>
          </div>

          <div className="styled-card">
            <FontAwesomeIcon icon={faIdCard} style={{ color: 'lightgreen', fontSize: '3vw'}} />
            <span className="icon-text">Certificate Services</span>
          </div>

          <div className="styled-card">
            <FontAwesomeIcon icon={faUserPlus} style={{ color: 'lightblue', fontSize: '3vw'}}/>
            <span className="icon-text">Registration Services</span>
          </div>

          <div className="styled-card" onClick={() => window.location.href = 'https://edistrict.odisha.gov.in/'}
  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FontAwesomeIcon icon={faCogs} style={{ color: 'lightpink', fontSize: '3vw'}}/>

            <span className="icon-text">Other Services</span>
          </div>
        </div>
      </div>

      <div className="footer">Designed by @National Informatics Centre</div>
    </>
  );
}

export default App;
