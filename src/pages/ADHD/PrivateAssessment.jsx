import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Navbar } from "../../components/Navbar"
import { Seo } from "../../components/Seo"
import { Reveal } from "../../components/Reveal"
import "./ADHD.css"

const difficulties = [
	"maintaining attention",
	"concentrating on tasks",
	"completing activities",
	"organisation",
	"remembering appointments or responsibilities",
	"losing important belongings",
	"procrastination",
	"restlessness",
	"impulsive decision-making",
	"interrupting or speaking before thinking",
	"managing competing demands",
	"education or employment",
	"relationships",
	"everyday administration",
]

const assessmentSteps = [
	{
		title: "Initial Enquiry",
		desc: "Complete our online enquiry or booking form. We will ask for basic information about the reason you are seeking an assessment.",
	},
	{
		title: "Pre-Assessment Information",
		desc: "Before your appointment, you may be asked to complete questionnaires and provide relevant background information. Where appropriate, we may request information from somebody who knows you well. For younger patients, information from parents/carers and education settings may form an important part of the assessment.",
	},
	{
		title: "Clinical Assessment",
		desc: "You will meet an appropriately qualified clinician who will undertake a comprehensive assessment. Areas considered may include: presenting difficulties, ADHD symptoms, childhood and developmental history, education, employment, relationships, social functioning, daily living, emotional wellbeing, physical health, mental health, previous diagnoses, medication, substance use where relevant, family history and functional impairment.",
	},
	{
		title: "Clinical Review",
		desc: "The information obtained during the assessment is considered against recognised diagnostic criteria and relevant clinical guidance. Additional information may occasionally be required before an outcome can be reached.",
	},
	{
		title: "Outcome",
		desc: "Your clinician will explain the outcome. Possible outcomes include: ADHD diagnosed, ADHD not diagnosed, or further information and assessment required.",
	},
	{
		title: "Written Report",
		desc: "Where included within the service purchased, a clinical report will be prepared documenting the assessment findings, outcome and recommendations.",
	},
	{
		title: "Treatment Discussion",
		desc: "Where ADHD is diagnosed, appropriate treatment and support options can be discussed.",
	},
]

export default function PrivateAssessment() {
	return (
		<>
			<Seo
				path="/adhd/private-assessment"
				title="Private ADHD Assessment | Doodlesstick Limited"
				description="Access a comprehensive private ADHD assessment through Doodlesstick without requiring an NHS Right to Choose referral."
			/>
			<Navbar />

			<main>
				<section className="adhd-hero" aria-labelledby="pa-hero-title">
					<div className="eyebrow eyebrow--center">
						<i className="fa-solid fa-clipboard-check" aria-hidden="true" />
						Private ADHD Assessment
					</div>
					<h1 id="pa-hero-title">
						Private ADHD Assessments
					</h1>
					<p className="lead">
						You can approach Doodlesstick directly about a private ADHD
						assessment. Our private pathway is designed to provide timely access
						to a comprehensive assessment without requiring an NHS Right to
						Choose referral.
					</p>
					<div className="hero-ctas">
						<Link to="/adhd/book" className="btn btn-mint">
							Book My ADHD Assessment
						</Link>
						<Link to="/adhd/enquiry" className="btn btn-ghost">
							Make an Enquiry
						</Link>
					</div>
				</section>

				<section className="adhd-section" aria-labelledby="pa-who-title">
					<div className="adhd-section-inner">
						<Reveal>
							<div className="eyebrow eyebrow--center">
								Overview
							</div>
							<h2 id="pa-who-title" className="section-title" style={{ textAlign: "center" }}>
								Who Can Request an <span className="accent">Assessment?</span>
							</h2>
							<p style={{ textAlign: "center", maxWidth: 700, margin: "20px auto 0", fontSize: 16, lineHeight: 1.7, color: "var(--muted)" }}>
								People may seek an ADHD assessment for many reasons. You may
								have experienced longstanding difficulties with:
							</p>
						</Reveal>
						<ul className="adhd-content-list" style={{ maxWidth: 600, margin: "32px auto 0" }}>
							{difficulties.map((d) => (
								<li key={d}>{d}</li>
							))}
						</ul>
						<Reveal delay={100}>
							<div className="adhd-info-box" style={{ marginTop: 36 }}>
								<p>
									Experiencing some of these difficulties does not necessarily
									mean that you have ADHD. The purpose of an assessment is to
									explore your difficulties carefully and determine whether ADHD
									or another explanation may account for them.
								</p>
							</div>
						</Reveal>
					</div>
				</section>

				<section className="adhd-section adhd-section--alt" aria-labelledby="pa-steps-title">
					<div className="adhd-section-inner">
						<Reveal>
							<div className="eyebrow eyebrow--center">
								Assessment Process
							</div>
							<h2 id="pa-steps-title" className="section-title" style={{ textAlign: "center" }}>
								What Does an ADHD <span className="accent">Assessment</span> Involve?
							</h2>
						</Reveal>
						<div className="adhd-timeline">
							{assessmentSteps.map((s, i) => (
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

				<section className="adhd-section" aria-labelledby="pa-cta-title">
					<div className="adhd-section-inner">
						<Reveal>
							<div className="adhd-banner">
								<h2 id="pa-cta-title">Ready to Take the Next Step?</h2>
								<p>
									Book your private ADHD assessment today and receive a
									comprehensive evaluation from an appropriately qualified clinician.
								</p>
								<Link to="/adhd/book" className="btn btn-mint">
									Book My ADHD Assessment
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
