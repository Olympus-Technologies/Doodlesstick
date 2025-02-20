import { Link } from "react-router-dom";
import FB from "../images/fb.png";
import Insta from "../images/insta.png";
import X from "../images/twitter.png";
import Whatsapp from "../images/whatsapp.png";
import "./Footer.css";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Our Services</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link to="/vacancies">Vacancies</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul className="footer-call-number">
                <li>
                  <a href="tel:+1604216476" className="footer-call-icon">
                    <i class="fas fa-phone"></i>
                    01604216476
                  </a>
                </li>
                <li>
                  <a href="tel:+7737493075" className="footer-call-icon">
                    07737493075
                  </a>
                </li>
                <li>
                  <a className="address-icon"
                   href="https://www.google.com/maps/search/?api=1&query=Suite+G7,
                    +Moulton+Park+Business+Centre,
                    +Redhouse+Road,
                    +Northampton,
                    +NN3+6AQ."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fas fa-map-marker-alt"></i>Suite G7,
                    Moulton Park Business Centre,
                    Redhouse Road,
                    Northampton,
                    NN3 6AQ.
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <Link to="/supported-living">Supported Living</Link>
                </li>
                <li>
                  <Link to="/domiciliary-care">Domiciliary Care</Link>
                </li>
                <li>
                  <Link to="/live-in-care">Live in Care/24hrs</Link>
                </li>
                <li>
                  <Link to="/healthcare-recruitment">
                    Healthcare Recruitment
                  </Link>
                </li>
                <li>
                  <Link to="/healthcare-business-consultation">
                    Healthcare Business Consultation
                  </Link>
                </li>
                <li>
                  <Link to="/healthcare-training">Healthcare Training</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="/">
                  <img src={FB} alt="Facebook" />
                </a>
                <a href="/">
                  <img src={Insta} alt="Instagram" />
                </a>
                <a href="/">
                  <img src={Whatsapp} alt="Whatsapp" />
                </a>
                <a href="/">
                  <img src={X} alt="X" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-lg">© 2024 by doodlesstick.com. Developed by Renasteredev/Olympus Technologies.</p>
        </div>
      </footer>
    </>
  );
}
