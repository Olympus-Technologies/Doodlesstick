import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Navbar } from "../../components/Navbar"
import { Seo } from "../../components/Seo"
import { Reveal } from "../../components/Reveal"
import "./ADHD.css"

const futureSteps = [
	{ title: "Speak to GP", desc: "Book an appointment with your GP to discuss concerns." },
	{ title: "Discuss ADHD concerns", desc: "Talk through the difficulties you or your child are experiencing." },
	{ title: "Request clinically appropriate referral", desc: "Ask your GP for a referral for ADHD assessment where clinically appropriate." },
	{ title: "Choose eligible provider", desc: "Select an appropriate healthcare provider that accepts NHS Right to Choose referrals." },
	{ title: "GP submits referral", desc: "Your GP sends the referral to your chosen provider." },
	{ title: "Referral reviewed", desc: "The provider reviews the referral to confirm it meets clinical criteria." },
	{ title: "Pre-assessment information", desc: "Complete questionnaires and provide supporting information before your assessment." },
	{ title: "ADHD assessment", desc: "Attend a comprehensive assessment with a qualified clinician." },
	{ title: "Diagnostic outcome", desc: "Receive the outcome of your assessment." },
	{ title: "Treatment pathway where commissioned and clinically appropriate", desc: "Access treatment and support where the service is commissioned and clinically suitable." },
]

export default function NhsRightToChoose() {
	return (
		<>
			<Seo
				path="/adhd/nhs-right-to-choose"
				title="NHS Right to Choose ADHD Assessments | Doodlesstick Limited"
				description="Information about the NHS Right to Choose pathway for ADHD assessments and Doodlesstick's future plans for accepting eligible referrals."
			/>
			<Navbar />

			<main>
				<section className="adhd-hero" aria-labelledby="nhs-hero-title">
					<div className="eyebrow eyebrow--center">
						NHS Right to Choose
					</div>
					<h1 id="nhs-hero-title">
						NHS Right to Choose ADHD Assessments
					</h1>
					<p className="lead">
						In England, eligible NHS patients may have a legal right to
						choose an appropriate healthcare provider for certain services
						when they are referred by an appropriate healthcare professional.
					</p>
				</section>

				<section className="adhd-section" aria-labelledby="nhs-info-title">
					<div className="adhd-section-inner">
						<Reveal>
							<div className="adhd-info-box">
								<p>
									Doodlesstick should only describe itself as accepting NHS
									Right to Choose referrals once the necessary contractual
									and commissioning requirements have been established.
								</p>
							</div>
							<div className="adhd-warning-box">
								<p>
									Our NHS Right to Choose ADHD pathway is currently under
									development. We are not currently accepting Right to Choose
									referrals. Patients can still access our private ADHD services.
								</p>
							</div>
						</Reveal>
						<div className="hero-ctas" style={{ marginTop: "32px" }}>
							<Link to="/adhd/private-assessment" className="btn btn-mint">
								Private ADHD Assessment
							</Link>
							<Link to="/adhd/enquiry" className="btn btn-ghost">
								Register Interest
							</Link>
						</div>
					</div>
				</section>

				<section className="adhd-section adhd-section--alt" aria-labelledby="nhs-future-title">
					<div className="adhd-section-inner">
						<Reveal>
							<div className="eyebrow eyebrow--center">
								Coming Soon
							</div>
							<h2 id="nhs-future-title" className="section-title" style={{ textAlign: "center" }}>
								Future Right to Choose <span className="accent">Pathway</span>
							</h2>
							<p className="section-lead">
								Once our Right to Choose pathway is established, the following
								steps outline how a typical referral will work.
							</p>
						</Reveal>
						<div className="adhd-timeline">
							{futureSteps.map((s, i) => (
								<Reveal key={s.title} delay={i * 80}>
									<div className="adhd-timeline-step" data-step={i + 1}>
										<h3>{s.title}</h3>
										<p>{s.desc}</p>
									</div>
								</Reveal>
							))}
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	)
}
