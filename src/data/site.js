export const SITE = {
	name: "Doodlesstick Limited",
	shortName: "Doodlesstick",
	url: "https://doodlesstick.com",
	description:
		"Doodlesstick Limited is a specialist healthcare company in Northampton delivering supported living, domiciliary care, live-in care, healthcare recruitment, training and CQC business consultancy.",
	phone: "01604216476",
	phoneAlt: "07737493075",
	email: "info@doodlesstick.com",
	contactEmail: "doodlesstick09@gmail.com",
	address: {
		street: "Suite G7, Moulton Park Business Centre",
		addressLine: "Redhouse Road",
		city: "Northampton",
		postcode: "NN3 6AQ",
	},
	geo: { lat: 52.24048, lng: -0.902656 },
	areaServed: [
		"Northamptonshire",
		"Milton Keynes",
		"Bedfordshire",
		"Leicestershire",
		"Buckinghamshire",
	],
	logo: "/favicon.png",
};

export const SERVICE_LINKS = [
	{ to: "/supported-living", label: "Supported Living" },
	{ to: "/domiciliary-care", label: "Domiciliary Care" },
	{ to: "/children-care-services", label: "Children Care Services" },
	{ to: "/live-in-care", label: "Live in Care / 24hrs" },
	{ to: "/healthcare-recruitment", label: "Healthcare Recruitment" },
	{
		to: "/healthcare-business-consultation",
		label: "Healthcare Business Consultation",
	},
	{ to: "/healthcare-training", label: "Healthcare Training" },
];

export const NAV_LINKS = [
	{ to: "/", label: "Home" },
	{ to: "/services", label: "Our Services" },
	{ to: "/about-us", label: "About Us" },
	{ to: "/contact-us", label: "Contact Us" },
	{ to: "/vacancies", label: "Vacancies" },
];
