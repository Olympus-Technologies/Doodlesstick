import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { Seo } from "../../../components/Seo";
import { Reveal } from "../../../components/Reveal";
import RecruitmentImg from "../../../images/healthcare_recruitment.webp";

const Healthcare_Recruitment = () => {
	return (
		<>
			<Seo
				path="/healthcare-recruitment"
				title="Healthcare Recruitment | Doodlesstick Limited — HCA, Support Worker & Nurses"
				description="Doodlesstick recruits healthcare assistants, support workers, nurses, doctors, behaviour therapists, occupational and speech & language therapists for permanent, contract and agency roles."
			/>
			<Navbar />

			<main>
				<section className="care" aria-labelledby="recruitment-title">
					<div className="care-container">
						<div className="care-image">
							<Reveal>
								<img
									src={RecruitmentImg}
									className="object-top object-cover"
									alt="Healthcare recruitment at Doodlesstick"
									loading="lazy"
								/>
							</Reveal>
							<Reveal className="care-card" delay={80}>
								<h2 id="recruitment-title">
									Healthcare Recruitment
								</h2>
								<ul>
									<li>
										We recruit a wide range of healthcare
										professionals who are then placed with
										other care facilities to work as
										permanent, contract or temporary agency
										staffing basis.
									</li>
									<li>
										We recruit:
										<br />
										<br />- Healthcare Assistants
										<br />- Support workers
										<br />- Nurses
										<br />- Doctors
										<br />- Behavior therapist
										<br />- Occupational Therapist
										<br />- Speech and language therapist
										<br />- All other allied health
										professionals
									</li>
								</ul>
							</Reveal>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default Healthcare_Recruitment;
