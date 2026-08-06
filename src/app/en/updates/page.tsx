import { UpdatesPageClient } from "@/components/pages/UpdatesPageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "en",
	pathname: "/updates",
	component: <UpdatesPageClient />,
	breadcrumbLabel: "Trips & Updates",
	metadata: {
		title:
			"Upcoming Diving Trips & Course Dates | Mariusz Ciupa",
		description:
			"See upcoming scuba diving trips, training camps and course dates. Stay informed about new courses and diving opportunities.",
	},
});

export { metadata };
export default Page;
