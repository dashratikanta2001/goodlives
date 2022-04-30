import React from 'react'
import './Navbar.css'
import logo from '../../images/cropped-GOOD_LIVES-removebg-preview-removebg-preview-1.png'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} width="120" height="auto" className="d-inline-block align-top" alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center " id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link" to="/">Home</Link>
                            <Link className="nav-item nav-link" to="/">How It Works</Link>
                            <Link className="nav-item nav-link" to="/">For Corporates</Link>
                            <Link className="nav-item nav-link" to="/">Blogs</Link>
                            <Link className="nav-item nav-link" to="/">Login</Link>
                            <Link className="nav-item nav-link" to="/">Get Started</Link>

                        </div>
                    </div>
            </nav>
        </div>
    )
}

export default Navbar
