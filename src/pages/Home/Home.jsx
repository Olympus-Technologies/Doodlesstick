import { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { MobileNav } from "../../components/MobileNav";
import { Navbar } from "../../components/Navbar";
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
import "./Home.css";

import { Footer } from "../../components/Footer";

import { Meta, Title } from "react-head";
import Training_Products from "../../components/training_products/training_products";

export function Home() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		cssEase: "linear",
		arrows: false,
	};
	const images = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

	// const [trainingSettings, setSettings] = useState({
	// 	dots: true,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 4,
	// 	slidesToScroll: 1,
	// 	autoplay: true,
	// 	autoplaySpeed: 4000,
	// 	responsive: [
	// 		{
	// 			breakpoint: 1200,
	// 			settings: {
	// 				slidesToShow: 4,
	// 				slidesToScroll: 3,
	// 				infinite: true,
	// 				dots: true,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 600,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 2,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 480,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 			},
	// 		},
	// 	],
	// 	cssEase: "linear",
	// });

	// const trainingSlidesData = [
	// 	{
	// 		src: NutritionAndFluids,
	// 		desc: "Nutrition and Fluids",
	// 		price: "$30.00",
	// 	},
	// 	{
	// 		src: PersonCenteredCare,
	// 		desc: "Person Centered Care",
	// 		price: "$40.00",
	// 	},
	// 	{
	// 		src: PersonalAndPressureCare,
	// 		desc: "Personal and Pressure Care",
	// 		price: "$50.00",
	// 	},
	// 	{
	// 		src: PreventionOfFalls,
	// 		desc: "Prevention of Falls",
	// 		price: "$60.00",
	// 	},
	// 	{
	// 		src: RiskAssessment,
	// 		desc: "Risk Assessment",
	// 		price: "$45.00",
	// 	},
	// 	{
	// 		src: SafeGuardingAdultsAtRisk,
	// 		desc: "Safeguarding Adults at Risk",
	// 		price: "$50.00",
	// 	},
	// 	{
	// 		src: SafeGuardingChildrenAtRisk,
	// 		desc: "Safeguarding Children at Risk",
	// 		price: "$34.00",
	// 	},
	// 	{
	// 		src: StressAwareness,
	// 		desc: "Stress Awareness",
	// 		price: "$40.00",
	// 	},
	// 	{
	// 		src: UnderstandingYourRole,
	// 		desc: "Understanding your role, Personal Development and Duty of Care",
	// 		price: "$55.00",
	// 	},
	// 	{
	// 		src: WhistleBlowing,
	// 		desc: "Whistle Blowing",
	// 		price: "$35.00",
	// 	},
	// 	{
	// 		src: AutismAwareness,
	// 		desc: "Autism Awareness",
	// 		price: "$40.00",
	// 	},
	// 	{
	// 		src: LearningDisabilityAwareness,
	// 		desc: "Learning Disabilities Awareness",
	// 		price: "$25.00",
	// 	},
	// 	{
	// 		src: ProfessionalBoundaries,
	// 		desc: "Professional Boundaries",
	// 		price: "$71.00",
	// 	},
	// 	{
	// 		src: PositiveBehaviourSupport,
	// 		desc: "Positive Behavior Support",
	// 		price: "$46.00",
	// 	},
	// 	{
	// 		src: MentalHealthAwareness,
	// 		desc: "Mental Health Awareness",
	// 		price: "$35.00",
	// 	},
	// 	{
	// 		src: MentalCapacity,
	// 		desc: "Mental Capacity",
	// 		price: "$50.00",
	// 	},
	// ];

	useEffect(() => {
		// 	document.title =
		// 		"Doodlesstick, Healthcare, trainings - specialist healthcare company that delivers care and support";
		// 	document
		// 		.querySelectorAll(".training-quick-view")
		// 		.forEach((quickView) => {
		// 			quickView.addEventListener("click", () => {
		// 				console.log("Quick View clicked");
		// 				const index = quickView.closest(".training-slide-content")
		// 					.dataset.index;
		// 				const item = trainingSlidesData[index];
		// 				quickViewImage.src = item.src;
		// 				quickViewTitle.textContent = item.desc;
		// 				// quickViewPrice.textContent = item.price;
		// 				// Convert price to number and then format it
		// 				const formattedPrice = parseFloat(
		// 					item.price.replace("$", "")
		// 				).toFixed(2);
		// 				quickViewPrice.textContent = `$${formattedPrice}`;
		// 				quickViewModal.style.display = "block";

		// 				// Add event listener to Add to Cart button
		// 				quickViewAddToCart.removeEventListener(
		// 					"click",
		// 					addToCartHandler
		// 				);
		// 				quickViewAddToCart.addEventListener(
		// 					"click",
		// 					addToCartHandler
		// 				);

		// 				function addToCartHandler(event) {
		// 					event.preventDefault();
		// 					console.log("Add to Cart clicked");
		// 					const cartItemIndex = cartItems.findIndex(
		// 						(cartItem) => cartItem.desc === item.desc
		// 					);

		// 					if (cartItemIndex > -1) {
		// 						cartItems[cartItemIndex].quantity += 1;
		// 					} else {
		// 						cartItems.push({ ...item, quantity: 1 });
		// 					}
		// 				}
		// 			});
		// 		});

		const progressBars = document.querySelectorAll(".progress-bar");
		const labels = document.querySelectorAll(".percentage-label");
		const serviceSection = document.getElementById("services");

		function animateProgressBars() {
			progressBars.forEach((bar, index) => {
				const percentage = parseInt(
					bar.getAttribute("data-percentage")
				);
				let current = 0;
				const interval = setInterval(() => {
					if (current <= percentage) {
						bar.style.width = `${current}%`;
						labels[index].innerText = `${current}%`;
						current++;
					} else {
						clearInterval(interval);
					}
				}, 20);
			});
		}

		function resetProgressBars() {
			progressBars.forEach((bar) => {
				bar.style.width = "0%";
			});
			labels.forEach((label) => {
				label.innerText = "0%";
			});
		}

		function isInViewport(element) {
			const rect = element.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <=
					(window.innerHeight ||
						document.documentElement.clientHeight) &&
				rect.right <=
					(window.innerWidth || document.documentElement.clientWidth)
			);
		}

		function checkAnimation() {
			if (isInViewport(serviceSection)) {
				resetProgressBars(); // Reset bars to 0% width
				setTimeout(animateProgressBars, 2000); // Start animation after reset
			}
		}

		window.addEventListener("scroll", checkAnimation);
		checkAnimation(); // Run the check on page load

		const options = {
			threshold: 0.5,
		};

		const observer = new IntersectionObserver(function (entries) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const elements = entry.target.querySelectorAll(
						".expectation-percentage"
					);
					elements.forEach((el) => {
						let value = 0;
						const textContent = el.textContent;

						if (textContent.includes("%")) {
							const target = parseInt(textContent, 10);
							const increment = target / 100;

							const updateCounter = () => {
								value += increment;
								if (value >= target) {
									el.textContent = `${target}%`;
								} else {
									el.textContent = `${Math.round(value)}%`;
									requestAnimationFrame(updateCounter);
								}
							};

							updateCounter();
						} else if (textContent.includes("1,000+")) {
							const target = 1000;
							const increment = target / 100;

							const updateCounter = () => {
								value += increment;
								if (value >= target) {
									el.textContent = `1,000+`;
								} else {
									el.textContent = `${Math.round(value)}+`;
									requestAnimationFrame(updateCounter);
								}
							};

							updateCounter();
						}
					});
				}
			});
		}, options);

		document
			.querySelectorAll(".expectations-section")
			.forEach((section) => {
				observer.observe(section);
			});
	}, []);

	return (
		<section>
			<Title>Doodlesstick, Healthcare, trainings</Title>
			<Meta
				name="Specialist healthcare company"
				content="Unlock personalized assistance and exclusive insights by booking your session with us today - your tailored experience awaits!"
			/>
			<Navbar />
			<MobileNav />
			<Slider className="image-slider" {...settings}>
				{images.map((image, index) => (
					<div key={index}>
						<img
							src={image}
							style={{
								objectFit: "cover",
								width: "100%",
								height: "auto",
								maxHeightheight: "80vh",
							}}
							alt={`Slide ${index}`}
						/>
					</div>
				))}
			</Slider>

			{/* <div class="services-section">
				<div class="services-container">
					<div class="service-box">
						<h3>Supported Living</h3>
						<Link to="/supported_living">
							<button class="read-more-btn">Read More</button>
						</Link>
					</div>
					<div class="service-box">
						<h3>Domiciliary Care</h3>
						<Link to="/domiciliary_care">
							<button class="read-more-btn">Read More</button>
						</Link>
					</div>
					<div class="service-box">
						<h3>Live-In Care</h3>
						<Link to="/live_in_care">
							<button class="read-more-btn">Read More</button>
						</Link>
					</div>
					<div class="service-box">
						<h3>Healthcare Recruitment</h3>
						<Link to="/healthcare_recruitment">
							<button class="read-more-btn">Read More</button>
						</Link>
					</div>
					<div class="service-box">
						<h3>Healthcare Business Consultancy</h3>
						<Link to="/healthcare_training">
							<button class="read-more-btn">Read More</button>
						</Link>
					</div>
					<div class="service-box">
						<h3>Healthcare Training</h3>
						<Link to="/healthcare_business_consultation">
							<button class="read-more-btn">Read More</button>
						</Link>
					</div>
				</div>
			</div> */}
			<div class="services-section">
				<div class="services-container">
					<div class="service-box">
						<img src={SupportedLiving} alt="supported_living" />
						<h3>Supported Living</h3>
						<Link to="/supported-living">
							<button class="read-more-btn">Read More</button>
						</Link>
					</div>
					<div class="service-box">
						<img src={DomCare} alt="domiciliary care" />
						<h3>Domiciliary Care</h3>
						<Link to="/domiciliary-care">
							<button class="read-more-btn">Read More</button>
						</Link>
					</div>
					<div class="service-box">
						<img src={LiveIn} alt="slive-in care" />
						<h3>Live-In Care</h3>
						<Link to="/live-in-care">
							<button class="read-more-btn">Read More</button>
						</Link>
					</div>
					<div class="service-box">
						<img src={Recruitment} alt="healthcare recruitment" />
						<h3>Healthcare Recruitment</h3>
						<Link to="/healthcare-recruitment">
							<button class="read-more-btn">Read More</button>
						</Link>
					</div>
					<div class="service-box">
						<img
							src={Consultancy}
							alt="healthcare business consultancy"
						/>
						<h3>Healthcare Business Consultancy</h3>
						<Link to="/healthcare-business-consultation">
							<button class="read-more-btn">Read More</button>
						</Link>
					</div>
					<div class="service-box">
						<img src={Training} alt="healthcare training" />
						<h3>Healthcare Training</h3>
						<Link to="/healthcare-training">
							<button class="read-more-btn">Read More</button>
						</Link>
					</div>
				</div>
			</div>

			<div class="booking-section">
				<div className="booking-left">
					<img src={BookingIcon} alt="booking-icon" />
				</div>
				<div className="booking-right">
					<h2 class="booking-header">Book a Session Today</h2>
					<p class="booking-description">
						Unlock personalized assistance and exclusive insights by
						booking your session with us today - your tailored
						experience awaits!
					</p>
					<a href="/bookings" class="booking-button">
						Book Now
					</a>
				</div>
			</div>

			<div id="services">
				<h2>Our Services</h2>
				<div class="service">
					<span class="service-name">Supported Living</span>
					<div class="progress-container">
						<div class="progress-bar" data-percentage="95%"></div>
						<div class="percentage-label">95%</div>
					</div>
				</div>
				<div class="service">
					<span class="service-name">Healthcare Recruitment</span>
					<div class="progress-container">
						<div class="progress-bar" data-percentage="90%"></div>
						<div class="percentage-label">90%</div>
					</div>
				</div>
				<div class="service">
					<span class="service-name">Healthcare Training</span>
					<div class="progress-container">
						<div class="progress-bar" data-percentage="92%"></div>
						<div class="percentage-label">92%</div>
					</div>
				</div>
				<div class="service">
					<span class="service-name">Business Consultancy</span>
					<div class="progress-container">
						<div class="progress-bar" data-percentage="91%"></div>
						<div class="percentage-label">91%</div>
					</div>
				</div>
			</div>
			{/* Training Products Section */}
			<Training_Products />
			{/* <div class="training-section">
				<div class="training-header">Training Products</div>
				<div class="related-products-box">
					<div class="product-header">
						<h1>Related Products</h1>
					</div>
					<div class="training-slider-container">
						<div class="training-slideshow-wrapper">
							<div class="training-slideshow-container">
								<Slider
									className="training-slide"
									{...trainingSettings}
								>
									{trainingSlidesData.map((data, index) => (
										<div className="px-3">
											<div
												className="training-slide-content"
												data-index={index}
												key={index}
											>
												<img
													src={data.src}
													className="rounded-md text-center w-full"
												/>
												<div className="training-quick-view">
													Quick View
												</div>
											</div>
											<p className="text-center text-white font-semibold text-lg">
												{data.desc}
											</p>
										</div>
									))}
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="quick-view-modal" class="quick-view-modal">
				<div class="quick-view-content">
					<span class="close">&times;</span>
					<div class="quick-view-left">
						<img id="quick-view-image" src="" alt="Product Image" />
					</div>
					<div class="quick-view-right">
						<h2 id="quick-view-title">Product Name</h2>
						<p id="quick-view-price">$0.00</p>
						<a
							href="#"
							id="quick-view-add-to-cart"
							class="add-to-cart-button"
						>
							Add to Cart
						</a>
					</div>
				</div>
			</div>
 */}
			<div class="expectations-section">
				<h2 class="expectations-header">
					Exceeding Your Expectations Everyday
				</h2>
				<div class="expectations-container">
					<div class="expectation-box">
						<div
							class="expectation-icon"
							style={{ marginRight: "8px" }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 640 512"
								style={{ width: "53px", height: "53px" }}
							>
								<path d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6l0 167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5l0-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128l2.2 0z" />
							</svg>
						</div>
						<div class="expectation-text">
							<h3 class="expectation-percentage">100%</h3>
							<p class="expectation-light-text">
								Utmost Respect & Reverence
							</p>
						</div>
					</div>
					<div class="expectation-box">
						<div class="expectation-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 384 512"
								style={{ width: "53px", height: "53px" }}
							>
								<path d="M256 64A64 64 0 1 0 128 64a64 64 0 1 0 128 0zM152.9 169.3c-23.7-8.4-44.5-24.3-58.8-45.8L74.6 94.2C64.8 79.5 45 75.6 30.2 85.4s-18.7 29.7-8.9 44.4L40.9 159c18.1 27.1 42.8 48.4 71.1 62.4L112 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 32 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-258.4c29.1-14.2 54.4-36.2 72.7-64.2l18.2-27.9c9.6-14.8 5.4-34.6-9.4-44.3s-34.6-5.5-44.3 9.4L291 122.4c-21.8 33.4-58.9 53.6-98.8 53.6c-12.6 0-24.9-2-36.6-5.8c-.9-.3-1.8-.7-2.7-.9z" />
							</svg>
						</div>
						<div class="expectation-text">
							<h3 class="expectation-percentage">100%</h3>
							<p class="expectation-light-text">
								We Always Put Quality First
							</p>
						</div>
					</div>
					<div class="expectation-box">
						<div
							class="expectation-icon"
							style={{ marginRight: "15px" }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 496 512"
								style={{ width: "53px", height: "53px" }}
							>
								<path d="M88 216c81.7 10.2 273.7 102.3 304 232H0c99.5-8.1 184.5-137 88-232zm32-152c32.3 35.6 47.7 83.9 46.4 133.6C249.3 231.3 373.7 321.3 400 448h96C455.3 231.9 222.8 79.5 120 64z" />
							</svg>
						</div>
						<div class="expectation-text">
							<h3 class="expectation-percentage">110%</h3>
							<p class="expectation-light-text">
								Providing The Highest Quality Service
							</p>
						</div>
					</div>
				</div>
				<div class="expectations-single-box">
					<div class="expectation-icon" style={{ marginTop: "36px" }}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
						</svg>
					</div>
					<div class="expectation-text">
						<h3 class="expectation-percentage">1,000+</h3>
						<p class="expectation-light-text">
							Always Happy Customers
						</p>
					</div>
				</div>
			</div>

			<div class="offers-section">
				<h2 class="offers-header">We Offer You</h2>
				<div class="offers-container">
					<div class="offer-box">
						<div class="offer-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 640 512"
							>
								<path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.8 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" />
							</svg>
						</div>
						<div class="offer-text">
							<h3 class="offer-title">Virtual Assistance</h3>
							<p class="offer-description">
								Experience the convenience of virtual assistance
								tailored to your needs – book your session now
								for expert guidance and support from the comfort
								of your own space!
							</p>
						</div>
					</div>
					<div class="offer-box">
						<div class="offer-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
							>
								<path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
							</svg>
						</div>
						<div class="offer-text">
							<h3 class="offer-title">Training</h3>
							<p class="offer-description">
								Elevate your skills and knowledge through our
								specialized training sessions. Book your
								training session today and embark on a journey
								of continuous learning and professional
								development.
							</p>
						</div>
					</div>
					<div class="offer-box">
						<div class="offer-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 576 512"
							>
								<path d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1 96 192c0 53 43 96 96 96s96-43 96-96l0-120.9-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1L352 192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112l0-70.7c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 70.7c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192L32 71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
							</svg>
						</div>
						<div class="offer-text">
							<h3 class="offer-title">Consultancy</h3>
							<p class="offer-description">
								Navigate the complexities of healthcare with our
								specialized medical consultancy services. Book a
								session today to gain strategic insights and
								personalized solutions, ensuring optimal
								outcomes for you
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="newsletter-section">
				<h2 class="newsletter-header">Sign Up for Our Newsletter</h2>
				<div class="newsletter-container">
					<input
						type="email"
						class="newsletter-input"
						placeholder="Enter your email here"
						disabled
					/>
				</div>
				<div class="newsletter-button">
					<button disabled>Subscribe Now</button>
				</div>
			</div>

			<Footer />
		</section>
	);
}
