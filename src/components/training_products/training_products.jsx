import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./training_products.css";
import AutismAwareness from "../../images/autism_awareness.webp";
import LearningDisabilityAwareness from "../../images/learning_disabilities_awareness.webp";
import MentalCapacity from "../../images/mental_capacity.webp";
import MentalHealthAwareness from "../../images/mental_health_awareness.webp";
import NutritionAndFluids from "../../images/nutrition&fluids.webp";
import PersonCenteredCare from "../../images/person_centered_care.webp";
import PersonalAndPressureCare from "../../images/personal&pressure_care.webp";
import PositiveBehaviourSupport from "../../images/positive_behavior_support.webp";
import PreventionOfFalls from "../../images/prevention_of_falls.webp";
import ProfessionalBoundaries from "../../images/professional_boundaries.webp";
import RiskAssessment from "../../images/risk_assessment.webp";
import SafeGuardingAdultsAtRisk from "../../images/safeguarding_adults_at_risk.webp";
import SafeGuardingChildrenAtRisk from "../../images/safeguarding_children_at_risk.webp";
import StressAwareness from "../../images/stress_awareness.webp";
import UnderstandingYourRole from "../../images/understanding_your_role.webp";
import WhistleBlowing from "../../images/whistle_blowing.webp";

const trainingSettings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 4000,
	cssEase: "linear",
	pauseOnHover: true,
	responsive: [
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 560,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

const trainingSlidesData = [
	{ src: NutritionAndFluids, desc: "Nutrition and Fluids", price: "$30.00" },
	{ src: PersonCenteredCare, desc: "Person Centered Care", price: "$40.00" },
	{ src: PersonalAndPressureCare, desc: "Personal and Pressure Care", price: "$50.00" },
	{ src: PreventionOfFalls, desc: "Prevention of Falls", price: "$60.00" },
	{ src: RiskAssessment, desc: "Risk Assessment", price: "$45.00" },
	{ src: SafeGuardingAdultsAtRisk, desc: "Safeguarding Adults at Risk", price: "$50.00" },
	{ src: SafeGuardingChildrenAtRisk, desc: "Safeguarding Children at Risk", price: "$34.00" },
	{ src: StressAwareness, desc: "Stress Awareness", price: "$40.00" },
	{
		src: UnderstandingYourRole,
		desc: "Understanding your role, Personal Development and Duty of Care",
		price: "$55.00",
	},
	{ src: WhistleBlowing, desc: "Whistle Blowing", price: "$35.00" },
	{ src: AutismAwareness, desc: "Autism Awareness", price: "$40.00" },
	{ src: LearningDisabilityAwareness, desc: "Learning Disabilities Awareness", price: "$25.00" },
	{ src: ProfessionalBoundaries, desc: "Professional Boundaries", price: "$71.00" },
	{ src: PositiveBehaviourSupport, desc: "Positive Behavior Support", price: "$46.00" },
	{ src: MentalHealthAwareness, desc: "Mental Health Awareness", price: "$35.00" },
	{ src: MentalCapacity, desc: "Mental Capacity", price: "$50.00" },
];

const Training_Products = () => {
	const navigate = useNavigate();

	const handleQuickViewClick = () => {
		navigate("/coming-soon");
	};

	return (
		<section className="training-section" aria-labelledby="training-products-title">
			<div className="container">
				<div className="training-header">
					<span className="eyebrow eyebrow--center">
						Health &amp; social care
					</span>
					<h2 className="section-title training-title" id="training-products-title">
						Training Products
					</h2>
					<p className="section-lead training-lead">
						Accredited, face-to-face courses covering everything your
						team needs to deliver safe, compassionate care.
					</p>
				</div>

				<div className="training-slider">
					<Slider {...trainingSettings}>
						{trainingSlidesData.map((data, index) => (
							<div key={index}>
								<article className="training-card">
									<div className="training-card-media">
										<img
											src={data.src}
											alt={data.desc}
											loading="lazy"
										/>
										<button
											type="button"
											className="training-quick-view"
											onClick={handleQuickViewClick}
										>
											Quick View
										</button>
									</div>
									<div className="training-card-body">
										<h3 className="training-card-title">
											{data.desc}
										</h3>
										<div className="training-card-footer">
											<span className="training-price">
												{data.price}
											</span>
											<span className="training-badge">
												Course
											</span>
										</div>
									</div>
								</article>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default Training_Products;
