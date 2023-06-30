import React from 'react'
import "./style.css"
//data
import data from "../../data/plus"
// components
import ServicesWrapper from '../services wrapper/ServicesWrapper'
import BlogsWrapper from '../blogs wrapper/BlogsWrapper'
import DoctorWrapper from '../doctor wrapper/DoctorWrapper'


function About() {
  const plusItem = data.map((plusItem)=>{
    return (
      <div className="plus-item" key={plusItem.id}>
      <i>{plusItem.icon}</i>
      <span>{plusItem.desc}</span>
    </div>
    )
  })
  return (
    <>
      <section id='about' className='pd-y f-wth'>
        <div className="container">
          <div className="section-header">
            <h2>about us</h2>
          </div>
          {/* ./section-header */}
          <div className="about-content mg-t">
            <div className="row d-flex align-items-center justify-content-start">
              <div className="col col-lg-7 col-12">
                <div className="about-imgs">
                  <div className="upper d-flex align-items-end ">
                    <div className="about-img">
                      <img src="Assets/images/about us/abt1.jpg" alt="" />
                    </div>
                    {/* ./about-img */}
                    <div className="about-img">
                      <img src="Assets/images/about us/abt2.jpg" alt="" />
                    </div>
                    {/* ./about-img */}
                  </div>
                  {/* ./upper */}
                  <div className="lower d-flex align-items-start mt-2">
                  <div className="about-img">
                      <img src="Assets/images/about us/abt3.jpg" alt="" />
                    </div>
                    <div className="about-img">
                      <p>20</p>
                      <span>year experience</span>
                    </div>
                  </div>
                  {/* ./lower */}
                </div>
              </div>
              {/* ./about-imgs */}
              <div className="col col-lg-5 col-12">
                <div className="about-desc">
                  <div className="head">
                    <h4>about us</h4>
                    <h5>the great place of medical hospital center</h5>
                  </div>
                  {/* ./head */}
                  <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
                  <div className="plus">
                    {plusItem}
                  </div>
                  {/* ./plus */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<ServicesWrapper />
<DoctorWrapper />
<BlogsWrapper />
</>
  )
}

export default About