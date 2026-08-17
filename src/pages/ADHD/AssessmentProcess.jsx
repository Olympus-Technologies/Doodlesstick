import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Navbar } from "../../components/Navbar"
import { Seo } from "../../components/Seo"
import { Reveal } from "../../components/Reveal"
import "./ADHD.css"

const steps = [
	{
		title: "Enquire or Book",
		desc: "Tell us what you are looking for.",
	},
	{
		title: "Initial Screening",
		desc: "We review the information provided to establish whether our service appears appropriate for your needs.",
	},
	{
		title: "Pre-Assessment Questionnaires",
		desc: "Complete the required questionnaires and provide supporting information.",
	},
	{
		title: "Clinical Assessment",
		desc: "Attend your assessment with an appropriately qualified clinician.",
	},
	{
		title: "Clinical Review",
		desc: "Your assessment information and supporting evidence are reviewed.",
	},
	{
		title: "Outcome",
		desc: "Your clinician discusses the assessment outcome with you.",
	},
	{
		title: "Clinical Report",
		desc: "Receive your report and recommendations where this forms part of your assessment package.",
	},
	{
		title: "Treatment & Support",
		desc: "Where appropriate, discuss medication, psychological support, ADHD strategies or other recommendations.",
	},
]

export default function AssessmentProcess() {
	return (
		<>
			<Seo
				path="/adhd/assessment-process"
				title="Our ADHD Assessment Process | Doodlesstick Limited"
				description="Understand each stage of our ADHD assessment process, from initial enquiry through clinical assessment, diagnosis, report and ongoing treatment support."
			/>
			<Navbar />

			<main>
				<section className="adhd-hero" aria-labelledby="ap-hero-title">
					<div className="eyebrow eyebrow--center">
						Our ADHD Assessment Process
					</div>
					<h1 id="ap-hero-title">What to Expect</h1>
					<p className="lead">
						We want you to understand what happens at every stage.
					</p>
				</section>

				<section className="adhd-section" aria-labelledby="ap-steps-title">
					<div className="adhd-section-inner">
						<Reveal>
							<div className="eyebrow eyebrow--center">
								The Journey
							</div>
							<h2 id="ap-steps-title" className="section-title" style={{ textAlign: "center" }}>
								Our <span className="accent">Assessment</span> Steps
							</h2>
							<p className="section-lead">
								Your ADHD assessment follows a clear, structured pathway.
								Each step is designed to give you the time and support you need.
							</p>
						</Reveal>
						<div className="adhd-timeline">
							{steps.map((s, i) => (
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

				<section className="adhd-section adhd-section--alt" aria-labelledby="ap-cta-title">
					<div className="adhd-section-inner" style={{ textAlign: "center" }}>
						<Reveal>
							<h2 id="ap-cta-title" className="section-title">
								Ready to Begin?
							</h2>
							<p className="section-lead">
								Take the first step towards understanding your ADHD.
							</p>
							<div className="hero-ctas">
								<Link to="/adhd/book" className="btn btn-mint">
									Book My Assessment
								</Link>
								<Link to="/adhd/enquiry" className="btn btn-ghost">
									Make an Enquiry
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
