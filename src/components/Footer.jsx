import { Link } from "react-router-dom";
import Logo from "../images/logo.webp";
import { SITE, SERVICE_LINKS, NAV_LINKS } from "../data/site";
import "./Footer.css";

const socials = [
	{
		href: "https://www.facebook.com/search/top?q=Doodlesstick",
		label: "Facebook",
		path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
	},
	{
		href: "https://www.instagram.com/explore/tags/doodlesstick/",
		label: "Instagram",
		path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.06-2.153.262-2.918.56-1.181.461-2.124 1.138-2.914 1.929-.79.79-1.467 1.733-1.928 2.914-.298.765-.5 1.636-.56 2.918C.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.06 1.281.262 2.153.56 2.918.461 1.181 1.138 2.124 1.928 2.914.79.79 1.733 1.467 2.914 1.928.765.298 1.637.5 2.918.56 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.06 2.153-.262 2.918-.56 1.181-.461 2.124-1.138 2.914-1.928.79-.79 1.467-1.733 1.928-2.914.298-.765.5-1.637.56-2.918.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.06-1.281-.262-2.153-.56-2.918-.461-1.181-1.138-2.124-1.928-2.914-.79-.79-1.733-1.467-2.914-1.928-.765-.298-1.636-.5-2.918-.56C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
	},
	{
		href: "https://wa.me/447737493075",
		label: "WhatsApp",
		path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
	},
	{
		href: "https://twitter.com/search?q=Doodlesstick",
		label: "X (Twitter)",
		path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
	},
];

const areas = [
	"Northamptonshire",
	"Milton Keynes",
	"Bedfordshire",
	"Leicestershire",
	"Buckinghamshire",
];

export function Footer() {
	return (
		<footer className="footer">
			<div className="footer-orb footer-orb--one" aria-hidden="true" />
			<div className="footer-orb footer-orb--two" aria-hidden="true" />

			<div className="container">
				<div className="footer-grid">
					<div className="footer-brand">
						<Link to="/" className="footer-brand-logo" aria-label="Doodlesstick home">
							<img src={Logo} alt="Doodlesstick logo" loading="lazy" />
							<span className="footer-brand-name">Doodlesstick</span>
						</Link>
						<p className="footer-brand-tag">
							{SITE.name} — specialist healthcare across
							Northamptonshire and the Midlands. Compassionate
							supported living, domiciliary care, live-in care,
							recruitment, training and CQC consultancy.
						</p>
						<div className="social-links" aria-label="Social media">
							{socials.map((social) => (
								<a
									key={social.label}
									href={social.href}
									aria-label={social.label}
									rel="noopener noreferrer"
									target="_blank"
								>
									<svg
										viewBox="0 0 24 24"
										width="22"
										height="22"
										fill="currentColor"
										aria-hidden="true"
										focusable="false"
									>
										<path d={social.path} />
									</svg>
								</a>
							))}
						</div>
					</div>

					<div className="footer-col">
						<h4>Company</h4>
						<ul>
							{NAV_LINKS.map((link) => (
								<li key={link.to}>
									<Link to={link.to}>{link.label}</Link>
								</li>
							))}
							<li>
								<Link to="/bookings">Book a Session</Link>
							</li>
						</ul>
					</div>

					<div className="footer-col">
						<h4>Our Services</h4>
						<ul>
							{SERVICE_LINKS.map((service) => (
								<li key={service.to}>
									<Link to={service.to}>{service.label}</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="footer-col">
						<h4>Contact Us</h4>
						<ul className="footer-contact">
							<li>
								<a href={`tel:${SITE.phone}`} className="footer-contact-link">
									<i className="fas fa-phone" aria-hidden="true" />
									<span>{SITE.phone}</span>
								</a>
							</li>
							<li>
								<a href={`tel:${SITE.phoneAlt}`} className="footer-contact-link">
									<i className="fas fa-phone" aria-hidden="true" />
									<span>{SITE.phoneAlt}</span>
								</a>
							</li>
							<li>
								<a href={`mailto:${SITE.email}`} className="footer-contact-link">
									<i className="fas fa-envelope" aria-hidden="true" />
									<span>{SITE.email}</span>
								</a>
							</li>
							<li>
								<a
									className="footer-contact-link"
									href="https://www.google.com/maps/search/?api=1&query=Suite+G7,+Moulton+Park+Business+Centre,+Redhouse+Road,+Northampton,+NN3+6AQ"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i
										className="fas fa-map-marker-alt"
										aria-hidden="true"
									/>
									<span>
										Suite G7, Moulton Park Business Centre,
										Redhouse Road, Northampton, NN3 6AQ
									</span>
								</a>
							</li>
						</ul>
						<div className="footer-areas" aria-label="Areas served">
							{areas.map((area) => (
								<span key={area} className="footer-area-chip">
									{area}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="container footer-bottom-inner">
					<p className="footer-copyright">
						© 2024 doodlesstick.com. Developed by{" "}
						<a
							href="https://www.renasteredev.online"
							target="_blank"
							rel="noopener noreferrer"
							className="footer-credit"
						>
							Renasteredev/Olympus Technologies
						</a>
						.
					</p>
					<p className="footer-cqc">
						Regulated care services across Northamptonshire &amp; the
						Midlands
					</p>
				</div>
			</div>
		</footer>
	);
}
