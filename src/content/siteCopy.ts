export const siteCopy = {
  en: {
    common: {
      locations: 'UK · Lanzarote · Poland',
      responseTime: 'Typical response time: 24–48h',
      emailLabel: 'Email me',
      menuOpenLabel: 'Open menu',
      languageLabel: 'Language',
      social: [
        { key: 'instagram', label: 'Instagram' },
        { key: 'facebook', label: 'Facebook' },
      ],
    },
    header: {
      nav: {
        courses: 'Courses',
        prices: 'Prices',
        about: 'About',
        contact: 'Contact',
      },
      ctaLabel: 'Book / Ask',
    },
    home: {
      hero: {
        titlePrimary: 'Mariusz',
        titleAccent: 'Ciupa',
        subtitle:
          'Personal diving training — from your first dive to advanced technical courses.',
        ctaPrimary: 'View courses',
        ctaSecondary: 'Contact me',
        imageAlt: 'Scuba diving training',
        captionEyebrow: 'Training focused on safety',
        captionTitle: 'Calm. Clear. Confident.',
      },
      quote: {
        lines: [
          '“Safety underwater is born at the surface — in preparation, knowledge, and respect for your own limits.',
          'Only then does every dive become true freedom.”',
        ],
      },
      courses: {
        eyebrow: 'COURSES',
        title: 'Diving courses',
        description:
          'Choose your level and grow step by step — from your first certification to technical training.',
        ctaLabel: 'Ask about availability',
        swipeHint: 'Swipe to explore →',
        exploreLabel: 'Explore →',
        cards: [
          {
            title: 'Beginner',
            desc: 'Start from zero. Learn the basics, build confidence, get certified.',
            tag: 'Perfect first step',
            imageSrc: '/images/courses-beginner.jpg',
            link: '/beginner',
          },
          {
            title: 'Specialty',
            desc: 'Improve skills with focused courses like buoyancy, navigation or night diving.',
            tag: 'Build experience',
            imageSrc: '/images/courses-specialty.jpg',
            link: '#',
          },
          {
            title: 'Technical',
            desc: 'Advanced training for deeper dives, procedures and serious planning.',
            tag: 'Go beyond limits',
            imageSrc: '/images/courses-technical.jpg',
            link: '#',
          },
        ],
      },
      about: {
        eyebrow: 'ABOUT',
        title: 'Hi, I’m Mariusz',
        paragraphs: [
          'I help divers build skills in a calm and structured way — with a strong focus on safety, good habits and confidence in the water.',
          'Whether you’re starting from zero or leveling up to technical training, we’ll choose the right path and pace for you.',
        ],
        highlights: [
          '10+ years experience',
          'SSI PRO XR',
          'Technical & recreational diving',
          'Europe & Canary Islands',
        ],
        imageAlt: 'Mariusz Ciupa',
        imageCaptionEyebrow: 'About the instructor',
        imageCaptionTitle: 'Experience you can trust',
        locationTitle: 'Where I teach',
        locationDescription:
          'I cooperate with selected dive centers in the United Kingdom, Lanzarote and Poland — so you can train and dive in different environments with continuity and trusted support.',
        locations: ['UK', 'Lanzarote', 'Poland'],
        partnerLogos: [
          { src: '/images/logo-bonito.png', alt: 'Bonito Diving Lanzarote' },
          { src: '/images/logo-scuba-tech.png', alt: 'Scuba Tech' },
          { src: '/images/logo-scubaelite.png', alt: 'Scuba Elite' },
        ],
        ctaLabel: 'Contact me',
      },
      contact: {
        title: 'Ready to start your diving journey?',
        description:
          'Tell me your level, preferred location and dates — I’ll suggest the best course and next steps.',
      },
    },
    courses: {
      card: {
        readMore: 'Read more',
        showLess: 'Show less',
        ctaLabel: 'Ask about availability',
        defaultTag: 'Course',
        priceLabel: 'Price',
        extrasLabel: 'Extras:',
      },
    },
    beginner: {
      hero: {
        title: 'Beginner Diving Courses',
        description:
          'Start from zero, learn the basics step by step, and build calm, confident diving skills with a safety-first approach.',
        tags: ['No experience needed', 'Small groups'],
      },
      courses: [
        {
          title: 'Try Scuba',
          description:
            'A first, guided experience underwater. Perfect if you want to try scuba before committing to a full certification course.',
          imageSrc: '/images/courses/try-scuba.jpg',
          tag: 'Intro',
          price: { amount: 75, currency: 'GBP', extras: ['Pool only'] },
        },
        {
          title: 'SSI Open Water Diver',
          description:
            'Become a certified Open Water Diver with SSI. This globally recognized certification program is the best way to begin your lifelong adventures as a certified scuba diver. Personalized training is combined with in-water practice sessions to ensure you have the skills and experience required to become truly comfortable underwater. You will earn the SSI Open Water Diver certification.',
          imageSrc: '/images/courses/open-water.jpg',
          tag: 'Certification',
          price: { amount: 550, currency: 'GBP' },
        },
        {
          title: 'Advanced Open Water Diver',
          description:
            'Build confidence and expand your skills with structured training dives focused on improving control, awareness and comfort in different conditions.',
          imageSrc: '/images/courses/advanced-open-water.jpg',
          tag: 'Next step',
          price: { amount: 395, currency: 'GBP' },
        },
      ],
      contact: {
        title: 'Want to start with beginner training?',
        description:
          'Tell me your level, preferred location and dates — I’ll suggest the best first steps for you.',
      },
    },
    footer: {
      rights: 'All rights reserved.',
    },
    prices: {
      hero: {
        eyebrow: 'PRICES',
        title: 'Diving Courses',
        description:
          'See our scuba diving courses along with their prices and any additional costs.',
        badges: ['Prices include VAT', 'Contact me for course details'],
      },
      table: {
        course: 'Course',
        price: 'Price',
        extras: 'Extras',
      },
      groups: [
        {
          title: 'Beginner',
          items: [
            {
              title: 'Try Dive',
              price: { amount: 75, currency: 'GBP' },
              extras: ['Pool only'],
            },
            {
              title: 'Open Water Diver referral',
              price: { amount: 350, currency: 'GBP' },
              extras: ['Academics & Pool only'],
            },
            {
              title: 'Open Water Diver - full',
              price: { amount: 550, currency: 'GBP' },
            },
            {
              title: 'Open Water Diver + Dry Suit',
              price: { amount: 700, currency: 'GBP' },
              extras: ['Dry suit rent'],
            },
          ],
        },
        {
          title: 'Speciality',
          items: [
            { title: 'Advanced Open Water Diver', price: { amount: 395, currency: 'GBP' } },
            { title: 'Dry Suit Diving', price: { amount: 230, currency: 'GBP' }, extras: ['Dry suit rent'] },
            { title: 'Perfect Buoyancy', price: { amount: 175, currency: 'GBP' } },
            { title: 'Enriched Air Nitrox Level 1 (32%)', price: { amount: 150, currency: 'GBP' } },
            { title: 'Boat Diving', price: { amount: 150, currency: 'GBP' } },
            { title: 'Wreck Diving', price: { amount: 175, currency: 'GBP' }, extras: ['10 dives'] },
            { title: 'Advanced Wreck Diving', price: { amount: 300, currency: 'GBP' }, extras: ['10 dives'] },
            { title: 'Deep Diving', price: { amount: 250, currency: 'GBP' } },
          ],
        },
        {
          title: 'Technical',
          items: [
            { title: 'Sidemount Diving', price: { amount: 450, currency: 'GBP' } },
            { title: 'Deco Diving', price: { amount: 650, currency: 'GBP' } },
            { title: 'Extended Range', price: { amount: 950, currency: 'GBP' } },
          ],
        },
      ],
      contact: {
        title: 'Have questions about prices?',
        description:
          'Tell me your level, preferred location and dates — I’ll suggest the best course and the exact cost.',
      },
    },
  },
  pl: {
    common: {
      locations: 'Wielka Brytania · Lanzarote · Polska',
      responseTime: 'Zwykle odpowiadam w ciągu 24–48 h',
      emailLabel: 'Napisz do mnie',
      menuOpenLabel: 'Otwórz menu',
      languageLabel: 'Język',
      social: [
        { key: 'instagram', label: 'Instagram' },
        { key: 'facebook', label: 'Facebook' },
      ],
    },
    header: {
      nav: {
        courses: 'Kursy',
        prices: 'Cennik',
        about: 'O mnie',
        contact: 'Kontakt',
      },
      ctaLabel: 'Zarezerwuj / Zapytaj',
    },
    home: {
      hero: {
        titlePrimary: 'Mariusz',
        titleAccent: 'Ciupa',
        subtitle:
          'Trening nurkowy od pierwszego zanurzenia po zaawansowane kursy techniczne.',
        ctaPrimary: 'Zobacz kursy',
        ctaSecondary: 'Skontaktuj się',
        imageAlt: 'Szkolenie nurkowe',
        captionEyebrow: 'Szkolenie oparte na bezpieczeństwie',
        captionTitle: 'Spokój. Klarowność. Pewność.',
      },
      quote: {
        lines: [
          '„Bezpieczeństwo pod wodą rodzi się na powierzchni — w przygotowaniu, wiedzy i szacunku do własnych granic.',
          'Dopiero wtedy każde nurkowanie staje się prawdziwą wolnością.”',
        ],
      },
      courses: {
        eyebrow: 'KURSY',
        title: 'Kursy nurkowe',
        description:
          'Wybierz poziom i rozwijaj się krok po kroku — od pierwszego certyfikatu po szkolenia techniczne.',
        ctaLabel: 'Zapytaj o dostępność',
        swipeHint: 'Przesuń, aby zobaczyć →',
        exploreLabel: 'Zobacz →',
        cards: [
          {
            title: 'Początkujący',
            desc: 'Zacznij od zera. Naucz się podstaw, zbuduj pewność i zdobądź certyfikat.',
            tag: 'Idealny start',
            imageSrc: '/images/courses-beginner.jpg',
            link: '/beginner',
          },
          {
            title: 'Specjalizacje',
            desc: 'Rozwijaj umiejętności na kursach takich jak pływalność, nawigacja czy nurkowanie nocne.',
            tag: 'Buduj doświadczenie',
            imageSrc: '/images/courses-specialty.jpg',
            link: '#',
          },
          {
            title: 'Techniczne',
            desc: 'Zaawansowane szkolenia do głębszych nurkowań, procedur i poważnego planowania.',
            tag: 'Przekrocz granice',
            imageSrc: '/images/courses-technical.jpg',
            link: '#',
          },
        ],
      },
      about: {
        eyebrow: 'O MNIE',
        title: 'Cześć, jestem Mariusz',
        paragraphs: [
          'Pomagam nurkom rozwijać umiejętności w spokojny i uporządkowany sposób — z dużym naciskiem na bezpieczeństwo, dobre nawyki i pewność pod wodą.',
          'Niezależnie od tego, czy zaczynasz od zera, czy wchodzisz w szkolenia techniczne, dobierzemy właściwą ścieżkę i tempo.',
        ],
        highlights: [
          '10+ lat doświadczenia',
          'SSI PRO XR',
          'Nurkowanie techniczne i rekreacyjne',
          'Europa i Wyspy Kanaryjskie',
        ],
        imageAlt: 'Mariusz Ciupa',
        imageCaptionEyebrow: 'O instruktorze',
        imageCaptionTitle: 'Doświadczenie, któremu możesz zaufać',
        locationTitle: 'Gdzie szkolę',
        locationDescription:
          'Współpracuję z wybranymi centrami nurkowymi w Wielkiej Brytanii, na Lanzarote i w Polsce — możesz szkolić się w różnych warunkach, zachowując ciągłość i zaufane wsparcie.',
        locations: ['Wielka Brytania', 'Lanzarote', 'Polska'],
        partnerLogos: [
          { src: '/images/logo-bonito.png', alt: 'Bonito Diving Lanzarote' },
          { src: '/images/logo-scuba-tech.png', alt: 'Scuba Tech' },
          { src: '/images/logo-scubaelite.png', alt: 'Scuba Elite' },
        ],
        ctaLabel: 'Skontaktuj się',
      },
      contact: {
        title: 'Gotowy, aby rozpocząć swoją nurkową przygodę?',
        description:
          'Podaj poziom, preferowaną lokalizację i terminy — zaproponuję najlepszy kurs i dalsze kroki.',
      },
    },
    courses: {
      card: {
        readMore: 'Czytaj więcej',
        showLess: 'Pokaż mniej',
        ctaLabel: 'Zapytaj o dostępność',
        defaultTag: 'Kurs',
        priceLabel: 'Cena',
        extrasLabel: 'Dodatkowo:',
      },
    },
    beginner: {
      hero: {
        title: 'Kursy nurkowe dla początkujących',
        description:
          'Zacznij od zera, ucz się krok po kroku i buduj spokojne, pewne umiejętności nurkowe z naciskiem na bezpieczeństwo.',
        tags: ['Nie wymaga doświadczenia', 'Małe grupy'],
      },
      courses: [
        {
          title: 'Try Scuba',
          description:
            'Pierwsze, prowadzone doświadczenie pod wodą. Idealne, jeśli chcesz spróbować nurkowania, zanim zdecydujesz się na pełny kurs certyfikacyjny.',
          imageSrc: '/images/courses/try-scuba.jpg',
          tag: 'Wprowadzenie',
          price: { amount: 75, currency: 'GBP', extras: ['tylko basen'] },
        },
        {
          title: 'SSI Open Water Diver',
          description:
            'Zdobądź certyfikat Open Water Diver SSI. To uznawany na całym świecie program, który najlepiej rozpoczyna przygodę z nurkowaniem. Spersonalizowany trening łączy teorię i praktykę w wodzie, abyś czuł się pewnie i komfortowo pod wodą. Po ukończeniu otrzymasz certyfikat SSI Open Water Diver.',
          imageSrc: '/images/courses/open-water.jpg',
          tag: 'Certyfikacja',
          price: { amount: 550, currency: 'GBP' },
        },
        {
          title: 'Advanced Open Water Diver',
          description:
            'Buduj pewność i rozwijaj umiejętności poprzez uporządkowane nurkowania szkoleniowe skoncentrowane na kontroli, świadomości i komforcie w różnych warunkach.',
          imageSrc: '/images/courses/advanced-open-water.jpg',
          tag: 'Kolejny krok',
          price: { amount: 395, currency: 'GBP' },
        },
      ],
      contact: {
        title: 'Chcesz zacząć od kursów dla początkujących?',
        description:
          'Powiedz mi, jaki masz poziom, preferowaną lokalizację i terminy — zaproponuję najlepsze pierwsze kroki.',
      },
    },
    footer: {
      rights: 'Wszelkie prawa zastrzeżone.',
    },
    prices: {
      hero: {
        eyebrow: 'CENNIK',
        title: 'Kursy nurkowe',
        titleAccent: 'Cennik',
        description:
          'Sprawdź dostępne kursy nurkowe wraz z cenami i ewentualnymi dodatkowymi kosztami.',
        badges: ['Ceny zawierają VAT', 'Skontaktuj się po szczegóły kursu'],
      },
      table: {
        course: 'Kurs',
        price: 'Cena',
        extras: 'Dodatki',
      },
      groups: [
        {
          title: 'Początkujący',
          items: [
            {
              title: 'Try Dive',
              price: { amount: 75, currency: 'GBP' },
              extras: ['Tylko basen'],
            },
            {
              title: 'Open Water Diver referral',
              price: { amount: 350, currency: 'GBP' },
              extras: ['Teoria i basen'],
            },
            {
              title: 'Open Water Diver - pełny',
              price: { amount: 550, currency: 'GBP' },
            },
            {
              title: 'Open Water Diver + Dry Suit',
              price: { amount: 700, currency: 'GBP' },
              extras: ['Wypożyczenie suchego skafandra'],
            },
          ],
        },
        {
          title: 'Specjalizacje',
          items: [
            { title: 'Advanced Open Water Diver', price: { amount: 395, currency: 'GBP' } },
            { title: 'Dry Suit Diving', price: { amount: 230, currency: 'GBP' }, extras: ['Wypożyczenie suchego skafandra'] },
            { title: 'Perfect Buoyancy', price: { amount: 175, currency: 'GBP' } },
            { title: 'Enriched Air Nitrox Level 1 (32%)', price: { amount: 150, currency: 'GBP' } },
            { title: 'Boat Diving', price: { amount: 150, currency: 'GBP' } },
            { title: 'Wreck Diving', price: { amount: 175, currency: 'GBP' }, extras: ['10 nurkowań'] },
            { title: 'Advanced Wreck Diving', price: { amount: 300, currency: 'GBP' }, extras: ['10 nurkowań'] },
            { title: 'Deep Diving', price: { amount: 250, currency: 'GBP' } },
          ],
        },
        {
          title: 'Techniczne',
          items: [
            { title: 'Sidemount Diving', price: { amount: 450, currency: 'GBP' } },
            { title: 'Deco Diving', price: { amount: 650, currency: 'GBP' } },
            { title: 'Extended Range', price: { amount: 950, currency: 'GBP' } },
          ],
        },
      ],
      contact: {
        title: 'Masz pytania o ceny?',
        description:
          'Podaj poziom, preferowaną lokalizację i terminy — zaproponuję najlepszy kurs i dokładną wycenę.',
      },
    },
  },
} as const;
