'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { siteConfig } from '@/lib/siteConfig';
import { siteCopy } from '@/content/siteCopy';
import { trackEvent } from '@/lib/analytics';
import type { Locale } from '@/lib/i18n';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

type ContactFormProps = {
  locale: Locale;
};

type Status = 'idle' | 'sending' | 'sent' | 'error';

const FIELD =
  'mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 transition focus:border-[#24C6D9]/60 focus:outline-none focus:ring-2 focus:ring-[#24C6D9]/30';
const LABEL =
  'block text-xs font-medium uppercase tracking-[0.14em] text-white/55';

export const ContactForm = ({ locale }: ContactFormProps) => {
  const copy = siteCopy[locale].common.contactForm;
  const pathname = usePathname();
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');

    const payload = {
      ...Object.fromEntries(new FormData(form).entries()),
      // Bez tego „Odpowiedz" w mailu wraca do Web3Forms, a nie do kursanta.
      replyto: String(new FormData(form).get('email') ?? ''),
      subject: `Zapytanie ze strony — ${pathname}`,
    };

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!result.success) throw new Error(result.message ?? 'failed');

      form.reset();
      setStatus('sent');
      trackEvent('contact_form_submit', { page: pathname, locale });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <p
        role='status'
        className='mt-8 rounded-2xl border border-[#24C6D9]/40 bg-[#24C6D9]/10 px-5 py-4 text-sm text-white'
      >
        {copy.success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className='mt-8 max-w-2xl'>
      <input type='hidden' name='access_key' value={siteConfig.formAccessKey} />
      <input type='hidden' name='from_name' value='scubadivinginstructor.co.uk' />
      <input
        type='checkbox'
        name='botcheck'
        tabIndex={-1}
        autoComplete='off'
        aria-hidden
        className='hidden'
      />

      <div className='grid gap-4 sm:grid-cols-2'>
        <div>
          <label className={LABEL} htmlFor='cf-name'>
            {copy.nameLabel}
          </label>
          <input
            id='cf-name'
            name='name'
            required
            autoComplete='name'
            className={FIELD}
          />
        </div>
        <div>
          <label className={LABEL} htmlFor='cf-email'>
            {copy.emailLabel}
          </label>
          <input
            id='cf-email'
            name='email'
            type='email'
            required
            autoComplete='email'
            className={FIELD}
          />
        </div>
        <div>
          <label className={LABEL} htmlFor='cf-level'>
            {copy.levelLabel}
          </label>
          <select id='cf-level' name='level' defaultValue='' className={FIELD}>
            <option value='' disabled>
              {copy.levelPlaceholder}
            </option>
            {copy.levelOptions.map((option) => (
              <option key={option} value={option} className='bg-[#0B1220]'>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={LABEL} htmlFor='cf-dates'>
            {copy.datesLabel}
          </label>
          <input
            id='cf-dates'
            name='dates'
            placeholder={copy.datesPlaceholder}
            className={FIELD}
          />
        </div>
      </div>

      <div className='mt-4'>
        <label className={LABEL} htmlFor='cf-message'>
          {copy.messageLabel}
        </label>
        <textarea
          id='cf-message'
          name='message'
          rows={4}
          required
          placeholder={copy.messagePlaceholder}
          className={FIELD}
        />
      </div>

      <label className='mt-5 flex items-start gap-3 text-xs text-white/65'>
        <input
          type='checkbox'
          name='consent'
          value={copy.consent}
          required
          className='mt-0.5 h-4 w-4 shrink-0 rounded border-white/25 bg-white/5 accent-[#24C6D9]'
        />
        <span>{copy.consent}</span>
      </label>

      <div className='mt-6 flex flex-wrap items-center gap-4'>
        <button
          type='submit'
          disabled={status === 'sending'}
          className='inline-flex items-center rounded-full bg-[#24C6D9] px-6 py-2.5 text-sm font-semibold text-[#07101A] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60'
        >
          {status === 'sending' ? copy.sending : copy.submit}
        </button>

        {status === 'error' ? (
          <p role='alert' className='text-sm text-[#FF9E9E]'>
            {copy.error}{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              className='underline underline-offset-4'
            >
              {siteConfig.email}
            </a>
          </p>
        ) : null}
      </div>
    </form>
  );
};
