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
            title: 'Speciality',
            desc: 'Improve skills with focused courses like buoyancy, navigation or night diving.',
            tag: 'Build experience',
            imageSrc: '/images/courses-speciality.jpg',
            link: '/speciality',
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
            'Become a certified Open Water Diver with SSI. \nThis globally recognized certification program is the best way to begin your lifelong adventures as a certified scuba diver. Personalized training is combined with in-water practice sessions to ensure you have the skills and experience required to become truly comfortable underwater. You will earn the SSI Open Water Diver certification.',
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
        {
          title: 'Scuba Skills Update',
          description:
            'Continue your dive adventure with a Scuba Skills Update \nIt is easy for dive skills to get rusty and to lose confidence when you have not dived for a while. With the SSI Scuba Skills Update, we will get you back in the water and diving with ease in no time. This scuba refresher course allows you to review and practice scuba skills you learned in your Open Water Diver program, under the guidance of an SSI Professional. This is a great course to take just before a dive holiday, so you spend less time worrying about your skills and more time admiring the marine life. If you are a non-certified Open Water Diver student, a Scuba Skills Update is ideal for practicing your dive skills before your open water training dives. With no fixed course duration, you can take your time and focus on the skills you need help with.',
          imageSrc: '/images/courses/scuba-skills-update.jpg',
          tag: 'Refresh',
          price: { amount: 95, currency: 'GBP' },
        },
      ],
      contact: {
        title: 'Want to start with beginner training?',
        description:
          'Tell me your level, preferred location and dates — I’ll suggest the best first steps for you.',
      },
    },
    speciality: {
      hero: {
        title: 'Specialty Diving Courses',
        description:
          'Focus on specific skills and environments, and take your diving further with targeted training designed to improve control, awareness and experience underwater.',
        tags: ['Skill-focused', 'Different environments'],
      },
      courses: [
        {
          title: 'Dry Suit Diving',
          description:
            'Become SSI Dry Suit Diving.\nDry suit diving opens up a world of opportunities, including diving remote Arctic destinations and exploring cold-water dive sites teeming with life. Dry suit diving also keeps you warm on multi-dive days when you do not want to spend your time getting in and out of a cold wetsuit. The SSI Dry Suit Diving specialty program is the best way to become a dry suit diver and teaches you all the knowledge and techniques you need to dive safely and comfortably in a dry suit. You will learn how to use specialized equipment, like dry suits and BCs, the benefits of dry suits and how to deal with dry suit emergencies – which are unique to this type of diving. Upon completion, you will earn the SSI Dry Suit Diving specialty certification.',
          imageSrc: '/images/courses/dry-suit-diving.jpg',
          tag: 'Cold water',
          price: {
            amount: 230,
            currency: 'GBP',
            extras: ['dry suit rent'],
          },
        },
        {
          title: 'Enriched Air Nitrox Level 1 (32%)',
          description:
            'Become SSI Nitrox diver. \nAs a Nitrox diver, you can increase your bottom times and safety margins, plus shorten your surface intervals - so you can spend more time diving and less time waiting! In this program, you will learn new skills and increase your diving knowledge whilst learning how to safely plan and dive with enriched air mixtures of up to 40% oxygen. Upon completion, you will earn an SSI Enriched Air Nitrox 32% certification.',
          imageSrc: '/images/courses/enriched-air-nitrox.jpg',
          tag: 'Gas skills',
          price: { amount: 150, currency: 'GBP' },
        },
        {
          title: 'Enriched Air Nitrox Level 2 (40%)',
          description:
            'Become SSI Nitrox diver. \nAs a Nitrox diver, you can increase your bottom times and safety margins, plus shorten your surface intervals - so you can spend more time diving and less time waiting! In this program, you will learn new skills and increase your diving knowledge whilst learning how to safely plan and dive with enriched air mixtures of up to 40% oxygen. Upon completion, you will earn an SSI Enriched Air Nitrox 40% certification.',
          imageSrc: '/images/courses/enriched-air-nitrox.jpg',
          tag: 'Gas skills',
          price: { amount: 175, currency: 'GBP' },
        },
        {
          title: 'Deep Diving',
          description:
            'Become an SSI Deep Diver. \nThe SSI Deep Diving Specialty will teach you all you need to dive to depths between 18 and 40 meters, through a mixture of academic sessions and open water dives. You will learn to plan and safely complete your deep diving adventures and use computers and gas consumption calculations to get the most from your deep dives. Upon completion, you will earn your SSI Deep Diving Specialty certification and be able to explore beautiful deep dive sites wherever you choose. This SSI Specialty is also a prerequisite for some advanced training, making it the next logical step to take in your dive education.',
          imageSrc: '/images/courses/deep-diving-scuba.jpg',
          tag: 'Depth',
          price: { amount: 250, currency: 'GBP' },
        },
        {
          title: 'Perfect Buoyancy',
          description:
            'Begin your Perfect Buoyancy program today. \nThe SSI Perfect Buoyancy specialty is the best way to improve your buoyancy and get the most from every dive. Buoyancy is an essential dive skill, but any diver will tell you it takes time to perfect. The Perfect Buoyancy specialty will teach you advanced buoyancy skills and techniques, so you can master your buoyancy more quickly and enjoy more relaxed dive adventures. In this fascinating program, you will also learn new skills that protect the environment and work in every diving situation. Upon completion, you will earn the SSI Perfect Buoyancy Specialty certification. With better buoyancy skills, you will soon be able to hover with ease and take the underwater photographs you dream of!',
          imageSrc: '/images/courses/perfect-buoyancy.jpg',
          tag: 'Buoyancy',
          price: { amount: 175, currency: 'GBP' },
        },
        {
          title: 'Navigation Diving',
          description:
            'Learn how to navigate underwater using natural references and compass skills to plan routes and return confidently to your exit point.',
          imageSrc: '/images/courses/navigation.jpg',
          tag: 'Navigation',
          price: { amount: 175, currency: 'GBP' },
        },
        {
          title: 'Night Diving & Limited Visibility',
          description:
            'Become a certified Night Diving and Limited Visibility diver. \nNight diving requires different skills from diving during the day. The SSI Night Diving and Limited Visibility specialty is the best way to learn about night diving and practice the techniques you will need to become a safe and confident night diver. In this program, you will be provided with all the knowledge and skills you need to safely and comfortably dive at night or in limited visibility conditions. With a combination of online learning and open water training dives, you will learn how to enter and exit the water, use specialized equipment, and how to communicate with your buddy easily at night or in limited visibility. Upon completion, you will earn the SSI Night Diving and Limited Visibility specialty certification and be ready to go night diving with confidence.',
          imageSrc: '/images/courses/night-diving-limited-visibility.jpg',
          tag: 'Low visibility',
          price: { amount: 200, currency: 'GBP' },
        },
        {
          title: 'Boat Diving',
          description:
            'Begin your Boat Diving program today. \nThe ocean is filled with dive sites, but many of the best ones can only be accessed by boat. If you want to discover these incredible dive sites, become an SSI boat diver. It is the best way to learn how to dive from different types of boats safely and with confidence. As a boat diver, you will be able to explore offshore dive sites that attract schooling pelagics and marine megafauna not found closer to shore. You can experience the excitement of liveaboard diving anywhere in the world, fill your day with diving away from the crowds, and cruise along as the sun goes down. Using online training and open water diving sessions, the SSI Boat Diving Specialty program is the best way to learn. This program teaches you all the skills and techniques you need to dive safely and comfortably from boats, including small personal craft and liveaboards. Earn your SSI Boat Diving Specialty certification. Get started today.',
          imageSrc: '/images/courses/boat-diving.jpg',
          tag: 'Boat',
          price: { amount: 250, currency: 'GBP' },
        },
        {
          title: 'Wreck Diving',
          description:
            'Learn how to explore shipwrecks safely by improving buoyancy control, situational awareness and dive planning around submerged structures.',
          imageSrc: '/images/courses/wreck-diving.jpg',
          tag: 'Wreck',
          price: { amount: 175, currency: 'GBP' },
        },
        {
          title: 'DPV Diving',
          description:
            'Become a certified DPV diver. \nIf you want to make the most of your bottom time and have more fun on your dives, try underwater scooter or diver propulsion vehicle (DPV) diving. In this underwater scooter and DPV course, you will learn the skills and concepts you need to safely plan and conduct dives using scooters or DPVs. You will learn the special precautions needed for using DPVs, how to maintain buddy contact and how to control your equipment, so you can safely enjoy the new dive experiences DPVs provide. Upon completion of this program, you will earn the SSI DPV Diving specialty certification and be able to dive up to 30 meters deep with a scooter or DPV.',
          imageSrc: '/images/courses/dpv-diving.jpg',
          tag: 'Scooter',
          price: { amount: 250, currency: 'GBP', extras: ['DPV rent'] },
        },
        {
          title: 'DPV Diving ( technical )',
          description:
            'Become a certified DPV diver. \nIf you want to make the most of your bottom time and have more fun on your dives, try underwater scooter or diver propulsion vehicle (DPV) diving. In this underwater scooter and DPV course, you will learn the skills and concepts you need to safely plan and conduct dives using scooters or DPVs. You will learn the special precautions needed for using DPVs, how to maintain buddy contact and how to control your equipment, so you can safely enjoy the new dive experiences DPVs provide. Upon completion of this program, you will earn the SSI DPV Diving specialty certification and be able to dive up to 30 meters deep with a scooter or DPV.',
          imageSrc: '/images/courses/dpv-diving.jpg',
          tag: 'Technical',
          price: { amount: 280, currency: 'GBP', extras: ['DPV rent'] },
        },
        {
          title: 'Decompression Diving',
          description:
            'Begin your Decompression Diving program today. \nThe SSI Decompression Diving Specialty will teach you how to dive beyond the no-decompression limits. You will learn to plan and conduct dives to a maximum depth of 40 meters with limited decompression using your recreational total diving system and a single decompression cylinder. You will learn and practice how to effectively use your dive computer features, including switching gases, gas integration, time-to-reserve, and time-to-surface. Using these computer functions will become second nature, enabling you to safely conduct dives with limited decompression without hours of dive planning. Upon completion, you will earn the SSI Decompression Diving Specialty certification and be able to explore stunning deep dive sites or larger wrecks without being restricted by the traditional no-decompression limits. The opportunities to expand your diving adventures have just got bigger!',
          imageSrc: '/images/courses/decompression-diving.jpg',
          tag: 'Decompression',
          price: { amount: 350, currency: 'GBP', extras: [] },
        },
        {
          title: 'Marine Ecology',
          description:
            'Become a certified SSI Marine Ecology diver. \nIn the SSI Marine Ecology specialty program, you will learn how ocean organisms interact with each other and their environments. You will be taught how energy flows through communities and the links between different ocean ecosystems. With your newfound knowledge, you will appreciate the marine life you dive with even more! Start online today and earn your SSI Marine Ecology Specialty certification.',
          imageSrc: '/images/courses/marine-ecology.jpeg',
          tag: 'Ecology',
          price: { amount: 0, currency: 'GBP', extras: [] },
        },
        {
          title: 'Science of Diving',
          description:
            'Become a Science of Diving Specialty diver. \nJoin the SSI Science of Diving specialty and you will develop a complete understanding of the underwater world and its effects on the human body. This specialty is required training for most SSI Professional programs, as well as some Extended Range programs, and is an essential way to expand your dive knowledge. Available online, you can earn your SSI Science of Diving specialty certification from home and get ready to begin your dive professional career. Upon completion, you will be halfway to earning the coveted SSI Divemaster rating and earn the SSI Science of Diving specialty certification.',
          imageSrc: '/images/courses/science-of-diving.jpg',
          tag: 'Theory',
          price: { amount: 150, currency: 'GBP', extras: [] },
        },
        {
          title: 'Stress & Rescue',
          description:
            'Become an SSI Diver Stress and Rescue. \nThe SSI Diver Stress and Rescue specialty program teaches you the skills you need to protect yourself and other divers. You will learn how to identify stress, how to prevent accidents and be taught practical techniques to conduct rescues and provide emergency care. With a combination of pool and open water practice sessions, you will become well prepared and confident at handling emergency and rescue situations. Upon completion, you will earn the SSI Diver Stress and Rescue Specialty certification.',
          imageSrc: '/images/courses/stress-and-rescue.jpg',
          tag: 'Safety',
          price: { amount: 450, currency: 'GBP', extras: [] },
        },
        {
          title: 'React Right Instructor (FA, CPR, AED, O2)',
          description:
            'Become a certified React Right Specialty diver. \nReact Right is SSI’s emergency first response course and provides you with the training and knowledge you need to act as a first responder in a medical emergency. In this flexible dive program, you can choose which subjects you want to learn about, including primary assessment, first aid, CPR and primary stabilization techniques. You can also learn about oxygen administration in diving emergencies and Automated External Defibrillator (AED) basics. Using a combination of academic sessions and practical training scenarios, this program will give you the tools and confidence you need for emergency response. By the time you are certified, you will be able to act as an emergency first responder, provide first aid and CPR, administer oxygen and provide AED support in a medical emergency. Earn your SSI React Right specialty certification. Get started today!',
          imageSrc: '/images/courses/react-right.jpeg',
          tag: 'First aid',
          price: { amount: 150, currency: 'GBP', extras: [] },
        },
        {
          title: 'Divemaster',
          description:
            'Become a certified SSI Divemaster. \nThe SSI Divemaster course is your first step to professional training. Working closely with a SSI Instructor, you’ll fine-tune your dive skills, like perfecting the effortless hover, and refine your rescue skills so you anticipate and easily solve common problems. You’ll gain dive knowledge, management and supervision abilities so you become a role model to divers everywhere. As a SSI Divemaster, you’ll lead others as you supervise scuba diving activities and assist with diver training. SSI Divemasters are respected dive professionals who are aligned with one of the largest and most respected dive organization in the world – SSI. If you have already completed the PRO SSI DIVEGUIDE course you simply need to complete the add on SSI SCIENCE OF DIVING course . please call for information price includes all your training with us, your SSI dive guide and science of diving theory, your Pro fees are extra and will be invoiced from SSI to your app. you will also need to purchase the pro pack.',
          imageSrc: '/images/courses/divemaster.jpg',
          tag: 'Professional',
          price: { amount: 600, currency: 'GBP', extras: ['DM kit'] },
        },
      ],
      contact: {
        title: 'Interested in specialty diving training?',
        description:
          'Tell me which areas you’d like to focus on and where you plan to dive — I’ll help you choose the right courses for your goals.',
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
              title: 'Open Water Diver plus Dry Suit',
              price: { amount: 700, currency: 'GBP' },
              extras: ['Dry suit rent'],
            },
          ],
        },
        {
          title: 'Speciality',
          items: [
            {
              title: 'Advanced Open Water Diver',
              price: { amount: 395, currency: 'GBP' },
            },
            {
              title: 'Dry Suit Diving',
              price: { amount: 230, currency: 'GBP' },
              extras: ['Dry suit rent'],
            },
            {
              title: 'Perfect Buoyancy',
              price: { amount: 175, currency: 'GBP' },
            },
            {
              title: 'Enriched Air Nitrox Level 1 (32%)',
              price: { amount: 150, currency: 'GBP' },
            },
            {
              title: 'Enriched Air Nitrox Level 2 (40%)',
              price: { amount: 175, currency: 'GBP' },
            },
            { title: 'Boat Diving', price: { amount: 250, currency: 'GBP' } },
            {
              title: 'Wreck Diving',
              price: { amount: 175, currency: 'GBP' },
            },
            {
              title: 'Advanced Wreck Diving',
              price: { amount: 300, currency: 'GBP' },
            },
            {
              title: 'Night Diving & Limited Visibility',
              price: { amount: 200, currency: 'GBP' },
            },
            {
              title: 'Deep Diving',
              price: { amount: 250, currency: 'GBP' },
            },
            {
              title: 'Decompression Diving',
              price: { amount: 350, currency: 'GBP' },
            },
            {
              title: 'DPV Diving',
              price: { amount: 250, currency: 'GBP' },
              extras: ['Dry suit rent'],
            },
            {
              title: 'DPV Diving ( technical )',
              price: { amount: 280, currency: 'GBP' },
              extras: ['Dry suit rent'],
            },
            {
              title: 'React Right Instructor (FA, CPR, AED, O2)',
              price: { amount: 150, currency: 'GBP' },
            },
            {
              title: 'Stress & Rescue',
              price: { amount: 450, currency: 'GBP' },
            },
            {
              title: 'Science of Diving',
              price: { amount: 150, currency: 'GBP' },
            },
            {
              title: 'Navigation Diving',
              price: { amount: 175, currency: 'GBP' },
            },
          ],
        },
        {
          title: 'Professional',
          items: [
            {
              title: 'Divemaster',
              price: { amount: 600, currency: 'GBP' },
              extras: ['DM kit'],
            },
            {
              title: 'Assistant Instructor',
              price: { amount: 900, currency: 'GBP' },
              extras: ['AI kit'],
            },
          ],
        },
        {
          title: 'Technical',
          items: [
            {
              title: 'Extended Range Nitrox Diving (twin set)',
              price: { amount: 400, currency: 'GBP' },
            },
            {
              title: 'Extended Range (twin set)',
              price: { amount: 550, currency: 'GBP' },
            },
            {
              title: 'Extended Range Trimix (twin set)',
              price: { amount: 550, currency: 'GBP' },
              extras: ['gases'],
            },
          ],
        },
        {
          title: 'Bundle rec',
          items: [
            {
              title: 'Divemaster Bundle',
              price: { amount: 900, currency: 'GBP' },
              extras: ['DM kit'],
            },
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
            imageSrc: '/images/courses-speciality.jpg',
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
            'Zostań certyfikowanym nurkiem Open Water Diver SSI. \nTen uznawany na całym świecie program certyfikacyjny to najlepszy sposób, aby rozpocząć swoją przygodę z nurkowaniem jako certyfikowany nurek. Spersonalizowane szkolenie połączone jest z praktycznymi zajęciami w wodzie, aby zapewnić Ci umiejętności i doświadczenie niezbędne do swobodnego poruszania się pod wodą. Po ukończeniu szkolenia otrzymasz certyfikat SSI Open Water Diver.',
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
        {
          title: 'Scuba Skills Update',
          description:
            'Kontynuuj swoją nurkową przygodę dzięki Scuba Skills Update. \nŁatwo stracić wprawę i pewność siebie, gdy przez dłuższy czas nie nurkujesz. Dzięki programowi SSI Scuba Skills Update szybko wrócimy z Tobą do wody i sprawimy, że znów będziesz nurkować z łatwością. Ten kurs odświeżający pozwala powtórzyć i przećwiczyć umiejętności nurkowe, których nauczyłeś/aś się podczas kursu Open Water Diver, pod okiem profesjonalisty SSI. To doskonały kurs przed wyjazdem nurkowym, abyś spędzał/a mniej czasu martwiąc się o swoje umiejętności, a więcej na podziwianiu życia morskiego. Jeśli jesteś kursantem Open Water Diver bez certyfikatu, Scuba Skills Update jest idealnym rozwiązaniem do przećwiczenia umiejętności przed nurkowaniami szkoleniowymi na wodach otwartych. Bez sztywno określonego czasu trwania kursu możesz poświęcić tyle czasu, ile potrzebujesz, i skupić się na umiejętnościach, które wymagają poprawy.',
          imageSrc: '/images/courses/scuba-skills-update.jpg',
          tag: 'Odświeżenie',
          price: { amount: 95, currency: 'GBP' },
        },
      ],
      contact: {
        title: 'Chcesz zacząć od kursów dla początkujących?',
        description:
          'Powiedz mi, jaki masz poziom, preferowaną lokalizację i terminy — zaproponuję najlepsze pierwsze kroki.',
      },
    },
    speciality: {
      hero: {
        title: 'Specialty Diving Courses',
        description:
          'Skup się na konkretnych umiejętnościach i środowiskach oraz rozwijaj swoje nurkowanie dzięki ukierunkowanemu szkoleniu, zaprojektowanemu tak, aby poprawić kontrolę, świadomość i doświadczenie pod wodą.',
        tags: ['Rozwój umiejętności', 'Różnorodne środowiska'],
      },
      courses: [
        {
          title: 'Dry Suit Diving',
          description:
            'Zostań nurkiem w suchym skafandrze SSI. \nNurkowanie w suchym skafandrze otwiera świat nowych możliwości, w tym nurkowanie w odległych arktycznych rejonach oraz eksplorowanie zimnowodnych miejsc nurkowych tętniących życiem. Pozwala też zachować ciepło podczas dni z wieloma nurkowaniami, kiedy nie chcesz tracić czasu na ciągłe zakładanie i zdejmowanie zimnej pianki. Specjalistyczny program SSI Dry Suit Diving to najlepszy sposób, aby zostać nurkiem w suchym skafandrze. Uczy on całej wiedzy i technik potrzebnych do bezpiecznego i komfortowego nurkowania w suchym skafandrze. Nauczysz się korzystać ze specjalistycznego sprzętu, takiego jak suche skafandry i kamizelki wypornościowe (BCD), poznasz zalety suchego skafandra oraz dowiesz się, jak radzić sobie w sytuacjach awaryjnych charakterystycznych dla tego typu nurkowania. Po ukończeniu szkolenia otrzymasz certyfikat specjalistyczny SSI Dry Suit Diving.',
          imageSrc: '/images/courses/dry-suit-diving.jpg',
          tag: 'Zimna woda',
          price: {
            amount: 230,
            currency: 'GBP',
            extras: ['wypożyczenie suchego skafandra'],
          },
        },
        {
          title: 'Enriched Air Nitrox Level 1 (32%)',
          description:
            'Zostań nurkiem SSI Nitrox. \nJako nurek Nitrox możesz wydłużyć czas przebywania na dnie oraz zwiększyć marginesy bezpieczeństwa, a także skrócić przerwy powierzchniowe – dzięki czemu możesz spędzać więcej czasu na nurkowaniu, a mniej na czekaniu! W trakcie tego programu nauczysz się nowych umiejętności i poszerzysz swoją wiedzę nurkową, ucząc się, jak bezpiecznie planować nurkowania oraz nurkować z użyciem wzbogaconych mieszanek powietrza zawierających do 40% tlenu. Po ukończeniu szkolenia otrzymasz certyfikat SSI Enriched Air Nitrox 32%.',
          imageSrc: '/images/courses/enriched-air-nitrox.jpg',
          tag: 'Umiejętności gazowe',
          price: { amount: 150, currency: 'GBP' },
        },
        {
          title: 'Enriched Air Nitrox Level 2 (40%)',
          description:
            'Zostań nurkiem SSI Nitrox. \nJako nurek Nitrox możesz wydłużyć czas przebywania na dnie oraz zwiększyć marginesy bezpieczeństwa, a także skrócić przerwy powierzchniowe – dzięki czemu możesz spędzać więcej czasu na nurkowaniu, a mniej na czekaniu! W trakcie tego programu nauczysz się nowych umiejętności i poszerzysz swoją wiedzę nurkową, ucząc się, jak bezpiecznie planować nurkowania oraz nurkować z użyciem wzbogaconych mieszanek powietrza zawierających do 40% tlenu. Po ukończeniu szkolenia otrzymasz certyfikat SSI Enriched Air Nitrox 40%.',
          imageSrc: '/images/courses/enriched-air-nitrox.jpg',
          tag: 'Umiejętności gazowe',
          price: { amount: 175, currency: 'GBP' },
        },
        {
          title: 'Deep Diving',
          description:
            'Zostań nurkiem SSI Deep Diver. \nSpecjalizacja SSI Deep Diving nauczy Cię wszystkiego, czego potrzebujesz, aby nurkować na głębokościach od 18 do 40 metrów, poprzez połączenie zajęć teoretycznych oraz nurkowań w wodach otwartych. Nauczysz się planować oraz bezpiecznie realizować nurkowania głębokie, a także korzystać z komputerów nurkowych i obliczeń zużycia gazu, aby w pełni wykorzystać swoje nurkowania głębokie. Po ukończeniu szkolenia otrzymasz certyfikat specjalistyczny SSI Deep Diving Specialty i będziesz mógł/mogła eksplorować piękne, głębokie miejsca nurkowe, gdziekolwiek zechcesz. Ta specjalizacja SSI jest również wymagana wstępnie do niektórych szkoleń zaawansowanych, co czyni ją kolejnym logicznym krokiem w Twojej edukacji nurkowej.',
          imageSrc: '/images/courses/deep-diving-scuba.jpg',
          tag: 'Głębokość',
          price: { amount: 250, currency: 'GBP' },
        },
        {
          title: 'Perfect Buoyancy',
          description:
            'Rozpocznij swój program Perfect Buoyancy już dziś. \nSpecjalizacja SSI Perfect Buoyancy to najlepszy sposób na poprawę pływalności i czerpanie maksimum z każdego nurkowania. Pływalność jest jedną z kluczowych umiejętności nurkowych, jednak każdy nurek powie, że jej opanowanie wymaga czasu. Specjalizacja Perfect Buoyancy nauczy Cię zaawansowanych umiejętności i technik kontroli pływalności, dzięki czemu szybciej opanujesz tę umiejętność i będziesz cieszyć się bardziej relaksującymi nurkowaniami. W tym fascynującym programie nauczysz się także nowych umiejętności, które chronią środowisko i sprawdzają się w każdej sytuacji nurkowej. Po ukończeniu szkolenia otrzymasz certyfikat specjalistyczny SSI Perfect Buoyancy Specialty. Dzięki lepszej kontroli pływalności wkrótce będziesz w stanie swobodnie zawisać w wodzie i wykonywać podwodne zdjęcia, o jakich marzysz!',
          imageSrc: '/images/courses/perfect-buoyancy.jpg',
          tag: 'Pływalność',
          price: { amount: 175, currency: 'GBP' },
        },
        {
          title: 'Navigation Diving',
          description:
            'Naucz się nawigacji podwodnej, wykorzystując naturalne punkty orientacyjne oraz umiejętności posługiwania się kompasem, aby planować trasy i z pewnością wracać do punktu wyjścia.',
          imageSrc: '/images/courses/navigation.jpg',
          tag: 'Nawigacja',
          price: { amount: 175, currency: 'GBP' },
        },
        {
          title: 'Night Diving & Limited Visibility',
          description:
            'Zostań certyfikowanym nurkiem nocnym oraz nurkiem w warunkach ograniczonej widoczności. \nNurkowanie nocne wymaga innych umiejętności niż nurkowanie w ciągu dnia. Specjalizacja SSI Night Diving and Limited Visibility to najlepszy sposób, aby nauczyć się nurkowania nocnego i przećwiczyć techniki potrzebne do bezpiecznego i pewnego nurkowania po zmroku. W tym programie otrzymasz całą wiedzę oraz umiejętności niezbędne do bezpiecznego i komfortowego nurkowania w nocy lub w warunkach ograniczonej widoczności. Dzięki połączeniu nauki online oraz nurkowań szkoleniowych w wodach otwartych nauczysz się, jak wchodzić do wody i z niej wychodzić, jak korzystać ze specjalistycznego sprzętu oraz jak łatwo komunikować się z partnerem nurkowym w nocy lub przy ograniczonej widoczności. Po ukończeniu szkolenia otrzymasz certyfikat specjalistyczny SSI Night Diving and Limited Visibility i będziesz gotowy/gotowa do nurkowania nocnego z pełną pewnością.',
          imageSrc: '/images/courses/night-diving-limited-visibility.jpg',
          tag: 'Niska widoczność',
          price: { amount: 200, currency: 'GBP' },
        },
        {
          title: 'Boat Diving',
          description:
            'Rozpocznij swój program Boat Diving już dziś. \nOcean jest pełen miejsc nurkowych, jednak do wielu z najlepszych można dotrzeć wyłącznie łodzią. Jeśli chcesz odkrywać te niesamowite miejsca nurkowe, zostań nurkiem SSI Boat Diver. To najlepszy sposób, aby nauczyć się bezpiecznego i pewnego nurkowania z różnych typów łodzi. Jako nurek łodziowy będziesz mógł/mogła eksplorować oddalone od brzegu miejsca nurkowe, które przyciągają ławice ryb pelagicznych oraz duże zwierzęta morskie, niespotykane bliżej lądu. Możesz doświadczyć ekscytujących wypraw typu liveaboard w dowolnym miejscu na świecie, spędzać całe dni na nurkowaniu z dala od tłumów oraz podziwiać zachód słońca podczas rejsu. Dzięki połączeniu nauki online oraz nurkowań szkoleniowych w wodach otwartych program SSI Boat Diving Specialty jest najlepszym sposobem nauki. Program ten uczy wszystkich umiejętności i technik potrzebnych do bezpiecznego i komfortowego nurkowania z łodzi, w tym z małych jednostek pływających oraz łodzi typu liveaboard. Zdobądź certyfikat SSI Boat Diving Specialty. Rozpocznij już dziś.',
          imageSrc: '/images/courses/boat-diving.jpg',
          tag: 'Łódź',
          price: { amount: 250, currency: 'GBP' },
        },
        {
          title: 'Wreck Diving',
          description:
            'Naucz się bezpiecznie eksplorować wraki statków, poprawiając kontrolę pływalności, świadomość sytuacyjną oraz planowanie nurkowań wokół zanurzonych konstrukcji.',
          imageSrc: '/images/courses/wreck-diving.jpg',
          tag: 'Wrak',
          price: { amount: 175, currency: 'GBP' },
        },
        {
          title: 'DPV Diving',
          description:
            'Zostań certyfikowanym nurkiem DPV. \nJeśli chcesz maksymalnie wykorzystać czas spędzony na dnie i czerpać jeszcze więcej radości z nurkowań, spróbuj nurkowania ze skuterem podwodnym, czyli pojazdem napędowym dla nurków (DPV – Diver Propulsion Vehicle). Podczas tego kursu nurkowania ze skuterem podwodnym i DPV nauczysz się umiejętności oraz zasad niezbędnych do bezpiecznego planowania i wykonywania nurkowań z użyciem skuterów lub DPV. Poznasz szczególne środki ostrożności związane z używaniem DPV, nauczysz się utrzymywać kontakt z partnerem nurkowym oraz kontrolować swój sprzęt, aby móc bezpiecznie cieszyć się nowymi doświadczeniami nurkowymi, jakie oferują DPV. Po ukończeniu programu otrzymasz certyfikat specjalistyczny SSI DPV Diving Specialty i będziesz mógł/mogła nurkować ze skuterem lub DPV do głębokości 30 metrów.',
          imageSrc: '/images/courses/dpv-diving.jpg',
          tag: 'Skuter',
          price: {
            amount: 250,
            currency: 'GBP',
            extras: ['wypożyczenie DPV'],
          },
        },
        {
          title: 'DPV Diving ( technical )',
          description:
            'Zostań certyfikowanym nurkiem DPV. \nJeśli chcesz maksymalnie wykorzystać czas spędzony na dnie i czerpać jeszcze więcej radości z nurkowań, spróbuj nurkowania ze skuterem podwodnym, czyli pojazdem napędowym dla nurków (DPV – Diver Propulsion Vehicle). Podczas tego kursu nurkowania ze skuterem podwodnym i DPV nauczysz się umiejętności oraz zasad niezbędnych do bezpiecznego planowania i wykonywania nurkowań z użyciem skuterów lub DPV. Poznasz szczególne środki ostrożności związane z używaniem DPV, nauczysz się utrzymywać kontakt z partnerem nurkowym oraz kontrolować swój sprzęt, aby móc bezpiecznie cieszyć się nowymi doświadczeniami nurkowymi, jakie oferują DPV. Po ukończeniu programu otrzymasz certyfikat specjalistyczny SSI DPV Diving Specialty i będziesz mógł/mogła nurkować ze skuterem lub DPV do głębokości 30 metrów.',
          imageSrc: '/images/courses/dpv-diving.jpg',
          tag: 'Techniczny',
          price: {
            amount: 280,
            currency: 'GBP',
            extras: ['wypożyczenie DPV'],
          },
        },
        {
          title: 'Decompression Diving',
          description:
            'Rozpocznij swój program Decompression Diving już dziś. \nSpecjalizacja SSI Decompression Diving nauczy Cię nurkowania poza limitami bezdekompresyjnymi. Nauczysz się planować i wykonywać nurkowania do maksymalnej głębokości 40 metrów z ograniczoną dekompresją, wykorzystując swój rekreacyjny system nurkowy oraz jedną butlę dekompresyjną. Nauczysz się również efektywnie korzystać z funkcji komputera nurkowego, w tym przełączania gazów, integracji gazu, czasu do rezerwy oraz czasu do wynurzenia. Obsługa tych funkcji stanie się dla Ciebie naturalna, co pozwoli bezpiecznie realizować nurkowania z ograniczoną dekompresją bez konieczności wielogodzinnego planowania nurkowań. Po ukończeniu szkolenia otrzymasz certyfikat specjalistyczny SSI Decompression Diving Specialty i będziesz mógł/mogła eksplorować imponujące głębokie miejsca nurkowe lub większe wraki bez ograniczeń wynikających z tradycyjnych limitów bezdekompresyjnych. Możliwości rozwoju Twoich nurkowych przygód właśnie się zwiększyły!',
          imageSrc: '/images/courses/decompression-diving.jpg',
          tag: 'Dekompresja',
          price: { amount: 350, currency: 'GBP', extras: [] },
        },
        {
          title: 'Marine Ecology',
          description:
            'Zostań certyfikowanym nurkiem SSI Marine Ecology. \nW specjalistycznym programie SSI Marine Ecology nauczysz się, jak organizmy morskie oddziałują ze sobą nawzajem oraz ze swoim środowiskiem. Dowiesz się, jak energia przepływa przez społeczności oraz jakie istnieją powiązania między różnymi ekosystemami oceanicznymi. Dzięki nowo zdobytej wiedzy jeszcze bardziej docenisz życie morskie, z którym nurkujesz! Rozpocznij naukę online już dziś i zdobądź certyfikat specjalistyczny SSI Marine Ecology Specialty.',
          imageSrc: '/images/courses/marine-ecology.jpeg',
          tag: 'Ekologia',
          price: { amount: 0, currency: 'GBP', extras: [] },
        },
        {
          title: 'Science of Diving',
          description:
            'Zostań nurkiem specjalistą Science of Diving. \nDołącz do specjalizacji SSI Science of Diving, a zdobędziesz pełne zrozumienie podwodnego świata oraz jego wpływu na organizm człowieka. Ta specjalizacja jest wymagana w większości programów profesjonalnych SSI, a także w niektórych programach Extended Range, i stanowi kluczowy sposób na poszerzenie Twojej wiedzy nurkowej. Szkolenie jest dostępne online, dzięki czemu możesz zdobyć certyfikat specjalistyczny SSI Science of Diving z domu i przygotować się do rozpoczęcia swojej profesjonalnej kariery nurkowej. Po ukończeniu programu będziesz w połowie drogi do zdobycia prestiżowego stopnia SSI Divemaster oraz otrzymasz certyfikat specjalistyczny SSI Science of Diving Specialty.',
          imageSrc: '/images/courses/science-of-diving.jpg',
          tag: 'Teoria',
          price: { amount: 150, currency: 'GBP', extras: [] },
        },
        {
          title: 'Stress & Rescue',
          description:
            'Zostań nurkiem SSI Diver Stress and Rescue. \nSpecjalistyczny program SSI Diver Stress and Rescue uczy umiejętności potrzebnych do ochrony siebie oraz innych nurków. Nauczysz się rozpoznawać stres, zapobiegać wypadkom oraz poznasz praktyczne techniki prowadzenia akcji ratunkowych i udzielania pierwszej pomocy. Dzięki połączeniu zajęć na basenie oraz nurkowań szkoleniowych w wodach otwartych będziesz dobrze przygotowany/a i pewny/a siebie w radzeniu sobie z sytuacjami awaryjnymi i ratunkowymi. Po ukończeniu szkolenia otrzymasz certyfikat specjalistyczny SSI Diver Stress and Rescue Specialty.',
          imageSrc: '/images/courses/stress-and-rescue.jpg',
          tag: 'Bezpieczeństwo',
          price: { amount: 450, currency: 'GBP', extras: [] },
        },
        {
          title: 'React Right Instructor (FA, CPR, AED, O2)',
          description:
            'Zostań certyfikowanym nurkiem specjalistą React Right. \nReact Right to kurs pierwszej pomocy w sytuacjach nagłych SSI, który zapewnia Ci szkolenie i wiedzę potrzebne do działania jako pierwszy ratownik w nagłych przypadkach medycznych. W tym elastycznym programie szkoleniowym możesz wybrać, których zagadnień chcesz się uczyć, w tym: ocenę stanu poszkodowanego, pierwszą pomoc, RKO (resuscytację krążeniowo-oddechową) oraz techniki podstawowej stabilizacji. Możesz także nauczyć się podawania tlenu w nagłych wypadkach nurkowych oraz podstaw obsługi automatycznego defibrylatora zewnętrznego (AED). Dzięki połączeniu zajęć teoretycznych oraz praktycznych scenariuszy szkoleniowych program ten da Ci narzędzia i pewność siebie potrzebne do reagowania w sytuacjach awaryjnych. Po uzyskaniu certyfikatu będziesz w stanie działać jako pierwszy ratownik, udzielać pierwszej pomocy i RKO, podawać tlen oraz korzystać z AED w nagłych przypadkach medycznych. Zdobądź certyfikat specjalistyczny SSI React Right Specialty. Rozpocznij już dziś!',
          imageSrc: '/images/courses/react-right.jpeg',
          tag: 'Pierwsza pomoc',
          price: { amount: 150, currency: 'GBP', extras: [] },
        },
        {
          title: 'Divemaster',
          description:
            'Zostań certyfikowanym SSI Divemasterem. \nKurs SSI Divemaster to Twój pierwszy krok w stronę szkolenia zawodowego. W ścisłej współpracy z instruktorem SSI udoskonalisz swoje umiejętności nurkowe, takie jak perfekcyjne, swobodne zawisanie w wodzie, oraz dopracujesz umiejętności ratownicze, aby przewidywać i łatwo rozwiązywać typowe problemy. Zdobędziesz wiedzę nurkową oraz umiejętności zarządzania i nadzoru, dzięki czemu staniesz się wzorem do naśladowania dla nurków na całym świecie. Jako SSI Divemaster będziesz prowadzić innych, nadzorując aktywności nurkowe oraz pomagając w szkoleniu nurków. SSI Divemasterzy to cenieni profesjonaliści nurkowi, związani z jedną z największych i najbardziej renomowanych organizacji nurkowych na świecie – SSI. Jeśli ukończyłeś już kurs PRO SSI Dive Guide, wystarczy, że ukończysz dodatkowo kurs SSI Science of Diving. Prosimy o kontakt w celu uzyskania informacji o cenie. Cena obejmuje całe szkolenie u nas, kurs SSI Dive Guide oraz teorię SSI Science of Diving. Opłaty PRO są dodatkowe i będą fakturowane przez SSI bezpośrednio do Twojej aplikacji. Będziesz także musiał(a) zakupić pakiet PRO.',
          imageSrc: '/images/courses/divemaster.jpg',
          tag: 'Profesjonalny',
          price: {
            amount: 600,
            currency: 'GBP',
            extras: ['zestaw Divemastera'],
          },
        },
      ],
      contact: {
        title: 'Interesuje Cię szkolenie specjalistyczne z nurkowania?',
        description:
          'Powiedz mi, na jakich obszarach chcesz się skupić i gdzie planujesz nurkować — pomogę Ci dobrać odpowiednie kursy do Twoich celów.',
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
              extras: ['Teoria i tylko basen'],
            },
            {
              title: 'Open Water Diver - full',
              price: { amount: 550, currency: 'GBP' },
            },
            {
              title: 'Open Water Diver plus Dry Suit',
              price: { amount: 700, currency: 'GBP' },
              extras: ['Wypożyczenie suchego skafandra'],
            },
          ],
        },
        {
          title: 'Specjalizacja',
          items: [
            {
              title: 'Advanced Open Water Diver',
              price: { amount: 395, currency: 'GBP' },
            },
            {
              title: 'Dry Suit Diving',
              price: { amount: 230, currency: 'GBP' },
              extras: ['Wypożyczenie suchego skafandra'],
            },
            {
              title: 'Perfect Buoyancy',
              price: { amount: 175, currency: 'GBP' },
            },
            {
              title: 'Enriched Air Nitrox Level 1 (32%)',
              price: { amount: 150, currency: 'GBP' },
            },
            {
              title: 'Enriched Air Nitrox Level 2 (40%)',
              price: { amount: 175, currency: 'GBP' },
            },
            { title: 'Boat Diving', price: { amount: 250, currency: 'GBP' } },
            {
              title: 'Wreck Diving',
              price: { amount: 175, currency: 'GBP' },
            },
            {
              title: 'Advanced Wreck Diving',
              price: { amount: 300, currency: 'GBP' },
            },
            {
              title: 'Night Diving & Limited Visibility',
              price: { amount: 200, currency: 'GBP' },
            },
            {
              title: 'Deep Diving',
              price: { amount: 250, currency: 'GBP' },
            },
            {
              title: 'Decompression Diving',
              price: { amount: 350, currency: 'GBP' },
            },
            {
              title: 'DPV Diving',
              price: { amount: 250, currency: 'GBP' },
              extras: ['Wypożyczenie suchego skafandra'],
            },
            {
              title: 'DPV Diving ( technical )',
              price: { amount: 280, currency: 'GBP' },
              extras: ['Wypożyczenie suchego skafandra'],
            },
            {
              title: 'React Right Instructor (FA, CPR, AED, O2)',
              price: { amount: 150, currency: 'GBP' },
            },
            {
              title: 'Stress & Rescue',
              price: { amount: 450, currency: 'GBP' },
            },
            {
              title: 'Science of Diving',
              price: { amount: 150, currency: 'GBP' },
            },
            {
              title: 'Navigation Diving',
              price: { amount: 175, currency: 'GBP' },
            },
          ],
        },
        {
          title: 'Profesjonalny',
          items: [
            {
              title: 'Divemaster',
              price: { amount: 600, currency: 'GBP' },
              extras: ['zestaw Divemastera'],
            },
            {
              title: 'Assistant Instructor',
              price: { amount: 900, currency: 'GBP' },
              extras: ['zestaw AI'],
            },
          ],
        },
        {
          title: 'Techniczny',
          items: [
            {
              title: 'Extended Range Nitrox Diving (twin set)',
              price: { amount: 400, currency: 'GBP' },
            },
            {
              title: 'Extended Range (twin set)',
              price: { amount: 550, currency: 'GBP' },
            },
            {
              title: 'Extended Range Trimix (twin set)',
              price: { amount: 550, currency: 'GBP' },
              extras: ['gazy'],
            },
          ],
        },
        {
          title: 'Pakiet rekreacyjny',
          items: [
            {
              title: 'Divemaster Bundle',
              price: { amount: 900, currency: 'GBP' },
              extras: ['zestaw Divemastera'],
            },
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
