import './index.css';
import kidholdingbook from  "../images/boychild.jpg";
import logo from "../images/logo.png";


const Homepage = () => {
    return(
        <div className="landing-page">
            <div className="navbar">
                <img src={logo} alt="logo" className='image'/>
                
                <a href='home'>Home</a>
                <a href='about'>About Us</a>
                <a href='courses'>Courses</a>
                <a href='team'>Team Members</a>
                <a href='contacts'>Contacts</a>
                
                </div>
                <div className="landing-page-body">
                
                <div className='landing-page-text'>
                    <h1>EDUCATE ME, YOU EDUCATE A NATION!!!!</h1>
                    <h2>Learn Advanced Online Courses</h2>
                    <h2>To Boost Your Confidence</h2>
                    <h3>
                        Take the first step to a bright future
                    </h3>


                    <button className="Button">Get Started</button>
                    </div>
                    <div className="landing-page-image">
                    <img src={kidholdingbook} alt="books" className='images'/>

                </div>
                </div>

               


        </div>
    )
};

export default Homepage;