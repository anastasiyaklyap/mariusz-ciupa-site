import HomePageClient from "@/app/HomePageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "pl",
	pathname: "/",
	component: <HomePageClient localeOverride="pl" />,
	metadata: {
		title:
			"Nauka nurkowania po polsku w Londynie | SSI – Mariusz Ciupa",
		description:
			"Kursy nurkowania SSI w Londynie prowadzone po polsku — od pierwszego zanurzenia po nurkowanie techniczne. Ceny od £75. Zapytaj o terminy.",
	},
});

export { metadata };
export default Page;
