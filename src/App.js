import React from "react";
import "./App.css";
import photo11 from "./photo11.jpg";
import OnlineServices from "./OnlineServices.png";


function App() {
  return (
    // <div className="app-container">
    //   <header className="header">
    //     <img src={OnlineServices} alt="Logo" className="header-logo" />
    //     {/* <span className="header-title">Fixed Header</span> */}
    //   </header>

    //   <main className="main-content">
    //     <div className="content-wrapper">
    //       <img src={photo11} alt="Slide" className="plain-slide-image fall-animation image-fade-in" />

    //       <div className="icon-text-container">
    //         <div className="icon-text-box">
    //           <FontAwesomeIcon icon={faLayerGroup}  style={{ 
    //     color: 'red', 
    //     fontSize: '2em', 
    //     marginRight: '10px' 
    //   }} />
    //           <span className="icon-text">Land Records Services</span>
    //         </div>
    //         <div className="icon-text-box">
    //           <img src="/images/icon2.png" alt="Icon 2" className="icon-image" />
    //           <span className="icon-text">Second Item</span>
    //         </div>
    //         <div className="icon-text-box">
    //           <img src="/images/icon3.png" alt="Icon 3" className="icon-image" />
    //           <span className="icon-text">Third Item</span>
    //         </div>
    //         <div className="icon-text-box">
    //           <img src="/images/icon4.png" alt="Icon 4" className="icon-image" />
    //           <span className="icon-text">Fourth Item</span>
    //         </div>
    //       </div>
    //     </div>
    //   </main>

    //   <footer className="footer">Designed by @National Informatics Center</footer>
    // </div>
    <>
    <div className="nav">
      <img src={OnlineServices} alt="Logo" className="header-logo" />
    </div>
    <div className="content">
      <div className="slide-image">
        <img src={photo11} alt="Logo" className="slide-image1" />
      </div>
      {/* <div className="features">Hi</div> */}
    </div>
    <div className="footer">Designed by @National Informatics Centre</div>
    </>
  );
}

export default App;
