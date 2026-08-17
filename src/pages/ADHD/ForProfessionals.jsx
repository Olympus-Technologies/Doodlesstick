import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Navbar } from "../../components/Navbar"
import { Seo } from "../../components/Seo"
import { Reveal } from "../../components/Reveal"
import "./ADHD.css"

const informationItems = [
	"Patient demographics",
	"Reason for referral",
	"Presenting difficulties",
	"Developmental history",
	"Relevant mental health history",
	"Relevant physical health history",
	"Current medication",
	"Previous ADHD/neurodevelopmental assessments",
	"Safeguarding information",
	"Relevant risk information",
	"Previous reports",
	"School information where applicable",
	"Relevant correspondence from other professionals",
]

export default function ForProfessionals() {
	return (
		<>
			<Seo
				path="/adhd/for-professionals"
				title="For GPs & Healthcare Professionals | Doodlesstick Limited"
				description="Information for GPs, healthcare professionals, commissioners and organisations regarding our ADHD referral pathways and clinical processes."
			/>
			<Navbar />

			<main>
				<section className="adhd-hero" aria-labelledby="fp-hero-title">
					<div className="eyebrow eyebrow--center">
						<i className="fa-solid fa-user-doctor" aria-hidden="true" />
						For Healthcare Professionals
					</div>
					<h1 id="fp-hero-title">
						Information for Professionals
					</h1>
					<p className="lead">
						Doodlesstick welcomes enquiries from GPs, healthcare professionals,
						commissioners and other organisations regarding our ADHD services.
					</p>
				</section>

				<section className="adhd-section" aria-labelledby="fp-clinical-title">
					<div className="adhd-section-inner">
						<Reveal>
							<h2 id="fp-clinical-title" className="section-title">
								Our Clinical <span className="accent">Pathway</span>
							</h2>
							<p>
								Our clinical pathway is designed to support comprehensive
								assessment, appropriate diagnosis and evidence-based treatment.
							</p>
						</Reveal>
					</div>
				</section>

				<section className="adhd-section adhd-section--alt" aria-labelledby="fp-referrals-title">
					<div className="adhd-section-inner">
						<Reveal>
							<h2 id="fp-referrals-title" className="section-title">
								Private <span className="accent">Referrals</span>
							</h2>
							<p>
								Healthcare professionals may refer or signpost patients wishing
								to access our private service. Where appropriate and with the
								patient's consent, relevant clinical information can be shared
								with their GP and other healthcare professionals involved in
								their care.
							</p>
						</Reveal>

						<Reveal delay={100}>
							<h3 style={{ marginTop: "36px", marginBottom: "12px", fontSize: "20px", fontWeight: 700 }}>
								Information We May Request
							</h3>
							<p>
								To support the assessment process, we may request the following
								information:
							</p>
							<ul className="adhd-content-list">
								{informationItems.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</Reveal>

						<Reveal delay={200}>
							<div className="adhd-info-box" style={{ marginTop: "32px" }}>
								<p>
									<strong>NHS Right to Choose:</strong> Once Doodlesstick is
									formally able to accept NHS Right to Choose referrals, this
									section will provide GP Referral Forms, Patient Choice Letters,
									Referral Criteria and a Secure Referral portal.
								</p>
							</div>
						</Reveal>

						<Reveal delay={300}>
							<div style={{ marginTop: "32px", textAlign: "center" }}>
								<Link to="/adhd/enquiry" className="btn btn-mint">
									Professional Enquiry
								</Link>
							</div>
						</Reveal>
					</div>
				</section>
			</main>

			<Footer />
		</>
	)
}
