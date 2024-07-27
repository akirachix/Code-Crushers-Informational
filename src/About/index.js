import './index.css';
import { IoShieldCheckmarkSharp } from "react-icons/io5";


const About = () =>{
    return(
        <div className="about-section">
            <div className="about-text">
                <p>At Xomi App we believe in empowering learners of all ages with<br/>
                the tools and resource they need to excell academically,<br/>
                and personally. Our platform is designed to bridge the, <br/>
                gap between traditional learning environments suite of educational<br/>
                resources tailored to fit the needs of today's learners.
                </p>
            </div>
            <div className='book-icon'>
                <div className='book-image'>
                    <img src='Images/books.avif'  alt='books' className='image'/>
                </div>
                <div className='shield-icons'>
                    <div className='icon-text'>
                    <span className='icon'><IoShieldCheckmarkSharp /></span>
                    <span className='text'>Simplified and qualified books</span>
                    </div>
                    <div className='icon-text2'>
                    <span className='icon'><IoShieldCheckmarkSharp /></span>
                    <span className='text'>Quizzes and revision papers</span> 
                    </div>
                    <div className='icon-text3'>
                    <span className='icon'><IoShieldCheckmarkSharp /></span>
                    <span className='text'>Ranking feature</span> 
                    </div>
                    <div className='icon-text4'>
                    <span className='icon'><IoShieldCheckmarkSharp /></span>
                    <span className='text'>Recommended books by teachers</span> 
                    </div>

                </div>

            </div>
        </div>
    )
};

export default About;