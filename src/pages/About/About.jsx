import Slider from "react-slick";
import "./About.css";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Seo } from "../../components/Seo";
import { Reveal } from "../../components/Reveal";
import BookingImg from "../../images/bookingImg.webp";

const missionSlides = [
	"Equipping a people who will provide the highest level of care they will want to receive if they ever need one.",
	"Developing a team of people who are passionate about what they do, enjoy what they do and gets rewarded for achieving best outcomes in others.",
	"Developing strategic leaders who will flourish on the roles, manage people and resources effectively to the best interest of the people that uses the services and business at large.",
	"Supporting the growth and development of your business and putting you ahead in the marketplace",
];

export function About() {
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: false,
	};

	return (
		<>
			<Seo
				path="/about-us"
				title="About Us | Doodlesstick Limited — Specialist Healthcare in Northampton"
				description="Doodlesstick Limited is a specialist healthcare company delivering care and support to a wide variety of service users in their own homes or chosen supported living accommodation across Northamptonshire."
			/>
			<Navbar />

			<main>
				<section className="about-header" aria-labelledby="about-title">
					<h1 id="about-title">About Us</h1>
				</section>

				<section className="mission-statement" aria-labelledby="mission-title">
					<h2 id="mission-title">Mission Statement</h2>
				</section>

				<section className="mission-slider" aria-label="Our mission statements">
					<Slider className="slideshow-container" {...sliderSettings}>
						{missionSlides.map((text, index) => (
							<div className="mySlides" key={index}>
								<p>{text}</p>
							</div>
						))}
					</Slider>
				</section>

				<section className="about-doodlesstick">
					<Reveal className="about-image">
						<img
							src={BookingImg}
							alt="Doodlesstick care and support"
							loading="lazy"
						/>
					</Reveal>
					<Reveal className="about-text" delay={100}>
						<h2>About Doodlesstick</h2>
						<p>
							We are a specialist healthcare company that delivers
							care and support to a wide variety of service users
							in their own homes or their chosen Supported living
							accommodation.
						</p>
					</Reveal>
				</section>
			</main>

			<Footer />
		</>
	);
}
