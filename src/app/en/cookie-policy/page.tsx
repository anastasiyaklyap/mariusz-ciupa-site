import { CookiePolicyPageClient } from "@/app/cookie-policy/CookiePolicyPageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "en",
	pathname: "/cookie-policy",
	component: <CookiePolicyPageClient />,
	metadata: {
		title: "Cookie Policy | Scuba Diving Instructor – Mariusz Ciupa",
		description:
			"Learn how cookies are used on this website, what data they collect and how you can manage or withdraw your consent.",
	},
});

export { metadata };
export default Page;
