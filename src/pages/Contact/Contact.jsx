import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Seo } from "../../components/Seo";
import { Reveal } from "../../components/Reveal";
import { SITE } from "../../data/site";
import "./Contact.css";

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
	"Suite G7, Moulton Park Business Centre, Redhouse Road, Northampton, NN3 6AQ"
)}&output=embed`;

const emptyForm = {
	first_name: "",
	last_name: "",
	email: "",
	message: "",
};

export function Contact() {
	const [form, setForm] = useState(emptyForm);

	const updateField = (field) => (event) => {
		setForm({ ...form, [field]: event.currentTarget.value });
	};

	const submit = (event) => {
		event.preventDefault();
		const body = `Hello Doodlesstick Team,\nMy name is ${form.first_name} ${form.last_name}.\n${form.message}\n\nReply to: ${form.email}`;
		const mailtoLink = `mailto:${SITE.email}?subject=${encodeURIComponent(
			"Doodlesstick Inquiry"
		)}&body=${encodeURIComponent(body)}`;
		const a = document.createElement("a");
		a.href = mailtoLink;
		a.target = "_blank";
		a.rel = "noopener noreferrer";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		setForm(emptyForm);
	};

	return (
		<>
			<Seo
				path="/contact-us"
				title="Contact Us | Doodlesstick Limited — Northampton Healthcare"
				description="Contact Doodlesstick Limited for supported living, domiciliary care, live-in care, recruitment, training and CQC business consultancy in Northampton. Call 01604216476 or email info@doodlesstick.com."
			/>
			<Navbar />

			<main>
				<section className="contact-header" aria-labelledby="contact-title">
					<h1 id="contact-title">Contact Us</h1>
				</section>

				<section className="contact-us">
					<div className="contact-container">
						<Reveal className="left-section">
							<div className="map-frame">
								<iframe
									title="Doodlesstick Limited location map"
									src={MAP_EMBED_URL}
									width="100%"
									height="100%"
									style={{ border: 0 }}
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									allowFullScreen
								/>
							</div>
						</Reveal>

						<Reveal className="contact-details" delay={100}>
							<div className="location-info">
								<h3>Our Location</h3>
								<p>
									<strong>Address:</strong> {SITE.address.street},{" "}
									{SITE.address.addressLine},{" "}
									{SITE.address.city}, {SITE.address.postcode}.
								</p>
								<p>
									<strong>Phone:</strong>{" "}
									<a href={`tel:${SITE.phone}`}>
										{SITE.phone}
									</a>
									,{" "}
									<a href={`tel:${SITE.phoneAlt}`}>
										{SITE.phoneAlt}
									</a>
								</p>
								<p>
									<strong>Email:</strong>{" "}
									<a href={`mailto:${SITE.email}`}>
										{SITE.email}
									</a>
								</p>
								<p className="contact-note">
									Contact us for the best health care advice.
								</p>
							</div>

							<div className="feedback-form">
								<h3>Leave Us a Message</h3>
								<form onSubmit={submit} noValidate>
									<div className="form-group">
										<label htmlFor="first-name">
											First Name:
										</label>
										<input
											type="text"
											id="first-name"
											name="first_name"
											value={form.first_name}
											onChange={updateField("first_name")}
											required
											autoComplete="given-name"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="last-name">
											Last Name:
										</label>
										<input
											type="text"
											id="last-name"
											name="last_name"
											value={form.last_name}
											onChange={updateField("last_name")}
											required
											autoComplete="family-name"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="email">Email:</label>
										<input
											type="email"
											id="email"
											name="email"
											value={form.email}
											onChange={updateField("email")}
											required
											autoComplete="email"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="message">
											Your Message:
										</label>
										<textarea
											id="message"
											name="message"
											rows="5"
											value={form.message}
											onChange={updateField("message")}
											required
										/>
									</div>
									<button type="submit">Send Message</button>
								</form>
							</div>
						</Reveal>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
