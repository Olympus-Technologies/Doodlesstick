import { useState } from "react"
import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Navbar } from "../../components/Navbar"
import { Seo } from "../../components/Seo"
import { Reveal } from "../../components/Reveal"
import "./ADHD.css"

const enquiringOptions = [
	"Yourself",
	"My child",
	"Someone else",
	"A patient or service user",
	"An organisation",
]

const enquiryTopics = [
	"ADHD assessment",
	"ADHD treatment",
	"Medication",
	"Existing diagnosis",
	"Child/young person assessment",
	"Private services",
	"Right to Choose",
	"Professional referral",
	"Corporate/commissioning enquiry",
	"Other",
]

const contactMethods = ["Email", "Telephone"]

const initialForm = {
	name: "",
	email: "",
	telephone: "",
	enquiringFor: "",
	enquiryTopic: "",
	message: "",
	preferredContact: "",
}

export default function Enquiry() {
	const [form, setForm] = useState(initialForm)
	const [submitted, setSubmitted] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target
		setForm((prev) => ({ ...prev, [name]: value }))
	}

	const handleOption = (field, value) => {
		setForm((prev) => ({ ...prev, [field]: prev[field] === value ? "" : value }))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setSubmitted(true)
	}

	if (submitted) {
		return (
			<>
				<Seo
					path="/adhd/enquiry"
					title="Make an ADHD Enquiry | Doodlesstick Limited"
					description="Complete our ADHD enquiry form and our team will respond using the contact details you have provided."
				/>
				<Navbar />
				<main>
					<section className="adhd-booking">
						<div className="adhd-booking-card" style={{ textAlign: "center" }}>
							<div className="eyebrow eyebrow--center">
								<i className="fa-solid fa-circle-check" aria-hidden="true" />
								Enquiry Received
							</div>
							<h2>Thank You</h2>
							<p className="step-subtitle">
								Thank you. Your enquiry has been received by Doodlesstick.
								We will respond using the contact details you have provided.
							</p>
							<div className="adhd-btn-row" style={{ justifyContent: "center" }}>
								<Link to="/" className="btn btn-primary">
									Back to Home
								</Link>
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</>
		)
	}

	return (
		<>
			<Seo
				path="/adhd/enquiry"
				title="Make an ADHD Enquiry | Doodlesstick Limited"
				description="Complete our ADHD enquiry form and our team will respond using the contact details you have provided."
			/>
			<Navbar />

			<main>
				<section className="adhd-booking">
					<Reveal>
						<div className="adhd-booking-card">
							<div className="eyebrow eyebrow--center">
								<i className="fa-solid fa-envelope" aria-hidden="true" />
								ADHD Enquiry
							</div>
							<h2>How Can We Help?</h2>
							<p className="step-subtitle">
								Complete the form below and we will respond using the
								contact details you have provided.
							</p>

							<form onSubmit={handleSubmit}>
								<div className="adhd-form-group">
									<label htmlFor="enquiry-name">Name</label>
									<input
										id="enquiry-name"
										className="adhd-input"
										type="text"
										name="name"
										value={form.name}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="adhd-form-group">
									<label htmlFor="enquiry-email">Email</label>
									<input
										id="enquiry-email"
										className="adhd-input"
										type="email"
										name="email"
										value={form.email}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="adhd-form-group">
									<label htmlFor="enquiry-telephone">
										Telephone <span className="optional">(optional)</span>
									</label>
									<input
										id="enquiry-telephone"
										className="adhd-input"
										type="tel"
										name="telephone"
										value={form.telephone}
										onChange={handleChange}
									/>
								</div>

								<div className="adhd-form-group">
									<label>Are you enquiring for?</label>
									<div className="adhd-option-grid">
										{enquiringOptions.map((opt) => (
											<button
												key={opt}
												type="button"
												className={`adhd-option-btn${form.enquiringFor === opt ? " selected" : ""}`}
												onClick={() => handleOption("enquiringFor", opt)}
											>
												{opt}
											</button>
										))}
									</div>
								</div>

								<div className="adhd-form-group">
									<label>Your enquiry relates to</label>
									<div className="adhd-option-grid">
										{enquiryTopics.map((opt) => (
											<button
												key={opt}
												type="button"
												className={`adhd-option-btn${form.enquiryTopic === opt ? " selected" : ""}`}
												onClick={() => handleOption("enquiryTopic", opt)}
											>
												{opt}
											</button>
										))}
									</div>
								</div>

								<div className="adhd-form-group">
									<label htmlFor="enquiry-message">
										Tell us how we can help
									</label>
									<textarea
										id="enquiry-message"
										className="adhd-textarea"
										name="message"
										value={form.message}
										onChange={handleChange}
										rows={5}
										required
									/>
								</div>

								<div className="adhd-form-group">
									<label>Preferred contact method</label>
									<div className="adhd-option-grid">
										{contactMethods.map((opt) => (
											<button
												key={opt}
												type="button"
												className={`adhd-option-btn${form.preferredContact === opt ? " selected" : ""}`}
												onClick={() => handleOption("preferredContact", opt)}
											>
												{opt}
											</button>
										))}
									</div>
								</div>

								<div className="adhd-btn-row">
									<button type="submit" className="btn btn-primary">
										Submit Enquiry
									</button>
								</div>
							</form>
						</div>
					</Reveal>
				</section>
			</main>

			<Footer />
		</>
	)
}
