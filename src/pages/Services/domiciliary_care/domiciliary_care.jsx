import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { Seo } from "../../../components/Seo";
import { Reveal } from "../../../components/Reveal";
import DomiciliaryImg from "../../../images/domiciliary_care.webp";

const Domiciliary_Care = () => {
	return (
		<>
			<Seo
				path="/domiciliary-care"
				title="Domiciliary Care at Home | Doodlesstick Limited — Northampton"
				description="Doodlesstick Limited provides specialist domiciliary home care across Northamptonshire, Milton Keynes, Bedfordshire, Leicestershire and Buckinghamshire — from a few hours a day to 24 hour support."
			/>
			<Navbar />

			<main>
				<section className="care" aria-labelledby="domiciliary-title">
					<div className="care-container">
						<div className="care-image">
							<Reveal>
								<img
									src={DomiciliaryImg}
									className="object-cover object-top"
									alt="Doodlesstick domiciliary care at home"
									loading="lazy"
								/>
							</Reveal>
							<Reveal className="care-card" delay={80}>
								<h2 id="domiciliary-title">Domiciliary Care</h2>
								<ul>
									<li>
										Doodles Stick Limited provides specialist
										home care services to people of all adult
										ages within the areas of
										Northamptonshire, Milton Keynes,
										Bedfordshire, Leicestershire,
										Buckinghamshire, and surrounding areas.
									</li>
									<li>
										We have experience supporting people with
										different health and social care needs
										including learning disabilities, autism,
										mental illness, dementia, sensory
										impairment, physical disabilities, and
										more.
									</li>
									<li>
										We develop personalized support packages,
										which can be provided from a few hours a
										day to 24 hours round-the-clock support.
									</li>
									<li>
										Our service users are encouraged to
										maximize their abilities and live as
										independently as much as possible within
										the community. Services we provide
										include:
										<br />
										<br />- Personal care: oral care,
										continence care, grooming
										<br />- Healthcare regime and medications
										<br />- Community engagement and
										activities
										<br />- Domestic activities: shopping,
										cleaning, and laundry
										<br />- Financial management support
										<br />- Educational and vocational
										activities
									</li>
								</ul>
							</Reveal>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default Domiciliary_Care;
