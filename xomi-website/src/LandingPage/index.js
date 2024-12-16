import './index.css';
import kidholdingbook from  "../images/kiddo.jpg";
const LandingPage = () => {
   return (
      <div>
        <div className="landing-page-body">
                
        <div className='landing-text'>
        <h3>EDUCATE ME,EDUCATE A NATION</h3>
        <h3>Learn Advanced Online Courses</h3>
        <h3>To Boost Your Confidence</h3>
        <h3>Take the first step to a bright future</h3>
                
                
        <button className="get-Started">Get Started</button>
        </div>
        <div>
        <img src={kidholdingbook} alt="books" className='school-boy'/>
                
         </div>
        </div>
  
        </div>
      
      
    );
  };
  export default LandingPage;