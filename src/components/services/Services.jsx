import React from 'react'
import "./style.css"
//data
import data from "../../data/services"
//services wrapper
import ServicesWrapper from '../services wrapper/ServicesWrapper'

function Services() {
    const serviceItem = data.map((serviceItem)=>{
        return (
            <div className="col col-lg-4 col-md-6 col-12 " key={serviceItem.id}>
            <div className="service-item">
                <i>{serviceItem.icon}</i>
                <h4>{serviceItem.title}</h4>
                <p>{serviceItem.desc}</p>
                <button className='btn primary-btn'>read more</button>
            </div>
        </div>
        )
    })
return (
    <>
        <section id='services' className='f-wth pd-y'>
            <div className="container">
                <div className="section-header">
                    <h2>services</h2>
                </div>
                {/* ./section-header */}
                <div className="services-content mg-t">
                    <div className="row justify-content-around align-items-center flex-wrap">
                        {serviceItem}
                        {/* ./service-item */}
                    </div>
                </div>
                {/* ./services-content */}
            </div>
        </section>
<ServicesWrapper />
</>
  )
}

export default Services