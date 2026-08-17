import { useState } from "react"
import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Navbar } from "../../components/Navbar"
import { Seo } from "../../components/Seo"
import "./ADHD.css"

const TOTAL_MAIN_STEPS = 15

const AFFECTED_AREAS = [
	"Attention/concentration",
	"Organisation",
	"Forgetfulness",
	"Completing tasks",
	"Education",
	"Employment",
	"Relationships",
	"Family life",
	"Finances",
	"Administration",
	"Impulsivity",
	"Restlessness/hyperactivity",
	"Emotional regulation",
	"Sleep",
	"Daily routines",
	"Other"
]

const SEEKING_OPTIONS = [
	"Medication initiation",
	"Medication titration",
	"Transfer of prescribing",
	"Medication review",
	"Treatment following diagnosis",
	"Second opinion",
	"Psychological support",
	"ADHD coaching/support",
	"Other"
]

const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Weekend"]

const TIME_SLOTS = ["Morning", "Afternoon", "Evening", "No preference"]

const CONSENT_CHECKBOXES = [
	{ key: "consentAccurate", text: "I confirm that the information I have provided is accurate to the best of my knowledge." },
	{ key: "consentDiagnosis", text: "I understand that submitting an enquiry does not constitute an ADHD diagnosis." },
	{ key: "consentSuitability", text: "I understand that acceptance for assessment or treatment is subject to clinical suitability." },
	{ key: "consentEmergency", text: "I understand that Doodlesstick is not an emergency or crisis service." },
	{ key: "consentPrivacy", text: "I have read the Privacy Notice." },
	{ key: "consentHealthInfo", text: "I understand how my health information will be used in connection with my enquiry and care." }
]

const initialForm = {
	helpType: "",
	diagDate: "",
	diagWho: "",
	diagType: "",
	diagHasReport: "",
	diagMedication: "",
	medName: "",
	medDose: "",
	medDuration: "",
	medPrescriber: "",
	seeking: [],
	assessmentFor: "",
	patientDob: "",
	title: "",
	firstName: "",
	middleName: "",
	surname: "",
	preferredName: "",
	sex: "",
	genderIdentity: "",
	pronouns: "",
	address: "",
	town: "",
	county: "",
	postcode: "",
	email: "",
	telephone: "",
	preferredContact: "",
	accessibilityReqs: "",
	parentName: "",
	parentRelationship: "",
	parentLegalAuth: "",
	parentEmail: "",
	parentTelephone: "",
	parentAddress: "",
	parentRestrictions: "",
	parentRestrictionsDetails: "",
	mainConcerns: "",
	onsetWhen: "",
	affectedAreas: [],
	prevAssessed: "",
	prevWhen: "",
	prevByWhom: "",
	prevOutcome: "",
	prevHasCopy: "",
	prevNeuro: "",
	prevNeuroDetails: "",
	physicalConditions: "",
	physicalDetails: "",
	mentalConditions: "",
	mentalDetails: "",
	mentalTreatment: "",
	mentalTreatmentDetails: "",
	takingMeds: "",
	medsDetails: "",
	allergies: "",
	allergiesDetails: "",
	safetyConcerns: "",
	safetyDetails: "",
	gpSurgery: "",
	gpName: "",
	gpAddress: "",
	gpPostcode: "",
	gpTelephone: "",
	gpEmail: "",
	gpConsent: "",
	gpLimitations: "",
	supportDocs: "",
	informant: "",
	informantName: "",
	informantRelationship: "",
	informantEmail: "",
	informantTelephone: "",
	informantDuration: "",
	informantChildhood: "",
	prefFormat: "",
	prefDays: [],
	prefTime: "",
	adjustments: "",
	adjustmentsDetails: "",
	consentAccurate: false,
	consentDiagnosis: false,
	consentSuitability: false,
	consentEmergency: false,
	consentPrivacy: false,
	consentHealthInfo: false,
	marketingConsent: false,
	paymentService: false,
	paymentTerms: false
}

export default function BookAssessment() {
	const [form, setForm] = useState(initialForm)
	const [step, setStep] = useState(1)

	const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }))

	const toggleArray = (field, value) => {
		setForm(prev => {
			const arr = prev[field] || []
			const next = arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value]
			return { ...prev, [field]: next }
		})
	}

	const isAdult = () => {
		if (!form.patientDob) return true
		const dob = new Date(form.patientDob)
		const now = new Date()
		let age = now.getFullYear() - dob.getFullYear()
		const m = now.getMonth() - dob.getMonth()
		if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) age--
		return age >= 18
	}

	const allConsentChecked = () =>
		CONSENT_CHECKBOXES.every(c => form[c.key])

	const canContinue = () => {
		if (step === 1) return !!form.helpType
		if (step === 2) return !!form.assessmentFor && !!form.patientDob
		if (step === 3) return !!form.firstName && !!form.surname && !!form.email && !!form.telephone
		if (step === 4) return !isAdult() ? !!form.parentName && !!form.parentEmail : true
		if (step === 14) return allConsentChecked()
		return true
	}

	const renderDots = () => {
		const dots = []
		for (let i = 1; i <= TOTAL_MAIN_STEPS; i++) {
			let cls = "dot"
			if (i === step) cls += " active"
			else if (i < step) cls += " done"
			dots.push(<span key={i} className={cls} />)
		}
		return dots
	}

	const back = (target) => setStep(target || Math.max(1, step - 1))

	const next = (target) => {
		if (target) setStep(target)
		else setStep(step + 1)
		window.scrollTo({ top: 0, behavior: "smooth" })
	}

	const btnRow = (backTarget) => (
		<div className="adhd-btn-row">
			{step > 1 && (
				<button type="button" className="adhd-back-btn" onClick={() => back(backTarget)}>
					Back
				</button>
			)}
			<button
				type="button"
				className="btn btn-primary"
				disabled={!canContinue()}
				onClick={() => next()}
				style={{ flex: 2 }}
			>
				Continue
			</button>
		</div>
	)

	const yesNo = (field, label) => (
		<div className="adhd-form-group">
			<label>{label}</label>
			<div className="adhd-option-grid">
				<button type="button" className={`adhd-option-btn ${form[field] === "yes" ? "selected" : ""}`} onClick={() => update(field, "yes")}>
					Yes
				</button>
				<button type="button" className={`adhd-option-btn ${form[field] === "no" ? "selected" : ""}`} onClick={() => update(field, "no")}>
					No
				</button>
			</div>
		</div>
	)

	const renderScreen1 = () => (
		<>
			<h2>How can we help you today?</h2>
			<p className="step-subtitle">Please select the option that best describes what you are looking for.</p>
			<div className="adhd-option-grid">
				{[
					"I would like a private ADHD assessment",
					"I am enquiring about an assessment for my child",
					"I already have an ADHD diagnosis",
					"I would like information about ADHD medication/treatment",
					"I am a GP or healthcare professional",
					"I am enquiring about NHS Right to Choose",
					"I have another ADHD-related enquiry"
				].map(opt => (
					<button
						key={opt}
						type="button"
						className={`adhd-option-btn ${form.helpType === opt ? "selected" : ""}`}
						onClick={() => update("helpType", opt)}
					>
						{opt}
					</button>
				))}
			</div>
			<div className="adhd-btn-row">
				<button
					type="button"
					className="btn btn-primary"
					disabled={!canContinue()}
					onClick={() => {
						if (form.helpType === "I already have an ADHD diagnosis") next(100)
						else if (
							form.helpType === "I am a GP or healthcare professional" ||
							form.helpType === "I have another ADHD-related enquiry" ||
							form.helpType === "I am enquiring about NHS Right to Choose" ||
							form.helpType.includes("medication/treatment")
						) next(101)
						else next(2)
					}}
					style={{ flex: 2 }}
				>
					Continue
				</button>
			</div>
		</>
	)

	const renderScreen1b = () => (
		<>
			<h2>Tell Us About Your Diagnosis</h2>
			<p className="step-subtitle">Please provide details about your existing ADHD diagnosis.</p>
			<div className="adhd-form-group">
				<label>When were you diagnosed?</label>
				<input className="adhd-input" value={form.diagDate} onChange={e => update("diagDate", e.target.value)} placeholder="e.g. March 2023" />
			</div>
			<div className="adhd-form-group">
				<label>Who diagnosed you?</label>
				<input className="adhd-input" value={form.diagWho} onChange={e => update("diagWho", e.target.value)} placeholder="Clinician or service name" />
			</div>
			<div className="adhd-form-group">
				<label>Was the diagnosis:</label>
				<div className="adhd-option-grid">
					{["NHS", "Private", "Overseas", "Unsure"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.diagType === opt ? "selected" : ""}`} onClick={() => update("diagType", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			{yesNo("diagHasReport", "Do you have your diagnostic report?")}
			{form.diagHasReport === "yes" && (
				<div className="adhd-form-group">
					<label>Upload Diagnostic Report</label>
					<input type="file" className="adhd-input" accept=".pdf,.doc,.docx,.jpg,.png" />
				</div>
			)}
			{yesNo("diagMedication", "Are you currently taking ADHD medication?")}
			{form.diagMedication === "yes" && (
				<>
					<div className="adhd-form-group">
						<label>Medication</label>
						<input className="adhd-input" value={form.medName} onChange={e => update("medName", e.target.value)} placeholder="e.g. Elvanse" />
					</div>
					<div className="adhd-form-group">
						<label>Dose</label>
						<input className="adhd-input" value={form.medDose} onChange={e => update("medDose", e.target.value)} placeholder="e.g. 50mg" />
					</div>
					<div className="adhd-form-group">
						<label>How long have you been taking it?</label>
						<input className="adhd-input" value={form.medDuration} onChange={e => update("medDuration", e.target.value)} placeholder="e.g. 6 months" />
					</div>
					<div className="adhd-form-group">
						<label>Who prescribes?</label>
						<div className="adhd-option-grid">
							{["GP", "NHS specialist", "Private specialist", "Other"].map(opt => (
								<button key={opt} type="button" className={`adhd-option-btn ${form.medPrescriber === opt ? "selected" : ""}`} onClick={() => update("medPrescriber", opt)}>
									{opt}
								</button>
							))}
						</div>
					</div>
				</>
			)}
			<div className="adhd-form-group">
				<label>What are you seeking? <span className="optional">(select all that apply)</span></label>
				<div className="adhd-option-grid">
					{SEEKING_OPTIONS.map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${(form.seeking || []).includes(opt) ? "selected" : ""}`} onClick={() => toggleArray("seeking", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			<div className="adhd-info-box">
				<p>Before prescribing or taking over treatment, our clinical team will need to review your existing diagnosis and relevant clinical information.</p>
			</div>
			<div className="adhd-btn-row">
				<button type="button" className="adhd-back-btn" onClick={() => back(1)}>Back</button>
				<button type="button" className="btn btn-primary" onClick={() => next(102)} style={{ flex: 2 }}>Submit Treatment Enquiry</button>
			</div>
		</>
	)

	const renderScreen1c = () => (
		<>
			<h2>Thank You for Your Enquiry</h2>
			<p className="step-subtitle">For the enquiry you have described, we recommend completing our dedicated enquiry form so the right member of our team can assist you.</p>
			<div className="adhd-info-box">
				<p>Please complete our <strong>ADHD Enquiry Form</strong> and a member of the Doodlesstick team will respond to you as soon as possible.</p>
			</div>
			<div className="adhd-btn-row">
				<button type="button" className="adhd-back-btn" onClick={() => back(1)}>Back</button>
				<Link to="/adhd/enquiry" className="btn btn-primary" style={{ flex: 2, textAlign: "center" }}>Go to Enquiry Form</Link>
			</div>
		</>
	)

	const renderScreen1bConfirm = () => (
		<>
			<h2>Your Treatment Enquiry Has Been Received</h2>
			<p className="step-subtitle">Thank you for providing information about your existing diagnosis. A member of our clinical team will review your enquiry and contact you to discuss the next steps.</p>
			<div className="adhd-info-box">
				<p>Please allow up to 3 working days for a response. If your enquiry is urgent, contact us directly.</p>
			</div>
			<div style={{ textAlign: "center", marginTop: 32 }}>
				<Link to="/" className="btn btn-mint">Back to Home</Link>
			</div>
		</>
	)

	const renderScreen2 = () => (
		<>
			<h2>Who Requires the Assessment?</h2>
			<p className="step-subtitle">Please tell us who the assessment is for.</p>
			<div className="adhd-form-group">
				<label>I am seeking an assessment for:</label>
				<div className="adhd-option-grid">
					{["Myself", "My child", "Someone for whom I have legal authority to act"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.assessmentFor === opt ? "selected" : ""}`} onClick={() => update("assessmentFor", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			<div className="adhd-form-group">
				<label>Date of birth</label>
				<input type="date" className="adhd-input" value={form.patientDob} onChange={e => update("patientDob", e.target.value)} />
			</div>
			{form.patientDob && (
				<div className="adhd-info-box">
					<p>{isAdult()
						? "Based on the date of birth provided, this patient will follow the adult assessment pathway."
						: "Based on the date of birth provided, this patient will follow the child/adolescent assessment pathway. A parent or guardian will need to complete additional details."}</p>
				</div>
			)}
			{btnRow()}
		</>
	)

	const renderScreen3 = () => (
		<>
			<h2>Tell Us About You</h2>
			<p className="step-subtitle">Please provide the patient's personal details.</p>
			<div className="adhd-form-group">
				<label>Title</label>
				<select className="adhd-select" value={form.title} onChange={e => update("title", e.target.value)}>
					<option value="">Select...</option>
					{["Mr", "Mrs", "Ms", "Miss", "Dr", "Other"].map(t => (
						<option key={t} value={t}>{t}</option>
					))}
				</select>
			</div>
			<div className="adhd-form-group">
				<label>First name</label>
				<input className="adhd-input" value={form.firstName} onChange={e => update("firstName", e.target.value)} placeholder="First name" />
			</div>
			<div className="adhd-form-group">
				<label>Middle name(s) <span className="optional">(optional)</span></label>
				<input className="adhd-input" value={form.middleName} onChange={e => update("middleName", e.target.value)} placeholder="Middle name(s)" />
			</div>
			<div className="adhd-form-group">
				<label>Surname</label>
				<input className="adhd-input" value={form.surname} onChange={e => update("surname", e.target.value)} placeholder="Surname" />
			</div>
			<div className="adhd-form-group">
				<label>Preferred name <span className="optional">(optional)</span></label>
				<input className="adhd-input" value={form.preferredName} onChange={e => update("preferredName", e.target.value)} placeholder="What would you like us to call you?" />
			</div>
			<div className="adhd-form-group">
				<label>Date of birth</label>
				<input type="date" className="adhd-input" value={form.patientDob} onChange={e => update("patientDob", e.target.value)} />
			</div>
			<div className="adhd-form-group">
				<label>Sex</label>
				<div className="adhd-option-grid">
					{["Male", "Female", "Other", "Prefer not to say"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.sex === opt ? "selected" : ""}`} onClick={() => update("sex", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			<div className="adhd-form-group">
				<label>Gender identity <span className="optional">(optional)</span></label>
				<input className="adhd-input" value={form.genderIdentity} onChange={e => update("genderIdentity", e.target.value)} placeholder="Optional" />
			</div>
			<div className="adhd-form-group">
				<label>Pronouns <span className="optional">(optional)</span></label>
				<input className="adhd-input" value={form.pronouns} onChange={e => update("pronouns", e.target.value)} placeholder="e.g. she/her" />
			</div>
			<div className="adhd-form-group">
				<label>Home address</label>
				<textarea className="adhd-textarea" value={form.address} onChange={e => update("address", e.target.value)} placeholder="Full home address" rows={3} />
			</div>
			<div className="adhd-form-group">
				<label>Town / City</label>
				<input className="adhd-input" value={form.town} onChange={e => update("town", e.target.value)} />
			</div>
			<div className="adhd-form-group">
				<label>County</label>
				<input className="adhd-input" value={form.county} onChange={e => update("county", e.target.value)} />
			</div>
			<div className="adhd-form-group">
				<label>Postcode</label>
				<input className="adhd-input" value={form.postcode} onChange={e => update("postcode", e.target.value)} placeholder="e.g. AB1 2CD" />
			</div>
			<div className="adhd-form-group">
				<label>Email</label>
				<input type="email" className="adhd-input" value={form.email} onChange={e => update("email", e.target.value)} placeholder="you@example.com" />
			</div>
			<div className="adhd-form-group">
				<label>Telephone number</label>
				<input type="tel" className="adhd-input" value={form.telephone} onChange={e => update("telephone", e.target.value)} placeholder="e.g. 07700 900000" />
			</div>
			<div className="adhd-form-group">
				<label>Preferred method of contact</label>
				<div className="adhd-option-grid">
					{["Email", "Telephone", "SMS"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.preferredContact === opt ? "selected" : ""}`} onClick={() => update("preferredContact", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			<div className="adhd-form-group">
				<label>Do you have any communication or accessibility requirements? <span className="optional">(optional)</span></label>
				<textarea className="adhd-textarea" value={form.accessibilityReqs} onChange={e => update("accessibilityReqs", e.target.value)} placeholder="Please let us know so we can make appropriate arrangements" />
			</div>
			{btnRow()}
		</>
	)

	const renderScreen4 = () => (
		<>
			<h2>Parent / Guardian / Representative</h2>
			<p className="step-subtitle">Please provide the details of the parent, guardian or person with legal authority.</p>
			<div className="adhd-form-group">
				<label>Full name</label>
				<input className="adhd-input" value={form.parentName} onChange={e => update("parentName", e.target.value)} placeholder="Full name" />
			</div>
			<div className="adhd-form-group">
				<label>Relationship to patient</label>
				<input className="adhd-input" value={form.parentRelationship} onChange={e => update("parentRelationship", e.target.value)} placeholder="e.g. Mother, Father, Guardian" />
			</div>
			<div className="adhd-form-group">
				<label>Do you have parental responsibility or legal authority?</label>
				<div className="adhd-option-grid">
					{["Yes", "No"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.parentLegalAuth === opt ? "selected" : ""}`} onClick={() => update("parentLegalAuth", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			<div className="adhd-form-group">
				<label>Email</label>
				<input type="email" className="adhd-input" value={form.parentEmail} onChange={e => update("parentEmail", e.target.value)} placeholder="you@example.com" />
			</div>
			<div className="adhd-form-group">
				<label>Telephone</label>
				<input type="tel" className="adhd-input" value={form.parentTelephone} onChange={e => update("parentTelephone", e.target.value)} />
			</div>
			<div className="adhd-form-group">
				<label>Address <span className="optional">(if different from patient)</span></label>
				<textarea className="adhd-textarea" value={form.parentAddress} onChange={e => update("parentAddress", e.target.value)} rows={2} />
			</div>
			<div className="adhd-form-group">
				<label>Are there any restrictions regarding parental responsibility?</label>
				<div className="adhd-option-grid">
					{["Yes", "No"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.parentRestrictions === opt ? "selected" : ""}`} onClick={() => update("parentRestrictions", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			{form.parentRestrictions === "Yes" && (
				<div className="adhd-form-group">
					<label>Please provide details</label>
					<textarea className="adhd-textarea" value={form.parentRestrictionsDetails} onChange={e => update("parentRestrictionsDetails", e.target.value)} />
				</div>
			)}
			{btnRow()}
		</>
	)

	const renderScreen5 = () => (
		<>
			<h2>Tell Us What Has Led You to Seek an ADHD Assessment</h2>
			<p className="step-subtitle">This information helps our clinical team understand your situation.</p>
			<div className="adhd-form-group">
				<label>What are your main concerns?</label>
				<textarea className="adhd-textarea" value={form.mainConcerns} onChange={e => update("mainConcerns", e.target.value)} placeholder="Please briefly describe the difficulties that have led you to consider an ADHD assessment and how they affect everyday life." rows={5} />
			</div>
			<div className="adhd-form-group">
				<label>When did you first notice these difficulties?</label>
				<div className="adhd-option-grid">
					{["Early childhood", "Primary school age", "Secondary school age", "Adolescence", "Adulthood", "Unsure"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.onsetWhen === opt ? "selected" : ""}`} onClick={() => update("onsetWhen", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			<div className="adhd-form-group">
				<label>Which areas of your life are affected? <span className="optional">(select all that apply)</span></label>
				<div className="adhd-option-grid">
					{AFFECTED_AREAS.map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${(form.affectedAreas || []).includes(opt) ? "selected" : ""}`} onClick={() => toggleArray("affectedAreas", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			{btnRow()}
		</>
	)

	const renderScreen6 = () => (
		<>
			<h2>Previous ADHD or Neurodevelopmental Assessments</h2>
			<p className="step-subtitle">This helps our clinicians understand your history.</p>
			<div className="adhd-form-group">
				<label>Have you previously been assessed for ADHD?</label>
				<div className="adhd-option-grid">
					{["Yes", "No"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.prevAssessed === opt ? "selected" : ""}`} onClick={() => update("prevAssessed", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			{form.prevAssessed === "Yes" && (
				<>
					<div className="adhd-form-group">
						<label>When?</label>
						<input className="adhd-input" value={form.prevWhen} onChange={e => update("prevWhen", e.target.value)} placeholder="e.g. 2021" />
					</div>
					<div className="adhd-form-group">
						<label>By whom?</label>
						<input className="adhd-input" value={form.prevByWhom} onChange={e => update("prevByWhom", e.target.value)} placeholder="Clinician or service" />
					</div>
					<div className="adhd-form-group">
						<label>Outcome</label>
						<div className="adhd-option-grid">
							{["ADHD diagnosed", "ADHD not diagnosed", "Inconclusive", "Assessment incomplete", "Unsure"].map(opt => (
								<button key={opt} type="button" className={`adhd-option-btn ${form.prevOutcome === opt ? "selected" : ""}`} onClick={() => update("prevOutcome", opt)}>
									{opt}
								</button>
							))}
						</div>
					</div>
					<div className="adhd-form-group">
						<label>Do you have a copy of the report?</label>
						<div className="adhd-option-grid">
							{["Yes", "No"].map(opt => (
								<button key={opt} type="button" className={`adhd-option-btn ${form.prevHasCopy === opt ? "selected" : ""}`} onClick={() => update("prevHasCopy", opt)}>
									{opt}
								</button>
							))}
						</div>
					</div>
					{form.prevHasCopy === "Yes" && (
						<div className="adhd-form-group">
							<label>Upload report</label>
							<input type="file" className="adhd-input" accept=".pdf,.doc,.docx,.jpg,.png" />
						</div>
					)}
				</>
			)}
			<div className="adhd-form-group">
				<label>Have you been diagnosed with another neurodevelopmental condition?</label>
				<div className="adhd-option-grid">
					{["Yes", "No", "Unsure"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.prevNeuro === opt ? "selected" : ""}`} onClick={() => update("prevNeuro", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			{form.prevNeuro === "Yes" && (
				<div className="adhd-form-group">
					<label>Please provide details</label>
					<input className="adhd-input" value={form.prevNeuroDetails} onChange={e => update("prevNeuroDetails", e.target.value)} placeholder="e.g. Autism Spectrum Disorder" />
				</div>
			)}
			{btnRow()}
		</>
	)

	const renderScreen7 = () => (
		<>
			<h2>Health Information</h2>
			<p className="step-subtitle">This information is important for clinical assessment.</p>
			<div className="adhd-form-group">
				<label>Do you have any diagnosed physical health conditions?</label>
				<div className="adhd-option-grid">
					{["Yes", "No"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.physicalConditions === opt ? "selected" : ""}`} onClick={() => update("physicalConditions", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			{form.physicalConditions === "Yes" && (
				<div className="adhd-form-group">
					<label>Please provide details</label>
					<textarea className="adhd-textarea" value={form.physicalDetails} onChange={e => update("physicalDetails", e.target.value)} />
				</div>
			)}
			<div className="adhd-form-group">
				<label>Do you have any diagnosed mental health conditions?</label>
				<div className="adhd-option-grid">
					{["Yes", "No"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.mentalConditions === opt ? "selected" : ""}`} onClick={() => update("mentalConditions", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			{form.mentalConditions === "Yes" && (
				<div className="adhd-form-group">
					<label>Please provide details</label>
					<textarea className="adhd-textarea" value={form.mentalDetails} onChange={e => update("mentalDetails", e.target.value)} />
				</div>
			)}
			<div className="adhd-form-group">
				<label>Are you currently receiving treatment from a mental health service?</label>
				<div className="adhd-option-grid">
					{["Yes", "No"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.mentalTreatment === opt ? "selected" : ""}`} onClick={() => update("mentalTreatment", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			{form.mentalTreatment === "Yes" && (
				<div className="adhd-form-group">
					<label>Please provide details</label>
					<textarea className="adhd-textarea" value={form.mentalTreatmentDetails} onChange={e => update("mentalTreatmentDetails", e.target.value)} />
				</div>
			)}
			<div className="adhd-form-group">
				<label>Are you currently taking any prescribed medication?</label>
				<div className="adhd-option-grid">
					{["Yes", "No"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.takingMeds === opt ? "selected" : ""}`} onClick={() => update("takingMeds", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			{form.takingMeds === "Yes" && (
				<div className="adhd-form-group">
					<label>Please provide medication name and dose</label>
					<input className="adhd-input" value={form.medsDetails} onChange={e => update("medsDetails", e.target.value)} placeholder="e.g. Sertraline 50mg daily" />
				</div>
			)}
			<div className="adhd-form-group">
				<label>Do you have any known medication allergies?</label>
				<div className="adhd-option-grid">
					{["Yes", "No"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.allergies === opt ? "selected" : ""}`} onClick={() => update("allergies", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			{form.allergies === "Yes" && (
				<div className="adhd-form-group">
					<label>Please provide details</label>
					<input className="adhd-input" value={form.allergiesDetails} onChange={e => update("allergiesDetails", e.target.value)} />
				</div>
			)}
			{btnRow()}
		</>
	)

	const renderScreen8 = () => (
		<>
			<h2>Important Safety Information</h2>
			<div className="adhd-warning-box">
				<p><strong>Doodlesstick is not an emergency or crisis service.</strong></p>
			</div>
			<div className="adhd-form-group">
				<label>Are there any current significant concerns regarding immediate safety?</label>
				<div className="adhd-option-grid">
					{["Yes", "No"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.safetyConcerns === opt ? "selected" : ""}`} onClick={() => update("safetyConcerns", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			{form.safetyConcerns === "Yes" && (
				<div className="adhd-form-group">
					<label>Please provide details</label>
					<textarea className="adhd-textarea" value={form.safetyDetails} onChange={e => update("safetyDetails", e.target.value)} />
				</div>
			)}
			<div className="adhd-info-box">
				<p><strong>If you or another person is in immediate danger, please contact the emergency services.</strong> If you require urgent mental health support, please use the appropriate NHS urgent or emergency services.</p>
			</div>
			{btnRow()}
		</>
	)

	const renderScreen9 = () => (
		<>
			<h2>Your GP</h2>
			<p className="step-subtitle">We may need to liaise with your GP as part of your assessment or treatment.</p>
			<div className="adhd-form-group">
				<label>GP surgery name</label>
				<input className="adhd-input" value={form.gpSurgery} onChange={e => update("gpSurgery", e.target.value)} placeholder="Surgery name" />
			</div>
			<div className="adhd-form-group">
				<label>GP name <span className="optional">(if known)</span></label>
				<input className="adhd-input" value={form.gpName} onChange={e => update("gpName", e.target.value)} placeholder="Doctor's name" />
			</div>
			<div className="adhd-form-group">
				<label>GP surgery address</label>
				<textarea className="adhd-textarea" value={form.gpAddress} onChange={e => update("gpAddress", e.target.value)} rows={2} />
			</div>
			<div className="adhd-form-group">
				<label>Postcode</label>
				<input className="adhd-input" value={form.gpPostcode} onChange={e => update("gpPostcode", e.target.value)} />
			</div>
			<div className="adhd-form-group">
				<label>Telephone <span className="optional">(if known)</span></label>
				<input type="tel" className="adhd-input" value={form.gpTelephone} onChange={e => update("gpTelephone", e.target.value)} />
			</div>
			<div className="adhd-form-group">
				<label>Email <span className="optional">(if known)</span></label>
				<input type="email" className="adhd-input" value={form.gpEmail} onChange={e => update("gpEmail", e.target.value)} />
			</div>
			<div className="adhd-form-group">
				<label>Do you consent to Doodlesstick contacting your GP?</label>
				<div className="adhd-option-grid">
					{["Yes", "No"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.gpConsent === opt ? "selected" : ""}`} onClick={() => update("gpConsent", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			<div className="adhd-form-group">
				<label>Are there any limitations on information sharing? <span className="optional">(optional)</span></label>
				<textarea className="adhd-textarea" value={form.gpLimitations} onChange={e => update("gpLimitations", e.target.value)} />
			</div>
			{btnRow()}
		</>
	)

	const renderScreen10 = () => (
		<>
			<h2>Supporting Information</h2>
			<p className="step-subtitle">Do you have documents that may be relevant to your assessment?</p>
			<p style={{ fontSize: 15, color: "var(--muted)", marginBottom: 16 }}>Examples of relevant documents include:</p>
			<ul className="adhd-content-list" style={{ marginBottom: 24 }}>
				{["Previous assessment reports", "School reports", "Educational psychology reports", "EHCP documents", "Mental health reports", "Previous ADHD assessments", "Medication records", "Relevant clinical correspondence"].map(item => (
					<li key={item}>{item}</li>
				))}
			</ul>
			<div className="adhd-form-group">
				<label>Upload documents</label>
				<input type="file" className="adhd-input" multiple accept=".pdf,.doc,.docx,.jpg,.png" />
			</div>
			<div className="adhd-info-box">
				<p>Patients should not be required to have these documents before making an initial enquiry. If you do not have any supporting documents, please continue.</p>
			</div>
			{btnRow()}
		</>
	)

	const renderScreen11 = () => (
		<>
			<h2>Someone Who Knows You Well</h2>
			<p className="step-subtitle">Information from somebody who knows you well can sometimes contribute to an ADHD assessment.</p>
			<div className="adhd-form-group">
				<label>Is there somebody who could provide supporting information?</label>
				<div className="adhd-option-grid">
					{["Yes", "No", "Unsure"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.informant === opt ? "selected" : ""}`} onClick={() => update("informant", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			{form.informant === "Yes" && (
				<>
					<div className="adhd-form-group">
						<label>Name</label>
						<input className="adhd-input" value={form.informantName} onChange={e => update("informantName", e.target.value)} />
					</div>
					<div className="adhd-form-group">
						<label>Relationship</label>
						<input className="adhd-input" value={form.informantRelationship} onChange={e => update("informantRelationship", e.target.value)} placeholder="e.g. Partner, Parent, Friend" />
					</div>
					<div className="adhd-form-group">
						<label>Email</label>
						<input type="email" className="adhd-input" value={form.informantEmail} onChange={e => update("informantEmail", e.target.value)} />
					</div>
					<div className="adhd-form-group">
						<label>Telephone</label>
						<input type="tel" className="adhd-input" value={form.informantTelephone} onChange={e => update("informantTelephone", e.target.value)} />
					</div>
					<div className="adhd-form-group">
						<label>How long have they known you?</label>
						<input className="adhd-input" value={form.informantDuration} onChange={e => update("informantDuration", e.target.value)} placeholder="e.g. 10 years" />
					</div>
					{!isAdult() && (
						<div className="adhd-form-group">
							<label>Did this person know you during childhood?</label>
							<div className="adhd-option-grid">
								{["Yes", "No"].map(opt => (
									<button key={opt} type="button" className={`adhd-option-btn ${form.informantChildhood === opt ? "selected" : ""}`} onClick={() => update("informantChildhood", opt)}>
										{opt}
									</button>
								))}
							</div>
						</div>
					)}
				</>
			)}
			{btnRow()}
		</>
	)

	const renderScreen12 = () => (
		<>
			<h2>Appointment Preferences</h2>
			<p className="step-subtitle">Let us know your preferences so we can find the best appointment for you.</p>
			<div className="adhd-form-group">
				<label>Preferred format</label>
				<div className="adhd-option-grid">
					{["Video consultation", "Face-to-face", "No preference"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.prefFormat === opt ? "selected" : ""}`} onClick={() => update("prefFormat", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			<div className="adhd-form-group">
				<label>Preferred days <span className="optional">(select all that apply)</span></label>
				<div className="adhd-option-grid">
					{WEEKDAYS.map(day => (
						<button key={day} type="button" className={`adhd-option-btn ${(form.prefDays || []).includes(day) ? "selected" : ""}`} onClick={() => toggleArray("prefDays", day)}>
							{day}
						</button>
					))}
				</div>
			</div>
			<div className="adhd-form-group">
				<label>Preferred time</label>
				<div className="adhd-option-grid">
					{TIME_SLOTS.map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.prefTime === opt ? "selected" : ""}`} onClick={() => update("prefTime", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			<div className="adhd-form-group">
				<label>Do you require reasonable adjustments?</label>
				<div className="adhd-option-grid">
					{["Yes", "No"].map(opt => (
						<button key={opt} type="button" className={`adhd-option-btn ${form.adjustments === opt ? "selected" : ""}`} onClick={() => update("adjustments", opt)}>
							{opt}
						</button>
					))}
				</div>
			</div>
			{form.adjustments === "Yes" && (
				<div className="adhd-form-group">
					<label>Please describe the adjustments you require</label>
					<textarea className="adhd-textarea" value={form.adjustmentsDetails} onChange={e => update("adjustmentsDetails", e.target.value)} />
				</div>
			)}
			{btnRow()}
		</>
	)

	const ReviewRow = ({ label, value }) => (
		<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "var(--mint-soft)", borderRadius: "var(--radius-sm)", fontSize: 14 }}>
			<span style={{ fontWeight: 600, color: "var(--ink)" }}>{label}</span>
			<span style={{ color: "var(--muted)", textAlign: "right", maxWidth: "60%" }}>{value}</span>
		</div>
	)

	const renderScreen13 = () => (
		<>
			<h2>Review Your Information</h2>
			<p className="step-subtitle">Please check the key details below before proceeding.</p>
			<div style={{ display: "grid", gap: 12 }}>
				<ReviewRow label="Assessment pathway" value={form.helpType || "—"} />
				<ReviewRow label="Assessment for" value={form.assessmentFor || "—"} />
				<ReviewRow label="Patient name" value={[form.firstName, form.middleName, form.surname].filter(Boolean).join(" ") || "—"} />
				<ReviewRow label="Date of birth" value={form.patientDob || "—"} />
				<ReviewRow label="Email" value={form.email || "—"} />
				<ReviewRow label="Telephone" value={form.telephone || "—"} />
				<ReviewRow label="Preferred contact" value={form.preferredContact || "—"} />
				<ReviewRow label="Pathway" value={isAdult() ? "Adult" : "Child/Adolescent"} />
			</div>
			<div className="adhd-btn-row">
				<button type="button" className="adhd-back-btn" onClick={() => back(3)}>Edit Details</button>
				<button type="button" className="btn btn-primary" onClick={() => next()} style={{ flex: 2 }}>Continue</button>
			</div>
		</>
	)

	const renderScreen14 = () => (
		<>
			<h2>Before You Submit</h2>
			<p className="step-subtitle">Please review and confirm the following statements.</p>
			{CONSENT_CHECKBOXES.map(c => (
				<div className="adhd-checkbox-row" key={c.key}>
					<input type="checkbox" id={c.key} checked={form[c.key]} onChange={() => update(c.key, !form[c.key])} />
					<label htmlFor={c.key}>{c.text}</label>
				</div>
			))}
			<div style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
				<div className="adhd-checkbox-row">
					<input type="checkbox" id="marketingConsent" checked={form.marketingConsent} onChange={() => update("marketingConsent", !form.marketingConsent)} />
					<label htmlFor="marketingConsent">I would like to receive information about Doodlesstick services and updates.</label>
				</div>
				<div className="adhd-info-box" style={{ marginTop: 12 }}>
					<p>Marketing consent should be separate and optional. Do not make marketing consent a condition of accessing healthcare.</p>
				</div>
			</div>
			<div className="adhd-btn-row">
				<button type="button" className="adhd-back-btn" onClick={() => back()}>Back</button>
				<button type="button" className="btn btn-primary" disabled={!allConsentChecked()} onClick={() => next()} style={{ flex: 2 }}>Continue</button>
			</div>
		</>
	)

	const renderScreen15 = () => (
		<>
			<h2>Choose Your Appointment</h2>
			<p className="step-subtitle">Select your preferred appointment below.</p>
			<div style={{ display: "grid", gap: 12 }}>
				<ReviewRow label="Assessment type" value="ADHD Assessment" />
				<ReviewRow label="Clinician / service" value="Doodlesstick Clinical Team" />
				<ReviewRow label="Appointment duration" value="60 minutes" />
				<ReviewRow label="Available dates" value="Appointment scheduling will be available once your enquiry has been reviewed." />
				<ReviewRow label="Available times" value="To be confirmed" />
				<ReviewRow label="Format" value={form.prefFormat || "Video consultation"} />
				<ReviewRow label="Price" value="To be confirmed" />
			</div>
			<div className="adhd-warning-box" style={{ marginTop: 20 }}>
				<p><strong>What is included:</strong> Comprehensive clinical assessment, diagnostic evaluation, written report (where applicable), and treatment recommendations.</p>
			</div>
			<div className="adhd-info-box">
				<p><strong>Cancellation/rescheduling:</strong> Appointments may be cancelled or rescheduled with at least 48 hours' notice at no charge. Late cancellations may incur a fee.</p>
			</div>
			<div className="adhd-btn-row">
				<button type="button" className="adhd-back-btn" onClick={() => back()}>Back</button>
				<button type="button" className="btn btn-mint" onClick={() => next(16)} style={{ flex: 1 }}>Proceed to Payment</button>
				<button type="button" className="btn btn-primary" onClick={() => next(103)} style={{ flex: 1 }}>Submit for Clinical Review</button>
			</div>
		</>
	)

	const renderScreen16 = () => (
		<>
			<h2>Secure Payment</h2>
			<p className="step-subtitle">Review your booking and complete payment.</p>
			<div style={{ display: "grid", gap: 12 }}>
				<ReviewRow label="Service" value="ADHD Assessment" />
				<ReviewRow label="Appointment" value="Clinician consultation — 60 minutes" />
				<ReviewRow label="Total price" value="To be confirmed" />
			</div>
			<div className="adhd-warning-box" style={{ marginTop: 20 }}>
				<p><strong>Cancellation policy:</strong> If you cancel with more than 48 hours' notice, you will receive a full refund. Cancellations within 48 hours may be subject to an administrative fee.</p>
			</div>
			<div className="adhd-info-box">
				<p><strong>Refund / rescheduling terms:</strong> Refunds are processed within 5–10 working days. You may reschedule once at no additional cost with at least 48 hours' notice.</p>
			</div>
			<div style={{ marginTop: 24 }}>
				<div className="adhd-checkbox-row">
					<input type="checkbox" id="paymentService" checked={form.paymentService} onChange={() => update("paymentService", !form.paymentService)} />
					<label htmlFor="paymentService">I have reviewed the service being purchased.</label>
				</div>
				<div className="adhd-checkbox-row">
					<input type="checkbox" id="paymentTerms" checked={form.paymentTerms} onChange={() => update("paymentTerms", !form.paymentTerms)} />
					<label htmlFor="paymentTerms">I have read and accept the booking and cancellation terms.</label>
				</div>
			</div>
			<div className="adhd-btn-row">
				<button type="button" className="adhd-back-btn" onClick={() => back()}>Back</button>
				<button type="button" className="btn btn-primary" disabled={!form.paymentService || !form.paymentTerms} onClick={() => next(17)} style={{ flex: 2 }}>Pay & Confirm Appointment</button>
			</div>
		</>
	)

	const renderScreen17 = () => (
		<>
			<h2>Your Request Has Been Received</h2>
			<p className="step-subtitle">Thank you for choosing Doodlesstick.</p>
			<div className="adhd-info-box">
				<p>Your appointment details have been recorded. You will receive a confirmation email shortly with full details of your booking.</p>
			</div>
			<div style={{ display: "grid", gap: 12, marginTop: 16 }}>
				<ReviewRow label="Patient" value={[form.firstName, form.surname].filter(Boolean).join(" ") || "—"} />
				<ReviewRow label="Assessment type" value="ADHD Assessment" />
				<ReviewRow label="Format" value={form.prefFormat || "Video consultation"} />
				<ReviewRow label="Status" value="Awaiting confirmation" />
			</div>
			<div style={{ marginTop: 24 }}>
				<h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>What Happens Next</h3>
				<ul className="adhd-content-list">
					<li>You will receive a confirmation email with your appointment details.</li>
					<li>Our clinical team will review your enquiry within 3 working days.</li>
					<li>You may be contacted for additional information before your appointment.</li>
					<li>Pre-assessment questionnaires will be sent before your consultation.</li>
				</ul>
			</div>
			<div className="adhd-btn-row" style={{ flexDirection: "column", gap: 12 }}>
				<button type="button" className="btn btn-primary" disabled style={{ opacity: 0.6, cursor: "not-allowed" }}>Go to Patient Portal</button>
				<button type="button" className="btn btn-mint" disabled style={{ opacity: 0.6, cursor: "not-allowed" }}>View Appointment</button>
				<Link to="/" className="btn btn-ghost" style={{ textAlign: "center" }}>Back to Home</Link>
			</div>
		</>
	)

	const renderCurrentStep = () => {
		switch (step) {
			case 1: return renderScreen1()
			case 100: return renderScreen1b()
			case 101: return renderScreen1c()
			case 102: return renderScreen1bConfirm()
			case 2: return renderScreen2()
			case 3: return renderScreen3()
			case 4: return renderScreen4()
			case 5: return renderScreen5()
			case 6: return renderScreen6()
			case 7: return renderScreen7()
			case 8: return renderScreen8()
			case 9: return renderScreen9()
			case 10: return renderScreen10()
			case 11: return renderScreen11()
			case 12: return renderScreen12()
			case 13: return renderScreen13()
			case 14: return renderScreen14()
			case 15: return renderScreen15()
			case 16: return renderScreen16()
			case 17: return renderScreen17()
			default: return renderScreen1()
		}
	}

	return (
		<>
			<Seo
				path="/adhd/book"
				title="Book an ADHD Assessment | Doodlesstick Limited"
				description="Book or enquire about a comprehensive ADHD assessment with Doodlesstick. Complete our multi-step booking form to get started."
			/>
			<Navbar />
			<main>
				<section className="adhd-hero" aria-labelledby="book-hero-title">
					<div className="eyebrow eyebrow--center">
						<i className="fa-solid fa-calendar-check" aria-hidden="true" />
						ADHD Assessment
					</div>
					<h1 id="book-hero-title">Book Your Assessment</h1>
					<p className="lead">
						Complete the form below to request an ADHD assessment or make an
						enquiry. The information you provide will help our clinical team
						prepare for your assessment.
					</p>
				</section>
				<div className="adhd-booking">
					{step >= 2 && step <= 17 && (
						<div className="adhd-booking-progress" aria-label="Form progress">
							{renderDots()}
						</div>
					)}
					<div className="adhd-booking-card">
						{renderCurrentStep()}
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}
