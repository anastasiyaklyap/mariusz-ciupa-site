import { PricesPageClient } from "@/components/pages/PricesPageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "en",
	pathname: "/prices",
	component: <PricesPageClient />,
	breadcrumbLabel: "Scuba Diving Course Prices",
	metadata: {
		title:
			"Scuba Diving Course Prices in London | SSI Courses from £75",
		description:
			"Full price list for SSI diving courses: Try Dive £75, Open Water Diver £550, Advanced £395, technical from £280. Extras listed clearly.",
	},
});

export { metadata };
export default Page;
