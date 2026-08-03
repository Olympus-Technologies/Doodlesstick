import { useNavigate } from "react-router-dom";
import comingSoonImage from "../../images/maintenance.png";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Seo } from "../Seo";
import "./coming_soon.css";

const ComingSoon = () => {
	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate(-1);
	};

	return (
		<>
			<Seo
				path="/coming-soon"
				title="Coming Soon | Doodlesstick Limited"
				description="New Doodlesstick healthcare training products are on the way."
			/>
			<Navbar />
			<main>
				<div className="coming-soon-container">
					<button
						type="button"
						onClick={handleBackClick}
						className="back-button"
						aria-label="Go back"
					>
						<i className="fas fa-arrow-left" aria-hidden="true" />
					</button>
					<img
						src={comingSoonImage}
						alt="Coming Soon"
						className="coming-soon-image"
					/>
					<h2 className="coming-soon-title">Coming Soon</h2>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default ComingSoon;
