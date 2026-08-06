import { createCourseCategoryPage } from "@/app/_pages/createCourseCategoryPage";

const { metadata, Page } = createCourseCategoryPage({
	locale: "pl",
	category: "speciality",
	metadata: {
		title: "Specjalistyczne kursy nurkowania | Kursy SSI – Mariusz Ciupa",
		description:
			"Rozwijaj umiejętności nurkowe na kursach SSI: pływalność, nawigacja, suchy skafander, nitrox i nurkowanie nocne.",
	},
});

export { metadata };
export default Page;
