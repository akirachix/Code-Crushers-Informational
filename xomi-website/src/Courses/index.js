import './index.css';
import cre from "../images/cre.jpg";
import english from "../images/englishh.jpg";
import maths from "../images/mathematics.jpg";
import socialstudies from "../images/social studies.jpeg";
import science from "../images/science two.jpeg";
import kiswahili from "../images/kiswahili.gif";


const Courses = () => {
    return (
        <div className="courses-container">
            <div className="courses-list-wrapper">
                <ul className="courses-list">
                    <li id="english">
                        <img src={english} alt="english" className="image" />
                        <h2 className="englishh">English</h2>
                    </li>
                    <li id="kiswahili">
                        <img src={kiswahili} alt="kiswahili" className="image" />
                        <h2 className="kiswahilii">Kiswahili</h2>
                    </li>
                    <li id="science">
                        <img src={science} alt="science" className="image" />
                        <h2 className="sciencee">Science</h2>
                    </li>
                    <li id="maths">
                        <img src={maths} alt="maths" className="image" />
                        <h2 className="mathss">Maths</h2>
                    </li>
                    <li id="social">
                        <img src={socialstudies} alt="social studies" className="image" />
                        <h2 className="socials">Social Studies</h2>
                    </li>
                    <li id="cre">
                        <img src={cre} alt="cre" className="image" />
                        <h2 className="cree">C.R.E</h2>
                    </li>
                </ul>
            </div>
        </div>
    );
};



export default Courses;
