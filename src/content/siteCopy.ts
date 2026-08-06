export const siteCopy = {
	en: {
		common: {
			locations: "UK · Lanzarote · Poland",
			breadcrumbHome: "Home",
			responseTime: "Typical response time: 24–48h",
			emailLabel: "Email me",
			menuOpenLabel: "Open menu",
			menuCloseLabel: "Close menu",
			languageLabel: "Language",
			social: [
				{ key: "instagram", label: "Instagram" },
				{ key: "facebook", label: "Facebook" },
			],
			legalDisclaimer:
				"The information provided on this website is for general information purposes only and does not constitute a contractual offer or confirmation of business activity.",
			cookieBanner: {
				title: "Cookies",
				description:
					"We use cookies to improve the site and measure traffic. You can accept or reject analytics cookies.",
				learnMorePrefix: "Learn more in our",
				privacyPolicyLabel: "Privacy Policy",
				cookiePolicyLabel: "Cookie Policy",
				conjunctionLabel: "and",
				acceptLabel: "Accept",
				rejectLabel: "Reject",
			},
			legalLinks: [
				{
					key: "privacyPolicy",
					label: "Privacy Policy",
					href: "/privacy-policy",
				},
				{ key: "cookiePolicy", label: "Cookie Policy", href: "/cookie-policy" },
			],
			cookiePolicy: {
				title: "COOKIE POLICY",
				sections: [
					{
						heading: "Cookie Policy",
						paragraphs: [
							"The Website uses cookies to ensure proper operation and for statistical purposes.",
						],
					},
					{
						heading: "1. What are cookies",
						paragraphs: [
							"Cookies are small text files stored on the user’s device when using the Website.",
						],
					},
					{
						heading: "2. Types of cookies used on the Website",
						paragraphs: ["The Website uses:"],
						list: [
							"necessary cookies – required for proper functioning of the Website,",
							"analytical cookies – used to collect statistical data (Google Analytics).",
						],
					},
					{
						heading: "3. Analytical cookies",
						paragraphs: [
							"Analytical cookies are used only after the user has given consent.",
							"They are used for:",
						],
						list: [
							"analyzing traffic on the Website,",
							"improving the quality and operation of the Website.",
						],
					},
					{
						heading: "4. Cookie management",
						paragraphs: ["The user may:"],
						list: [
							"accept analytical cookies,",
							"reject analytical cookies,",
							"withdraw consent at any time by deleting cookies or changing browser settings.",
						],
					},
					{
						heading: "5. Changes to the cookie policy",
						paragraphs: ["This Cookie Policy may be updated when necessary."],
					},
				],
			},

			privacyPolicy: {
				title: "PRIVACY POLICY",
				sections: [
					{
						heading: "Privacy Policy",
						paragraphs: [
							"(effective date: 3 February 2026)",
							"This Privacy Policy explains how personal data is processed on this website.",
						],
					},
					{
						heading: "1. Data Controller",
						paragraphs: [
							"The controller of personal data is:",
							"Mariusz Ciupa",
							"Email: mariuszciupa1969@gmail.com",
						],
					},
					{
						heading: "2. Scope of processed data",
						paragraphs: [
							"The Website does not use contact forms and does not collect data directly from users.",
							"When using the Website, the following data may be processed:",
						],
						list: [
							"IP address (in anonymized form),",
							"statistical data about visits (e.g. number of visits, device type, browser),",
							"data about how the Website is used (e.g. visited pages).",
						],
					},
					{
						heading: "3. Purpose of data processing",
						paragraphs: ["Personal data is processed for the purpose of:"],
						list: [
							"keeping visit statistics,",
							"improving the functioning of the Website,",
							"analyzing how the content is used.",
						],
					},
					{
						heading: "4. Legal basis",
						paragraphs: ["Personal data is processed on the basis of:"],
						list: [
							"user’s consent (Article 6(1)(a) GDPR) – for analytical cookies.",
						],
					},
					{
						heading: "5. Analytical tool",
						paragraphs: [
							"The Website uses: Google Analytics (Google LLC).",
							"Google Analytics uses cookies to analyze website traffic.",
							"IP addresses are anonymized before being processed.",
							"Data may be transferred to Google servers outside the European Union (e.g. the USA), based on appropriate safeguards in accordance with GDPR (such as standard contractual clauses).",
						],
					},
					{
						heading: "6. Data retention period",
						paragraphs: [
							"Statistical data is stored according to Google Analytics settings or until the user withdraws their consent.",
						],
					},
					{
						heading: "7. User rights",
						paragraphs: ["The user has the right to:"],
						list: [
							"access their data,",
							"rectify their data,",
							"erase their data,",
							"restrict processing,",
							"withdraw consent at any time,",
							"lodge a complaint with a data protection authority.",
						],
					},
					{
						heading: "8. Withdrawal of consent",
						paragraphs: [
							"The user may withdraw consent at any time by deleting cookies in their browser or changing their browser cookie settings.",
						],
					},
					{
						heading: "9. Changes to the privacy policy",
						paragraphs: ["This Privacy Policy may be updated when necessary."],
					},
				],
			},
		},
		header: {
			nav: {
				courses: "Courses",
				prices: "Prices",
				updates: "Updates",
				about: "About",
				contact: "Contact",
			},
			ctaLabel: "Book / Ask",
		},
		home: {
			hero: {
				titlePrimary: "Mariusz",
				titleAccent: "Ciupa",
				subtitle:
					"Personal diving training — from your first dive to advanced technical courses and freediving.",
				ctaPrimary: "View courses",
				ctaSecondary: "Contact me",
				imageAlt: "Scuba diving training",
				captionEyebrow: "Training focused on safety",
				captionTitle: "Calm. Clear. Confident.",
			},
			quote: {
				lines: [
					"“Safety underwater is born at the surface — in preparation, knowledge, and respect for your own limits.",
					"Only then does every dive become true freedom.”",
				],
			},
			courses: {
				eyebrow: "COURSES",
				title: "Diving courses",
				description:
					"Choose your level and grow step by step — from your first certification to technical training.",
				ctaLabel: "Ask about availability",
				swipeHint: "Swipe to explore →",
				exploreLabel: "Explore →",
				cards: [
					{
						title: "Beginner",
						desc: "Start from zero. Learn the basics, build confidence, get certified.",
						tag: "Perfect first step",
						imageSrc: "/images/courses-beginner.jpg",
						link: "/beginner",
					},
					{
						title: "Speciality",
						desc: "Improve skills with focused courses like buoyancy, navigation or night diving.",
						tag: "Build experience",
						imageSrc: "/images/courses-speciality.jpg",
						link: "/speciality",
					},
					{
						title: "Technical",
						desc: "Advanced training for deeper dives, procedures and serious planning.",
						tag: "Go beyond limits",
						imageSrc: "/images/courses-technical.jpg",
						link: "/technical",
					},
				],
			},
			about: {
				eyebrow: "ABOUT",
				title: "Hi, I’m Mariusz",
				paragraphs: [
					"I help divers build skills in a calm and structured way — with a strong focus on safety, good habits and confidence in the water.",
					"Whether you’re starting from zero or leveling up to technical training, we’ll choose the right path and pace for you.",
				],
				highlights: [
					"10+ years experience",
					"SSI PRO XR",
					"Technical & recreational diving",
					"Europe & Canary Islands",
				],
				imageAlt: "Mariusz Ciupa",
				imageCaptionEyebrow: "About the instructor",
				imageCaptionTitle: "Experience you can trust",
				locationTitle: "Where I teach",
				locationDescription:
					"I cooperate with selected dive centers in the United Kingdom, Lanzarote and Poland — so you can train and dive in different environments with continuity and trusted support.",
				locations: ["UK", "Lanzarote", "Poland"],
				partnerLogos: [
					{
						src: "/images/logo-bonito.png",
						alt: "Bonito Diving Lanzarote",
						link: "https://bonitodivinglanzarote.biz.pl/divecenter/",
					},
					{
						src: "/images/logo-scuba-tech.png",
						alt: "Scuba Tech",
						link: "https://www.scuba-tech.co.uk/",
					},
					{
						src: "/images/logo-scubaelite.png",
						alt: "Scuba Elite",
						link: "https://scubaelite.pl/",
					},
				],
				ctaLabel: "Contact me",
			},
			contact: {
				title: "Ready to start your diving journey?",
				description:
					"Tell me your level, preferred location and dates — I’ll suggest the best course and next steps.",
			},
		},
		courses: {
			card: {
				readMore: "Read more",
				showLess: "Show less",
				ctaLabel: "Ask about availability",
				defaultTag: "Course",
				priceLabel: "Price",
				extrasLabel: "Extras:",
			},
		},
		beginner: {
			hero: {
				title: "Beginner Diving Courses",
				description:
					"Start from zero, learn the basics step by step, and build calm, confident diving skills with a safety-first approach.",
				tags: ["No experience needed", "Small groups"],
			},
			courses: [
				{
					title: "Try Scuba",
					description:
						"A first, guided experience underwater. Perfect if you want to try scuba before committing to a full certification course.",
					imageSrc: "/images/courses/try-scuba.jpg",
					tag: "Intro",
					price: { amount: 75, currency: "GBP", extras: ["Pool only"] },
				},
				{
					title: "SSI Open Water Diver",
					description:
						"Become a certified Open Water Diver with SSI. \nThis globally recognized certification program is the best way to begin your lifelong adventures as a certified scuba diver. Personalized training is combined with in-water practice sessions to ensure you have the skills and experience required to become truly comfortable underwater. You will earn the SSI Open Water Diver certification.",
					imageSrc: "/images/courses/open-water.jpg",
					tag: "Certification",
					price: { amount: 550, currency: "GBP" },
				},
				{
					title: "Advanced Open Water Diver",
					description:
						"If you cannot decide which specialty programs are the best choice for you, join the SSI Advanced Open Water Diver program! You will try Deep Diving and Navigation plus a variety of 3 more specialty areas of choice before committing to full specialty training. It is a great way to experience what advanced diver training is all about and how valuable it can be to your diving adventures. \nDuring the Advanced Open Water Diver Program, you will experience 5 different specialties by completing one open water training dive per specialty after a comprehensive briefing with your SSI Instructor. \nBy taking this program you will have total freedom to explore. You can complete the full Specialty trainings any time in the future and credit your Advanced Open Water Diver training towards them.",
					imageSrc: "/images/courses/advanced-open-water.jpg",
					tag: "Next step",
					price: { amount: 395, currency: "GBP" },
				},
				{
					title: "Scuba Skills Update",
					description:
						"Continue your dive adventure with a Scuba Skills Update \nIt is easy for dive skills to get rusty and to lose confidence when you have not dived for a while. With the SSI Scuba Skills Update, we will get you back in the water and diving with ease in no time. This scuba refresher course allows you to review and practice scuba skills you learned in your Open Water Diver program, under the guidance of an SSI Professional. This is a great course to take just before a dive holiday, so you spend less time worrying about your skills and more time admiring the marine life. If you are a non-certified Open Water Diver student, a Scuba Skills Update is ideal for practicing your dive skills before your open water training dives. With no fixed course duration, you can take your time and focus on the skills you need help with.",
					imageSrc: "/images/courses/scuba-skills-update.jpg",
					tag: "Refresh",
					price: { amount: 95, currency: "GBP" },
				},
				{
					title: "Basic Freediver",
					description:
						"Become a Basic Freediver - Learn how to freedive today! \nThe SSI Basic Freediver course is your first step into the peaceful, exhilarating world of freediving. During this entry-level program, you will learn how to freedive safely with a buddy in a pool/confined water up to a depth of five meters. Online training is combined with in-water practice sessions to give you all the skills and knowledge you need to be a confident freediver. Upon completing this program, you will earn your SSI Basic Freediver certification.",
					imageSrc: "/images/courses/basic-freediving.jpg",
					tag: "Freediving basics",
					priceText: "Ask for price",
				},
			],
			contact: {
				title: "Want to start with beginner training?",
				description:
					"Tell me your level, preferred location and dates — I’ll suggest the best first steps for you.",
			},
		},
		speciality: {
			hero: {
				title: "Specialty Diving Courses",
				description:
					"Focus on specific skills and environments, and take your diving further with targeted training designed to improve control, awareness and experience underwater.",
				tags: ["Skill-focused", "Different environments"],
			},
			courses: [
				{
					title: "Dry Suit Diving",
					description:
						"Become SSI Dry Suit Diving.\nDry suit diving opens up a world of opportunities, including diving remote Arctic destinations and exploring cold-water dive sites teeming with life. Dry suit diving also keeps you warm on multi-dive days when you do not want to spend your time getting in and out of a cold wetsuit. The SSI Dry Suit Diving specialty program is the best way to become a dry suit diver and teaches you all the knowledge and techniques you need to dive safely and comfortably in a dry suit. You will learn how to use specialized equipment, like dry suits and BCs, the benefits of dry suits and how to deal with dry suit emergencies – which are unique to this type of diving. Upon completion, you will earn the SSI Dry Suit Diving specialty certification.",
					imageSrc: "/images/courses/dry-suit-diving.jpg",
					tag: "Cold water",
					price: {
						amount: 230,
						currency: "GBP",
						extras: ["dry suit rent"],
					},
				},
				{
					title: "Enriched Air Nitrox Level 1 (32%)",
					description:
						"Become SSI Nitrox diver. \nAs a Nitrox diver, you can increase your bottom times and safety margins, plus shorten your surface intervals - so you can spend more time diving and less time waiting! In this program, you will learn new skills and increase your diving knowledge whilst learning how to safely plan and dive with enriched air mixtures of up to 40% oxygen. Upon completion, you will earn an SSI Enriched Air Nitrox 32% certification.",
					imageSrc: "/images/courses/enriched-air-nitrox.jpg",
					tag: "Gas skills",
					price: { amount: 150, currency: "GBP" },
				},
				{
					title: "Enriched Air Nitrox Level 2 (40%)",
					description:
						"Become SSI Nitrox diver. \nAs a Nitrox diver, you can increase your bottom times and safety margins, plus shorten your surface intervals - so you can spend more time diving and less time waiting! In this program, you will learn new skills and increase your diving knowledge whilst learning how to safely plan and dive with enriched air mixtures of up to 40% oxygen. Upon completion, you will earn an SSI Enriched Air Nitrox 40% certification.",
					imageSrc: "/images/courses/enriched-air-nitrox.jpg",
					tag: "Gas skills",
					price: { amount: 175, currency: "GBP" },
				},
				{
					title: "Deep Diving",
					description:
						"Become an SSI Deep Diver. \nThe SSI Deep Diving Specialty will teach you all you need to dive to depths between 18 and 40 meters, through a mixture of academic sessions and open water dives. You will learn to plan and safely complete your deep diving adventures and use computers and gas consumption calculations to get the most from your deep dives. Upon completion, you will earn your SSI Deep Diving Specialty certification and be able to explore beautiful deep dive sites wherever you choose. This SSI Specialty is also a prerequisite for some advanced training, making it the next logical step to take in your dive education.",
					imageSrc: "/images/courses/deep-diving-scuba.jpg",
					tag: "Depth",
					price: { amount: 250, currency: "GBP" },
				},
				{
					title: "Perfect Buoyancy",
					description:
						"Begin your Perfect Buoyancy program today. \nThe SSI Perfect Buoyancy specialty is the best way to improve your buoyancy and get the most from every dive. Buoyancy is an essential dive skill, but any diver will tell you it takes time to perfect. The Perfect Buoyancy specialty will teach you advanced buoyancy skills and techniques, so you can master your buoyancy more quickly and enjoy more relaxed dive adventures. In this fascinating program, you will also learn new skills that protect the environment and work in every diving situation. Upon completion, you will earn the SSI Perfect Buoyancy Specialty certification. With better buoyancy skills, you will soon be able to hover with ease and take the underwater photographs you dream of!",
					imageSrc: "/images/courses/perfect-buoyancy.jpg",
					tag: "Buoyancy",
					price: { amount: 175, currency: "GBP" },
				},
				{
					title: "Navigation Diving",
					description:
						"Become an SSI Navigation Specialty Diver \nIn this specialty program, you will gain the advanced skills and knowledge you need to safely and confidently navigate underwater. \nYou will learn how to use a compass and natural navigation techniques, estimate distance, how to leave and return to a designated point, plus basic navigation patterns. You will also be taught how to combine navigation techniques to enhance your diving experience. All of which hones your underwater observation skills, improves your dive safety and helps you to get the most out of every dive. \nUpon completion, you will earn the SSI Navigation Specialty certification.",
					imageSrc: "/images/courses/navigation.jpg",
					tag: "Navigation",
					price: { amount: 175, currency: "GBP" },
				},
				{
					title: "Night Diving & Limited Visibility",
					description:
						"Become a certified Night Diving and Limited Visibility diver. \nNight diving requires different skills from diving during the day. The SSI Night Diving and Limited Visibility specialty is the best way to learn about night diving and practice the techniques you will need to become a safe and confident night diver. In this program, you will be provided with all the knowledge and skills you need to safely and comfortably dive at night or in limited visibility conditions. With a combination of online learning and open water training dives, you will learn how to enter and exit the water, use specialized equipment, and how to communicate with your buddy easily at night or in limited visibility. Upon completion, you will earn the SSI Night Diving and Limited Visibility specialty certification and be ready to go night diving with confidence.",
					imageSrc: "/images/courses/night-diving-limited-visibility.jpg",
					tag: "Low visibility",
					price: { amount: 200, currency: "GBP" },
				},
				{
					title: "Boat Diving",
					description:
						"Begin your Boat Diving program today. \nThe ocean is filled with dive sites, but many of the best ones can only be accessed by boat. If you want to discover these incredible dive sites, become an SSI boat diver. It is the best way to learn how to dive from different types of boats safely and with confidence. As a boat diver, you will be able to explore offshore dive sites that attract schooling pelagics and marine megafauna not found closer to shore. You can experience the excitement of liveaboard diving anywhere in the world, fill your day with diving away from the crowds, and cruise along as the sun goes down. Using online training and open water diving sessions, the SSI Boat Diving Specialty program is the best way to learn. This program teaches you all the skills and techniques you need to dive safely and comfortably from boats, including small personal craft and liveaboards. Earn your SSI Boat Diving Specialty certification. Get started today.",
					imageSrc: "/images/courses/boat-diving.jpg",
					tag: "Boat",
					price: { amount: 250, currency: "GBP" },
				},
				{
					title: "Wreck Diving",
					description:
						"Become a certified wreck diver \nMany of the ocean’s best dive sites are wrecks. These impressive structures attract unusually high densities of marine life and give you the chance to immerse in living history as you dive. \nThere is nothing quite like wreck diving and the SSI Wreck Diving specialty will give you all the skills and knowledge you need to become a safe and confident wreck diver. With a combination of academic and confined water sessions, you will be taught how to safely conduct non-penetration dives around wrecks and artificial reefs, up to a depth of 30 meters. \nYou will also get to practice your wreck diving skills during open water training dives. All of which will ensure you can enjoy wreck diving with confidence and get the most out of every dive. Upon completion of this program, you will earn your SSI Wreck Diving specialty certification. Continue your adventures and become a wreck diver. Get started online today!",
					imageSrc: "/images/courses/wreck-diving.jpg",
					tag: "Wreck",
					price: { amount: 175, currency: "GBP" },
				},
				{
					title: "DPV Diving",
					description:
						"Become a certified DPV diver. \nIf you want to make the most of your bottom time and have more fun on your dives, try underwater scooter or diver propulsion vehicle (DPV) diving. In this underwater scooter and DPV course, you will learn the skills and concepts you need to safely plan and conduct dives using scooters or DPVs. You will learn the special precautions needed for using DPVs, how to maintain buddy contact and how to control your equipment, so you can safely enjoy the new dive experiences DPVs provide. Upon completion of this program, you will earn the SSI DPV Diving specialty certification and be able to dive up to 30 meters deep with a scooter or DPV.",
					imageSrc: "/images/courses/dpv-diving.jpg",
					tag: "Scooter",
					price: { amount: 250, currency: "GBP", extras: ["DPV rent"] },
				},
				{
					title: "DPV Diving ( technical )",
					description:
						"Become a certified DPV diver. \nIf you want to make the most of your bottom time and have more fun on your dives, try underwater scooter or diver propulsion vehicle (DPV) diving. In this underwater scooter and DPV course, you will learn the skills and concepts you need to safely plan and conduct dives using scooters or DPVs. You will learn the special precautions needed for using DPVs, how to maintain buddy contact and how to control your equipment, so you can safely enjoy the new dive experiences DPVs provide. Upon completion of this program, you will earn the SSI DPV Diving specialty certification and be able to dive to the depth limits of your certification with a scooter or DPV.",
					imageSrc: "/images/courses/dpv-diving.jpg",
					tag: "Technical",
					price: { amount: 280, currency: "GBP", extras: ["DPV rent"] },
				},
				{
					title: "Decompression Diving",
					description:
						"Begin your Decompression Diving program today. \nThe SSI Decompression Diving Specialty will teach you how to dive beyond the no-decompression limits. You will learn to plan and conduct dives to a maximum depth of 40 meters with limited decompression using your recreational total diving system and a single decompression cylinder. You will learn and practice how to effectively use your dive computer features, including switching gases, gas integration, time-to-reserve, and time-to-surface. Using these computer functions will become second nature, enabling you to safely conduct dives with limited decompression without hours of dive planning. Upon completion, you will earn the SSI Decompression Diving Specialty certification and be able to explore stunning deep dive sites or larger wrecks without being restricted by the traditional no-decompression limits. The opportunities to expand your diving adventures have just got bigger!",
					imageSrc: "/images/courses/decompression-diving.jpg",
					tag: "Decompression",
					price: { amount: 350, currency: "GBP", extras: [] },
				},
				{
					title: "Marine Ecology",
					description:
						"Become a certified SSI Marine Ecology diver. \nIn the SSI Marine Ecology specialty program, you will learn how ocean organisms interact with each other and their environments. You will be taught how energy flows through communities and the links between different ocean ecosystems. With your newfound knowledge, you will appreciate the marine life you dive with even more! Start online today and earn your SSI Marine Ecology Specialty certification.",
					imageSrc: "/images/courses/marine-ecology.jpeg",
					tag: "Ecology",
					price: { amount: 99, currency: "GBP", extras: [] },
				},
				{
					title: "Science of Diving",
					description:
						"Become a Science of Diving Specialty diver. \nJoin the SSI Science of Diving specialty and you will develop a complete understanding of the underwater world and its effects on the human body. This specialty is required training for most SSI Professional programs, as well as some Extended Range programs, and is an essential way to expand your dive knowledge. Available online, you can earn your SSI Science of Diving specialty certification from home and get ready to begin your dive professional career. Upon completion, you will be halfway to earning the coveted SSI Divemaster rating and earn the SSI Science of Diving specialty certification.",
					imageSrc: "/images/courses/science-of-diving.jpg",
					tag: "Theory",
					price: { amount: 150, currency: "GBP", extras: [] },
				},
				{
					title: "Stress & Rescue",
					description:
						"Become an SSI Diver Stress and Rescue. \nThe SSI Diver Stress and Rescue specialty program teaches you the skills you need to protect yourself and other divers. You will learn how to identify stress, how to prevent accidents and be taught practical techniques to conduct rescues and provide emergency care. With a combination of pool and open water practice sessions, you will become well prepared and confident at handling emergency and rescue situations. Upon completion, you will earn the SSI Diver Stress and Rescue Specialty certification.",
					imageSrc: "/images/courses/stress-and-rescue.jpg",
					tag: "Safety",
					price: { amount: 450, currency: "GBP", extras: [] },
				},
				{
					title: "React Right (FA, CPR, AED, O2)",
					description:
						"Become a certified React Right Specialty diver. \nReact Right is SSI’s emergency first response course and provides you with the training and knowledge you need to act as a first responder in a medical emergency. In this flexible dive program, you can choose which subjects you want to learn about, including primary assessment, first aid, CPR and primary stabilization techniques. You can also learn about oxygen administration in diving emergencies and Automated External Defibrillator (AED) basics. Using a combination of academic sessions and practical training scenarios, this program will give you the tools and confidence you need for emergency response. By the time you are certified, you will be able to act as an emergency first responder, provide first aid and CPR, administer oxygen and provide AED support in a medical emergency. Earn your SSI React Right specialty certification. Get started today!",
					imageSrc: "/images/courses/react-right.jpeg",
					tag: "First aid",
					price: { amount: 150, currency: "GBP", extras: [] },
				},
				{
					title: "Divemaster",
					description:
						"Become a certified SSI Divemaster. \nThe SSI Divemaster course is your first step to professional training. Working closely with a SSI Instructor, you’ll fine-tune your dive skills, like perfecting the effortless hover, and refine your rescue skills so you anticipate and easily solve common problems. You’ll gain dive knowledge, management and supervision abilities so you become a role model to divers everywhere. As a SSI Divemaster, you’ll lead others as you supervise scuba diving activities and assist with diver training. SSI Divemasters are respected dive professionals who are aligned with one of the largest and most respected dive organization in the world – SSI. If you have already completed the PRO SSI DIVEGUIDE course you simply need to complete the add on SSI SCIENCE OF DIVING course . please call for information price includes all your training with us, your SSI dive guide and science of diving theory, your Pro fees are extra and will be invoiced from SSI to your app. you will also need to purchase the pro pack.",
					imageSrc: "/images/courses/divemaster.jpg",
					tag: "Professional",
					price: { amount: 600, currency: "GBP", extras: ["DM kit"] },
				},
			],
			contact: {
				title: "Interested in specialty diving training?",
				description:
					"Tell me which areas you’d like to focus on and where you plan to dive — I’ll help you choose the right courses for your goals.",
			},
		},
		technical: {
			hero: {
				title: "Technical Diving Courses",
				description:
					"Go beyond recreational limits and train advanced diving techniques for deeper, longer, and more complex dives. Focus on precision, planning, and full control in demanding environments.",
				tags: ["Advanced training", "Extended range"],
			},
			courses: [
				{
					title: "Decompression Diving",
					description:
						"Begin your Decompression Diving program today. \nThe SSI Decompression Diving Specialty will teach you how to dive beyond the no-decompression limits. You will learn to plan and conduct dives to a maximum depth of 40 meters with limited decompression using your recreational total diving system and a single decompression cylinder. You will learn and practice how to effectively use your dive computer features, including switching gases, gas integration, time-to-reserve, and time-to-surface. Using these computer functions will become second nature, enabling you to safely conduct dives with limited decompression without hours of dive planning. Upon completion, you will earn the SSI Decompression Diving Specialty certification and be able to explore stunning deep dive sites or larger wrecks without being restricted by the traditional no-decompression limits. The opportunities to expand your diving adventures have just got bigger!",
					imageSrc: "/images/courses/decompression-diving.jpg",
					tag: "Decompression",
					price: { amount: 350, currency: "GBP", extras: [] },
				},
				{
					title: "Advanced Wreck Diving",
					description:
						"Become a certified Wreck Diver with SSI. \nMany of the ocean’s best dive sites are wrecks. These impressive structures attract unusually high densities of marine life and give you the chance to immerse in living history as you dive. There is nothing quite like wreck diving and the SSI Wreck Diving specialty will give you all the skills and knowledge you need to become a safe and confident wreck diver. With a combination of academic and confined water sessions, you will be taught how to safely conduct non-penetration dives around wrecks and artificial reefs, up to a depth of 30 meters. You will also get to practice your wreck diving skills during open water training dives. All of which will ensure you can enjoy wreck diving with confidence and get the most out of every dive. Upon completion of this program, you will earn your SSI Wreck Diving specialty certification. Continue your adventures and become a wreck diver. Get started online today!",
					imageSrc: "/images/courses/advanced-wreck-diving.jpg",
					tag: "Wreck",
					price: { amount: 300, currency: "GBP", extras: [] },
				},
				{
					title: "Extended Range Nitrox Diving",
					description:
						"Train advanced nitrox procedures for deeper and longer dives beyond recreational limits. Learn precise gas planning, decompression strategies, and technical buoyancy control. This program provides divers with the training necessary to: \nindependently plan and conduct decompression dives, \nusing a full Twinset diving system or Extended Range Sidemount, \nto a maximum depth of 40 meters, \nusing decompression gases with up to 100% oxygen content, \nperforming decompression dives with a total decompression time of up to 15 minutes, \nwith a buddy holding the same or higher certification level.",
					imageSrc: "/images/courses/extended-range-nitrox-diving.jpg",
					tag: "Twin Set",
					price: { amount: 400, currency: "GBP", extras: [] },
				},
				{
					title: "Extended Range",
					description:
						"Develop the skills needed for deeper dives with planned decompression beyond recreational limits. Focus on advanced dive planning, precise buoyancy, and safe team procedures. This program provides divers with the training necessary to: \nindependently plan and conduct decompression dives, \nusing a full Twinset diving system or Extended Range Sidemount, \nto a maximum depth of 45 meters, \nusing decompression gases with up to 100% oxygen content, \nperforming decompression dives with a total decompression time of up to 25 minutes, \nwith a buddy holding the same or higher level of certification.",
					imageSrc: "/images/courses/extended-range.jpg",
					tag: "Twin Set",
					price: { amount: 550, currency: "GBP", extras: [] },
				},
				{
					title: "Extended Range Trimix",
					description:
						"Master advanced trimix techniques for deep and complex dives with planned decompression. Learn precise gas management, advanced dive planning, and safe team procedures for extreme depths. This program provides divers with the training necessary to: \nindependently plan and conduct decompression dives, \nusing a full Twinset diving system or Extended Range Sidemount, \nto a maximum depth of 45 meters, \nusing decompression gases with up to 100% oxygen content, \nperforming decompression dives with a total decompression time of up to 25 minutes, \nwith a buddy holding the same or higher level of certification, \nusing helium-based gas mixtures",
					imageSrc: "/images/courses/extended-range-trimix.jpg",
					tag: "Twin Set",
					price: { amount: 550, currency: "GBP", extras: ["gases"] },
				},
				{
					title: "DPV Diving ( technical )",
					description:
						"Become a certified DPV diver. \nIf you want to make the most of your bottom time and have more fun on your dives, try underwater scooter or diver propulsion vehicle (DPV) diving. In this underwater scooter and DPV course, you will learn the skills and concepts you need to safely plan and conduct dives using scooters or DPVs. You will learn the special precautions needed for using DPVs, how to maintain buddy contact and how to control your equipment, so you can safely enjoy the new dive experiences DPVs provide. Upon completion of this program, you will earn the SSI DPV Diving specialty certification and be able to dive to the depth limits of your certification with a scooter or DPV.",
					imageSrc: "/images/courses/dpv-diving.jpg",
					tag: "Technical",
					price: { amount: 280, currency: "GBP", extras: ["DPV rent"] },
				},
			],
			contact: {
				title: "Ready for technical diving training?",
				description:
					"Tell me about your current certifications, experience, and goals — I’ll help you choose the right technical path.",
			},
		},
		updates: {
			hero: {
				eyebrow: "UPDATES",
				title: "Trips & Updates",
				description:
					"See upcoming diving trips, training camps and the latest updates.",
				badges: [
					{ label: "Upcoming trips & highlights" },
					{ label: "Contact me", cta: true },
				],
			},
			items: [
				{
					eyebrow: "MAGAZINE",
					title: "Perfect Diver",
					description:
						"Perfect Diver is a magazine created for everyone passionate about diving and the underwater world. \nIt showcases breathtaking dive sites, from vibrant reefs to historic wrecks. \nClear and accessible articles cover equipment, techniques, and safety. \nThe magazine features interviews with experienced divers and true enthusiasts. \nEach issue is filled with inspiring underwater stories. \nHigh-quality photography brings the ocean depths closer to the reader. \nPerfect Diver is suitable for both beginners and advanced divers. \nIt delivers reliable knowledge and fresh motivation. \nA subscription ensures easy access to every issue without missing a beat. \nPerfect Diver is more than a magazine, it’s a gateway to life beneath the surface.",
					imageSrc: "/images/updates/perfect-diver.jpeg",
					imageAlt: "Perfect Diver",
					learnMoreLabel: "Learn more",
					learnMoreHref: "http://www.perfectdiver.com/",
					linkLabel: "Get in Touch",
					linkHref: "#updates-contact",
				},
				{
					eyebrow: "TRAINING",
					title: "Become a certified SSI Divemaster",
					description:
						"The Divemaster program, made up of the Dive Guide course and the Science of Diving course, is the first step on an amazing journey.",
					imageSrc: "/images/updates/divemaster.jpg",
					imageAlt: "Become a certified SSI Divemaster",
					learnMoreLabel: "Learn more",
					learnMoreHref:
						"https://www.facebook.com/events/1358191985805430/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A700652009368202%7D%7D]%22%7D",
					linkLabel: "Check availability",
					linkHref: "#updates-contact",
				},
				{
					eyebrow: "COURSES",
					title: "Dive with Us",
					description:
						"Diving courses at all levels and recreational dives, packages, and accommodation options.",
					imageSrc: "/images/updates/dive-with-us.jpg",
					imageAlt: "Dive with Us",
					linkLabel: "Check availability",
					linkHref: "#updates-contact",
				},
				{
					eyebrow: "COURSES",
					title: "Freediving Basics",
					description:
						"This course is the first step into freediving. You will learn safe breath-hold diving techniques and efficient finning methods. During in-water sessions, you will dive to depths of up to 5 meters.",
					imageSrc: "/images/updates/freediving-basics.jpg",
					imageAlt: "Freediving Basics",
					learnMoreLabel: "Learn more",
					learnMoreHref:
						"https://scubaelite.pl/free/basic-freediver-podstawy-nurkowania-swobodnego/",
					linkLabel: "Check availability",
					linkHref: "#updates-contact",
				},
			],
			contact: {
				sectionId: "updates-contact",
				title: "Want to join a trip or workshop?",
				description:
					"Tell me your level, preferred location and dates — I’ll share the next steps.",
			},
		},
		footer: {
			rights: "All rights reserved.",
		},
		prices: {
			hero: {
				eyebrow: "PRICES",
				title: "Diving Courses",
				description:
					"See our scuba diving courses along with their prices and any additional costs.",
				badges: [
					"The prices listed below are indicative only and are provided for informational purposes.",
					"Contact me for course details",
				],
			},
			table: {
				course: "Course",
				price: "Price",
				extras: "Extras",
			},
			groups: [
				{
					title: "Beginner",
					items: [
						{
							title: "Try Dive",
							price: { amount: 75, currency: "GBP" },
							extras: ["Pool only"],
						},
						{
							title: "Open Water Diver referral",
							price: { amount: 350, currency: "GBP" },
							extras: ["Academics & Pool only"],
						},
						{
							title: "Open Water Diver - full",
							price: { amount: 550, currency: "GBP" },
						},
						{
							title: "Open Water Diver plus Dry Suit",
							price: { amount: 700, currency: "GBP" },
							extras: ["Dry suit rent"],
						},
						{
							title: "Scuba Skills Update",
							price: { amount: 95, currency: "GBP" },
							extras: [],
						},
					],
				},
				{
					title: "Speciality",
					items: [
						{
							title: "Advanced Open Water Diver",
							price: { amount: 395, currency: "GBP" },
						},
						{
							title: "Dry Suit Diving",
							price: { amount: 230, currency: "GBP" },
							extras: ["Dry suit rent"],
						},
						{
							title: "Perfect Buoyancy",
							price: { amount: 175, currency: "GBP" },
						},
						{
							title: "Enriched Air Nitrox Level 1 (32%)",
							price: { amount: 150, currency: "GBP" },
						},
						{
							title: "Enriched Air Nitrox Level 2 (40%)",
							price: { amount: 175, currency: "GBP" },
						},
						{ title: "Boat Diving", price: { amount: 250, currency: "GBP" } },
						{
							title: "Wreck Diving",
							price: { amount: 175, currency: "GBP" },
						},
						{
							title: "Advanced Wreck Diving",
							price: { amount: 300, currency: "GBP" },
						},
						{
							title: "Night Diving & Limited Visibility",
							price: { amount: 200, currency: "GBP" },
						},
						{
							title: "Deep Diving",
							price: { amount: 250, currency: "GBP" },
						},
						{
							title: "Decompression Diving",
							price: { amount: 350, currency: "GBP" },
						},
						{
							title: "DPV Diving",
							price: { amount: 250, currency: "GBP" },
							extras: ["DPV rent"],
						},
						{
							title: "DPV Diving ( technical )",
							price: { amount: 280, currency: "GBP" },
							extras: ["DPV rent"],
						},
						{
							title: "React Right (FA, CPR, AED, O2)",
							price: { amount: 150, currency: "GBP" },
						},
						{
							title: "Stress & Rescue",
							price: { amount: 450, currency: "GBP" },
						},
						{
							title: "Science of Diving",
							price: { amount: 150, currency: "GBP" },
						},
						{
							title: "Navigation Diving",
							price: { amount: 175, currency: "GBP" },
						},
						{
							title: "Marine Ecology",
							price: { amount: 99, currency: "GBP" },
						},
					],
				},
				{
					title: "Professional",
					items: [
						{
							title: "Divemaster",
							price: { amount: 600, currency: "GBP" },
							extras: ["DM kit"],
						},
						{
							title:
								"Divemaster bundle – dive guide + react right + science of diving",
							price: { amount: 900, currency: "GBP" },
							extras: ["DM kit"],
						},
					],
				},
				{
					title: "Technical",
					items: [
						{
							title: "Decompression Diving",
							price: { amount: 350, currency: "GBP" },
						},
						{
							title: "Intro Tec Diving",
							price: { amount: 80, currency: "GBP" },
						},
						{
							title: "Extended Range Nitrox Diving (twin set)",
							price: { amount: 400, currency: "GBP" },
						},
						{
							title: "Extended Range (twin set)",
							price: { amount: 550, currency: "GBP" },
						},
						{
							title: "Extended Range Trimix (twin set)",
							price: { amount: 550, currency: "GBP" },
							extras: ["gases"],
						},
						{
							title: "DPV Diving ( technical )",
							price: { amount: 280, currency: "GBP" },
							extras: ["DPV rent"],
						},
					],
				},
			],
			contact: {
				title: "Have questions about prices?",
				description:
					"Tell me your level, preferred location and dates — I’ll suggest the best course and the exact cost.",
			},
		},
	},
	pl: {
		common: {
			locations: "Wielka Brytania · Lanzarote · Polska",
			breadcrumbHome: "Strona główna",
			responseTime: "Zwykle odpowiadam w ciągu 24–48 h",
			emailLabel: "Napisz do mnie",
			menuOpenLabel: "Otwórz menu",
			menuCloseLabel: "Zamknij menu",
			languageLabel: "Język",
			social: [
				{ key: "instagram", label: "Instagram" },
				{ key: "facebook", label: "Facebook" },
			],
			legalDisclaimer:
				"Informacje zamieszczone na stronie mają charakter informacyjny i nie stanowią oferty w rozumieniu Kodeksu cywilnego ani potwierdzenia prowadzenia działalności gospodarczej",
			cookieBanner: {
				title: "Pliki cookie",
				description:
					"Używamy plików cookie, aby ulepszać stronę i mierzyć ruch. Możesz zaakceptować lub odrzucić cookies analityczne.",
				learnMorePrefix: "Więcej informacji znajdziesz w",
				privacyPolicyLabel: "Polityka prywatności",
				cookiePolicyLabel: "Polityka cookies",
				conjunctionLabel: "oraz",
				acceptLabel: "Akceptuj",
				rejectLabel: "Odrzuć",
			},
			legalLinks: [
				{
					key: "privacyPolicy",
					label: "Polityka prywatności",
					href: "/privacy-policy",
				},
				{
					key: "cookiePolicy",
					label: "Polityka cookies",
					href: "/cookie-policy",
				},
			],
			cookiePolicy: {
				title: "POLITYKA COOKIES",
				sections: [
					{
						heading: "Polityka cookies",
						paragraphs: [
							"Strona internetowa wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania oraz do celów statystycznych.",
						],
					},
					{
						heading: "1. Czym są pliki cookies",
						paragraphs: [
							"Pliki cookies to niewielkie pliki tekstowe zapisywane na urządzeniu użytkownika podczas korzystania ze Strony.",
						],
					},
					{
						heading: "2. Rodzaje plików cookies używanych na Stronie",
						paragraphs: ["Strona wykorzystuje:"],
						list: [
							"niezbędne pliki cookies – wymagane do prawidłowego działania Strony,",
							"analityczne pliki cookies – służące do zbierania danych statystycznych (Google Analytics).",
						],
					},
					{
						heading: "3. Analityczne pliki cookies",
						paragraphs: [
							"Analityczne pliki cookies są wykorzystywane wyłącznie po uzyskaniu zgody użytkownika.",
							"Są one wykorzystywane do:",
						],
						list: [
							"analizy ruchu na Stronie,",
							"poprawy jakości treści oraz działania Strony.",
						],
					},
					{
						heading: "4. Zarządzanie plikami cookies",
						paragraphs: ["Użytkownik może:"],
						list: [
							"zaakceptować analityczne pliki cookies,",
							"odrzucić analityczne pliki cookies,",
							"cofnąć zgodę w dowolnym momencie poprzez usunięcie plików cookies lub zmianę ustawień przeglądarki.",
						],
					},
					{
						heading: "5. Zmiany w polityce cookies",
						paragraphs: [
							"Niniejsza Polityka cookies może być aktualizowana w razie potrzeby.",
						],
					},
				],
			},

			privacyPolicy: {
				title: "POLITYKA PRYWATNOŚCI",
				sections: [
					{
						heading: "Polityka prywatności",
						paragraphs: [
							"(data obowiązywania: 3 lutego 2026)",
							"Niniejsza Polityka prywatności wyjaśnia zasady przetwarzania danych osobowych na tej stronie internetowej.",
						],
					},
					{
						heading: "1. Administrator danych",
						paragraphs: [
							"Administratorem danych osobowych jest:",
							"Mariusz Ciupa",
							"Email: mariuszciupa1969@gmail.com",
						],
					},
					{
						heading: "2. Zakres przetwarzanych danych",
						paragraphs: [
							"Strona nie posiada formularzy kontaktowych i nie zbiera danych bezpośrednio od użytkowników.",
							"Podczas korzystania ze Strony mogą być przetwarzane następujące dane:",
						],
						list: [
							"adres IP (w formie zanonimizowanej),",
							"dane statystyczne dotyczące wizyt (np. liczba wizyt, typ urządzenia, przeglądarka),",
							"dane dotyczące sposobu korzystania ze Strony (np. odwiedzane podstrony).",
						],
					},
					{
						heading: "3. Cel przetwarzania danych",
						paragraphs: ["Dane osobowe są przetwarzane w celu:"],
						list: [
							"prowadzenia statystyk odwiedzin,",
							"poprawy funkcjonowania Strony,",
							"analizy sposobu korzystania z treści.",
						],
					},
					{
						heading: "4. Podstawa prawna",
						paragraphs: ["Dane osobowe są przetwarzane na podstawie:"],
						list: [
							"zgody użytkownika (art. 6 ust. 1 lit. a RODO) – w zakresie analitycznych plików cookies.",
						],
					},
					{
						heading: "5. Narzędzie analityczne",
						paragraphs: [
							"Strona wykorzystuje: Google Analytics (Google LLC).",
							"Google Analytics używa plików cookies do analizy ruchu na Stronie.",
							"Adresy IP są anonimizowane przed przetwarzaniem.",
							"Dane mogą być przekazywane na serwery Google poza Unią Europejską (np. do USA) na podstawie odpowiednich zabezpieczeń zgodnych z RODO (takich jak standardowe klauzule umowne).",
						],
					},
					{
						heading: "6. Okres przechowywania danych",
						paragraphs: [
							"Dane statystyczne są przechowywane zgodnie z ustawieniami Google Analytics lub do momentu cofnięcia zgody przez użytkownika.",
						],
					},
					{
						heading: "7. Prawa użytkownika",
						paragraphs: ["Użytkownik ma prawo do:"],
						list: [
							"dostępu do swoich danych,",
							"ich sprostowania,",
							"ich usunięcia,",
							"ograniczenia przetwarzania,",
							"cofnięcia zgody w dowolnym momencie,",
							"wniesienia skargi do organu nadzorczego ds. ochrony danych osobowych.",
						],
					},
					{
						heading: "8. Cofnięcie zgody",
						paragraphs: [
							"Użytkownik może w każdej chwili cofnąć zgodę poprzez usunięcie plików cookies w przeglądarce lub zmianę ustawień przeglądarki.",
						],
					},
					{
						heading: "9. Zmiany w polityce prywatności",
						paragraphs: [
							"Niniejsza Polityka prywatności może być aktualizowana w razie potrzeby.",
						],
					},
				],
			},
		},
		header: {
			nav: {
				courses: "Kursy",
				prices: "Cennik",
				updates: "Aktualności",
				about: "O mnie",
				contact: "Kontakt",
			},
			ctaLabel: "Zarezerwuj / Zapytaj",
		},
		home: {
			hero: {
				titlePrimary: "Mariusz",
				titleAccent: "Ciupa",
				subtitle:
					"Trening nurkowy od pierwszego zanurzenia po zaawansowane kursy techniczne oraz freediving.",
				ctaPrimary: "Zobacz kursy",
				ctaSecondary: "Skontaktuj się",
				imageAlt: "Szkolenie nurkowe",
				captionEyebrow: "Szkolenie oparte na bezpieczeństwie",
				captionTitle: "Spokój. Klarowność. Pewność.",
			},
			quote: {
				lines: [
					"„Bezpieczeństwo pod wodą rodzi się na powierzchni — w przygotowaniu, wiedzy i szacunku do własnych granic.",
					"Dopiero wtedy każde nurkowanie staje się prawdziwą wolnością.”",
				],
			},
			courses: {
				eyebrow: "KURSY",
				title: "Kursy nurkowe",
				description:
					"Wybierz poziom i rozwijaj się krok po kroku — od pierwszego certyfikatu po szkolenia techniczne.",
				ctaLabel: "Zapytaj o dostępność",
				swipeHint: "Przesuń, aby zobaczyć →",
				exploreLabel: "Zobacz →",
				cards: [
					{
						title: "Początkujący",
						desc: "Zacznij od zera. Naucz się podstaw, zbuduj pewność i zdobądź certyfikat.",
						tag: "Idealny start",
						imageSrc: "/images/courses-beginner.jpg",
						link: "/beginner",
					},
					{
						title: "Specjalizacje",
						desc: "Rozwijaj umiejętności na kursach takich jak pływalność, nawigacja czy nurkowanie nocne.",
						tag: "Buduj doświadczenie",
						imageSrc: "/images/courses-speciality.jpg",
						link: "/speciality",
					},
					{
						title: "Techniczne",
						desc: "Zaawansowane szkolenia do głębszych nurkowań, procedur i poważnego planowania.",
						tag: "Przekrocz granice",
						imageSrc: "/images/courses-technical.jpg",
						link: "/technical",
					},
				],
			},
			about: {
				eyebrow: "O MNIE",
				title: "Cześć, jestem Mariusz",
				paragraphs: [
					"Pomagam nurkom rozwijać umiejętności w spokojny i uporządkowany sposób — z dużym naciskiem na bezpieczeństwo, dobre nawyki i pewność pod wodą.",
					"Niezależnie od tego, czy zaczynasz od zera, czy wchodzisz w szkolenia techniczne, dobierzemy właściwą ścieżkę i tempo.",
				],
				highlights: [
					"10+ lat doświadczenia",
					"SSI PRO XR",
					"Nurkowanie techniczne i rekreacyjne",
					"Europa i Wyspy Kanaryjskie",
				],
				imageAlt: "Mariusz Ciupa",
				imageCaptionEyebrow: "O instruktorze",
				imageCaptionTitle: "Doświadczenie, któremu możesz zaufać",
				locationTitle: "Gdzie szkolę",
				locationDescription:
					"Współpracuję z wybranymi centrami nurkowymi w Wielkiej Brytanii, na Lanzarote i w Polsce — możesz szkolić się w różnych warunkach, zachowując ciągłość i zaufane wsparcie.",
				locations: ["Wielka Brytania", "Lanzarote", "Polska"],
				partnerLogos: [
					{
						src: "/images/logo-bonito.png",
						alt: "Bonito Diving Lanzarote",
						link: "https://bonitodivinglanzarote.biz.pl/divecenter/",
					},
					{
						src: "/images/logo-scuba-tech.png",
						alt: "Scuba Tech",
						link: "https://www.scuba-tech.co.uk/",
					},
					{
						src: "/images/logo-scubaelite.png",
						alt: "Scuba Elite",
						link: "https://scubaelite.pl/",
					},
				],
				ctaLabel: "Skontaktuj się",
			},
			contact: {
				title: "Gotowy, aby rozpocząć swoją nurkową przygodę?",
				description:
					"Podaj poziom, preferowaną lokalizację i terminy — zaproponuję najlepszy kurs i dalsze kroki.",
			},
		},
		courses: {
			card: {
				readMore: "Czytaj więcej",
				showLess: "Pokaż mniej",
				ctaLabel: "Zapytaj o dostępność",
				defaultTag: "Kurs",
				priceLabel: "Cena",
				extrasLabel: "Dodatkowo:",
			},
		},
		beginner: {
			hero: {
				title: "Kursy nurkowe dla początkujących",
				description:
					"Zacznij od zera, ucz się krok po kroku i buduj spokojne, pewne umiejętności nurkowe z naciskiem na bezpieczeństwo.",
				tags: ["Nie wymaga doświadczenia", "Małe grupy"],
			},
			courses: [
				{
					title: "Try Scuba",
					description:
						"Pierwsze, prowadzone doświadczenie pod wodą. Idealne, jeśli chcesz spróbować nurkowania, zanim zdecydujesz się na pełny kurs certyfikacyjny.",
					imageSrc: "/images/courses/try-scuba.jpg",
					tag: "Wprowadzenie",
					price: { amount: 75, currency: "GBP", extras: ["tylko basen"] },
				},
				{
					title: "SSI Open Water Diver",
					description:
						"Zostań certyfikowanym nurkiem Open Water Diver SSI. \nTen uznawany na całym świecie program certyfikacyjny to najlepszy sposób, aby rozpocząć swoją przygodę z nurkowaniem jako certyfikowany nurek. Spersonalizowane szkolenie połączone jest z praktycznymi zajęciami w wodzie, aby zapewnić Ci umiejętności i doświadczenie niezbędne do swobodnego poruszania się pod wodą. Po ukończeniu szkolenia otrzymasz certyfikat SSI Open Water Diver.",
					imageSrc: "/images/courses/open-water.jpg",
					tag: "Certyfikacja",
					price: { amount: 550, currency: "GBP" },
				},
				{
					title: "Advanced Open Water Diver",
					description:
						"Jeśli nie możesz zdecydować, która specjalizacja jest dla Ciebie najlepszym wyborem, zapisz się na program SSI Advanced Open Water Diver! Zrealizujesz nurkowania z zakresu specjalizacji Deep Diving i Navigation oraz 3 innych spośród wybranych specjalizacji, zanim zdecydujesz się na realizację pełnej specjalizacji. Jest to świetny sposób, aby doświadczyć, na czym polega zaawansowane szkolenie nurkowe i jak cennym dodatkiem do Twoich przygód nurkowych może być. \nPodczas programu Advanced Open Water Diver doświadczysz 5 różnych specjalizacji, wykonując po jednym nurkowaniu szkoleniowym na wodach otwartych dla każdej specjalizacji po kompleksowym briefingu z Instruktorem SSI. Biorąc udział w tym programie będziesz miał całkowitą swobodę. Możesz ukończyć pełne specjalizacje w dowolnym momencie w przyszłości i zaliczyć swoje nurkowania z kursu Advanced Open Water Diver na ich poczet.",
					imageSrc: "/images/courses/advanced-open-water.jpg",
					tag: "Kolejny krok",
					price: { amount: 395, currency: "GBP" },
				},
				{
					title: "Scuba Skills Update",
					description:
						"Kontynuuj swoją nurkową przygodę dzięki Scuba Skills Update. \nŁatwo stracić wprawę i pewność siebie, gdy przez dłuższy czas nie nurkujesz. Dzięki programowi SSI Scuba Skills Update szybko wrócimy z Tobą do wody i sprawimy, że znów będziesz nurkować z łatwością. Ten kurs odświeżający pozwala powtórzyć i przećwiczyć umiejętności nurkowe, których nauczyłeś/aś się podczas kursu Open Water Diver, pod okiem profesjonalisty SSI. To doskonały kurs przed wyjazdem nurkowym, abyś spędzał/a mniej czasu martwiąc się o swoje umiejętności, a więcej na podziwianiu życia morskiego. Jeśli jesteś kursantem Open Water Diver bez certyfikatu, Scuba Skills Update jest idealnym rozwiązaniem do przećwiczenia umiejętności przed nurkowaniami szkoleniowymi na wodach otwartych. Bez sztywno określonego czasu trwania kursu możesz poświęcić tyle czasu, ile potrzebujesz, i skupić się na umiejętnościach, które wymagają poprawy.",
					imageSrc: "/images/courses/scuba-skills-update.jpg",
					tag: "Odświeżenie",
					price: { amount: 95, currency: "GBP" },
				},
				{
					title: "Basic Freediver",
					description:
						"Zostań podstawowym freediverem – naucz się freedivingu już dziś! \nKurs SSI Basic Freediver to Twój pierwszy krok do spokojnego i ekscytującego świata freedivingu. W trakcie tego programu na poziomie podstawowym nauczysz się bezpiecznie nurkować na bezdechu z partnerem w basenie lub w wodach ograniczonych, na głębokość do pięciu metrów. Szkolenie online jest połączone z zajęciami praktycznymi w wodzie, aby zapewnić Ci wszystkie umiejętności i wiedzę potrzebne do tego, by zostać pewnym siebie freediverem. Po ukończeniu programu otrzymasz certyfikat SSI Basic Freediver.",
					imageSrc: "/images/courses/basic-freediving.jpg",
					tag: "Podstawy freedivingu",
					priceText: "Zapytaj o cenę",
				},
			],
			contact: {
				title: "Chcesz zacząć od kursów dla początkujących?",
				description:
					"Powiedz mi, jaki masz poziom, preferowaną lokalizację i terminy — zaproponuję najlepsze pierwsze kroki.",
			},
		},
		speciality: {
			hero: {
				title: "Specialty Diving Courses",
				description:
					"Skup się na konkretnych umiejętnościach i środowiskach oraz rozwijaj swoje nurkowanie dzięki ukierunkowanemu szkoleniu, zaprojektowanemu tak, aby poprawić kontrolę, świadomość i doświadczenie pod wodą.",
				tags: ["Rozwój umiejętności", "Różnorodne środowiska"],
			},
			courses: [
				{
					title: "Dry Suit Diving",
					description:
						"Zostań nurkiem w suchym skafandrze SSI. \nNurkowanie w suchym skafandrze otwiera świat nowych możliwości, w tym nurkowanie w odległych arktycznych rejonach oraz eksplorowanie zimnowodnych miejsc nurkowych tętniących życiem. Pozwala też zachować ciepło podczas dni z wieloma nurkowaniami, kiedy nie chcesz tracić czasu na ciągłe zakładanie i zdejmowanie zimnej pianki. Specjalistyczny program SSI Dry Suit Diving to najlepszy sposób, aby zostać nurkiem w suchym skafandrze. Uczy on całej wiedzy i technik potrzebnych do bezpiecznego i komfortowego nurkowania w suchym skafandrze. Nauczysz się korzystać ze specjalistycznego sprzętu, takiego jak suche skafandry i kamizelki wypornościowe (BCD), poznasz zalety suchego skafandra oraz dowiesz się, jak radzić sobie w sytuacjach awaryjnych charakterystycznych dla tego typu nurkowania. Po ukończeniu szkolenia otrzymasz certyfikat specjalistyczny SSI Dry Suit Diving.",
					imageSrc: "/images/courses/dry-suit-diving.jpg",
					tag: "Zimna woda",
					price: {
						amount: 230,
						currency: "GBP",
						extras: ["wypożyczenie suchego skafandra"],
					},
				},
				{
					title: "Enriched Air Nitrox Level 1 (32%)",
					description:
						"Zostań nurkiem SSI Nitrox. \nJako nurek Nitrox możesz wydłużyć czas przebywania na dnie oraz zwiększyć marginesy bezpieczeństwa, a także skrócić przerwy powierzchniowe – dzięki czemu możesz spędzać więcej czasu na nurkowaniu, a mniej na czekaniu! W trakcie tego programu nauczysz się nowych umiejętności i poszerzysz swoją wiedzę nurkową, ucząc się, jak bezpiecznie planować nurkowania oraz nurkować z użyciem wzbogaconych mieszanek powietrza zawierających do 40% tlenu. Po ukończeniu szkolenia otrzymasz certyfikat SSI Enriched Air Nitrox 32%.",
					imageSrc: "/images/courses/enriched-air-nitrox.jpg",
					tag: "Umiejętności gazowe",
					price: { amount: 150, currency: "GBP" },
				},
				{
					title: "Enriched Air Nitrox Level 2 (40%)",
					description:
						"Zostań nurkiem SSI Nitrox. \nJako nurek Nitrox możesz wydłużyć czas przebywania na dnie oraz zwiększyć marginesy bezpieczeństwa, a także skrócić przerwy powierzchniowe – dzięki czemu możesz spędzać więcej czasu na nurkowaniu, a mniej na czekaniu! W trakcie tego programu nauczysz się nowych umiejętności i poszerzysz swoją wiedzę nurkową, ucząc się, jak bezpiecznie planować nurkowania oraz nurkować z użyciem wzbogaconych mieszanek powietrza zawierających do 40% tlenu. Po ukończeniu szkolenia otrzymasz certyfikat SSI Enriched Air Nitrox 40%.",
					imageSrc: "/images/courses/enriched-air-nitrox.jpg",
					tag: "Umiejętności gazowe",
					price: { amount: 175, currency: "GBP" },
				},
				{
					title: "Deep Diving",
					description:
						"Zostań nurkiem SSI Deep Diver. \nSpecjalizacja SSI Deep Diving nauczy Cię wszystkiego, czego potrzebujesz, aby nurkować na głębokościach od 18 do 40 metrów, poprzez połączenie zajęć teoretycznych oraz nurkowań w wodach otwartych. Nauczysz się planować oraz bezpiecznie realizować nurkowania głębokie, a także korzystać z komputerów nurkowych i obliczeń zużycia gazu, aby w pełni wykorzystać swoje nurkowania głębokie. Po ukończeniu szkolenia otrzymasz certyfikat specjalistyczny SSI Deep Diving Specialty i będziesz mógł/mogła eksplorować piękne, głębokie miejsca nurkowe, gdziekolwiek zechcesz. Ta specjalizacja SSI jest również wymagana wstępnie do niektórych szkoleń zaawansowanych, co czyni ją kolejnym logicznym krokiem w Twojej edukacji nurkowej.",
					imageSrc: "/images/courses/deep-diving-scuba.jpg",
					tag: "Głębokość",
					price: { amount: 250, currency: "GBP" },
				},
				{
					title: "Perfect Buoyancy",
					description:
						"Rozpocznij swój program Perfect Buoyancy już dziś. \nSpecjalizacja SSI Perfect Buoyancy to najlepszy sposób na poprawę pływalności i czerpanie maksimum z każdego nurkowania. Pływalność jest jedną z kluczowych umiejętności nurkowych, jednak każdy nurek powie, że jej opanowanie wymaga czasu. Specjalizacja Perfect Buoyancy nauczy Cię zaawansowanych umiejętności i technik kontroli pływalności, dzięki czemu szybciej opanujesz tę umiejętność i będziesz cieszyć się bardziej relaksującymi nurkowaniami. W tym fascynującym programie nauczysz się także nowych umiejętności, które chronią środowisko i sprawdzają się w każdej sytuacji nurkowej. Po ukończeniu szkolenia otrzymasz certyfikat specjalistyczny SSI Perfect Buoyancy Specialty. Dzięki lepszej kontroli pływalności wkrótce będziesz w stanie swobodnie zawisać w wodzie i wykonywać podwodne zdjęcia, o jakich marzysz!",
					imageSrc: "/images/courses/perfect-buoyancy.jpg",
					tag: "Pływalność",
					price: { amount: 175, currency: "GBP" },
				},
				{
					title: "Navigation Diving",
					description:
						"Zostań certyfikowanym nurkiem SSI Navigation \nNa tej specjalizacji zdobędziesz zaawansowane umiejętności i wiedzę potrzebne do bezpiecznej i pewnej podwodnej nawigacji. Nauczysz się używać kompasu nurkowego, technik nawigacji naturalnej, szacowania dystansu, jak odpłynąć i wrócić do wyznaczonego miejsca oraz podstawowych wzorów nawigowania. Dowiesz się też jak łączyć techniki nawigacyjne, by zwiększyć przyjemność ze swoich doświadczeń nurkowych. Polepszy to Twoją zdolność skutecznej obserwacji pod wodą, zwiększy bezpieczeństwo Twoich nurkowań i pozwoli Ci w pełni cieszyć się Twoimi nurkowaniami. Po ukończeniu kursu otrzymasz certyfikat specjalizacji SSI Navigation.",
					imageSrc: "/images/courses/navigation.jpg",
					tag: "Nawigacja",
					price: { amount: 175, currency: "GBP" },
				},
				{
					title: "Night Diving & Limited Visibility",
					description:
						"Zostań certyfikowanym nurkiem nocnym oraz nurkiem w warunkach ograniczonej widoczności. \nNurkowanie nocne wymaga innych umiejętności niż nurkowanie w ciągu dnia. Specjalizacja SSI Night Diving and Limited Visibility to najlepszy sposób, aby nauczyć się nurkowania nocnego i przećwiczyć techniki potrzebne do bezpiecznego i pewnego nurkowania po zmroku. W tym programie otrzymasz całą wiedzę oraz umiejętności niezbędne do bezpiecznego i komfortowego nurkowania w nocy lub w warunkach ograniczonej widoczności. Dzięki połączeniu nauki online oraz nurkowań szkoleniowych w wodach otwartych nauczysz się, jak wchodzić do wody i z niej wychodzić, jak korzystać ze specjalistycznego sprzętu oraz jak łatwo komunikować się z partnerem nurkowym w nocy lub przy ograniczonej widoczności. Po ukończeniu szkolenia otrzymasz certyfikat specjalistyczny SSI Night Diving and Limited Visibility i będziesz gotowy/gotowa do nurkowania nocnego z pełną pewnością.",
					imageSrc: "/images/courses/night-diving-limited-visibility.jpg",
					tag: "Niska widoczność",
					price: { amount: 200, currency: "GBP" },
				},
				{
					title: "Boat Diving",
					description:
						"Rozpocznij swój program Boat Diving już dziś. \nOcean jest pełen miejsc nurkowych, jednak do wielu z najlepszych można dotrzeć wyłącznie łodzią. Jeśli chcesz odkrywać te niesamowite miejsca nurkowe, zostań nurkiem SSI Boat Diver. To najlepszy sposób, aby nauczyć się bezpiecznego i pewnego nurkowania z różnych typów łodzi. Jako nurek łodziowy będziesz mógł/mogła eksplorować oddalone od brzegu miejsca nurkowe, które przyciągają ławice ryb pelagicznych oraz duże zwierzęta morskie, niespotykane bliżej lądu. Możesz doświadczyć ekscytujących wypraw typu liveaboard w dowolnym miejscu na świecie, spędzać całe dni na nurkowaniu z dala od tłumów oraz podziwiać zachód słońca podczas rejsu. Dzięki połączeniu nauki online oraz nurkowań szkoleniowych w wodach otwartych program SSI Boat Diving Specialty jest najlepszym sposobem nauki. Program ten uczy wszystkich umiejętności i technik potrzebnych do bezpiecznego i komfortowego nurkowania z łodzi, w tym z małych jednostek pływających oraz łodzi typu liveaboard. Zdobądź certyfikat SSI Boat Diving Specialty. Rozpocznij już dziś.",
					imageSrc: "/images/courses/boat-diving.jpg",
					tag: "Łódź",
					price: { amount: 250, currency: "GBP" },
				},
				{
					title: "Wreck Diving",
					description:
						"Zostań certyfikowanym nurkiem wrakowym \nWiele spośród najlepszych światowych miejsc nurkowych to wraki. Te imponujące konstrukcje skupiają niespotykanie duże ilości życia morskiego i pozwalają zanurzyć się w historii podczas nurkowania. Nie ma drugiej podobnej rzeczy do nurkowania wrakowego, a specjalizacja SSI Wreck Diving da ci wszystkie potrzebne umiejętności i wiedzę, by zostać kompetentnym i bezpiecznym nurkiem wrakowym. Dzięki połączeniu sesji teoretycznych i w wodach basenopodobnych nauczysz się bezpiecznie nurkować nad i dookoła wraków bez penetracji do głębokości 30 metrów. Poćwiczysz też nowo nabyte umiejętności podczas nurkowań na wodach otwartych. To wszystko da Ci pewność, że w przyszłości będziesz cieszył się nurkowaniami wrakowymi przeprowadzonymi pewnie i bezpiecznie. Po ukończeniu kursu otrzymasz certyfikat specjalizacji SSI Wreck Diving. Kontynuuj swoją przygodę i zostań nurkiem wrakowym. Zacznij online już dziś!",
					imageSrc: "/images/courses/wreck-diving.jpg",
					tag: "Wrak",
					price: { amount: 175, currency: "GBP" },
				},
				{
					title: "DPV Diving",
					description:
						"Zostań certyfikowanym nurkiem DPV. \nJeśli chcesz maksymalnie wykorzystać czas spędzony na dnie i czerpać jeszcze więcej radości z nurkowań, spróbuj nurkowania ze skuterem podwodnym, czyli pojazdem napędowym dla nurków (DPV – Diver Propulsion Vehicle). Podczas tego kursu nurkowania ze skuterem podwodnym i DPV nauczysz się umiejętności oraz zasad niezbędnych do bezpiecznego planowania i wykonywania nurkowań z użyciem skuterów lub DPV. Poznasz szczególne środki ostrożności związane z używaniem DPV, nauczysz się utrzymywać kontakt z partnerem nurkowym oraz kontrolować swój sprzęt, aby móc bezpiecznie cieszyć się nowymi doświadczeniami nurkowymi, jakie oferują DPV. Po ukończeniu programu otrzymasz certyfikat specjalistyczny SSI DPV Diving Specialty i będziesz mógł/mogła nurkować ze skuterem lub DPV do głębokości 30 metrów.",
					imageSrc: "/images/courses/dpv-diving.jpg",
					tag: "Skuter",
					price: {
						amount: 250,
						currency: "GBP",
						extras: ["wypożyczenie DPV"],
					},
				},
				{
					title: "DPV Diving ( technical )",
					description:
						"Zostań certyfikowanym nurkiem DPV. \nJeśli chcesz maksymalnie wykorzystać czas spędzony na dnie i czerpać jeszcze więcej radości z nurkowań, spróbuj nurkowania ze skuterem podwodnym, czyli pojazdem napędowym dla nurków (DPV – Diver Propulsion Vehicle). Podczas tego kursu nurkowania ze skuterem podwodnym i DPV nauczysz się umiejętności oraz zasad niezbędnych do bezpiecznego planowania i wykonywania nurkowań z użyciem skuterów lub DPV. Poznasz szczególne środki ostrożności związane z używaniem DPV, nauczysz się utrzymywać kontakt z partnerem nurkowym oraz kontrolować swój sprzęt, aby móc bezpiecznie cieszyć się nowymi doświadczeniami nurkowymi, jakie oferują DPV. Po ukończeniu programu otrzymasz certyfikat specjalistyczny SSI DPV Diving Specialty i będziesz mógł/mogła nurkować ze skuterem lub DPV do głębokości równej limitom Twoich uprawnień",
					imageSrc: "/images/courses/dpv-diving.jpg",
					tag: "Techniczny",
					price: {
						amount: 280,
						currency: "GBP",
						extras: ["wypożyczenie DPV"],
					},
				},
				{
					title: "Decompression Diving",
					description:
						"Rozpocznij swój program Decompression Diving już dziś. \nSpecjalizacja SSI Decompression Diving nauczy Cię nurkowania poza limitami bezdekompresyjnymi. Nauczysz się planować i wykonywać nurkowania do maksymalnej głębokości 40 metrów z ograniczoną dekompresją, wykorzystując swój rekreacyjny system nurkowy oraz jedną butlę dekompresyjną. Nauczysz się również efektywnie korzystać z funkcji komputera nurkowego, w tym przełączania gazów, integracji gazu, czasu do rezerwy oraz czasu do wynurzenia. Obsługa tych funkcji stanie się dla Ciebie naturalna, co pozwoli bezpiecznie realizować nurkowania z ograniczoną dekompresją bez konieczności wielogodzinnego planowania nurkowań. Po ukończeniu szkolenia otrzymasz certyfikat specjalistyczny SSI Decompression Diving Specialty i będziesz mógł/mogła eksplorować imponujące głębokie miejsca nurkowe lub większe wraki bez ograniczeń wynikających z tradycyjnych limitów bezdekompresyjnych. Możliwości rozwoju Twoich nurkowych przygód właśnie się zwiększyły!",
					imageSrc: "/images/courses/decompression-diving.jpg",
					tag: "Dekompresja",
					price: { amount: 350, currency: "GBP", extras: [] },
				},
				{
					title: "Marine Ecology",
					description:
						"Zostań certyfikowanym nurkiem SSI Marine Ecology. \nW specjalistycznym programie SSI Marine Ecology nauczysz się, jak organizmy morskie oddziałują ze sobą nawzajem oraz ze swoim środowiskiem. Dowiesz się, jak energia przepływa przez społeczności oraz jakie istnieją powiązania między różnymi ekosystemami oceanicznymi. Dzięki nowo zdobytej wiedzy jeszcze bardziej docenisz życie morskie, z którym nurkujesz! Rozpocznij naukę online już dziś i zdobądź certyfikat specjalistyczny SSI Marine Ecology Specialty.",
					imageSrc: "/images/courses/marine-ecology.jpeg",
					tag: "Ekologia",
					price: { amount: 99, currency: "GBP", extras: [] },
				},
				{
					title: "Science of Diving",
					description:
						"Zostań nurkiem specjalistą Science of Diving. \nDołącz do specjalizacji SSI Science of Diving, a zdobędziesz pełne zrozumienie podwodnego świata oraz jego wpływu na organizm człowieka. Ta specjalizacja jest wymagana w większości programów profesjonalnych SSI, a także w niektórych programach Extended Range, i stanowi kluczowy sposób na poszerzenie Twojej wiedzy nurkowej. Szkolenie jest dostępne online, dzięki czemu możesz zdobyć certyfikat specjalistyczny SSI Science of Diving z domu i przygotować się do rozpoczęcia swojej profesjonalnej kariery nurkowej. Po ukończeniu programu będziesz w połowie drogi do zdobycia prestiżowego stopnia SSI Divemaster oraz otrzymasz certyfikat specjalistyczny SSI Science of Diving Specialty.",
					imageSrc: "/images/courses/science-of-diving.jpg",
					tag: "Teoria",
					price: { amount: 150, currency: "GBP", extras: [] },
				},
				{
					title: "Stress & Rescue",
					description:
						"Zostań nurkiem SSI Diver Stress and Rescue. \nSpecjalistyczny program SSI Diver Stress and Rescue uczy umiejętności potrzebnych do ochrony siebie oraz innych nurków. Nauczysz się rozpoznawać stres, zapobiegać wypadkom oraz poznasz praktyczne techniki prowadzenia akcji ratunkowych i udzielania pierwszej pomocy. Dzięki połączeniu zajęć na basenie oraz nurkowań szkoleniowych w wodach otwartych będziesz dobrze przygotowany/a i pewny/a siebie w radzeniu sobie z sytuacjami awaryjnymi i ratunkowymi. Po ukończeniu szkolenia otrzymasz certyfikat specjalistyczny SSI Diver Stress and Rescue Specialty.",
					imageSrc: "/images/courses/stress-and-rescue.jpg",
					tag: "Bezpieczeństwo",
					price: { amount: 450, currency: "GBP", extras: [] },
				},
				{
					title: "React Right (FA, CPR, AED, O2)",
					description:
						"Zostań certyfikowanym nurkiem specjalistą React Right. \nReact Right to kurs pierwszej pomocy w sytuacjach nagłych SSI, który zapewnia Ci szkolenie i wiedzę potrzebne do działania jako pierwszy ratownik w nagłych przypadkach medycznych. W tym elastycznym programie szkoleniowym możesz wybrać, których zagadnień chcesz się uczyć, w tym: ocenę stanu poszkodowanego, pierwszą pomoc, RKO (resuscytację krążeniowo-oddechową) oraz techniki podstawowej stabilizacji. Możesz także nauczyć się podawania tlenu w nagłych wypadkach nurkowych oraz podstaw obsługi automatycznego defibrylatora zewnętrznego (AED). Dzięki połączeniu zajęć teoretycznych oraz praktycznych scenariuszy szkoleniowych program ten da Ci narzędzia i pewność siebie potrzebne do reagowania w sytuacjach awaryjnych. Po uzyskaniu certyfikatu będziesz w stanie działać jako pierwszy ratownik, udzielać pierwszej pomocy i RKO, podawać tlen oraz korzystać z AED w nagłych przypadkach medycznych. Zdobądź certyfikat specjalistyczny SSI React Right Specialty. Rozpocznij już dziś!",
					imageSrc: "/images/courses/react-right.jpeg",
					tag: "Pierwsza pomoc",
					price: { amount: 150, currency: "GBP", extras: [] },
				},
				{
					title: "Divemaster",
					description:
						"Zostań certyfikowanym SSI Divemasterem. \nKurs SSI Divemaster to Twój pierwszy krok w stronę szkolenia zawodowego. W ścisłej współpracy z instruktorem SSI udoskonalisz swoje umiejętności nurkowe, takie jak perfekcyjne, swobodne zawisanie w wodzie, oraz dopracujesz umiejętności ratownicze, aby przewidywać i łatwo rozwiązywać typowe problemy. Zdobędziesz wiedzę nurkową oraz umiejętności zarządzania i nadzoru, dzięki czemu staniesz się wzorem do naśladowania dla nurków na całym świecie. Jako SSI Divemaster będziesz prowadzić innych, nadzorując aktywności nurkowe oraz pomagając w szkoleniu nurków. SSI Divemasterzy to cenieni profesjonaliści nurkowi, związani z jedną z największych i najbardziej renomowanych organizacji nurkowych na świecie – SSI. Jeśli ukończyłeś już kurs PRO SSI Dive Guide, wystarczy, że ukończysz dodatkowo kurs SSI Science of Diving. Prosimy o kontakt w celu uzyskania informacji o cenie. Cena obejmuje całe szkolenie u nas, kurs SSI Dive Guide oraz teorię SSI Science of Diving. Opłaty PRO są dodatkowe i będą fakturowane przez SSI bezpośrednio do Twojej aplikacji. Będziesz także musiał(a) zakupić pakiet PRO.",
					imageSrc: "/images/courses/divemaster.jpg",
					tag: "Profesjonalny",
					price: {
						amount: 600,
						currency: "GBP",
						extras: ["zestaw Divemastera"],
					},
				},
			],
			contact: {
				title: "Interesuje Cię szkolenie specjalistyczne z nurkowania?",
				description:
					"Powiedz mi, na jakich obszarach chcesz się skupić i gdzie planujesz nurkować — pomogę Ci dobrać odpowiednie kursy do Twoich celów.",
			},
		},
		technical: {
			hero: {
				title: "Kursy nurkowania technicznego",
				description:
					"Wyjdź poza limity nurkowania rekreacyjnego i trenuj zaawansowane techniki nurkowe do głębszych, dłuższych i bardziej złożonych nurkowań. Skup się na precyzji, planowaniu i pełnej kontroli w wymagających środowiskach.",
				tags: ["Szkolenie zaawansowane", "Rozszerzony zakres"],
			},
			courses: [
				{
					title: "Decompression Diving",
					description:
						"Rozpocznij swój program Decompression Diving już dziś. \nSpecjalizacja SSI Decompression Diving nauczy Cię nurkowania poza limitami bezdekompresyjnymi. Nauczysz się planować i wykonywać nurkowania do maksymalnej głębokości 40 metrów z ograniczoną dekompresją, wykorzystując swój rekreacyjny system nurkowy oraz jedną butlę dekompresyjną. Nauczysz się również efektywnie korzystać z funkcji komputera nurkowego, w tym przełączania gazów, integracji gazu, czasu do rezerwy oraz czasu do wynurzenia. Obsługa tych funkcji stanie się dla Ciebie naturalna, co pozwoli bezpiecznie realizować nurkowania z ograniczoną dekompresją bez konieczności wielogodzinnego planowania nurkowań. Po ukończeniu szkolenia otrzymasz certyfikat specjalistyczny SSI Decompression Diving Specialty i będziesz mógł/mogła eksplorować imponujące głębokie miejsca nurkowe lub większe wraki bez ograniczeń wynikających z tradycyjnych limitów bezdekompresyjnych. Możliwości rozwoju Twoich nurkowych przygód właśnie się zwiększyły!",
					imageSrc: "/images/courses/decompression-diving.jpg",
					tag: "Dekompresja",
					price: { amount: 350, currency: "GBP", extras: [] },
				},
				{
					title: "Advanced Wreck Diving",
					description:
						"Zostań certyfikowanym nurkiem wrakowym SSI. \nWiele z najlepszych miejsc nurkowych na świecie to wraki. Te imponujące konstrukcje przyciągają wyjątkowo duże skupiska życia morskiego i dają możliwość zanurzenia się w żywej historii podczas nurkowania. Nie ma niczego podobnego do nurkowania wrakowego, a specjalizacja SSI Wreck Diving zapewni Ci wszystkie umiejętności i wiedzę potrzebne, aby stać się bezpiecznym i pewnym siebie nurkiem wrakowym. Dzięki połączeniu zajęć teoretycznych oraz sesji w wodach ograniczonych nauczysz się, jak bezpiecznie wykonywać nurkowania bez penetracji wraków oraz sztucznych raf, do głębokości 30 metrów. Będziesz także ćwiczyć swoje umiejętności nurkowania wrakowego podczas nurkowań szkoleniowych w wodach otwartych. Wszystko to pozwoli Ci nurkować na wrakach z pewnością siebie i w pełni korzystać z każdego nurkowania. Po ukończeniu programu otrzymasz certyfikat specjalistyczny SSI Wreck Diving Specialty. Kontynuuj swoje przygody i zostań nurkiem wrakowym. Rozpocznij naukę online już dziś!",
					imageSrc: "/images/courses/advanced-wreck-diving.jpg",
					tag: "Wrak",
					price: { amount: 300, currency: "GBP", extras: [] },
				},
				{
					title: "Extended Range Nitrox Diving",
					description:
						"Trenuj zaawansowane procedury nurkowania na nitroksie do głębszych i dłuższych nurkowań poza limitami rekreacyjnymi. Naucz się precyzyjnego planowania gazów, strategii dekompresyjnych oraz technicznej kontroli pływalności. Program ten zapewnia nurkom przeszkolenie niezbędne do: \nSamodzielnego planowania i wykonywania nurkowań dekompresyjnych, \nW Pełnym Systemie Nurkowym Twinset lub Extended Range Sidemount, \nDo maksymalnej głębokości 40 metrów, \nKorzystania z gazów dekompresyjnych do 100% zawartości tlenu, \nNurkowania dekompresyjnego, z dekompresją o łącznym czasie 15 minut, z partnerem o takich samych lub wyższych uprawnieniach.",
					imageSrc: "/images/courses/extended-range-nitrox-diving.jpg",
					tag: "Twinset",
					price: { amount: 400, currency: "GBP", extras: [] },
				},
				{
					title: "Extended Range",
					description:
						"Rozwijaj umiejętności potrzebne do głębszych nurkowań z planowaną dekompresją poza limitami rekreacyjnymi. Skup się na zaawansowanym planowaniu nurkowań, precyzyjnej kontroli pływalności oraz bezpiecznych procedurach zespołowych. Program ten zapewnia nurkom przeszkolenie niezbędne do: \nSamodzielnego planowania i wykonywania nurkowań dekompresyjnych, \nW Pełnym Systemie Nurkowym Twinset lub Extended Range Sidemount, \nDo maksymalnej głębokości 45 metrów, \nKorzystania z gazów dekompresyjnych do 100% zawartości tlenu, \nNurkowania dekompresyjnego, z dekompresją o łącznym czasie 25 minut, \nz partnerem o takich samych lub wyższych uprawnieniach.",
					imageSrc: "/images/courses/extended-range.jpg",
					tag: "Twinset",
					price: { amount: 550, currency: "GBP", extras: [] },
				},
				{
					title: "Extended Range Trimix",
					description:
						"Opanuj zaawansowane techniki trimiksowe do głębokich i złożonych nurkowań z planowaną dekompresją. Naucz się precyzyjnego zarządzania gazami, zaawansowanego planowania nurkowań oraz bezpiecznych procedur zespołowych dla ekstremalnych głębokości. Program ten zapewnia nurkom przeszkolenie niezbędne do: \nSamodzielnego planowania i wykonywania nurkowań dekompresyjnych, \nW Pełnym Systemie Nurkowym Twinset lub Extended Range Sidemount, \nDo maksymalnej głębokości 45 metrów, \nKorzystania z gazów dekompresyjnych do 100% zawartości tlenu, \nNurkowania dekompresyjnego, z dekompresją o łącznym czasie 25 minut, \nz partnerem o takich samych lub wyższych uprawnieniach, \nKorzystanie z mieszanek zawierajacych hel.",
					imageSrc: "/images/courses/extended-range-trimix.jpg",
					tag: "Twinset",
					price: { amount: 550, currency: "GBP", extras: ["gazy"] },
				},
				{
					title: "DPV Diving ( technical )",
					description:
						"Zostań certyfikowanym nurkiem DPV. \nJeśli chcesz maksymalnie wykorzystać czas spędzony na dnie i czerpać jeszcze więcej radości z nurkowań, spróbuj nurkowania ze skuterem podwodnym, czyli pojazdem napędowym dla nurków (DPV – Diver Propulsion Vehicle). Podczas tego kursu nurkowania ze skuterem podwodnym i DPV nauczysz się umiejętności oraz zasad niezbędnych do bezpiecznego planowania i wykonywania nurkowań z użyciem skuterów lub DPV. Poznasz szczególne środki ostrożności związane z używaniem DPV, nauczysz się utrzymywać kontakt z partnerem nurkowym oraz kontrolować swój sprzęt, aby móc bezpiecznie cieszyć się nowymi doświadczeniami nurkowymi, jakie oferują DPV. Po ukończeniu programu otrzymasz certyfikat specjalistyczny SSI DPV Diving Specialty i będziesz mógł/mogła nurkować ze skuterem lub DPV do głębokości równej limitom Twoich uprawnień",
					imageSrc: "/images/courses/dpv-diving.jpg",
					tag: "Techniczny",
					price: {
						amount: 280,
						currency: "GBP",
						extras: ["wypożyczenie DPV"],
					},
				},
			],
			contact: {
				title: "Gotowy na szkolenie z nurkowania technicznego?",
				description:
					"Opowiedz mi o swoich obecnych certyfikatach, doświadczeniu i celach — pomogę Ci wybrać odpowiednią ścieżkę techniczną.",
			},
		},
		updates: {
			hero: {
				eyebrow: "AKTUALNOŚCI",
				title: "Aktualności i wyjazdy",
				description:
					"Zobacz nadchodzące wyprawy nurkowe, obozy szkoleniowe oraz najnowsze aktualności.",
				badges: [
					{ label: "Nadchodzące wyjazdy i najważniejsze wydarzenia" },
					{ label: "Skontaktuj się", cta: true },
				],
			},
			items: [
				{
					eyebrow: "MAGAZYN",
					title: "Perfect Diver",
					description:
						"Perfect Diver to magazyn dla wszystkich, którzy kochają nurkowanie i podwodny świat. \nPrezentuje najpiękniejsze miejsca nurkowe, od kolorowych raf po tajemnicze wraki. \nW przystępny sposób porusza tematy sprzętu, technik i bezpieczeństwa. \nNa łamach pojawiają się rozmowy z doświadczonymi nurkami i prawdziwymi pasjonatami. \nKażdy numer pełen jest inspirujących historii z głębin. \nWysokiej jakości zdjęcia pozwalają poczuć klimat podwodnej przygody. \nMagazyn trafia zarówno do początkujących, jak i zaawansowanych nurków. \nTo solidne źródło wiedzy i świeżej inspiracji. \nPrenumerata daje wygodny dostęp do każdego wydania bez przerw. \nPerfect Diver to magazyn, który łączy pasję, wiedzę i morską wolność.",
					imageSrc: "/images/updates/perfect-diver.jpeg",
					imageAlt: "Perfect Diver",
					learnMoreLabel: "Dowiedz się więcej",
					learnMoreHref: "http://www.perfectdiver.com/",
					linkLabel: "Skontaktuj się",
					linkHref: "#updates-contact",
				},
				{
					eyebrow: "SZKOLENIE",
					title: "Zostań certyfikowanym Divemasterem z SSI",
					description:
						"Program Divemaster, składający się z kursu Dive Guide i Science of Diving, to pierwszy krok w wyjątkowej podróży.",
					imageSrc: "/images/updates/divemaster.jpg",
					imageAlt: "Zostań certyfikowanym Divemasterem z SSI",
					learnMoreLabel: "Dowiedz się więcej",
					learnMoreHref:
						"https://www.facebook.com/events/1358191985805430/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A700652009368202%7D%7D]%22%7D",
					linkLabel: "Sprawdź dostępność",
					linkHref: "#updates-contact",
				},
				{
					eyebrow: "KURSY",
					title: "Nurkuj z nami",
					description:
						"Kursy nurkowania na wszystkich poziomach oraz nurkowania rekreacyjne, pakiety, możliwość zakwaterowania",
					imageSrc: "/images/updates/dive-with-us.jpg",
					imageAlt: "Nurkuj z nami",
					linkLabel: "Sprawdź dostępność",
					linkHref: "#updates-contact",
				},
				{
					eyebrow: "KURSY",
					title: "Podstawy Nurkowania Swobodnego",
					description:
						"Ten kurs to pierwszy krok w kierunku swobodnego nurkowania. Poznasz bezpieczne techniki zanurzania się na wstrzymanym oddechu oraz efektywne sposoby pływania z płetwami. Podczas zajęć w wodzie będziesz nurkować na głębokości do 5 metrów.",
					imageSrc: "/images/updates/freediving-basics.jpg",
					imageAlt: "Podstawy Nurkowania Swobodnego",
					learnMoreLabel: "Dowiedz się więcej",
					learnMoreHref:
						"https://scubaelite.pl/free/basic-freediver-podstawy-nurkowania-swobodnego/",
					linkLabel: "Sprawdź dostępność",
					linkHref: "#updates-contact",
				},
			],
			contact: {
				sectionId: "updates-contact",
				title: "Chcesz dołączyć do wyjazdu lub warsztatu?",
				description:
					"Powiedz mi, jaki masz poziom, preferowaną lokalizację i terminy — przekażę Ci kolejne kroki.",
			},
		},
		footer: {
			rights: "Wszelkie prawa zastrzeżone.",
		},
		prices: {
			hero: {
				eyebrow: "CENNIK",
				title: "Kursy nurkowe",
				titleAccent: "Cennik",
				description:
					"Sprawdź dostępne kursy nurkowe wraz z cenami i ewentualnymi dodatkowymi kosztami.",
				badges: [
					"Poniższe ceny mają charakter orientacyjny i służą wyłącznie jako informacja.",
					"Skontaktuj się po szczegóły kursu",
				],
			},
			table: {
				course: "Kurs",
				price: "Cena",
				extras: "Dodatki",
			},
			groups: [
				{
					title: "Początkujący",
					items: [
						{
							title: "Try Dive",
							price: { amount: 75, currency: "GBP" },
							extras: ["Tylko basen"],
						},
						{
							title: "Open Water Diver referral",
							price: { amount: 350, currency: "GBP" },
							extras: ["Teoria i tylko basen"],
						},
						{
							title: "Open Water Diver - full",
							price: { amount: 550, currency: "GBP" },
						},
						{
							title: "Open Water Diver plus Dry Suit",
							price: { amount: 700, currency: "GBP" },
							extras: ["Wypożyczenie suchego skafandra"],
						},
						{
							title: "Scuba Skills Update",
							price: { amount: 95, currency: "GBP" },
							extras: [],
						},
					],
				},
				{
					title: "Specjalizacja",
					items: [
						{
							title: "Advanced Open Water Diver",
							price: { amount: 395, currency: "GBP" },
						},
						{
							title: "Dry Suit Diving",
							price: { amount: 230, currency: "GBP" },
							extras: ["Wypożyczenie suchego skafandra"],
						},
						{
							title: "Perfect Buoyancy",
							price: { amount: 175, currency: "GBP" },
						},
						{
							title: "Enriched Air Nitrox Level 1 (32%)",
							price: { amount: 150, currency: "GBP" },
						},
						{
							title: "Enriched Air Nitrox Level 2 (40%)",
							price: { amount: 175, currency: "GBP" },
						},
						{ title: "Boat Diving", price: { amount: 250, currency: "GBP" } },
						{
							title: "Wreck Diving",
							price: { amount: 175, currency: "GBP" },
						},
						{
							title: "Advanced Wreck Diving",
							price: { amount: 300, currency: "GBP" },
						},
						{
							title: "Night Diving & Limited Visibility",
							price: { amount: 200, currency: "GBP" },
						},
						{
							title: "Deep Diving",
							price: { amount: 250, currency: "GBP" },
						},
						{
							title: "Decompression Diving",
							price: { amount: 350, currency: "GBP" },
						},
						{
							title: "DPV Diving",
							price: { amount: 250, currency: "GBP" },
							extras: ["Wypożyczenie skutera podwodnego (DPV)"],
						},
						{
							title: "DPV Diving ( technical )",
							price: { amount: 280, currency: "GBP" },
							extras: ["Wypożyczenie skutera podwodnego (DPV)"],
						},
						{
							title: "React Right (FA, CPR, AED, O2)",
							price: { amount: 150, currency: "GBP" },
						},
						{
							title: "Stress & Rescue",
							price: { amount: 450, currency: "GBP" },
						},
						{
							title: "Science of Diving",
							price: { amount: 150, currency: "GBP" },
						},
						{
							title: "Navigation Diving",
							price: { amount: 175, currency: "GBP" },
						},
						{
							title: "Marine Ecology",
							price: { amount: 99, currency: "GBP" },
						},
					],
				},
				{
					title: "Profesjonalny",
					items: [
						{
							title: "Divemaster",
							price: { amount: 600, currency: "GBP" },
							extras: ["zestaw Divemastera"],
						},
						{
							title:
								"Divemaster bundle – dive guide + react right + science of diving",
							price: { amount: 900, currency: "GBP" },
							extras: ["zestaw Divemastera"],
						},
					],
				},
				{
					title: "Techniczny",
					items: [
						{
							title: "Decompression Diving",
							price: { amount: 350, currency: "GBP" },
						},
						{
							title: "Intro Tec Diving",
							price: { amount: 80, currency: "GBP" },
						},
						{
							title: "Extended Range Nitrox Diving (twin set)",
							price: { amount: 400, currency: "GBP" },
						},
						{
							title: "Extended Range (twin set)",
							price: { amount: 550, currency: "GBP" },
						},
						{
							title: "Extended Range Trimix (twin set)",
							price: { amount: 550, currency: "GBP" },
							extras: ["gazy"],
						},
						{
							title: "DPV Diving ( technical )",
							price: { amount: 280, currency: "GBP" },
							extras: ["Wypożyczenie skutera podwodnego (DPV)"],
						},
					],
				},
			],
			contact: {
				title: "Masz pytania o ceny?",
				description:
					"Podaj poziom, preferowaną lokalizację i terminy — zaproponuję najlepszy kurs i dokładną wycenę.",
			},
		},
	},
} as const;
