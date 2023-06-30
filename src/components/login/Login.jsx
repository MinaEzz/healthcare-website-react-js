import React from 'react'
import "./style.css"
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <section id='login' className='f-wth pd-y'>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col col-lg-7 col-md-9 col-12">
                <div className="form-container">
                    <div className="logo">
                        <img src="Assets/images/logo.png" alt="logo" draggable={false} />
                    </div>
                    <Form action='/home'>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="username" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="remember me" />
                        </Form.Group>
                        <Button type="submit" className='primary-btn'>login</Button>
                    </Form>
                    <div className="or">
                        <p className='mb-3'>don't have accout ?</p>
                        <Link to="/regist">
                        <button type="button" className='btn orange-btn'>register</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Login