import { CourseCategoryPageClient } from "@/components/pages/CourseCategoryPageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "pl",
	pathname: "/beginner",
	component: <CourseCategoryPageClient category="beginner" />,
	metadata: {
		title:
			"Kursy nurkowania dla początkujących | SSI Open Water – Mariusz Ciupa",
		description:
			"Rozpocznij naukę nurkowania od zera dzięki kursom SSI dla początkujących. Try Scuba, Open Water Diver i kursy odświeżające.",
	},
});

export { metadata };
export default Page;
