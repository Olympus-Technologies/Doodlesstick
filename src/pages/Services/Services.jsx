import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Seo } from "../../components/Seo";
import { Reveal } from "../../components/Reveal";
import "./Services.css";

const services = [
	{
		icon: "fa-solid fa-comment-medical",
		title: "Supported Living",
		description1:
			"At Doodles Stick Limited, we provide supported living services that give people choice, respect, independence, and quality of life. We believe people have the right to live the life they choose for themselves in their own homes, with their own tenancies.",
		description2:
			"We ensure that people feel safe in their environment, people get the right support that will enable them to fulfil life aspirations and successfully live within the community.",
		link: "/supported-living",
	},
	{
		icon: "fa-solid fa-user-nurse",
		title: "Domiciliary Care",
		description1:
			"Doodles Stick Limited provides specialist home care services to people of all adult ages within the areas of Northamptonshire, Milton Keynes, Bedfordshire, Leicestershire, Buckinghamshire, and surrounding areas.",
		description2:
			"We have experience supporting people of different health and social care needs including learning disabilities, autism, mental illness, dementia, sensory impairment, physical disabilities and more.",
		link: "/domiciliary-care",
	},
	{
		icon: "fa-solid fa-heart",
		title: "Children Care Services",
		description1:
			"At Doodles Stick, we are dedicated to providing a safe, nurturing, and therapeutic home environment for children and young people aged 8 to 18.",
		description2:
			"Our approach combines therapeutic care with individualized support plans, ensuring each young person can develop at their own pace and in their own way.",
		link: "/children-care-services",
	},
	{
		icon: "fa-regular fa-clock",
		title: "Live-in Care/24hrs",
		description1:
			"We provide bespoke and carefully structured care that ensures that service users' needs are met in their own home. It is a popular alternative to residential care.",
		description2:
			"The services included in live-in care is not limited to a set of duties, task, and responsibilities, but tailored to meet everyone's needs.",
		link: "/live-in-care",
	},
	{
		icon: "fa-solid fa-plus",
		title: "Healthcare Recruitment",
		description1:
			"We recruit a wide range of healthcare professionals who are then placed with other care facilities to work as permanent, contract or temporary agency staffing basis.",
		description2:
			"We recruit: Healthcare Assistants, Support workers, Nurses, etc.",
		link: "/healthcare-recruitment",
	},
	{
		icon: "fa-solid fa-laptop-medical",
		title: "Healthcare Business Consultancy",
		description1:
			"We are subject matter experts in the industry and as a result we are happy to support others in their healthcare business projects.",
		description2: "",
		link: "/healthcare-business-consultation",
	},
	{
		icon: "fa-solid fa-book-medical",
		title: "Healthcare Training",
		description1:
			"We are fully accredited to provide face to face training to our staff in health and social care topics including the following: People Movers, moving and handling, First Aid, Adult Basic life support, COSHH Awareness, Dementia Awareness, Diabetes Awareness",
		description2: "",
		link: "/healthcare-training",
	},
];

const Services = () => {
	return (
		<>
			<Seo
				path="/services"
				title="Our Services | Doodlesstick Limited — Home Care, Recruitment & Training"
				description="Doodlesstick Limited delivers supported living, domiciliary care, children care services, live-in care, healthcare recruitment, business consultancy and training across Northamptonshire and the Midlands."
			/>
			<Navbar />

			<main>
				<section className="services-page" aria-labelledby="services-title">
					<h2 id="services-title" className="section-header">
						Our Services
					</h2>
					<div className="services-container">
						{services.map((service, index) => (
							<Reveal
								key={service.title}
								className="service-item"
								delay={(index % 3) * 80}
							>
								<div className="service-icon">
									<i
										className={`fa ${service.icon}`}
										aria-hidden="true"
									/>
								</div>
								<div className="service-content">
									<h3 className="service-title">
										{service.title}
									</h3>
									<p className="service-description">
										{service.description1}
									</p>
									{service.description2 && (
										<p className="service-description">
											{service.description2}
										</p>
									)}
									<Link
										className="read-more-btn"
										to={service.link}
									>
										Read More
									</Link>
								</div>
							</Reveal>
						))}
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default Services;
