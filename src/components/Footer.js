import React from "react"
import small_logo from "../images/LL Logo.png"

const Footer = () => {
    return(
        <footer className="">
            <section>
            <div className="company-info">
                <img src={small_logo} alt=""/>
                <p>
                <li><a href="/">Apply Now</a></li>
                </p>
                <p>
                <li><a href="/">Contact Us</a></li>
                </p>
            </div>
            <div>
                <h3>Important Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Reservations</a></li>
            </ul>
            </div>
            <div>
                <h3>Where To Find Us</h3>
            <ul>
            <li>Address: <br/> 123 Main Street, Arkansas</li>
                <li>Phone: <br/> (012)-345-6789</li>
                <li>Email: <br/> little@lemon.com</li>
            </ul>
            </div>
            <div>
                <h3>Socials</h3>
            <ul>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Twitter</a></li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;
