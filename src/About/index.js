import React from "react";
import "./index.css";
// import martha from "/images/martha.png";
// import megan from "/images/megan.png";
// import wanja from "/images/wanja.png";
// import sharon from "/images/sharon.png";
// import nyabang from "/images/nyabang.png";

const About = () => {
  return (
    <div className="about-text">
      <h1>Team Members</h1>
      <div className="images">
        <div>
          <img src="/images/martha.png" alt="martha" className="images" />
          <div>
            <b>Martha</b>
            <br/>
            <b>Devops Engineer</b>
          </div>
        </div>
        <div>
          <img src="/images/megan.png" alt="megan" className="images" />
          {/* </div> */}
          <div>
            <b>Megan</b>
            <br/>
            <b>software Engineer</b>
          </div>
        </div>
        <div>
          <img src="/images/wanja.png" alt="wanja" className="images" />
          <div>
            <b>Wanja Kaygo</b>
            <br/>
            <b>software Engineer</b>
          </div>
        </div>
        <div>
          <img src="/images/sharon.png" alt="sharon" className="images" />
          <div>
            <b>Sharon njuge</b>
            <br/>
            <b>software Engineer</b>
          </div>
        </div>
        <div>
          <img src="/images/nyabang.png" alt="nyabang" className="images" />
          <div>
            <b>Nyabang wech</b>
            <br/>
            <b>software Engineer</b>
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default About;
