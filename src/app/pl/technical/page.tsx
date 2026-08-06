import { createCourseCategoryPage } from "@/app/_pages/createCourseCategoryPage";

const { metadata, Page } = createCourseCategoryPage({
	locale: "pl",
	category: "technical",
	metadata: {
		title: "Kursy nurkowania technicznego | SSI Extended Range – Mariusz Ciupa",
		description:
			"Zaawansowane szkolenia nurkowe SSI dla głębszych i dłuższych nurkowań. Kursy extended range, dekompresyjne i trimix.",
	},
});

export { metadata };
export default Page;
