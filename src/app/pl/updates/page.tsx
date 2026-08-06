import { UpdatesPageClient } from "@/components/pages/UpdatesPageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "pl",
	pathname: "/updates",
	component: <UpdatesPageClient />,
	breadcrumbLabel: "Aktualności i wyjazdy",
	metadata: {
		title:
			"Wyjazdy nurkowe i terminy kursów | Mariusz Ciupa",
		description:
			"Zobacz nadchodzące wyjazdy nurkowe, obozy szkoleniowe oraz najnowsze informacje o kursach i wydarzeniach.",
	},
});

export { metadata };
export default Page;
