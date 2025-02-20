import { useSearchParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { useEffect, useState } from "react";
import "./Job.css";
import HealthCareAssistant from "./Jobs/HealthCareAssistant";
import SupportWorkers from "./Jobs/SupportWorker";
import CareManager from "./Jobs/CareManager";
import CareTeamLeader from "./Jobs/CareTeamLeader";
import Doctors from "./Jobs/Doctors";
import Nurses from "./Jobs/Nurses";

export function Job() {
  const [searchParams, _setSearchParams] = useSearchParams();
  const [jobID, setJobID] = useState(null)

  const pages = {
    health_care_assistant: <HealthCareAssistant />,
    support_workers: <SupportWorkers />,
    care_manager: <CareManager />,
    care_team_leader: <CareTeamLeader />,
    doctors: <Doctors />,
    nurses: <Nurses />
  }

  useEffect(() => {
    setJobID(searchParams.get("slug"));
  }, []);

  return (
    <>
      <Navbar />
      {/* <h1 className="job-listing-title">Job Listing</h1> */}
      <section className="job-listing-detail" style={{ marginTop: "50px" }}>
        {pages[jobID]}
      </section>
      <Footer />
    </>
  )
}
