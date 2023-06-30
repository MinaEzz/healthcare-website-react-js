import React from 'react'
import "./style.css"
// data
import data from "../../data/servicesWrapper.json"

function ServicesWrapper() {
    const serviceWrapperItem = data.map((serviceWrapperItem)=>{
        return(
            <div className="col col-lg-3 col-md-6 col-12" key={serviceWrapperItem.id}>
            <div className="service-wrapper-item">
                <h4>{serviceWrapperItem.count}</h4>
                <span>{serviceWrapperItem.title}</span>
                <p>{serviceWrapperItem.desc}</p>
            </div>
        </div>
        )
    })
return (
    <section id='services-wrapper' className='pd-y-s'>
        <div className="container">
        <div className="services-wrapper-content">
            <div className="row flex-wrap align-items-center justify-content-around">
                {serviceWrapperItem}
            </div>
        </div>
        </div>
    </section>
  )
}

export default ServicesWrapper