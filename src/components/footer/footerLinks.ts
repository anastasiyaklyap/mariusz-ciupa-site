import { siteConfig } from '@/lib/siteConfig';

export const footerLinks = [
  { label: 'Instagram', href: siteConfig.socials.instagram },
  { label: 'Facebook', href: siteConfig.socials.facebook },
  { label: 'Email', href: `mailto:${siteConfig.email}` },
] as const;
