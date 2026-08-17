import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Navbar } from "../../components/Navbar"
import { Seo } from "../../components/Seo"
import { Reveal } from "../../components/Reveal"
import "./ADHD.css"

const prescriberReview = [
	"diagnostic information",
	"medical history",
	"mental health history",
	"current medication",
	"allergies",
	"cardiovascular history",
	"blood pressure and pulse",
	"height and weight",
	"family medical history",
	"potential contraindications",
	"other relevant clinical information",
]

const titrationMonitoring = [
	"symptom response",
	"side effects",
	"blood pressure",
	"pulse",
	"weight",
	"sleep",
	"appetite",
	"mood",
	"treatment adherence",
	"overall functioning",
]

const nonMedSupport = [
	"ADHD psychoeducation",
	"psychological interventions",
	"ADHD-focused coaching",
	"organisational strategies",
	"executive-functioning support",
	"sleep strategies",
	"lifestyle recommendations",
	"support with education or employment",
	"reasonable-adjustment recommendations",
]

export default function Treatment() {
	return (
		<>
			<Seo
				path="/adhd/treatment"
				title="ADHD Treatment & Medication | Doodlesstick Limited"
				description="Individualised ADHD treatment including medication, titration, monitoring and non-medication support delivered by suitably qualified healthcare professionals."
			/>
			<Navbar />

			<main>
				<section className="adhd-hero" aria-labelledby="tr-hero-title">
					<div className="eyebrow eyebrow--center">
						<i className="fa-solid fa-pills" aria-hidden="true" />
						Treatment & Support
					</div>
					<h1 id="tr-hero-title">
						ADHD Treatment &amp; Medication
					</h1>
					<p className="lead">
						ADHD affects people differently. Treatment should therefore be based
						upon the individual's symptoms, circumstances, physical and mental
						health, preferences and treatment goals.
					</p>
					<div className="hero-ctas">
						<Link to="/adhd/enquiry" className="btn btn-mint">
							Enquire About ADHD Treatment
						</Link>
						<Link to="/adhd/book" className="btn btn-ghost">
							Book an Assessment
						</Link>
					</div>
				</section>

				<section className="adhd-section" aria-labelledby="tr-overview-title">
					<div className="adhd-section-inner">
						<Reveal>
							<div className="eyebrow eyebrow--center">
								Overview
							</div>
							<h2 id="tr-overview-title" className="section-title" style={{ textAlign: "center" }}>
								Treatment <span className="accent">Overview</span>
							</h2>
							<p style={{ textAlign: "center", maxWidth: 660, margin: "20px auto 0", fontSize: 16, lineHeight: 1.7, color: "var(--muted)" }}>
								Receiving an ADHD diagnosis does not automatically mean
								medication will be recommended. Your clinician will discuss the
								most appropriate options based on your individual circumstances.
							</p>
						</Reveal>
					</div>
				</section>

				<section className="adhd-section adhd-section--alt" aria-labelledby="tr-med-title">
					<div className="adhd-section-inner">
						<Reveal>
							<div className="eyebrow eyebrow--center">
								Medication
							</div>
							<h2 id="tr-med-title" className="section-title" style={{ textAlign: "center" }}>
								ADHD <span className="accent">Medication</span>
							</h2>
							<p style={{ textAlign: "center", maxWidth: 660, margin: "20px auto 0", fontSize: 16, lineHeight: 1.7, color: "var(--muted)" }}>
								A prescribing clinician will carry out a thorough assessment
								before any medication is considered. The prescriber review
								includes consideration of:
							</p>
						</Reveal>
						<ul className="adhd-content-list" style={{ maxWidth: 560, margin: "32px auto 0" }}>
							{prescriberReview.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
						<Reveal delay={100}>
							<div className="adhd-warning-box" style={{ marginTop: 32 }}>
								<p>
									Further investigations or information from your GP or another
									healthcare professional may sometimes be required before
									medication can be prescribed.
								</p>
							</div>
						</Reveal>
					</div>
				</section>

				<section className="adhd-section" aria-labelledby="tr-titration-title">
					<div className="adhd-section-inner">
						<Reveal>
							<div className="eyebrow eyebrow--center">
								Titration
							</div>
							<h2 id="tr-titration-title" className="section-title" style={{ textAlign: "center" }}>
								Medication <span className="accent">Titration</span>
							</h2>
							<p style={{ textAlign: "center", maxWidth: 660, margin: "20px auto 0", fontSize: 16, lineHeight: 1.7, color: "var(--muted)" }}>
								Finding the most appropriate medication and dose takes time and
								careful monitoring. During titration your clinician will monitor:
							</p>
						</Reveal>
						<ul className="adhd-content-list" style={{ maxWidth: 500, margin: "32px auto 0" }}>
							{titrationMonitoring.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				</section>

				<section className="adhd-section adhd-section--alt" aria-labelledby="tr-ongoing-title">
					<div className="adhd-section-inner">
						<div className="adhd-grid">
							<Reveal>
								<div className="adhd-card spotlight">
									<div className="adhd-card-icon">
										<i className="fa-solid fa-arrows-rotate" aria-hidden="true" />
									</div>
									<h3 id="tr-ongoing-title">Ongoing Reviews</h3>
									<p>
										Once a stable medication regimen has been established,
										regular clinical reviews will be arranged to monitor
										effectiveness, manage any side effects and ensure treatment
										continues to meet your needs.
									</p>
								</div>
							</Reveal>
							<Reveal delay={80}>
								<div className="adhd-card spotlight">
									<div className="adhd-card-icon">
										<i className="fa-solid fa-handshake" aria-hidden="true" />
									</div>
									<h3 id="tr-shared-title">Shared Care</h3>
									<p>
										Where clinically appropriate, a request may be made for your
										GP to consider prescribing under a shared-care arrangement.
										Acceptance of shared care is at the discretion of the GP.
										Doodlesstick cannot guarantee that a GP will accept a
										shared-care request.
									</p>
								</div>
							</Reveal>
						</div>
					</div>
				</section>

				<section className="adhd-section" aria-labelledby="tr-nonmed-title">
					<div className="adhd-section-inner">
						<Reveal>
							<div className="eyebrow eyebrow--center">
								Non-Medication Support
							</div>
							<h2 id="tr-nonmed-title" className="section-title" style={{ textAlign: "center" }}>
								Non-Medication <span className="accent">Support</span>
							</h2>
							<p style={{ textAlign: "center", maxWidth: 660, margin: "20px auto 0", fontSize: 16, lineHeight: 1.7, color: "var(--muted)" }}>
								Medication is not the only option for managing ADHD. A range of
								non-medication support may also be considered:
							</p>
						</Reveal>
						<ul className="adhd-content-list" style={{ maxWidth: 540, margin: "32px auto 0" }}>
							{nonMedSupport.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				</section>

				<section className="adhd-section" aria-labelledby="tr-cta-title">
					<div className="adhd-section-inner">
						<Reveal>
							<div className="adhd-banner">
								<h2 id="tr-cta-title">Enquire About ADHD Treatment</h2>
								<p>
									Talk to our team about ADHD treatment options. We will help
									you find the most appropriate path based on your needs.
								</p>
								<Link to="/adhd/enquiry" className="btn btn-mint">
									Enquire About ADHD Treatment
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
