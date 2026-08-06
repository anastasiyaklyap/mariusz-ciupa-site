import { createCourseCategoryPage } from "@/app/_pages/createCourseCategoryPage";

const { metadata, Page } = createCourseCategoryPage({
	locale: "pl",
	category: "technical",
	metadata: {
		title:
			"Kursy nurkowania technicznego SSI od £280 | Extended Range",
		description:
			"Szkolenia techniczne SSI po polsku: dekompresja, Extended Range, trimix, wraki zaawansowane. Od £280. Instruktor SSI XR.",
	},
});

export { metadata };
export default Page;
