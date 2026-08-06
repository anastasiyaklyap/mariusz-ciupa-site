import { SectionSurface } from "@/components/sections/SectionSurface";
import { Placeholder } from "@/components/ui/Placeholder";

type PracticalRow =
	| { label: string; draft: string }
	| { label: string; todo: string };

export type CoursePracticalData = {
	title: string;
	description: string;
	rows: readonly PracticalRow[];
};

export const CoursePractical = ({
	title,
	description,
	rows,
}: CoursePracticalData) => (
	<section className="mt-12">
		<SectionSurface>
			<h2 className="text-xl font-semibold tracking-tight md:text-2xl">
				{title}
			</h2>
			<p className="mt-3 max-w-2xl text-sm text-white/75">{description}</p>

			<dl className="mt-8 divide-y divide-white/10 border-t border-white/10">
				{rows.map((row) => (
					<div
						key={row.label}
						className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:items-baseline sm:gap-6"
					>
						<dt className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">
							{row.label}
						</dt>
						<dd className="text-sm text-white/85">
							{"draft" in row ? (
								<Placeholder variant="draft">{row.draft}</Placeholder>
							) : (
								<Placeholder>{row.todo}</Placeholder>
							)}
						</dd>
					</div>
				))}
			</dl>
		</SectionSurface>
	</section>
);
