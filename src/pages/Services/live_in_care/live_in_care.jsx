import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { Seo } from "../../../components/Seo";
import { Reveal } from "../../../components/Reveal";
import live_in_careImg from "../../../images/live_in_care.webp";

const Live_In_Care = () => {
	return (
		<>
			<Seo
				path="/live-in-care"
				title="Live-In Care & 24 Hour Support | Doodlesstick Limited"
				description="Bespoke live-in care and 24 hour support in the comfort of your own home — a popular alternative to residential care. Bathing, meals, companionship, overnight care and specialist care."
			/>
			<Navbar />

			<main>
				<section className="care" aria-labelledby="livein-title">
					<div className="care-container">
						<div className="care-image">
							<Reveal>
								<img
									src={live_in_careImg}
									className="object-cover object-top"
									alt="Live-in care and 24 hour support at Doodlesstick"
									loading="lazy"
								/>
							</Reveal>
							<Reveal className="care-card" delay={80}>
								<h2 id="livein-title">Live In Care/24hrs</h2>
								<ul>
									<li>
										We provide bespoke and carefully
										structured 										care that ensures that service
										users&apos; needs are met in their own
										home. It is a popular alternative to
										residential care.
									</li>
									<li>
										The services included in live-in care
										is not limited to a set of duties,
										task, and responsibilities, but
										tailored to meet everyone&apos;s needs.
									</li>
									<li>
										We will support with:
										<br />
										<br />- Bathing, toileting, grooming and
										dressing.
										<br />- Helping to prepare healthy meals.
										<br />- Household chores including
										laundry and general cleaning.
										<br />- Shopping trips
										<br />- Social activities and engagements
										<br />- Daily companionship
										<br />- Overnight care and support
										<br />- Specialist care including Stoma
										care, catheter care, PEG and more.
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

export default Live_In_Care;
