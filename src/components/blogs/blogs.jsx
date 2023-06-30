import React from 'react'
import "./style.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import data from "../../data/blogs";

function blogs() {

    const blogItem = data.map((blogItem)=>{
        return (
            <div className="col col-lg-4 col-md-6 col-12" key={blogItem.id}>
            <div className="blog-item">
                <div className="blog-item-img">
                    <img src={blogItem.img} alt="blog" />
                </div>
                <span>
                    <i><CalendarMonthIcon/></i> {blogItem.date}
                </span>
                <p>{blogItem.title}</p>
            </div>
        </div>
        )
    })
return (
    <section id='blogs' className='f-wth pd-y'>
        <div className="container">
        <div className="section-header">
            <h2>blogs</h2>
        </div>
          {/* ./section-header */}
            <div className="blogs-content mg-t">
                <div className="row align-items-center justify-content-around">
                    {blogItem}
                </div>
            </div>
            {/* ./blogs-content */}
        </div>
    </section>
  )
}

export default blogs