import './index.css'
import books2 from "../images/books2.avif";
import {IoShieldCheckmark} from "react-icons/io5";


const App = () =>{
    return(
        <div className="about-section">
        <div className="about-xomi">
            <p>At Xomi App we believe in empowering learners of all ages with<br/>
           the tools and resources they need to excell academically,<br/>
            and personally. Our platform is designed to bridge the, <br/>
            gap between traditional learning environments and the modern,<br/>
            digital age offering a comprehensive suite of educational <br/>
            resources tailored to fit the needs of today's learners.
            </p>
        </div>
        <div className='book-icon'>
        <div className='book-image'>
            <img src={books2} alt="books2" className='image'/>
        </div>
        <div className='icon-text'>
                <div className="icon1">
                   <span className='shield-icon'><IoShieldCheckmark/></span>
                    <span className="text1">Simplified and qualified textbooks</span>
                </div>
                <div className="icon2">
                   <span className='shield-icon'><IoShieldCheckmark/></span>
                    <span className="text1">Quizzes and revision papers</span>
                    </div>  
                    <div className="icon3">
                       <span className='shield-icon'><IoShieldCheckmark/></span>
                        <span className="text1">Ranking features</span>
                        </div> 
                        <div className="icon4">
                            <span className='shield-icon'><IoShieldCheckmark/></span>
                                <span className="text1">Recommended books by teachers</span>
                                 </div> 
        {/* <div className="image1"><p><img src={tick} alt="tick" className='images'/>Simplified and qualified textbooks</p></div>
        <div className="image2"><p><img src={tick} alt="tick" className='images'/>Quizzes and revision papers</p></div>
        <div className="image3"><p><img src={tick} alt="tick" className='images'/>Ranking features</p></div> */}
        {/* <div className="image4"><p><img src={tick} alt="tick" className='images'/>Recommended books by teachers</p></div>  */} 
        </div>
        </div>
        <div/>
        </div>
        
       
    )
};

export default App;