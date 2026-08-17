import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "../images/logo.webp";
import { SITE, SERVICE_LINKS, ADHD_LINKS } from "../data/site";
import "./Navbar.css";

export function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setMenuOpen(false);
		setServicesOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const onKey = (event) => {
			if (event.key === "Escape" && menuOpen) setMenuOpen(false);
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [menuOpen]);

	return (
		<header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
			<div className="navbar-inner">
				<div className="logo">
					<Link to="/" aria-label={`${SITE.shortName} — Home`}>
						<img src={Logo} alt={`${SITE.shortName} logo`} />
						<span className="logo-wordmark">
							<span className="logo-wordmark-name">{SITE.shortName}</span>
							<span className="logo-wordmark-tag">
								Specialist Healthcare
							</span>
						</span>
					</Link>
				</div>

				<nav className="navlinks" aria-label="Main navigation">
					<ul>
						<li>
							<NavLink to="/" end>
								Home
							</NavLink>
						</li>
						<li className="dropdown">
							<NavLink to="/services" className="dropdown-link">
								Our Services
								<i
									className="fas fa-chevron-down dropdown-caret"
									aria-hidden="true"
								/>
							</NavLink>
							<div className="dropdown-content">
								{SERVICE_LINKS.map((s) => (
									<Link key={s.to} to={s.to}>
										<span className="dropdown-link-label">
											{s.label}
										</span>
										<i
											className="fas fa-arrow-right"
											aria-hidden="true"
										/>
									</Link>
								))}
								<div className="dropdown-divider" />
								<div className="dropdown-group-label">ADHD Services</div>
								{ADHD_LINKS.map((s) => (
									<Link key={s.to} to={s.to}>
										<span className="dropdown-link-label">
											{s.label}
										</span>
										<i
											className="fas fa-arrow-right"
											aria-hidden="true"
										/>
									</Link>
								))}
							</div>
						</li>
						<li>
							<NavLink to="/about-us">About Us</NavLink>
						</li>
						<li>
							<NavLink to="/contact-us">Contact Us</NavLink>
						</li>
						<li>
							<NavLink to="/vacancies">Vacancies</NavLink>
						</li>
					</ul>
				</nav>

				<div className="nav-cta">
					<a href={`tel:${SITE.phone}`} className="call-btn">
						<i className="fa fa-phone" aria-hidden="true" />
						<span className="call-btn-text">
							{SITE.phone.replace(/(.{5})/, "$1 ")}
						</span>
					</a>
					<Link to="/bookings" className="book-btn">
						Book a Session
					</Link>
				</div>

				<button
					type="button"
					className="menu-icon"
					aria-label="Open navigation menu"
					aria-expanded={menuOpen}
					aria-controls="mobileMenu"
					onClick={() => setMenuOpen(true)}
				>
					<span className="hamburger">
						<span />
						<span />
						<span />
					</span>
				</button>
			</div>

			<div
				className={`mobile-menu ${menuOpen ? "active" : ""}`}
				id="mobileMenu"
				aria-hidden={!menuOpen}
			>
				<div className="mobile-menu-header">
					<div className="logo">
						<img src={Logo} alt={`${SITE.shortName} logo`} />
						<span className="logo-wordmark">
							<span className="logo-wordmark-name">{SITE.shortName}</span>
						</span>
					</div>
					<button
						type="button"
						className="close-btn"
						aria-label="Close navigation menu"
						onClick={() => setMenuOpen(false)}
					>
						&times;
					</button>
				</div>
				<nav aria-label="Mobile navigation">
					<ul>
						<li>
							<NavLink to="/" end>
								Home
							</NavLink>
						</li>
						<li>
							<button
								type="button"
								className={`mobile-services-toggle ${
									servicesOpen ? "open" : ""
								}`}
								onClick={() => setServicesOpen((v) => !v)}
								aria-expanded={servicesOpen}
							>
								Our Services
								<i
									className="fas fa-chevron-down"
									aria-hidden="true"
								/>
							</button>
							<ul
								className={`mobile-services ${
									servicesOpen ? "open" : ""
								}`}
							>
								{SERVICE_LINKS.map((s) => (
									<li key={s.to}>
										<Link to={s.to}>{s.label}</Link>
									</li>
								))}
								<li className="mobile-services-group-label">
									ADHD Services
								</li>
								{ADHD_LINKS.map((s) => (
									<li key={s.to}>
										<Link to={s.to}>{s.label}</Link>
									</li>
								))}
							</ul>
						</li>
						<li>
							<NavLink to="/about-us">About Us</NavLink>
						</li>
						<li>
							<NavLink to="/contact-us">Contact Us</NavLink>
						</li>
						<li>
							<NavLink to="/vacancies">Vacancies</NavLink>
						</li>
						<li className="mobile-cta-row">
							<Link to="/bookings" className="btn btn-mint">
								Book a Session
							</Link>
							<a
								href={`tel:${SITE.phone}`}
								className="mobile-call"
							>
								<i className="fa fa-phone" aria-hidden="true" />
								{SITE.phone}
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
