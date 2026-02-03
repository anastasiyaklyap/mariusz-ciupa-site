import { PrivacyPolicyPageClient } from "@/app/privacy-policy/PrivacyPolicyPageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "en",
	pathname: "/privacy-policy",
	component: <PrivacyPolicyPageClient />,
	metadata: {
		title: "Privacy Policy | Scuba Diving Instructor – Mariusz Ciupa",
		description:
			"Read how personal data is processed on this website and how your privacy is protected when using scuba diving training services.",
	},
});

export { metadata };
export default Page;
