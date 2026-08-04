import HomePageClient from "@/app/HomePageClient";
import { createLocalePage } from "@/app/_pages/createLocalePage";

const { metadata, Page } = createLocalePage({
	locale: "pl",
	pathname: "/",
	component: <HomePageClient localeOverride="pl" />,
	metadata: {
		title:
			"Instruktor nurkowania w UK | Kursy SSI (od podstaw do technicznych) – Mariusz Ciupa",
		description:
			"Kursy nurkowe SSI w UK — od podstaw po nurkowanie techniczne i freediving. Niektóre kursy są dostępne także na Lanzarote i w Polsce.",
	},
});

export { metadata };
export default Page;
