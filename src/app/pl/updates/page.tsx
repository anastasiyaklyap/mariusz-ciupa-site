import { UpdatesPageClient } from "@/components/pages/UpdatesPageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "pl",
	pathname: "/updates",
	component: <UpdatesPageClient />,
	breadcrumbLabel: "Aktualności",
	metadata: {
		title: "Aktualności i wyjazdy nurkowe | Kursy i wyprawy – Mariusz Ciupa",
		description:
			"Zobacz nadchodzące wyjazdy nurkowe, obozy szkoleniowe oraz najnowsze informacje o kursach i wydarzeniach.",
	},
});

export { metadata };
export default Page;
