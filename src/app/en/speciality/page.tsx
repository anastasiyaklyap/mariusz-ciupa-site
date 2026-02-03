import { CourseCategoryPageClient } from "@/components/pages/CourseCategoryPageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "en",
	pathname: "/speciality",
	component: <CourseCategoryPageClient category="speciality" />,
	metadata: {
		title:
			"Speciality Scuba Diving Courses | SSI Skill & Environment Training – Mariusz Ciupa",
		description:
			"Improve your diving skills with SSI specialty courses including buoyancy, navigation, dry suit, nitrox and night diving. Focused, personal training.",
	},
});

export { metadata };
export default Page;
