import { useEffect, useRef } from "react";

/* eslint-disable react/prop-types */

const DIRECTION_CLASSES = {
	up: "",
	left: "reveal-left",
	right: "reveal-right",
	zoom: "reveal-zoom",
};

function Reveal({
	children,
	delay = 0,
	as: Tag = "div",
	className = "",
	direction = "up",
}) {
	const ref = useRef(null);

	useEffect(() => {
		const node = ref.current;
		if (!node) return undefined;

		if (
			!("IntersectionObserver" in window) ||
			window.matchMedia("(prefers-reduced-motion: reduce)").matches
		) {
			node.classList.add("is-visible");
			return undefined;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

	return (
		<Tag
			ref={ref}
			className={`reveal ${DIRECTION_CLASSES[direction] || ""} ${className}`}
			style={style}
		>
			{children}
		</Tag>
	);
}

export default Reveal;
export { Reveal };
