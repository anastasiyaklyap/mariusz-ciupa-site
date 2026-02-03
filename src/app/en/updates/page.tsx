import { UpdatesPageClient } from "@/components/pages/UpdatesPageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "en",
	pathname: "/updates",
	component: <UpdatesPageClient />,
	metadata: {
		title:
			"Diving Trips & Course Updates | Training Camps and Events – Mariusz Ciupa",
		description:
			"See upcoming scuba diving trips, training camps and course updates. Stay informed about new courses and diving opportunities.",
	},
});

export { metadata };
export default Page;
