import classNames from "classnames";
import { CtaLink } from "@/components/ui/CtaLink";
import { Placeholder } from "@/components/ui/Placeholder";
import { siteCopy } from "@/content/siteCopy";
import { linkPath } from "@/lib/linkPath";
import { withLocaleHref, type Locale } from "@/lib/i18n";

type FaqTag = "home" | "beginner" | "speciality" | "technical";

type FaqTodo = { variant?: "draft" | "missing"; text: string };

type FaqProps = {
	locale: Locale;
	tag?: FaqTag;
	showCta?: boolean;
	className?: string;
};

export const Faq = ({ locale, tag, showCta = true, className }: FaqProps) => {
	const copy = siteCopy[locale].faq;
	const items = tag
		? copy.items.filter((item) =>
				(item.tags as readonly string[]).includes(tag),
			)
		: copy.items;

	if (items.length === 0) return null;

	return (
		<section id="faq" className={classNames("mt-24 md:mt-32", className)}>
			<p className="text-xs font-medium tracking-[0.2em] text-white/50">
				{copy.eyebrow}
			</p>
			<h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
				{copy.title}
			</h2>
			<p className="mt-3 max-w-2xl text-sm text-white/75 sm:text-base">
				{copy.description}
			</p>

			<div className="mt-8 divide-y divide-white/10 border-y border-white/10">
				{items.map((item) => (
					<details key={item.id} name="faq" className="group">
						<summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-sm font-medium text-white marker:content-none sm:text-base">
							<span>{item.q}</span>
							<span
								aria-hidden
								className="shrink-0 text-lg text-[#24C6D9] transition-transform group-open:rotate-45"
							>
								+
							</span>
						</summary>
						<div className="pb-5 pr-8 text-sm leading-relaxed text-white/70">
							<p>{item.a}</p>
							{(() => {
								const todo = (item as { todo?: FaqTodo }).todo;
								return todo ? (
									<p className="mt-3">
										<Placeholder variant={todo.variant}>{todo.text}</Placeholder>
									</p>
								) : null;
							})()}
						</div>
					</details>
				))}
			</div>

			{showCta ? (
				<div className="mt-8">
					<CtaLink
						href={withLocaleHref(linkPath("/faq"), locale)}
						variant="outline"
						className="w-full sm:w-auto"
					>
						{copy.ctaLabel} <span aria-hidden>→</span>
					</CtaLink>
				</div>
			) : null}
		</section>
	);
};
