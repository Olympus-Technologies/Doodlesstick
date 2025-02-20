import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import "./Vacancies.css"

export function Vacancies() {

  const jobs = [
    {
      title: "Health Care Assistant",
      slug: "health_care_assistant",
      applyLink: "path/to/your/form-or-requirements.pdf",
    },
    {
      title: "Support Workers",
      slug: "support_workers",
      applyLink: "path/to/your/form-or-requirements.pdf",
    },
    {
      title: "Care Manager",
      slug: "care_manager",
      applyLink: "path/to/your/form-or-requirements.pdf",
    },
    {
      title: "Care Team Leader",
      slug: "care_team_leader",
      applyLink: "path/to/your/form-or-requirements.pdf",
    },
    {
      title: "Doctors",
      slug: "doctors",
      applyLink: "path/to/your/form-or-requirements.pdf",
    },
    {
      title: "Nurses",
      slug: "nurses",
      applyLink: "path/to/your/form-or-requirements.pdf",
    },
  ];

  return (
    <>
      <Navbar />
      <h1 className="job-listing-title">Job Listing</h1>
      <section className="job-listing">
        <div id="job-container" className="job-container">
          {jobs.map((e) => {
            return (<>
              <div className="job-box">
                <div class="job-title">
                  <h2>{e.title}</h2>
                </div>
                <div class="apply-button">
                  <Link to={`/job?slug=${e.slug}`}>View Job</Link>
                </div>
              </div>
            </>)
          })}
        </div>
      </section>
      <Footer />
    </>
  )
}
