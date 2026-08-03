import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Seo } from "../../components/Seo";
import { Reveal } from "../../components/Reveal";
import businessPlans from "../../images/businessPlans.webp";
import contratcInformation from "../../images/contratcInformation.webp";
import cqc_genops from "../../images/cqc&genops.webp";
import cqcImage from "../../images/cqc.webp";
import cqcFinancial from "../../images/cqcFinancial.webp";
import cqcInterview from "../../images/cqcInterview.webp";
import cqcKloe from "../../images/cqcKloe.webp";
import mockInspections from "../../images/mockInspections.webp";
import operatingFormats from "../../images/operatingFormats.webp";
import relevantBespoke from "../../images/relevantBespoke.webp";
import "./Bookings.css";

const bookingCardsData = [
	{
		image: cqcImage,
		title: "Registration with CQC",
		hours: "1hr",
		contact: "Contact Admin",
	},
	{
		image: cqc_genops,
		title: "Policies & procedures (CQC & Gen Ops)",
		hours: "1hr",
		contact: "Contact Admin",
	},
	{
		image: businessPlans,
		title: "Business Plans",
		hours: "1hr",
		contact: "Contact Admin",
	},
	{
		image: cqcInterview,
		title: "CQC Interview Preparation",
		hours: "1hr",
		contact: "Contact Admin",
	},
	{
		image: operatingFormats,
		title: "Operating Formats & Templates",
		hours: "1hr",
		contact: "Contact Admin",
	},
	{
		image: mockInspections,
		title: "Mock Inspection & Compliance Audits",
		hours: "1hr",
		contact: "Contact Admin",
	},
	{
		image: cqcKloe,
		title: "CQC KLOE Statements",
		hours: "1hr",
		contact: "Contact Admin",
	},
	{
		image: cqcFinancial,
		title: "CQC Financial Viability",
		hours: "1hr",
		contact: "Contact Admin",
	},
	{
		image: relevantBespoke,
		title: "Relevant Bespoke Support",
		hours: "1hr",
		contact: "Contact Admin",
	},
	{
		image: contratcInformation,
		title: "Contract Information",
		hours: "1hr",
		contact: "Contact Admin",
	},
];

const Bookings = () => {
	const navigate = useNavigate();

	const createBookingCard = (data, index) => (
		<Reveal className="booking-card" key={data.title} delay={(index % 3) * 80}>
			<img src={data.image} alt={data.title} className="card-image" loading="lazy" />
			<div className="card-content">
				<h3 className="card-title">{data.title}</h3>
				<p className="card-hours">{data.hours}</p>
				{data.contact && <p className="card-contact">{data.contact}</p>}
				<button
					type="button"
					className="book-now-button"
					onClick={() => navigate("/contact-us")}
				>
					Book Now
				</button>
			</div>
		</Reveal>
	);

	return (
		<>
			<Seo
				path="/bookings"
				title="Book a Session | Doodlesstick Limited — CQC & Healthcare Consultancy"
				description="Book online with Doodlesstick Limited: CQC registration, policies & procedures, business plans, mock inspections, KLOE statements and bespoke healthcare business support."
			/>
			<Navbar />

			<main>
				<section
					className="booking-section--booking-page"
					aria-labelledby="booking-title"
				>
					<h2 id="booking-title" className="booking-header">
						Book Online
					</h2>
					<div className="booking-cards">
						{bookingCardsData.map(createBookingCard)}
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default Bookings;
