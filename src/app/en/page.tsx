import HomePageClient from "@/app/HomePageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "en",
	pathname: "/",
	component: <HomePageClient localeOverride="en" />,
	metadata: {
		title:
			"Learn to Scuba Dive in London | SSI Courses – Mariusz Ciupa",
		description:
			"Learn to dive with a personal SSI instructor in London. Courses from beginner to technical level, plus freediving. Prices from £75 — ask about availability.",
	},
});

export { metadata };
export default Page;
