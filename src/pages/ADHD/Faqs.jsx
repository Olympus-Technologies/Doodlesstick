import { useState } from "react"
import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Navbar } from "../../components/Navbar"
import { Seo } from "../../components/Seo"
import { Reveal } from "../../components/Reveal"
import "./ADHD.css"

const faqs = [
	{
		q: "Do I need a GP referral for a private ADHD assessment?",
		a: "Generally, patients can approach the private service directly. However, involvement of your GP may be recommended where clinically appropriate.",
	},
	{
		q: "Does completing an ADHD questionnaire mean I have ADHD?",
		a: "No. Questionnaires can contribute useful information but do not by themselves establish an ADHD diagnosis.",
	},
	{
		q: "Is the assessment online?",
		a: "Remote assessments may be available where clinically appropriate. The appropriate format will depend upon the patient's circumstances and the nature of the assessment required.",
	},
	{
		q: "Will I receive a diagnosis during my appointment?",
		a: "Sometimes an outcome can be discussed following the assessment. In other circumstances, further information or clinical review may be necessary.",
	},
	{
		q: "What happens if I am not diagnosed with ADHD?",
		a: "Your clinician will explain why the diagnostic criteria were not considered to have been met and, where appropriate, make recommendations regarding other support or assessment.",
	},
	{
		q: "Can you prescribe ADHD medication?",
		a: "Where prescribing forms part of the available service, medication can only be considered following appropriate clinical assessment by a suitably qualified prescriber.",
	},
	{
		q: "Does an ADHD diagnosis guarantee medication?",
		a: "No. Medication must be clinically appropriate for the individual patient.",
	},
	{
		q: "Can my GP prescribe my medication afterwards?",
		a: "A shared-care request may be considered where clinically appropriate. However, acceptance is determined by the GP and/or relevant local NHS arrangements and cannot be guaranteed.",
	},
	{
		q: "Can you take over prescribing from another provider?",
		a: "Possibly. We will first need to review your existing diagnostic and treatment information. Additional assessment or investigations may be required.",
	},
	{
		q: "Can I use Right to Choose?",
		a: "Right to Choose applies in specific circumstances in England. Doodlesstick should only accept Right to Choose referrals once the appropriate NHS contractual arrangements are in place.",
	},
]

export default function Faqs() {
	const [openIndex, setOpenIndex] = useState(null)

	return (
		<>
			<Seo
				path="/adhd/faqs"
				title="ADHD FAQs | Doodlesstick Limited"
				description="Answers to common questions about ADHD assessment, diagnosis and treatment at Doodlesstick."
			/>
			<Navbar />

			<main>
				<section className="adhd-hero" aria-labelledby="faq-hero-title">
					<div className="eyebrow eyebrow--center">
						<i className="fa-solid fa-circle-question" aria-hidden="true" />
						FAQs
					</div>
					<h1 id="faq-hero-title">
						Frequently Asked Questions
					</h1>
					<p className="lead">
						Answers to common questions about ADHD assessment, diagnosis and
						treatment at Doodlesstick.
					</p>
				</section>

				<section className="adhd-section" aria-labelledby="faq-list-title">
					<div className="adhd-section-inner">
						<Reveal>
							<h2 id="faq-list-title" className="section-title" style={{ textAlign: "center" }}>
								Common <span className="accent">Questions</span>
							</h2>
						</Reveal>
						<div style={{ marginTop: "36px" }}>
							{faqs.map((faq, i) => (
								<Reveal key={i} delay={i * 40}>
									<div className={`adhd-faq-item ${openIndex === i ? "open" : ""}`}>
										<button className="adhd-faq-q" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
											{faq.q}
											<i className="fas fa-chevron-down" aria-hidden="true" />
										</button>
										<div className="adhd-faq-a">
											<div className="adhd-faq-a-inner">{faq.a}</div>
										</div>
									</div>
								</Reveal>
							))}
						</div>
					</div>
				</section>

				<section className="adhd-section adhd-section--alt" aria-labelledby="faq-cta-title">
					<div className="adhd-section-inner" style={{ textAlign: "center" }}>
						<Reveal>
							<h2 id="faq-cta-title" className="section-title">
								Ready to <span className="accent">Get Started</span>?
							</h2>
							<p className="section-lead">
								If your question is not answered here, please do not hesitate
								to get in touch.
							</p>
							<div className="hero-ctas">
								<Link to="/adhd/book" className="btn btn-mint">
									Book an ADHD Assessment
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
