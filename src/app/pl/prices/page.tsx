import { PricesPageClient } from "@/components/pages/PricesPageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "pl",
	pathname: "/prices",
	component: <PricesPageClient />,
	breadcrumbLabel: "Cennik kursów nurkowania",
	metadata: {
		title:
			"Cennik kursów nurkowania w Londynie | Kursy SSI od £75",
		description:
			"Pełny cennik kursów SSI: Try Dive £75, Open Water Diver £550, Advanced £395, techniczne od £280. Jasno wypisane dodatkowe koszty.",
	},
});

export { metadata };
export default Page;
