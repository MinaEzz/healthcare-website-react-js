import React from 'react'
import "./style.css"
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Regist() {
  return (
    <section id='regist' className='f-wth pd-y'>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col col-lg-7 col-md-9 col-12">
                    <div className="form-container">
                        <div className="logo">
                            <img src="Assets/images/logo.png" alt="logo" draggable={false} />
                        </div>
                        <Form action='/login'>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="e-mail" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="username" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="confirm password" />
                            </Form.Group>
                            <Button type="submit" className='primary-btn'>register now</Button>
                        </Form>
                        <div className="or">
                                <p className='mb-3'>already have an account ?</p>
                                <Link to="/login">
                                <button type="button" className='btn orange-btn'>login</button>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Regist