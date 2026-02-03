import { PrivacyPolicyPageClient } from "@/app/privacy-policy/PrivacyPolicyPageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "pl",
	pathname: "/privacy-policy",
	component: <PrivacyPolicyPageClient />,
	metadata: {
		title: "Polityka prywatności | Instruktor nurkowania – Mariusz Ciupa",
		description:
			"Sprawdź, w jaki sposób przetwarzane są dane osobowe użytkowników tej strony oraz jak chroniona jest Twoja prywatność.",
	},
});

export { metadata };
export default Page;
