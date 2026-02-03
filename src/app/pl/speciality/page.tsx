import { CourseCategoryPageClient } from "@/components/pages/CourseCategoryPageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "pl",
	pathname: "/speciality",
	component: <CourseCategoryPageClient category="speciality" />,
	metadata: {
		title: "Specjalistyczne kursy nurkowania | Kursy SSI – Mariusz Ciupa",
		description:
			"Rozwijaj umiejętności nurkowe na kursach SSI: pływalność, nawigacja, suchy skafander, nitrox i nurkowanie nocne.",
	},
});

export { metadata };
export default Page;
