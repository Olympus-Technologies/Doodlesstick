import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { Seo } from "../../../components/Seo";
import { Reveal } from "../../../components/Reveal";
import ChildrenImg from "../../../images/children_care.webp";

const Children_Care_Services = () => {
	return (
		<>
			<Seo
				path="/children-care-services"
				title="Children Care Services | Doodlesstick Limited — Therapeutic Care 8–18"
				description="Doodlesstick provides safe, nurturing therapeutic residential and supported living care for children and young people aged 8 to 18 with autism, learning disabilities, mental health challenges and complex sensory needs."
			/>
			<Navbar />

			<main>
				<section className="care" aria-labelledby="children-title">
					<div className="care-container">
						<div className="care-image">
							<Reveal>
								<img
									src={ChildrenImg}
									className="object-cover object-top"
									alt="Children care services at Doodlesstick"
									loading="lazy"
								/>
							</Reveal>
							<Reveal className="care-card" delay={80}>
								<h2 id="children-title">
									Children Care Services
								</h2>
								<h3 className="care-subtitle">
									Therapeutic Residential/Supported living Care
									for Children and Young People Aged 8–18
								</h3>
								<ul>
									<li>
										At Doodles Stick, we are dedicated to
										providing a safe, nurturing, and
										therapeutic home environment for children
										and young people aged 8 to 18. Our
										long-term residential placements are
										designed to support individuals with
										autism spectrum disorder, learning
										disabilities, mental health challenges,
										and complex sensory needs.
										<br />
										<br />
										We believe every child deserves a place
										where they feel understood, supported,
										and empowered to grow. Our approach
										combines therapeutic care with
										individualized support plans, ensuring
										each young person can develop at their
										own pace and in their own way.
									</li>
								</ul>
								<strong className="care-section-label">
									What we offer
								</strong>
								<ul>
									<li>
										Therapeutic Residential Placements
										<br />- Warm, stable homes that prioritize
										emotional wellbeing and developmental
										needs.
									</li>
									<li>
										Specialist Support for Autism & Sensory
										Needs
										<br />- Environments tailored to meet the
										unique sensory and communication needs of
										young people with ASD.
									</li>
									<li>
										Holistic Mental Health Support
										<br />- A trauma-informed approach, led by
										experienced staff and supported by
										professionals.
									</li>
									<li>
										Educational and Life Skills Development
										<br />- Empowering young people to achieve
										independence, confidence, and a brighter
										future.
									</li>
								</ul>
								<h3 className="care-subtitle">
									Our Commitment
								</h3>
								<p className="care-paragraph">
									At Doodles Stick, we are more than just a
									care provider — we are a family. Every young
									person is valued, respected, and supported to
									reach their full potential. We work closely
									with families, local authorities, educators,
									and healthcare professionals to create an
									environment of trust, safety, and
									opportunity.
								</p>
							</Reveal>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default Children_Care_Services;
