import React from 'react'
import './home.css'
import image1 from '../../images/GoodLives-how-it-works.png'
import image2 from '../../images/happy-iphone.gif'
import image3 from '../../images/Untitled_design__16_-removebg-preview-2.png'
import image4 from '../../images/1-1.png'
import image5 from '../../images/20210802_133850_0000.png'
import image6 from '../../images/talking.png'
import image7 from '../../images/alone.jpeg'
import image8 from '../../images/istockphoto-1145914853-612x612-removebg-preview-1-300x269.png'
function Home() {
    return (
        <div className="container home">
            <div className="row container1">
                <div className="col-md-7 text">
                    <div className="col-md-7  mt-4 ">
                        <p className='lg-12'>How Do We Help You Lead A Good Life?</p>
                    </div>
                    <div className="btn btn-primary btn-lg">Create Your Free Account</div>
                </div>
                <div className="col-md-3 ">
                    <img src={image1} alt="imglogo" className='img1' />
                </div>
            </div>
            <p className='tools'>Tools To Help Your Self, Understand Your Moods And Manage Emotions Better</p>
            <div className="container2" >
                <div className="row justify-content-start">
                    <div className="" >
                        <center>
                            <div className="imageContainer">
                                <img src={image2} alt="img2" height="550px" />
                            </div>
                        </center>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <center>

                            <button type="button" className="btn btn-success btn-lg mt-4 ">Change Your Mood Now !</button>
                        </center>
                    </div>
                </div>

                <div className=" feels col-md-7" >
                    <div className="row justify-content-start mt-5">
                        <div className="position-relative Anxious col-md-7 col-10">
                            <div className="image" style={{ marginTop: "-70px" }}>
                                <img src={image3} alt="Yoga Img" height="80vw" />
                            </div>
                            <div className="position-relative">
                                <h3>Feeling Anxious?</h3>
                                <p>Practise our guided meditation exercises to calm your mind</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-end mt-5">
                        <div className="position-relative Anxious col-md-7 col-10">
                            <div className="image" style={{ marginTop: "-70px" }}>
                                <img src={image4} alt="Imgg" height="80vw" />
                            </div>
                            <div className="position-relative">
                                <h3>Not sure what to do?</h3>
                                <p>Take assessments to find out your Mental Health status</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-start mt-5">
                        <div className="position-relative Anxious col-md-7 col-10">
                            <div className="image" >
                                <img src={image5} alt="Imgg" height="80vw" />
                            </div>
                            <div className="position-relative">
                                <h3>Not sure which therapist?</h3>
                                <p>Don't worry, we will match you to the Right Therapist</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container3">
                <center>
                    <p className='mt-4' style={{ fontSize: "5vw" }}>How GoodLives Work</p>
                </center>
                <div className='row'>
                    <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src={image6} alt="Card image cap" />
                            <div className="card-body">
                                <h3 className="card-title">Get Personalized Recommendations</h3>
                                <p className="card-text">Get Mood Generated content along with recommendations tailor-made for You</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={image7} alt="Card image cap" />
                            <div className="card-body">
                                <h3 className="card-title">Affordable</h3>
                                <p className="card-text">At GoodLives, along with affordable Therapy get much more with Free sign ups</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={image8} alt="Card image cap" />
                            <div className="card-body">
                                <h3 className="card-title">Hassle Free</h3>
                                <p className="card-text">We are there to handhold you in Your journey. Get all wellness tools to keep your Mental Health upright</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container4 mt-5">
                <center>
                    <h1>Signup Now!</h1>
                </center>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-12">
                        <p style={{ color: "white", fontSize: "3vh" }}>GoodLives is a one-stop Mental Wellness Platform. We are making Mental Health solutions accessible & affordable. It’s easy & simple, Sign Up Today!</p>
                        <center>
                        <button type="button" className="btn btn-success btn-lg mt-4 btn-block mb-4">Sign Up</button>
                        </center>
                    </div>
                    <ul className="list-group mb-5">
                        <li className="list-group-item d-flex justify-content-start align-items-center bg-dark">
                        <span className="badge badge-primary badge-pill">💨</span>&nbsp;
                        Personalized Dashboards
                        </li>
                        <li className="list-group-item d-flex justify-content-start align-items-center bg-dark">
                        <span className="badge badge-primary badge-pill">💨</span>&nbsp;
                        Regular Recommendations from Best Experts
                        </li>
                        <li className="list-group-item d-flex justify-content-start align-items-center bg-dark">
                        <span className="badge badge-primary badge-pill">💨</span>&nbsp;
                        Mood Tracker
                        </li>
                        <li className="list-group-item d-flex justify-content-start align-items-center bg-dark">
                        <span className="badge badge-primary badge-pill">💨</span>&nbsp;
                        Self-help Tools
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
