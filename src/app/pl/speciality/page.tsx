import { createCourseCategoryPage } from "@/app/_pages/createCourseCategoryPage";

const { metadata, Page } = createCourseCategoryPage({
	locale: "pl",
	category: "speciality",
	metadata: {
		title:
			"Kursy specjalistyczne SSI w Londynie od £99 | Po polsku",
		description:
			"Rozwijaj umiejętności na kursach SSI: pływalność, nitrox, głębokie, wrakowe, suchy skafander. 17 specjalizacji od £99.",
	},
});

export { metadata };
export default Page;
