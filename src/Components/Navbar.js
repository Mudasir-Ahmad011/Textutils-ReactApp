import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
            
        </ul>
        <div className="d-flex">
            <button className="bg-primary rounded mx-2" onClick={()=>{props.toggle("primary")}} style={{height:"30px",width:"30px",cursor:'pointer'}}></button>
            <button className="bg-danger rounded mx-2"  onClick={()=>{props.toggle("danger")}} style={{height:"30px",width:"30px",cursor:'pointer'}}></button>
            <button className="bg-success rounded mx-2" onClick={()=>{props.toggle("success")}} style={{height:"30px",width:"30px",cursor:'pointer'}}></button>
            <button className="bg-warning rounded mx-2" onClick={()=>{props.toggle("warning")}} style={{height:"30px",width:"30px",cursor:'pointer'}}></button>
        </div>
        <div className="form-check form-switch">
            <input className="form-check-input" onClick={()=>{props.toggle(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.mode==="dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
        </div>

        </div>
    </div>
    </nav>
    </div>
  )
}

Navbar.propTypes={
   title:PropTypes.string.isRequired,
   aboutText:PropTypes.string.isRequired

};
Navbar.defaultProps={
    title:"Set Title here",
    aboutText:"About"
};