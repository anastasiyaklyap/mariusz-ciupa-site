import HomePageClient from "@/app/HomePageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "en",
	pathname: "/",
	component: <HomePageClient localeOverride="en" />,
	metadata: {
		title:
			"Scuba Diving Instructor UK | SSI Courses (Beginner to Technical) – Mariusz Ciupa",
		description:
			"SSI scuba diving courses in the UK, from beginner training to technical diving and freediving. Some courses are also available in Lanzarote and Poland.",
	},
});

export { metadata };
export default Page;
