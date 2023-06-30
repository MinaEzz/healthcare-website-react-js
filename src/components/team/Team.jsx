import React from 'react'
import "./style.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
// data
import data from "../../data/team.json"
import { Link } from 'react-router-dom';


function Team() {
    const teamItem = data.map((doctor)=>{
        return (
            <div className="col col-lg-4 col-md-6 col-12" key={doctor.id}>
            <div className="doctor-card">
                <div className="doctor-img">
                    <img src={doctor.image} alt="doctor" />
                </div>
                <h4>{doctor.name}</h4>
                <span>{doctor.role}</span>
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
    <section id='team' className='f-wth pd-y'>
        <div className="container">
            <div className="section-header">
                <h2>our team</h2>
            </div>
            {/* ./section-header */}
            <div className="team-content mg-t">
                <div className="row align-items-center justify-content-around">
                    {teamItem}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team