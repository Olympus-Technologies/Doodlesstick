import { useEffect, useState } from "react";

function BackToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setVisible(window.scrollY > 320);
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button
			type="button"
			className={`back-to-top${visible ? " is-visible" : ""}`}
			onClick={scrollTop}
			aria-label="Back to top"
		>
			&#8679;
		</button>
	);
}

export default BackToTop;
export { BackToTop };
