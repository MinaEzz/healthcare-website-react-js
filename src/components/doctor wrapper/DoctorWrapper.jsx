import React from 'react'
import "./style.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
// data
import data from "../../data/doctorWrapper.json"


function DoctorWrapper() {
    const doctorWrapperItem = data.map((doctorCard)=>{
        return(
            <div className="col col-lg-4 col-md-6 col-12" key={doctorCard.id}>
            <div className="doctor-card">
                <div className="doctor-img">
                    <img src={doctorCard.image} alt="doctor" />
                </div>
                <h4>{doctorCard.name}</h4>
                <span>{doctorCard.role}</span>
                <div className="links d-flex align-items-center justify-content-center">
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
        </div>
        )
    })
return (
    <section id='doctor-wrapper' className='f-wth pd-y-s'>
        <div className="container">
            <div className="head text-center">
                <h4>our doctor</h4>
                <h5>meet best doctors</h5>
            </div>
            {/* ./head */}
            <div className="doctor-wrapper-content mg-t">
                <div className="row align-items-center justify-content-around flex-wrap">
                    {doctorWrapperItem}
                    {/* ./doctor-card */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default DoctorWrapper