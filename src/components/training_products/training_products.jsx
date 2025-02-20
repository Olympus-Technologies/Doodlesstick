import React from 'react'
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
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


const Training_Products = () => {
    const navigate = useNavigate();
    
	const [trainingSettings, setSettings] = useState({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		cssEase: "linear",
	});

    const trainingSlidesData = [
		{
			src: NutritionAndFluids,
			desc: "Nutrition and Fluids",
			price: "$30.00",
		},
		{
			src: PersonCenteredCare,
			desc: "Person Centered Care",
			price: "$40.00",
		},
		{
			src: PersonalAndPressureCare,
			desc: "Personal and Pressure Care",
			price: "$50.00",
		},
		{
			src: PreventionOfFalls,
			desc: "Prevention of Falls",
			price: "$60.00",
		},
		{
			src: RiskAssessment,
			desc: "Risk Assessment",
			price: "$45.00",
		},
		{
			src: SafeGuardingAdultsAtRisk,
			desc: "Safeguarding Adults at Risk",
			price: "$50.00",
		},
		{
			src: SafeGuardingChildrenAtRisk,
			desc: "Safeguarding Children at Risk",
			price: "$34.00",
		},
		{
			src: StressAwareness,
			desc: "Stress Awareness",
			price: "$40.00",
		},
		{
			src: UnderstandingYourRole,
			desc: "Understanding your role, Personal Development and Duty of Care",
			price: "$55.00",
		},
		{
			src: WhistleBlowing,
			desc: "Whistle Blowing",
			price: "$35.00",
		},
		{
			src: AutismAwareness,
			desc: "Autism Awareness",
			price: "$40.00",
		},
		{
			src: LearningDisabilityAwareness,
			desc: "Learning Disabilities Awareness",
			price: "$25.00",
		},
		{
			src: ProfessionalBoundaries,
			desc: "Professional Boundaries",
			price: "$71.00",
		},
		{
			src: PositiveBehaviourSupport,
			desc: "Positive Behavior Support",
			price: "$46.00",
		},
		{
			src: MentalHealthAwareness,
			desc: "Mental Health Awareness",
			price: "$35.00",
		},
		{
			src: MentalCapacity,
			desc: "Mental Capacity",
			price: "$50.00",
		},
	];
    
    const handleQuickViewClick = () => {
        navigate('/coming-soon');
      };

	// useEffect(() => {
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

    //     }, []);

  return (
	<div class="training-section">
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
												<div className="training-quick-view" onClick={handleQuickViewClick}>
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
            )
}

export default Training_Products;