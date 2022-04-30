import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
    return (
        <div className=" my-" style={{ backgroundColor: "#262626" }}>

            <footer className="text-center text-lg-start  mt-xl-5 pt-4">
                <div className="container p-4 ">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-uppercase mb-4">Recent Posts</h5>

                            <ul className="list-unstyled mb-4">
                                <li>
                                    <Link to="/" className="text-white ">TOP 5 BENEFITS OF STUDYING HARD THAT YOU MUST KNOW</Link>
                                </li><br />
                                <li>
                                    <Link to="/" className="text-white ">COUNSELING: 8 IMPORTANT QUESTIONS YOU MAY HAVE</Link>
                                </li>

                            </ul>
                        </div>

                        <div className="col-lg-6 col-md-6 mb-4 mb-lg-0 d-flex  justify-content-center">

                            <ul className="list-unstyled ">
                                <h5 className="text-uppercase mb-4">Categories</h5>
                                <li>
                                    <Link to="/" className="text-white ">CAUSES AND SYMPTOMS</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-white ">CONDITIONS</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-white ">CREATIVE</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-white ">DEPRESSION</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-white ">EMPLOYEE ENGAGEMENT</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-white ">HAPPY LIVING</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-white ">INFOGRAPHICS</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-white ">KNOWLEDGE BANK</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-white ">MOTIVATION</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-white ">QUICK TIPS</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-white ">TREATMENT</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-white ">TYPES</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-uppercase mb-4 " style={{color:"white"}}>Join the Family !</h5>

                            <div className="form-outline form-white mb-4">
                                <input type="email" id="form5Example2" className="form-control bg-dark text-white" placeholder='Enter Your Email' required/>
                                <label className="form-label" htmlFor="form5Example2"></label>
                            </div>

                            <button type="submit" className="btn btn-danger  btn-block">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="text-center p-3 border-top border-white" >
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-xs-12 mb-4 mb-lg-0 ml-xs-3 offset-lg-1">
                        <ul className="list-unstyled d-flex justify-content-between" >
                            <li>
                                <Link to="/" className="text-white ">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-white ">FAQS</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-white ">About US</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-white ">Contact US</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-white ">Our Team</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-white ">Know More</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-12 mb-4 mb-xs-0 ml-auto"style={{color:"white"}} >
                        <Link className="text-white " to="https://goodlives.in/">Good Lives </Link>
                        &nbsp;&nbsp;| © Copyright 2020
                    </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
