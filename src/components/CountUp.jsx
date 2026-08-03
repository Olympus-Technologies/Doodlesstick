import { useEffect, useRef, useState } from "react";

/* eslint-disable react/prop-types */

function easeOutCubic(t) {
	return 1 - Math.pow(1 - t, 3);
}

function CountUp({ to, suffix = "", duration = 1600, className = "", as: Tag = "span" }) {
	const ref = useRef(null);
	const [value, setValue] = useState(0);
	const started = useRef(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return undefined;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setValue(to);
			return undefined;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !started.current) {
					started.current = true;
					const start = performance.now();

					const tick = (now) => {
						const progress = Math.min((now - start) / duration, 1);
						setValue(Math.round(easeOutCubic(progress) * to));
						if (progress < 1) {
							requestAnimationFrame(tick);
						}
					};

					requestAnimationFrame(tick);
					observer.disconnect();
				}
			},
			{ threshold: 0.4 }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, [to, duration]);

	return (
		<Tag ref={ref} className={className}>
			{value.toLocaleString()}
			{suffix}
		</Tag>
	);
}

export default CountUp;
export { CountUp };
