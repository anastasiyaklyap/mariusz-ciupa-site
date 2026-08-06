import { createCourseCategoryPage } from "@/app/_pages/createCourseCategoryPage";

const { metadata, Page } = createCourseCategoryPage({
	locale: "pl",
	category: "beginner",
	metadata: {
		title:
			"Kursy nurkowania dla początkujących | SSI Open Water – Mariusz Ciupa",
		description:
			"Rozpocznij naukę nurkowania od zera dzięki kursom SSI dla początkujących. Try Scuba, Open Water Diver i kursy odświeżające.",
	},
});

export { metadata };
export default Page;
