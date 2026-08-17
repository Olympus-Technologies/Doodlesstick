import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Navbar } from "../../components/Navbar"
import { Seo } from "../../components/Seo"
import { Reveal } from "../../components/Reveal"
import "./ADHD.css"

const whatWeMayAskFor = [
	"Your ADHD diagnostic report",
	"Date of diagnosis",
	"Details of the diagnosing provider",
	"Previous treatment",
	"Current medication",
	"Previous medication trials",
	"GP details",
	"Relevant medical information",
	"Recent physical-health observations where required",
]

export default function ExistingDiagnosis() {
	return (
		<>
			<Seo
				path="/adhd/existing-diagnosis"
				title="Existing ADHD Diagnosis | Doodlesstick Limited"
				description="Already diagnosed with ADHD? Doodlesstick can review your existing diagnosis and discuss treatment, medication or review options."
			/>
			<Navbar />

			<main>
				<section className="adhd-hero" aria-labelledby="ed-hero-title">
					<div className="eyebrow eyebrow--center">
						<i className="fa-solid fa-file-medical" aria-hidden="true" />
						Existing Diagnosis
					</div>
					<h1 id="ed-hero-title">
						Already Diagnosed With ADHD?
					</h1>
					<p className="lead">
						If you already have an ADHD diagnosis and are seeking treatment,
						medication or a review, you may not necessarily require a completely
						new diagnostic assessment.
					</p>
				</section>

				<section className="adhd-section" aria-labelledby="ed-review-title">
					<div className="adhd-section-inner">
						<Reveal>
							<h2 id="ed-review-title" className="section-title">
								Clinical <span className="accent">Review</span>
							</h2>
							<p>
								We will need to review your existing diagnostic information
								before determining the appropriate pathway.
							</p>
						</Reveal>

						<Reveal delay={100}>
							<h3 style={{ marginTop: "36px", marginBottom: "12px", fontSize: "20px", fontWeight: 700 }}>
								What We May Ask For
							</h3>
							<p>
								To review your existing diagnosis, we may request the following
								information:
							</p>
							<ul className="adhd-content-list">
								{whatWeMayAskFor.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</Reveal>

						<Reveal delay={200}>
							<div className="adhd-warning-box" style={{ marginTop: "32px" }}>
								<p>
									Acceptance of an existing diagnosis for treatment purposes is
									subject to clinical review. An existing diagnosis does not
									automatically mean that Doodlesstick will be able to prescribe
									medication.
								</p>
							</div>
						</Reveal>

						<Reveal delay={300}>
							<div style={{ marginTop: "32px", textAlign: "center" }}>
								<Link to="/adhd/enquiry" className="btn btn-mint">
									Existing Diagnosis Enquiry
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
