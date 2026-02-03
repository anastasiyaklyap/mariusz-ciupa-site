import { CourseCategoryPageClient } from "@/components/pages/CourseCategoryPageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "en",
	pathname: "/beginner",
	component: <CourseCategoryPageClient category="beginner" />,
	metadata: {
		title:
			"Beginner Scuba Diving Courses | SSI Open Water & Try Scuba – Mariusz Ciupa",
		description:
			"Start scuba diving from zero with SSI beginner courses. Try Scuba, Open Water Diver and skill refreshers with safety-focused, personal training.",
	},
});

export { metadata };
export default Page;
