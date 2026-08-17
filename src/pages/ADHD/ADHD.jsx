import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Seo } from "../../components/Seo";
import { Reveal } from "../../components/Reveal";
import "./ADHD.css";

const adhdServices = [
	{
		icon: "fa-solid fa-clipboard-check",
		title: "ADHD Assessments",
		desc: "Comprehensive assessments exploring symptoms, developmental history and the impact on everyday functioning.",
		to: "/adhd/private-assessment",
	},
	{
		icon: "fa-solid fa-stethoscope",
		title: "ADHD Diagnosis",
		desc: "A diagnosis based on developmental history, functional impairment, supporting information and recognised diagnostic criteria.",
		to: "/adhd/private-assessment",
	},
	{
		icon: "fa-solid fa-pills",
		title: "ADHD Treatment",
		desc: "Individualised treatment including medication, titration, monitoring, psychoeducation and psychological support.",
		to: "/adhd/treatment",
	},
	{
		icon: "fa-solid fa-heart-pulse",
		title: "Medication Management",
		desc: "Ongoing clinical monitoring, medication reviews, shared care arrangements and non-medication support options.",
		to: "/adhd/treatment",
	},
];

const quickLinks = [
	{
		icon: "fa-solid fa-user-doctor",
		title: "Private ADHD Assessment",
		desc: "Access timely, comprehensive assessment without requiring an NHS referral.",
		to: "/adhd/private-assessment",
	},
	{
		icon: "fa-solid fa-list-check",
		title: "Our Assessment Process",
		desc: "Understand each stage from enquiry through to diagnosis, report and treatment.",
		to: "/adhd/assessment-process",
	},
	{
		icon: "fa-solid fa-hospital",
		title: "NHS Right to Choose",
		desc: "Information about the NHS Right to Choose pathway and our future plans.",
		to: "/adhd/nhs-right-to-choose",
	},
	{
		icon: "fa-solid fa-user-doctor",
		title: "For GPs & Professionals",
		desc: "Referral information, clinical pathways and how we work with healthcare professionals.",
		to: "/adhd/for-professionals",
	},
	{
		icon: "fa-solid fa-file-medical",
		title: "Existing ADHD Diagnosis",
		desc: "Already diagnosed? We can review your existing diagnosis and discuss treatment options.",
		to: "/adhd/existing-diagnosis",
	},
	{
		icon: "fa-solid fa-circle-question",
		title: "ADHD FAQs",
		desc: "Answers to common questions about ADHD assessment, diagnosis and treatment.",
		to: "/adhd/faqs",
	},
];

const ADHD = () => {
	return (
		<>
			<Seo
				path="/adhd"
				title="ADHD Assessment, Diagnosis & Treatment | Doodlesstick Limited"
				description="Doodlesstick provides person-centred ADHD assessment, diagnosis and treatment services delivered by suitably qualified healthcare professionals in Northampton and across the Midlands."
			/>
			<Navbar />

			<main>
				<section className="adhd-hero" aria-labelledby="adhd-hero-title">
					<div className="eyebrow eyebrow--center">
						<i className="fa-solid fa-brain" aria-hidden="true" />
						Specialist ADHD Services
					</div>
					<h1 id="adhd-hero-title">
						Understand Your ADHD.<br />
						Access the Right Support.
					</h1>
					<p className="lead">
						If you think that you, your child or someone you care for may have
						Attention Deficit Hyperactivity Disorder (ADHD), accessing a
						comprehensive assessment can be an important step towards understanding
						the difficulties being experienced and identifying the right support.
					</p>
					<div className="hero-ctas">
						<Link to="/adhd/book" className="btn btn-mint">
							Book a Private ADHD Assessment
						</Link>
						<Link to="/adhd/enquiry" className="btn btn-ghost">
							Make an ADHD Enquiry
						</Link>
					</div>
				</section>

				<section className="adhd-section" aria-labelledby="adhd-services-title">
					<div className="adhd-section-inner">
						<Reveal>
							<div className="eyebrow eyebrow--center">
								What We Offer
							</div>
							<h2 id="adhd-services-title" className="section-title" style={{ textAlign: "center" }}>
								Our ADHD <span className="accent">Services</span>
							</h2>
							<p className="section-lead">
								Doodlesstick provides person-centred ADHD assessment, diagnosis
								and treatment services delivered within an appropriate clinical
								governance framework.
							</p>
						</Reveal>
						<div className="adhd-grid">
							{adhdServices.map((s, i) => (
								<Reveal key={s.title} delay={i * 80}>
									<Link to={s.to} className="adhd-card spotlight" style={{ textDecoration: "none" }}>
										<div className="adhd-card-icon">
											<i className={s.icon} aria-hidden="true" />
										</div>
										<h3>{s.title}</h3>
										<p>{s.desc}</p>
									</Link>
								</Reveal>
							))}
						</div>
					</div>
				</section>

				<section className="adhd-section adhd-section--alt" aria-labelledby="adhd-expect-title">
					<div className="adhd-section-inner">
						<Reveal>
							<div className="eyebrow eyebrow--center">
								What to Expect
							</div>
							<h2 id="adhd-expect-title" className="section-title" style={{ textAlign: "center" }}>
								A Straightforward <span className="accent">Pathway</span>
							</h2>
							<p className="section-lead">
								We aim to provide a supportive pathway from your first enquiry
								through assessment, diagnosis and, where clinically appropriate,
								treatment and ongoing support.
							</p>
						</Reveal>
						<div className="adhd-timeline">
							{[
								{ step: "Enquire or Book", desc: "Start with our online enquiry or booking form. Tell us what you are looking for." },
								{ step: "Pre-Assessment", desc: "Complete questionnaires and provide relevant background information before your appointment." },
								{ step: "Clinical Assessment", desc: "Meet an appropriately qualified clinician who will undertake a comprehensive assessment." },
								{ step: "Clinical Review", desc: "Your assessment information and supporting evidence are reviewed against recognised diagnostic criteria." },
								{ step: "Outcome", desc: "Your clinician explains the assessment outcome — ADHD diagnosed, not diagnosed, or further information required." },
								{ step: "Treatment & Support", desc: "Where appropriate, discuss medication, psychological support, ADHD strategies or other recommendations." },
							].map((s, i) => (
								<Reveal key={s.step} delay={i * 80}>
									<div className="adhd-timeline-step" data-step={i + 1}>
										<h3>{s.step}</h3>
										<p>{s.desc}</p>
									</div>
								</Reveal>
							))}
						</div>
					</div>
				</section>

				<section className="adhd-section" aria-labelledby="adhd-explore-title">
					<div className="adhd-section-inner">
						<Reveal>
							<div className="eyebrow eyebrow--center">
								Explore
							</div>
							<h2 id="adhd-explore-title" className="section-title" style={{ textAlign: "center" }}>
								More About Our <span className="accent">ADHD Services</span>
							</h2>
						</Reveal>
						<div className="adhd-grid">
							{quickLinks.map((s, i) => (
								<Reveal key={s.title} delay={i * 80}>
									<Link to={s.to} className="adhd-card spotlight" style={{ textDecoration: "none" }}>
										<div className="adhd-card-icon">
											<i className={s.icon} aria-hidden="true" />
										</div>
										<h3>{s.title}</h3>
										<p>{s.desc}</p>
									</Link>
								</Reveal>
							))}
						</div>
					</div>
				</section>

				<section className="adhd-section" aria-labelledby="adhd-existing-title">
					<div className="adhd-section-inner">
						<Reveal>
							<div className="adhd-banner">
								<h2 id="adhd-existing-title">Already Have an ADHD Diagnosis?</h2>
								<p>
									If you already have an ADHD diagnosis and are seeking treatment,
									medication or a review, you may not require a completely new
									diagnostic assessment.
								</p>
								<Link to="/adhd/existing-diagnosis" className="btn btn-mint">
									Find Out More
								</Link>
							</div>
						</Reveal>
					</div>
				</section>

				<section className="adhd-section adhd-section--alt" aria-labelledby="adhd-nhs-title">
					<div className="adhd-section-inner" style={{ textAlign: "center" }}>
						<Reveal>
							<div className="adhd-nhs-badge" style={{ marginBottom: "20px" }}>
								<i className="fa-solid fa-shield-halved" aria-hidden="true" />
								NHS Right to Choose
							</div>
							<h2 id="adhd-nhs-title" className="section-title">
								NHS Right to Choose Pathway
							</h2>
							<div className="adhd-info-box" style={{ maxWidth: 640, margin: "20px auto 0" }}>
								<p>
									Our NHS Right to Choose ADHD pathway is currently under
									development. We are not currently accepting Right to Choose
									referrals. Patients can still access our private ADHD services.
								</p>
							</div>
							<div style={{ marginTop: 24 }}>
								<Link to="/adhd/nhs-right-to-choose" className="btn btn-primary">
									Learn More
								</Link>
							</div>
						</Reveal>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default ADHD;
