import React from 'react';
import "./Footer.css"
import  logo from "../../../images/icon.png"
const Footer = () => {
    return (
        <div className="bg-color">
            <h3>join the Adventure newsletter to receive our best vacation deals</h3>
            <h5>You can unsubscribe at any time</h5>
            <input type="email" placeholder="YOUR EMAIL" /> 
            <button className="btn-subscribe">Subscribe</button>
            <div className="main-style ">
                <div>
                    <h2>About us</h2>
                    <li>How it works</li>
                    <li>Testimonials</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Terms of Service</li>
                </div>
                <div>
                    <h2>Videos</h2>
                    <li>Submit Video</li>
                    <li>Ambassadors</li>
                    <li>Agency</li>
                    <li>Influencer</li>
                </div>
                <div>
                    <h2>Contact Us</h2>
                    <li>Contact</li>
                    <li>Support</li>
                    <li>Destinations</li>
                    <li>Sponsorships</li>
                </div>
                <div>
                    <h2>Social Media</h2>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Youtube</li>
                    <li>Twitter</li>
                </div>
            </div>
            <div className="icon-style">
                <img width="50px" src={logo} alt="" />
                <h2 className="ps-3">Ⓒ <samp>2020</samp></h2>
            </div>
        </div>
    );
};

export default Footer;