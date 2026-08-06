import { PricesPageClient } from "@/components/pages/PricesPageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "pl",
	pathname: "/prices",
	component: <PricesPageClient />,
	breadcrumbLabel: "Cennik",
	metadata: {
		title: "Cennik kursów nurkowania | Kursy SSI – Mariusz Ciupa",
		description:
			"Sprawdź ceny kursów nurkowania SSI – od poziomu podstawowego po techniczny i profesjonalny. Jasne koszty i dodatki.",
	},
});

export { metadata };
export default Page;
