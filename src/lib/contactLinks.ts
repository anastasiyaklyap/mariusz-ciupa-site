import { siteConfig } from '@/lib/siteConfig';

export const emailLink = {
  label: 'Email me',
  href: `mailto:${siteConfig.email}`,
} as const;

export const socialLinks = [
  { label: 'Instagram', href: siteConfig.socials.instagram },
  { label: 'Facebook', href: siteConfig.socials.facebook },
] as const;

export const footerLinks = [
  { label: 'Instagram', href: siteConfig.socials.instagram },
  { label: 'Facebook', href: siteConfig.socials.facebook },
  { label: 'Email', href: `mailto:${siteConfig.email}` },
] as const;
