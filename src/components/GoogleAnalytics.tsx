"use client";

import Script from "next/script";

type GoogleAnalyticsProps = {
	measurementId: string;
};

export const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => (
	<>
		<Script
			src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
			strategy="afterInteractive"
		/>
		<Script id="google-analytics" strategy="afterInteractive">
			{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = window.gtag || gtag;
gtag('js', new Date());
gtag('config', '${measurementId}', { anonymize_ip: true });`}
		</Script>
	</>
);
