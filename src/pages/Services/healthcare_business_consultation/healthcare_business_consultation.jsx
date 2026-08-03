import { Link } from "react-router-dom";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { Seo } from "../../../components/Seo";
import { Reveal } from "../../../components/Reveal";
import Business_ConsultationImg from "../../../images/healthcare_recruitment.webp";

const Healthcare_Business_Consultation = () => {
	return (
		<>
			<Seo
				path="/healthcare-business-consultation"
				title="Healthcare Business Consultancy | Doodlesstick Limited — CQC Support"
				description="Expert healthcare business consultancy from Doodlesstick: CQC registration, policies and procedures, business plans, mock inspections, KLOE statements, financial viability and bespoke support."
			/>
			<Navbar />

			<main>
				<section
					className="care"
					aria-labelledby="consultation-title"
				>
					<div className="care-container">
						<div className="care-image">
							<Reveal>
								<img
									src={Business_ConsultationImg}
									className="object-cover object-top"
									alt="Healthcare business consultancy at Doodlesstick"
									loading="lazy"
								/>
							</Reveal>
							<Reveal className="care-card" delay={80}>
								<h2 id="consultation-title">
									Healthcare Business Consultancy
								</h2>
								<ul>
									<li>
										We are subject matter experts in the
										industry and as a result we are happy to
										support others in their healthcare
										business projects.
										<br />
										<br />- Registration with CQC
										<br />- Policies and procedures for both
										CQC and general operations
										<br />- Operating formats and templates
										<br />- Business plans
										<br />- Mock Inspections and compliance
										Audits
										<br />- CQC interview preparations
										<br />- CQC KLOE Statement
										<br />- CQC Financial Viability
										<br />- Contract information and tailored
										business opportunities, tendering, PSL
										and third party contracting.
										<br />- Relevant bespoke support as
										required by your organization.
									</li>
								</ul>
								<div className="button-container">
									<Link to="/bookings" className="care-booking">
										Book Now
									</Link>
								</div>
							</Reveal>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default Healthcare_Business_Consultation;
