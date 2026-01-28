export const siteCopy = {
  en: {
    common: {
      locations: 'UK · Lanzarote · Poland',
      responseTime: 'Typical response time: 24–48h',
      emailLabel: 'Email me',
      menuOpenLabel: 'Open menu',
      social: [
        { key: 'instagram', label: 'Instagram' },
        { key: 'facebook', label: 'Facebook' },
      ],
    },
    header: {
      nav: {
        courses: 'Courses',
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
        },
        {
          title: 'SSI Open Water Diver',
          description:
            'Become a certified Open Water Diver with SSI. This globally recognized certification program is the best way to begin your lifelong adventures as a certified scuba diver. Personalized training is combined with in-water practice sessions to ensure you have the skills and experience required to become truly comfortable underwater. You will earn the SSI Open Water Diver certification.',
          imageSrc: '/images/courses/open-water.jpg',
          tag: 'Certification',
        },
        {
          title: 'Advanced Open Water Diver',
          description:
            'Build confidence and expand your skills with structured training dives focused on improving control, awareness and comfort in different conditions.',
          imageSrc: '/images/courses/advanced-open-water.jpg',
          tag: 'Next step',
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
  },
} as const;
