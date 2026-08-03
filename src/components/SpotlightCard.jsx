import { useRef } from "react";

/* eslint-disable react/prop-types */

function SpotlightCard({ children, className = "", as: Tag = "div" }) {
	const ref = useRef(null);

	const onMouseMove = (event) => {
		const node = ref.current;
		if (!node) return;
		const rect = node.getBoundingClientRect();
		node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
		node.style.setProperty("--my", `${event.clientY - rect.top}px`);
	};

	return (
		<Tag ref={ref} onMouseMove={onMouseMove} className={`spotlight ${className}`}>
			{children}
		</Tag>
	);
}

export default SpotlightCard;
export { SpotlightCard };
