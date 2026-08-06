type JsonLdProps = {
	data: unknown;
};

export const JsonLd = ({ data }: JsonLdProps) => (
	<script
		type="application/ld+json"
		// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
		dangerouslySetInnerHTML={{
			__html: JSON.stringify(data).replace(/</g, "\\u003c"),
		}}
	/>
);
