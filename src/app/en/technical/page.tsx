import { CourseCategoryPageClient } from "@/components/pages/CourseCategoryPageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "en",
	pathname: "/technical",
	component: <CourseCategoryPageClient category="technical" />,
	metadata: {
		title:
			"Technical Diving Courses | SSI Extended Range & Trimix – Mariusz Ciupa",
		description:
			"Advanced technical diving training for deeper and longer dives. SSI extended range, decompression and trimix courses with precision and safety focus.",
	},
});

export { metadata };
export default Page;
