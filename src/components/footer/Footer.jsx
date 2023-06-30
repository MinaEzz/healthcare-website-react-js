import React from 'react'
import"./style.css"
import { Link } from 'react-router-dom'
import PhoneIcon from '@mui/icons-material/Phone';


function Footer() {
  return (
    <footer className='f-wth pd-y-s'>
        <div className="container">
            <div className="footer-content">
                <div className="row align-items-start">
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className='left-col'>
                        <Link to="/" className='logo'>
                            <img src="Assets/images/logo.png" alt="logo" />
                        </Link>
                        <p className='left-col-text'>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                        <div className='footer-contact d-flex align-items-center justify-content-start'>
                            <i>
                            <PhoneIcon />
                            </i>
                            <div className='footer-contact-details'>
                                <h6>contact us</h6>
                                <Link to="tel:+01 123 456 7890">+01 123 456 7890</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* ./left-col */}
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className='quick-links'>
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <Link to="/about"> about us </Link>
                            </li>
                            <li>
                                <Link to="/services"> services </Link>
                            </li>                            <li>
                                <Link to="#"> booking </Link>
                            </li>                            <li>
                                <Link to="/blogs"> blogs </Link>
                            </li>
                            <li>
                                <Link to="/team"> our team </Link>
                            </li>
                            <li>
                                <Link to="#"> faq's </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    {/* ./quick-links */}
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className='our-services'>
                        <h4>Our Service</h4>
                        <ul>
                            <li>
                                <Link to="#"> dental care </Link>
                            </li>
                            <li>
                                <Link to="#"> cardiac clinic </Link>
                            </li>                            <li>
                                <Link to="#"> massage therapy </Link>
                            </li>                            <li>
                                <Link to="#"> cardiology </Link>
                            </li>
                            <li>
                                <Link to="#"> precise diagnosis </Link>
                            </li>
                            <li>
                                <Link to="#"> abmbulance services </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    {/* ./our-services */}
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="subscribe">
                        <h4>Subcribe</h4>
                        <form action="" method="post" className='subscribe-form'>
                            <input type="email" placeholder='Email Address' />
                            <button type="submit" className='orange-btn'>subscribe now</button>
                        </form>
                        <div className="social-links d-flex align-items-center">
                            <Link to="#">
                                <img src="Assets/images/footer/facebook.png" alt="" />
                            </Link>
                            <Link to="#">
                                <img src="Assets/images/footer/twitter.png" alt="" />
                            </Link>                            
                            <Link to="#">
                                <img src="Assets/images/footer/instagram.png" alt="" />
                            </Link>                            
                            <Link to="#">
                                <img src="Assets/images/footer/linkedin.png" alt="" />
                            </Link>
                        </div>
                        </div>
                    </div>
                    {/* ./subscribe */}
                    
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer