import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Seo } from "../../components/Seo";
import { Reveal } from "../../components/Reveal";
import "./Vacancies.css";

const jobs = [
	{ title: "Health Care Assistant", slug: "health_care_assistant" },
	{ title: "Support Workers", slug: "support_workers" },
	{ title: "Care Manager", slug: "care_manager" },
	{ title: "Care Team Leader", slug: "care_team_leader" },
	{ title: "Doctors", slug: "doctors" },
	{ title: "Nurses", slug: "nurses" },
];

export function Vacancies() {
	return (
		<>
			<Seo
				path="/vacancies"
				title="Vacancies & Careers | Doodlesstick Limited — Northampton"
				description="Join Doodlesstick Limited. We are recruiting healthcare assistants, support workers, care managers, care team leaders, doctors and nurses across Northamptonshire."
			/>
			<Navbar />

			<main>
				<section className="job-listing" aria-labelledby="jobs-title">
					<h1 id="jobs-title" className="job-listing-title">
						Job Listing
					</h1>
					<div id="job-container" className="job-container">
						{jobs.map((job) => (
							<Reveal className="job-box" key={job.slug} delay={80}>
								<div className="job-title">
									<h2>{job.title}</h2>
								</div>
								<div className="apply-button">
									<Link to={`/job?slug=${job.slug}`}>
										View Job
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
}
