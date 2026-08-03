import { useEffect } from "react";
import { SITE } from "../data/site";

/* eslint-disable react/prop-types */

function Seo({
	path,
	title,
	description,
	keywords,
	canonical,
	jsonLd,
}) {
	useEffect(() => {
		const resolvedTitle = title || SITE.name;
		const resolvedDescription = description || SITE.description;
		const resolvedCanonical = canonical || `${SITE.url}${path || "/"}`;

		const previousTitle = document.title;
		document.title = resolvedTitle;

		const setMeta = (attr, key, content) => {
			let el = document.head.querySelector(`meta[${attr}="${key}"]`);
			if (!el) {
				el = document.createElement("meta");
				el.setAttribute(attr, key);
				document.head.appendChild(el);
			}
			el.setAttribute("content", content);
		};

		setMeta("name", "description", resolvedDescription);
		if (keywords) setMeta("name", "keywords", keywords);
		setMeta("property", "og:title", resolvedTitle);
		setMeta("property", "og:description", resolvedDescription);
		setMeta("property", "og:type", "website");
		setMeta("property", "og:url", resolvedCanonical);
		setMeta("name", "twitter:card", "summary_large_image");
		setMeta("name", "twitter:title", resolvedTitle);
		setMeta("name", "twitter:description", resolvedDescription);

		let link = document.head.querySelector('link[rel="canonical"]');
		if (!link) {
			link = document.createElement("link");
			link.setAttribute("rel", "canonical");
			document.head.appendChild(link);
		}
		link.setAttribute("href", resolvedCanonical);

		if (jsonLd) {
			let el = document.head.querySelector(
				'script[type="application/ld+json"]'
			);
			if (!el) {
				el = document.createElement("script");
				el.setAttribute("type", "application/ld+json");
				document.head.appendChild(el);
			}
			el.textContent = JSON.stringify(jsonLd);
		}

		return () => {
			document.title = previousTitle;
		};
	}, [path, title, description, keywords, canonical, jsonLd]);

	return null;
}

export default Seo;
export { Seo };
