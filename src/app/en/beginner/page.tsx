import { createCourseCategoryPage } from "@/app/_pages/createCourseCategoryPage";

const { metadata, Page } = createCourseCategoryPage({
	locale: "en",
	category: "beginner",
	metadata: {
		title:
			"Learn to Scuba Dive in London | SSI Open Water Diver Course",
		description:
			"Start from zero with SSI beginner courses in London. Try Dive £75, full Open Water Diver £550. Personal, safety-first training.",
	},
});

export { metadata };
export default Page;
