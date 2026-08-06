import { createCourseCategoryPage } from "@/app/_pages/createCourseCategoryPage";

const { metadata, Page } = createCourseCategoryPage({
	locale: "en",
	category: "speciality",
	metadata: {
		title:
			"SSI Speciality Diving Courses in London from £99",
		description:
			"Improve your diving with SSI speciality courses: Perfect Buoyancy, Nitrox, Deep, Wreck, Dry Suit and more. 17 courses from £99.",
	},
});

export { metadata };
export default Page;
