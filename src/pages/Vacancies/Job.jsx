import { useSearchParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Seo } from "../../components/Seo";
import "./Job.css";
import HealthCareAssistant from "./Jobs/HealthCareAssistant";
import SupportWorkers from "./Jobs/SupportWorker";
import CareManager from "./Jobs/CareManager";
import CareTeamLeader from "./Jobs/CareTeamLeader";
import Doctors from "./Jobs/Doctors";
import Nurses from "./Jobs/Nurses";

const JOB_TITLES = {
	health_care_assistant: "Health Care Assistant",
	support_workers: "Support Workers",
	care_manager: "Care Manager",
	care_team_leader: "Care Team Leader",
	doctors: "Doctors",
	nurses: "Nurses",
};

export function Job() {
	const [searchParams] = useSearchParams();
	const jobID = searchParams.get("slug");

	const pages = {
		health_care_assistant: <HealthCareAssistant />,
		support_workers: <SupportWorkers />,
		care_manager: <CareManager />,
		care_team_leader: <CareTeamLeader />,
		doctors: <Doctors />,
		nurses: <Nurses />,
	};

	const jobTitle = JOB_TITLES[jobID] || "Job Vacancy";

	return (
		<>
			<Seo
				path={`/job?slug=${jobID || ""}`}
				title={`${jobTitle} Job | Doodlesstick Limited — Northampton`}
				description={`Apply for the ${jobTitle} position at Doodlesstick Limited in Northamptonshire. Download the application form and start your career in healthcare today.`}
			/>
			<Navbar />

			<main>
				<section className="job-listing-detail">
					{pages[jobID] || (
					<div className="job-container">
						<p className="title">Job not found.</p>
					</div>
					)}
				</section>
			</main>

			<Footer />
		</>
	);
}
