import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { Seo } from "../../../components/Seo";
import { Reveal } from "../../../components/Reveal";
import SupportImg from "../../../images/supported_living.webp";

const Supported_Living = () => {
	return (
		<>
			<Seo
				path="/supported-living"
				title="Supported Living | Doodlesstick Limited — Northampton"
				description="Doodlesstick supported living services give people choice, respect, independence and quality of life in their own homes with their own tenancies, across Northamptonshire and the Midlands."
			/>
			<Navbar />

			<main>
				<section className="care" aria-labelledby="supported-title">
					<div className="care-container">
						<div className="care-image">
							<Reveal>
								<img
									src={SupportImg}
									alt="Supported living services at Doodlesstick"
									loading="lazy"
								/>
							</Reveal>
							<Reveal className="care-card" delay={80}>
								<h2 id="supported-title">Supported Living</h2>
								<ul>
									<li>
										At Doodles Stick Limited, we provide
										supported living services that give
										people choice, respect, independence, and
										quality of life. We believe people have
										the right to live the life they choose
										for themselves in their own homes, with
										their own tenancies.
									</li>
									<li>
										We ensure that people feel safe in their
										environment, people get the right support
										that will enable them to fulfil life
										aspirations and successfully live within
										the community.
									</li>
									<li>
										Our management and staff are experts in
										supporting people with learning
										disabilities, Autism, and mental health
										needs. We have adequate experience in
										managing behaviors that challenge and
										meeting complex needs.
									</li>
									<li>
										We use positive behavior, person centered
										active support and Intensive interaction
										approaches in behavior management and
										development of independent and life
										skills.
									</li>
									<li>
										The Support we provide is
										person-centered and tailored to meet
										individual&apos;s unique needs,
										preferences, and aspirations.
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

export default Supported_Living;
