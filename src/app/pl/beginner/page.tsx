import { createCourseCategoryPage } from "@/app/_pages/createCourseCategoryPage";

const { metadata, Page } = createCourseCategoryPage({
	locale: "pl",
	category: "beginner",
	metadata: {
		title:
			"Kurs nurkowania od podstaw w Londynie | SSI Open Water",
		description:
			"Zacznij nurkować od zera z polskim instruktorem SSI w Londynie. Try Dive £75, pełny kurs Open Water Diver £550. Szkolenie indywidualne.",
	},
});

export { metadata };
export default Page;
