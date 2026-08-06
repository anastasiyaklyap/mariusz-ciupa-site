"use client";

import { usePathname } from "next/navigation";
import { defaultLocale, getLocaleFromPathname, type Locale } from "@/lib/i18n";

// Never call `useSearchParams()` here. With `output: 'export'` it forces the
// whole subtree to client-side render, so the prerendered HTML ships empty and
// crawlers see a blank page. Locale lives in the path, so it is not needed.
export const useLocale = (): Locale => {
	const pathname = usePathname();
	const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
	const rawPathname =
		basePath && pathname.startsWith(basePath)
			? pathname.slice(basePath.length) || "/"
			: pathname;

	return getLocaleFromPathname(rawPathname) ?? defaultLocale;
};
