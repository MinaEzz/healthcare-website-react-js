import React from 'react'
import "./style.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// data
import data from "../../data/blogsWrapper.json"
import { Link } from 'react-router-dom';

function BlogsWrapper() {
    const blogWrapperItem = data.map((blogWrapperItem)=>{
        return(
            <div className="col col-lg-4 col-md-6 col-12" key={blogWrapperItem.id}>
            <div className="blog-item">
                <div className="blog-item-img">
                    <img src={blogWrapperItem.img} alt="blog" />
                </div>
                <span>
                    <i><CalendarMonthIcon/></i> {blogWrapperItem.date}
                </span>
                <p>{blogWrapperItem.title}</p>
            </div>
        </div>
        )
    })
return (
    <section id='blogs-wrapper' className='f-wth pd-y-s'>
        <div className="container">
            <div className="head text-center">
                <h4>latest news</h4>
                <h5>our latest news</h5>
            </div>
            {/* ./head */}
            <div className="blogs-wrapper-content mg-t">
                <div className="row align-items-center justify-content-around">
                    {blogWrapperItem}
                </div>
                <div className='text-center mt-3'>
                <Link to="/blogs">
                <button className='btn primary-btn'>view all</button>
                </Link>
                </div>
            </div>
            {/* ./blogs-wrapper-content */}
        </div>
    </section>
  )
}

export default BlogsWrapper