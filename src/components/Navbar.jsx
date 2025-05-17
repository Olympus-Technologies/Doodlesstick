import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../images/logo.webp";
import "./Navbar.css";

export function Navbar() {
	useEffect(() => {
		// Handling of the cart pop-out
		//document.addEventListener("DOMContentLoaded", function () {
		//  const cartIcon = document.querySelector(".cart");
		//  const cartPopout = document.querySelector(".cart-popout");
		//  const closeBtn = document.querySelector(".close-btn");
		//
		//  cartIcon.addEventListener("click", function () {
		//    cartPopout.classList.add("active");
		//  });
		//
		//  closeBtn.addEventListener("click", function () {
		//    cartPopout.classList.remove("active");
		//  });
		//});

		// JavaScript for toggling the mobile menu
		document
			.getElementById("menuIcon")
			?.addEventListener("click", function () {
				document.getElementById("mobileMenu")?.classList.add("active");
			});

		document
			.getElementById("closeBtn")
			?.addEventListener("click", function () {
				document
					.getElementById("mobileMenu")
					?.classList.remove("active");
			});

		// our services dropdown section
		document
			.querySelector(".dropdown > a")
			.addEventListener("click", function (event) {
				if (window.innerWidth <= 768) {
					// Only trigger on mobile screens
					event.preventDefault(); // Prevent default behavior
					const dropdownContent = this.nextElementSibling;
					dropdownContent.style.display =
						dropdownContent.style.display === "block"
							? "none"
							: "block";
				}
			});

		// Close dropdown if clicking outside of it
		window.addEventListener("click", function (event) {
			if (!event.target.matches(".dropdown > a")) {
				const dropdowns =
					document.querySelectorAll(".dropdown-content");
				dropdowns.forEach(function (dropdown) {
					if (dropdown.style.display === "block") {
						dropdown.style.display = "none";
					}
				});
			}
		});
	}, []);

	return (
		<>
			<nav className="navbar">
				<div className="logo">
					<NavLink to="/">
						<img src={Logo} alt="logo" />
					</NavLink>
				</div>
				<div className="navlinks">
					<ul>
						<li id="home">
							<NavLink
								to="/"
								className={({ isActive, isPending }) =>
									isActive ? "active" : ""
								}
							>
								HOME
							</NavLink>
						</li>
						<li className="dropdown">
							<NavLink to="/services" className="dropdown-link">
								OUR SERVICES
							</NavLink>
							<div className="dropdown-content">
								<Link to="/supported-living">
									Supported Living
								</Link>
								<Link to="/domiciliary-care">
									Domiciliary Care
								</Link>
								<Link to="/children-care-services">
									Children Care Services
								</Link>
								<Link to="/live-in-care">
									Live in Care/24hrs
								</Link>
								<Link to="/healthcare-recruitment">
									Healthcare Recruitment
								</Link>
								<Link to="/healthcare-business-consultation">
									Healthcare Business Consultation
								</Link>
								<Link to="/healthcare-training">
									Healthcare Training
								</Link>
							</div>
						</li>
						<li>
							<NavLink to="/about-us">ABOUT US</NavLink>
						</li>
						<li>
							<NavLink to="/contact-us">CONTACT US</NavLink>
						</li>
						<li id="vacancies">
							<NavLink to="/vacancies">VACANCIES</NavLink>
						</li>
					</ul>
				</div>

				<div className="mobile-menu" id="mobileMenu">
					<div className="close-btn" id="closeBtn">
						&times;
					</div>
					<ul>
						<li>
							<NavLink
								to="/"
								className={({ isActive, isPending }) =>
									isActive ? "active" : ""
								}
							>
								HOME
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/services"
								className={({ isActive, isPending }) =>
									isActive ? "active" : ""
								}
							>
								OUR SERVICES
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about-us"
								className={({ isActive, isPending }) =>
									isActive ? "active" : ""
								}
							>
								ABOUT US
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact-us"
								className={({ isActive, isPending }) =>
									isActive ? "active" : ""
								}
							>
								CONTACT US
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/vacancies"
								className={({ isActive, isPending }) =>
									isActive ? "active" : ""
								}
							>
								VACANCIES
							</NavLink>
						</li>
					</ul>
				</div>

				{/* <div className="flex space-x-9 items-center">
					<div className="call">
						<a href="tel:+1234567890" className="call-icon">
							<i className="fa fa-phone"></i>
						</a>
						<div className="call-numbers">
							<a href="tel:+1234567890" className="text-sm">
								01604216476
							</a>
							<a href="tel:+07737493075" className="text-sm">
								07737493075
							</a>
						</div>
					</div>
				</div> */}
				<div className="menu-icon" id="menuIcon">
					&#9776;
				</div>
			</nav>
		</>
	);
}

// Cart popup
//<div id="cart-popout" className="cart-popout">
//  <div className="header">
//    <span id="close-cart-btn" className="close-btn">
//      &gt;
//    </span>
//    <h2>Cart</h2>
//  </div>
//  <div id="cart-body" className="body">
//    <p>Your cart is currently empty.</p>
//  </div>
//  <div id="cart-total" className="total-amount">
//    Total Amount: $0.00
//  </div>
//  <button id="buy-now-btn" className="buy-now-btn">
//    Buy Now
//  </button>
//</div>
//
// Cart Button
//<div>
//  <i className="fas fa-shopping-bag cart-icon"></i>
//  <span id="cart-count" className="cart-count">
//    0
//  </span>
//</div>
//
// Login
//
//<div className="avatar">
//  <a href="./login/login.html">
//    <div className="avatar-circle">
//      <svg
//        className="person-icon"
//        xmlns="http://www.w3.org/2000/svg"
//        viewBox="0 0 24 24"
//        fill="white"
//        width="24px"
//        height="24px"
//      >
//        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
//      </svg>
//    </div>
//    <h3 className="font-medium">Login</h3>
//  </a>
//</div>
