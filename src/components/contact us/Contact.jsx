import React from 'react'
import "./style.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Form, Button } from 'react-bootstrap';


function Contact() {
return (
    <section id='contact' className='f-wth pd-y'>
        <div className="container">
            <div className="section-header">
                <h2>contact us</h2>
            </div>
            {/* ./section-header */}
            <div className="contact-content mg-t">
                <div className="row align-items-center justify-content-between">
                    <div className="col col-lg-6 col-12">
                        <div className="form-container">
                        <Form action='/contact'>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="e-mail" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="number" placeholder="phone number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <textarea  placeholder='type message' />
                            </Form.Group>
                            <Button type="submit" className='orange-btn'>submit</Button>
                        </Form>
                        </div>
                    </div>
                    {/* ./form */}
                    <div className="col col-lg-5 col-12">
                        <div className="contact-banner">
                            <div className="contact-info">
                                <h4>contact us for any information</h4>
                                <div className="info-item">
                                    <h6 className='d-flex align-items-center'>
                                    <LocationOnIcon />
                                    location
                                    </h6>
                                    <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                                </div>
                                {/* ./info-item */}
                                <div className="info-item">
                                    <h6 className='d-flex align-items-center'>
                                    <ContactMailIcon />
                                    e-mail & phone
                                    </h6>
                                    <p>info@yourdomain.com</p>
                                    <p>(+68) 120034509</p>
                                </div>
                                {/* ./info-item */}
                                <div className="info-item">
                                    <h6 className='d-flex align-items-center'>
                                    <LanguageIcon />
                                    follow us
                                    </h6>
                                    <div className="links d-flex align-items-center">
                                        <Link to="https//www.twitter.com" target='_blank'>
                                            <TwitterIcon />
                                        </Link>
                                        <Link to="https//www.linkedin.com" target='_blank'>
                                            <LinkedInIcon />
                                        </Link>
                                        <Link to="https//www.instagram.com" target='_blank'>
                                            <InstagramIcon />
                                        </Link>
                                    </div>
                                </div>
                                {/* ./info-item */}
                            </div>
                            {/* ./contact-info */}
                        </div>
                    </div>
                    {/* ./contact-banner */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact