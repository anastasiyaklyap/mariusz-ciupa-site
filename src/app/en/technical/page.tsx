import { createCourseCategoryPage } from "@/app/_pages/createCourseCategoryPage";

const { metadata, Page } = createCourseCategoryPage({
	locale: "en",
	category: "technical",
	metadata: {
		title:
			"SSI Technical Diving Courses from £280 | Extended Range",
		description:
			"SSI technical diving training: decompression, Extended Range, Trimix and advanced wreck diving. From £280. Personal instruction with an SSI XR instructor.",
	},
});

export { metadata };
export default Page;
