import { createCourseCategoryPage } from "@/app/_pages/createCourseCategoryPage";

const { metadata, Page } = createCourseCategoryPage({
	locale: "en",
	category: "technical",
	metadata: {
		title:
			"Technical Diving Courses | SSI Extended Range & Trimix – Mariusz Ciupa",
		description:
			"Advanced technical diving training for deeper and longer dives. SSI extended range, decompression and trimix courses with precision and safety focus.",
	},
});

export { metadata };
export default Page;
