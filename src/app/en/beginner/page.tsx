import { createCourseCategoryPage } from "@/app/_pages/createCourseCategoryPage";

const { metadata, Page } = createCourseCategoryPage({
	locale: "en",
	category: "beginner",
	metadata: {
		title:
			"Beginner Scuba Diving Courses | SSI Open Water & Try Scuba – Mariusz Ciupa",
		description:
			"Start scuba diving from zero with SSI beginner courses. Try Scuba, Open Water Diver and skill refreshers with safety-focused, personal training.",
	},
});

export { metadata };
export default Page;
