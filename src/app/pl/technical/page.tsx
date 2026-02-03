import { CourseCategoryPageClient } from '@/components/pages/CourseCategoryPageClient';
import { createLocalePage } from '@/app/_pages/createLocalePage';

const { metadata, Page } = createLocalePage({
  locale: 'pl',
  pathname: '/technical',
  component: <CourseCategoryPageClient category='technical' />,
  metadata: {
		title: "Kursy nurkowania technicznego | SSI Extended Range – Mariusz Ciupa",
		description:
			"Zaawansowane szkolenia nurkowe SSI dla głębszych i dłuższych nurkowań. Kursy extended range, dekompresyjne i trimix.",
	},
});

export { metadata };
export default Page;
