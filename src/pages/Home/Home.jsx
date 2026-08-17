import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Seo } from "../../components/Seo";
import { Reveal } from "../../components/Reveal";
import { CountUp } from "../../components/CountUp";
import { SpotlightCard } from "../../components/SpotlightCard";
import { SITE } from "../../data/site";
import BookingIcon from "../../images/bookings.svg";
import Consultancy from "../../images/consultancy.jpg";
import DomCare from "../../images/dom_care.jpg";
import LiveIn from "../../images/live_in.jpg";
import Slide2 from "../../images/newslide.jpeg";
import Slide4 from "../../images/newslide2.jpeg";
import Slide5 from "../../images/newslide3.jpg";
import Recruitment from "../../images/recruitment.jpg";
import Slide3 from "../../images/slide3.jpg";
import Slide1 from "../../images/slider 7.jpg";
import Slide6 from "../../images/slider6.jpg";
import SupportedLiving from "../../images/suported-living.jpg";
import Training from "../../images/training.jpg";
import MentalHealth from "../../images/mental_health_awareness.webp";
import "./Home.css";
import Training_Products from "../../components/training_products/training_products";

const heroSlides = [
	{ src: Slide1, alt: "Doodlesstick home care and supported living services" },
	{ src: Slide2, alt: "Doodlesstick dedicated healthcare staff" },
	{ src: Slide3, alt: "Compassionate care in your own home" },
	{ src: Slide4, alt: "Healthcare professionals supporting independence" },
	{ src: Slide5, alt: "Care and support across Northamptonshire" },
	{ src: Slide6, alt: "Quality domiciliary care services" },
];

const serviceBoxes = [
	{
		image: SupportedLiving,
		alt: "Supported living services",
		title: "Supported Living",
		blurb: "Choice, independence and quality of life in your own tenancy.",
		to: "/supported-living",
		wide: true,
	},
	{
		image: DomCare,
		alt: "Domiciliary care at home",
		title: "Domiciliary Care",
		blurb: "Specialist home care for all adult ages.",
		to: "/domiciliary-care",
	},
	{
		image: LiveIn,
		alt: "Live-in care and 24 hour support",
		title: "Live-In Care",
		blurb: "Bespoke 24/7 care in the comfort of your home.",
		to: "/live-in-care",
	},
	{
		image: Recruitment,
		alt: "Healthcare recruitment services",
		title: "Healthcare Recruitment",
		blurb: "HCAs, support workers and nurses for your service.",
		to: "/healthcare-recruitment",
		wide: true,
	},
	{
		image: Consultancy,
		alt: "Healthcare business consultancy",
		title: "Business Consultancy",
		blurb: "Subject-matter experts for your healthcare projects.",
		to: "/healthcare-business-consultation",
	},
	{
		image: Training,
		alt: "Healthcare training courses",
		title: "Healthcare Training",
		blurb: "Fully accredited face-to-face training.",
		to: "/healthcare-training",
	},
	{
		image: MentalHealth,
		alt: "ADHD assessment and treatment services",
		title: "ADHD Services",
		blurb: "Expert assessment, diagnosis and treatment for ADHD.",
		to: "/adhd",
		wide: true,
	},
];

const areas = [
	"Northamptonshire",
	"Milton Keynes",
	"Bedfordshire",
	"Leicestershire",
	"Buckinghamshire",
];

const marqueeItems = [
	...areas.map((a) => ({ label: a, icon: "fa-solid fa-location-dot" })),
	{ label: "24/7 Live-in Care", icon: "fa-solid fa-clock" },
	{ label: "DBS-Checked Staff", icon: "fa-solid fa-user-shield" },
	{ label: "CQC-Ready Consultancy", icon: "fa-solid fa-certificate" },
];

const competencyBars = [
	{ name: "Supported Living", value: 95 },
	{ name: "Healthcare Recruitment", value: 90 },
	{ name: "Healthcare Training", value: 92 },
	{ name: "Business Consultancy", value: 91 },
];

const stats = [
	{
		to: 100,
		suffix: "%",
		label: "Utmost Respect & Reverence",
		icon: "fa-solid fa-hands-praying",
	},
	{
		to: 100,
		suffix: "%",
		label: "We Always Put Quality First",
		icon: "fa-solid fa-award",
	},
	{
		to: 110,
		suffix: "%",
		label: "The Highest Quality Service",
		icon: "fa-solid fa-heart",
	},
	{
		to: 1000,
		suffix: "+",
		label: "Always Happy Customers",
		icon: "fa-solid fa-users",
	},
];

const offers = [
	{
		icon: "fa-solid fa-headset",
		title: "Virtual Assistance",
		description:
			"Experience the convenience of virtual assistance tailored to your needs – book your session now for expert guidance and support from the comfort of your own space!",
	},
	{
		icon: "fa-solid fa-graduation-cap",
		title: "Training",
		description:
			"Elevate your skills and knowledge through our specialized training sessions. Book your training session today and embark on a journey of continuous learning and professional development.",
	},
	{
		icon: "fa-solid fa-briefcase-medical",
		title: "Consultancy",
		description:
			"Navigate the complexities of healthcare with our specialized medical consultancy services. Book a session today to gain strategic insights and personalized solutions.",
	},
];

export function Home() {
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
		arrows: false,
	};

	const barsRef = useRef(null);
	const [barProgress, setBarProgress] = useState(0);

	useEffect(() => {
		const node = barsRef.current;
		if (!node) return undefined;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setBarProgress(100);
			return undefined;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setBarProgress(100);
					observer.disconnect();
				}
			},
			{ threshold: 0.35 }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	const [email, setEmail] = useState("");

	const subscribe = (event) => {
		event.preventDefault();
		if (!email.trim()) return;
		const mailtoLink = `mailto:${SITE.email}?subject=${encodeURIComponent(
			"Doodlesstick Newsletter Signup"
		)}&body=${encodeURIComponent(`Please add ${email} to the Doodlesstick newsletter.`)}`;
		const a = document.createElement("a");
		a.href = mailtoLink;
		a.target = "_blank";
		a.rel = "noopener noreferrer";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		setEmail("");
	};

	return (
		<>
			<Seo
				path="/"
				title="Specialist Healthcare & Care Services in Northampton"
				description={SITE.description}
			/>
			<Navbar />

			<main>
				{/* ============ HERO ============ */}
				<section className="hero" aria-label="Featured services">
					<Slider className="hero-slider" {...sliderSettings}>
						{heroSlides.map((slide, index) => (
							<div key={slide.src} className="hero-slide">
								<img
									src={slide.src}
									alt={slide.alt}
									loading={index === 0 ? "eager" : "lazy"}
								/>
							</div>
						))}
					</Slider>

					<div className="hero-overlay" />
					<div className="hero-content container">
						<Reveal delay={120}>
							<h1 className="hero-title">
								Care That Feels Like{" "}
								<span className="text-gradient">Family.</span>
							</h1>
						</Reveal>
						<Reveal delay={240}>
							<p className="hero-lead">
								Supported living, domiciliary care and live-in
								care built entirely around you — delivered with
								compassion, dignity and expertise.
							</p>
						</Reveal>
						<Reveal delay={360}>
							<div className="hero-cta">
								<Link to="/bookings" className="btn btn-mint">
									Book a Session
									<i className="fas fa-arrow-right" aria-hidden="true" />
								</Link>
								<Link to="/services" className="btn btn-ghost">
									Explore Services
								</Link>
							</div>
						</Reveal>
					</div>

					<div className="hero-scroll" aria-hidden="true">
						<span />
					</div>
				</section>

				{/* ============ MARQUEE ============ */}
				<section className="marquee" aria-label="Areas and services">
					<div className="marquee-track">
						{[...marqueeItems, ...marqueeItems].map((item, index) => (
							<span className="marquee-item" key={index}>
								<i className={item.icon} aria-hidden="true" />
								{item.label}
							</span>
						))}
					</div>
				</section>

				{/* ============ SERVICES BENTO ============ */}
				<section className="services-section">
					<div className="container">
						<div className="section-head">
							<Reveal>
								<span className="eyebrow">What we do</span>
							</Reveal>
							<Reveal delay={80}>
								<h2 className="section-title">
									Care Services Designed{" "}
									<span className="accent">Around You</span>
								</h2>
							</Reveal>
							<Reveal delay={160}>
								<p className="section-lead">
									Seven specialist services, one promise — the
									highest standard of care, delivered with
									warmth across Northamptonshire and the
									Midlands.
								</p>
							</Reveal>
						</div>

						<div className="bento-grid">
							{serviceBoxes.map((box, index) => (
								<Reveal
									key={box.to}
									className={`bento-item ${
										box.wide ? "bento-item--wide" : ""
									}`}
									delay={(index % 3) * 90}
								>
									<SpotlightCard>
										<Link to={box.to} className="bento-card">
											<img
												src={box.image}
												alt={box.alt}
												loading="lazy"
											/>
											<div className="bento-card-overlay" />
											<div className="bento-card-body">
												<span className="bento-card-chip">
													<i
														className="fas fa-arrow-right"
														aria-hidden="true"
													/>
												</span>
												<h3 className="bento-card-title">
													{box.title}
												</h3>
												<p className="bento-card-blurb">
													{box.blurb}
												</p>
											</div>
										</Link>
									</SpotlightCard>
								</Reveal>
							))}

							<Reveal
								className="bento-item bento-item--wide"
								delay={180}
							>
								<SpotlightCard>
									<Link
										to="/services"
										className="bento-card bento-card--cta"
									>
										<div className="bento-card-body">
											<span className="bento-card-chip">
												<i
													className="fas fa-layer-group"
													aria-hidden="true"
												/>
											</span>
											<h3 className="bento-card-title">
												Explore every service
											</h3>
											<p className="bento-card-blurb">
												Discover the full range of care,
												recruitment, training and
												consultancy we provide.
											</p>
											<span className="btn btn-light">
												View All Services
												<i
													className="fas fa-arrow-right"
													aria-hidden="true"
												/>
											</span>
										</div>
									</Link>
								</SpotlightCard>
							</Reveal>
						</div>
					</div>
				</section>

				{/* ============ BOOKING BAND ============ */}
				<section className="booking-section">
					<div className="container booking-grid">
						<Reveal className="booking-left" direction="left">
							<img
								src={BookingIcon}
								alt="Book a care session with Doodlesstick"
								loading="lazy"
							/>
						</Reveal>
						<Reveal className="booking-right" direction="right" delay={100}>
							<span className="eyebrow eyebrow--center">
								Get started
							</span>
							<h2 className="booking-header">
								Book a Session Today
							</h2>
							<p className="booking-description">
								Unlock personalized assistance and exclusive
								insights by booking your session with us today —
								your tailored experience awaits!
							</p>
							<div className="booking-actions">
								<Link to="/bookings" className="btn btn-primary">
									Book Now
									<i className="fas fa-calendar-check" aria-hidden="true" />
								</Link>
								<a
									href={`tel:${SITE.phone}`}
									className="btn btn-light"
								>
									<i className="fa fa-phone" aria-hidden="true" />
									{SITE.phone}
								</a>
							</div>
						</Reveal>
					</div>
				</section>

				{/* ============ COMPETENCY BARS ============ */}
				<section className="competency-section" ref={barsRef}>
					<div className="container competency-grid">
						<Reveal className="competency-copy" direction="left">
							<span className="eyebrow">Our commitment</span>
							<h2 className="section-title">
								Excellence In{" "}
								<span className="accent">Everything</span> We Do
							</h2>
							<p className="section-lead">
								From first contact to everyday care, we measure
								ourselves against the very highest standards.
							</p>
						</Reveal>
						<Reveal className="competency-bars" direction="right" delay={100}>
							{competencyBars.map((bar) => (
								<div className="competency-item" key={bar.name}>
									<div className="competency-item-top">
										<span className="competency-name">
											{bar.name}
										</span>
										<span className="competency-value">
											{Math.round((barProgress * bar.value) / 100)}%
										</span>
									</div>
									<div className="competency-track">
										<div
											className="competency-fill"
											style={{
												width: `${barProgress * bar.value}%`,
											}}
										/>
									</div>
								</div>
							))}
						</Reveal>
					</div>
				</section>

				{/* ============ STATS ============ */}
				<section className="stats-section">
					<div className="gradient-orb stats-orb--one" aria-hidden="true" />
					<div className="gradient-orb stats-orb--two" aria-hidden="true" />
					<div className="container">
						<Reveal>
							<span className="eyebrow eyebrow--center">
								By the numbers
							</span>
						</Reveal>
						<Reveal delay={80}>
							<h2 className="section-title stats-title">
								Exceeding Your Expectations,{" "}
								<span className="accent">Every Day</span>
							</h2>
						</Reveal>
						<div className="stats-grid">
							{stats.map((stat, index) => (
								<Reveal
									key={stat.label}
									className="stat-card"
									delay={index * 90}
								>
									<div className="stat-icon">
										<i className={stat.icon} aria-hidden="true" />
									</div>
									<CountUp
										to={stat.to}
										suffix={stat.suffix}
										className="stat-value"
									/>
									<p className="stat-label">{stat.label}</p>
								</Reveal>
							))}
						</div>
					</div>
				</section>

				{/* ============ TRAINING PRODUCTS ============ */}
				<Training_Products />

				{/* ============ OFFERS ============ */}
				<section className="offers-section">
					<div className="container">
						<Reveal>
							<span className="eyebrow eyebrow--center">
								Tailored support
							</span>
						</Reveal>
						<Reveal delay={80}>
							<h2 className="section-title offers-title">
								We Offer You
							</h2>
						</Reveal>
						<div className="offers-container">
							{offers.map((offer, index) => (
								<Reveal
									key={offer.title}
									className="offer-box"
									delay={index * 100}
								>
									<SpotlightCard>
										<div className="offer-icon">
											<i
												className={offer.icon}
												aria-hidden="true"
											/>
										</div>
										<h3 className="offer-title">
											{offer.title}
										</h3>
										<p className="offer-description">
											{offer.description}
										</p>
										<Link
											to="/bookings"
											className="offer-link"
										>
											Book a session
											<i
												className="fas fa-arrow-right"
												aria-hidden="true"
											/>
										</Link>
									</SpotlightCard>
								</Reveal>
							))}
						</div>
					</div>
				</section>

				{/* ============ NEWSLETTER ============ */}
				<section className="newsletter-section">
					<div className="container">
						<Reveal>
							<span className="eyebrow eyebrow--center">
								Stay in touch
							</span>
						</Reveal>
						<Reveal delay={80}>
							<h2 className="newsletter-header">
								Sign Up for Our Newsletter
							</h2>
						</Reveal>
						<Reveal delay={160}>
							<p className="newsletter-text">
								Care tips, training updates and service news —
								straight to your inbox.
							</p>
						</Reveal>
						<Reveal delay={240}>
							<form
								className="newsletter-form"
								onSubmit={subscribe}
							>
								<input
									type="email"
									className="newsletter-input"
									placeholder="Enter your email address"
									aria-label="Email address for newsletter"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
								<button
									type="submit"
									className="btn btn-mint"
								>
									Subscribe Now
								</button>
							</form>
						</Reveal>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
