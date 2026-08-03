import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { Seo } from "../../../components/Seo";
import { Reveal } from "../../../components/Reveal";
import TrainingImg from "../../../images/healthcare_recruitment.webp";
import Training_Products from "../../../components/training_products/training_products";

const Healthcare_Training = () => {
	return (
		<>
			<Seo
				path="/healthcare-training"
				title="Healthcare Training | Doodlesstick Limited — Accredited Courses"
				description="Fully accredited face to face healthcare training from Doodlesstick: moving and handling, first aid, medication awareness, safeguarding, dementia, autism and over 30 health and social care courses."
			/>
			<Navbar />

			<main>
				<section className="care" aria-labelledby="training-title">
					<div className="care-container">
						<div className="care-image">
							<Reveal>
								<img
									src={TrainingImg}
									alt="Healthcare training courses at Doodlesstick"
									loading="lazy"
								/>
							</Reveal>
							<Reveal className="care-card" delay={80}>
								<h2 id="training-title">Healthcare Training</h2>
								<ul>
									<li>
										We are fully accredited to provide face
										to face training to our staff in health
										and social care topics including the
										following:
										<br />
										<br />- People Movers, moving and handling.
										<br />- First Aid, Adult Basic life
										support.
										<br />- COSHH Awareness
										<br />- Dementia Awareness
										<br />- Diabetes Awareness
										<br />- Effective Communication
										<br />- End of life care
										<br />- Epilepsy Awareness
										<br />- Equality and Diversity
										<br />- Fire Safety and Fire Marshall
										<br />- Food hygiene
										<br />- GDPR Awareness
										<br />- Health and safety
										<br />- Infection control
										<br />- Medication Awareness
										<br />- Mental Capacity
										<br />- Mental Health Awareness
										<br />- Nutrition and fluids
										<br />- Person centred care
										<br />- Personal and pressure care
										<br />- Prevention of falls
										<br />- Risk assessment
										<br />- Safeguarding Adult at risk
										<br />- Safeguarding Children at risk
										<br />- Stress Awareness
										<br />- Understanding your role, personal
										development, and duty of care
										<br />- Whistle blowing
										<br />- Autism awareness
										<br />- Learning disabilities awareness
										<br />- Equality and diversity
										<br />- Professional Boundaries
										<br />- Positive behavior support
										<br />- Person centred planning
									</li>
								</ul>
							</Reveal>
						</div>
					</div>
				</section>

				<Training_Products />
			</main>

			<Footer />
		</>
	);
};

export default Healthcare_Training;
