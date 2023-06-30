import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section id='home' className='pd-y f-wth d-flex align-items-center justify-content-center'>
        <div className="container">
          <div className="home-content">
            <div className="row align-items-center justify-content-start flex-wrap">
              <div className="col col-lg-7 col-md-6 col-12">
                <div className="home-desc">
                  <div className='d-flex justify-content-between align-items-end'>
                  <strong>we provide all healthcare solution</strong>
                  <div className='shape rotate'>
                    <img src="Assets/images/shapes/shape 2.png" alt="shape" className="shape" draggable={false} loading='lazy'/>
                  </div>
                  </div>
                  {/* ./div */}
                  <h1>protect your health and take care of your health</h1>
                  <div className='d-flex justify-content-between align-items-end'>
                    <Link to="/about"> <button className='btn orange-btn'>read more</button> </Link>
                  <div className='shape updown '>
                    <img src="Assets/images/shapes/shape 4.png" alt="shape" className="shape" draggable={false} loading='lazy'/>
                  </div>
                  </div>
                  {/* ./div */}
                </div>
              </div>
              {/* ./home-item */}
              <div className="col col-lg-5 col-md-6 col-12">
                <div className="home-img updown">
                  <img src="Assets/images/home/doctor.png" alt="doctor" draggable={false} loading='lazy'/>
                </div>
              </div>
              {/* ./home-item */}
            </div>
          </div>
        </div>
    </section>
  )
}

export default Home