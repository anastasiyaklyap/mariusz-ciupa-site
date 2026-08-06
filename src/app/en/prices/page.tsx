import { PricesPageClient } from "@/components/pages/PricesPageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "en",
	pathname: "/prices",
	component: <PricesPageClient />,
	breadcrumbLabel: "Prices",
	metadata: {
		title:
			"Scuba Diving Course Prices | SSI Courses & Training Costs – Mariusz Ciupa",
		description:
			"Check scuba diving course prices for SSI beginner, specialty, technical and professional training. Transparent costs and optional extras.",
	},
});

export { metadata };
export default Page;
