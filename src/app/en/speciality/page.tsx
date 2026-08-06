import { createCourseCategoryPage } from "@/app/_pages/createCourseCategoryPage";

const { metadata, Page } = createCourseCategoryPage({
	locale: "en",
	category: "speciality",
	metadata: {
		title:
			"Speciality Scuba Diving Courses | SSI Skill & Environment Training – Mariusz Ciupa",
		description:
			"Improve your diving skills with SSI specialty courses including buoyancy, navigation, dry suit, nitrox and night diving. Focused, personal training.",
	},
});

export { metadata };
export default Page;
