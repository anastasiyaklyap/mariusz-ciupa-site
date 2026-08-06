import { CookiePolicyPageClient } from "@/app/cookie-policy/CookiePolicyPageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "pl",
	pathname: "/cookie-policy",
	component: <CookiePolicyPageClient />,
	breadcrumbLabel: "Polityka cookies",
	metadata: {
		title: "Polityka cookies | Instruktor nurkowania – Mariusz Ciupa",
		description:
			"Dowiedz się, czym są pliki cookies, jak są wykorzystywane na stronie oraz jak możesz nimi zarządzać.",
	},
});

export { metadata };
export default Page;
