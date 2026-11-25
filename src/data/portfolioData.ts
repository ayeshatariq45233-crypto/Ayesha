export interface JourneyItem {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  summary: string;
}

export interface SkillItem {
  id: string;
  name: string;
  description: string;
  level: number;
  iconKey:
    | 'code'
    | 'palette'
    | 'zap'
    | 'globe'
    | 'layers'
    | 'terminal'
    | 'smartphone'
    | 'layout';
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconKey: 'monitor' | 'globe' | 'layers' | 'code2' | 'zap' | 'tablet';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  track: 'Custom Code' | 'WordPress & Elementor';
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  deliverables: string[];
  imageUrl: string;
  year: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
}

export interface AdvantageItem {
  number: string;
  title: string;
  description: string;
  iconKey:
    | 'compass'
    | 'layers'
    | 'code'
    | 'smartphone'
    | 'eye'
    | 'wind'
    | 'message'
    | 'book';
}

export interface TestimonialPlaceholder {
  id: string;
  quote: string;
  authorLabel: string;
  roleLabel: string;
  initials: string;
  projectCategory: string;
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Contact', href: '#contact', id: 'contact' },
] as const;

export const HERO_ROLES = [
  'Web Developer',
  'WordPress Specialist',
  'Frontend Developer',
  'Elementor Expert',
];

export const HERO_IMAGE =
  '/src/assets/images/hero_luxury_crimson_workspace_1795174717983.jpg';
export const ABOUT_IMAGE =
  '/src/assets/images/about_luxury_crimson_portrait_1795174722609.jpg';

export const JOURNEY_MILESTONES: JourneyItem[] = [
  {
    id: 'beginning',
    step: '01',
    title: 'The Beginning',
    subtitle: 'Started learning web development',
    summary:
      'Built an early foundation in how modern websites are structured, rendered, and refined inside the browser.',
  },
  {
    id: 'foundations',
    step: '02',
    title: 'Frontend Foundations',
    subtitle: 'HTML & CSS',
    summary:
      'Mastered semantic HTML5 architecture, responsive grids, visual hierarchy, and tailored CSS styling.',
  },
  {
    id: 'interactive',
    step: '03',
    title: 'Interactive Websites',
    subtitle: 'JavaScript',
    summary:
      'Introduced dynamic user interactions, DOM behavior, state transitions, and responsive validation.',
  },
  {
    id: 'cms',
    step: '04',
    title: 'CMS Development',
    subtitle: 'WordPress',
    summary:
      'Expanded into WordPress development, theme customization, plugin ecosystems, and scalable content structures.',
  },
  {
    id: 'visual-builder',
    step: '05',
    title: 'Visual Website Building',
    subtitle: 'Elementor',
    summary:
      'Crafted refined Elementor page systems paired with custom CSS and careful breakpoint adjustments.',
  },
  {
    id: 'beyond-templates',
    step: '06',
    title: 'Beyond Templates',
    subtitle: 'Custom Coding',
    summary:
      'Combined custom from-scratch frontend engineering with creative direction across 3+ years of digital creation.',
  },
];

export const SKILLS_LIST: SkillItem[] = [
  {
    id: 'html5',
    name: 'HTML5',
    description: 'Semantic document architecture and accessible markup.',
    level: 96,
    iconKey: 'code',
  },
  {
    id: 'css3',
    name: 'CSS3',
    description: 'Editorial Grid, Flexbox layouts, transitions, and polish.',
    level: 94,
    iconKey: 'palette',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Dynamic interactions, DOM logic, and fluid UI control.',
    level: 88,
    iconKey: 'zap',
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    description: 'Full CMS websites, theme setup, and content management.',
    level: 93,
    iconKey: 'globe',
  },
  {
    id: 'elementor',
    name: 'Elementor',
    description: 'Custom-styled layouts and tailored page architecture.',
    level: 95,
    iconKey: 'layers',
  },
  {
    id: 'custom-coding',
    name: 'Custom Coding',
    description: 'Bespoke websites built cleanly from scratch.',
    level: 90,
    iconKey: 'terminal',
  },
  {
    id: 'responsive-design',
    name: 'Responsive Design',
    description: 'Seamless optimization across phone, tablet, and desktop.',
    level: 96,
    iconKey: 'smartphone',
  },
  {
    id: 'frontend-dev',
    name: 'Frontend Development',
    description: 'Translating design concepts into fast, tactile interfaces.',
    level: 92,
    iconKey: 'layout',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'website-development',
    number: '01',
    title: 'Website Development',
    description:
      'Complete, high-impact websites engineered for speed, visual authority, and smooth cross-device browsing.',
    iconKey: 'monitor',
  },
  {
    id: 'wordpress-development',
    number: '02',
    title: 'WordPress Development',
    description:
      'Custom WordPress builds with intuitive editing workflows, thoughtful theme configuration, and clean structure.',
    iconKey: 'globe',
  },
  {
    id: 'elementor-design',
    number: '03',
    title: 'Elementor Design',
    description:
      'Editorial-grade Elementor layouts elevated with custom CSS styling and deliberate spacing rhythms.',
    iconKey: 'layers',
  },
  {
    id: 'custom-html-css',
    number: '04',
    title: 'Custom HTML & CSS',
    description:
      'Hand-written semantic HTML and precision CSS built completely from scratch with zero template bloat.',
    iconKey: 'code2',
  },
  {
    id: 'javascript-functionality',
    number: '05',
    title: 'JavaScript Functionality',
    description:
      'Interactive galleries, dynamic filtering, smooth navigation flows, and responsive form validation.',
    iconKey: 'zap',
  },
  {
    id: 'responsive-website-design',
    number: '06',
    title: 'Responsive Website Design',
    description:
      'Every section carefully tuned for mobile, tablet, and widescreen viewports without visual compromise.',
    iconKey: 'tablet',
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'luxury-fashion-store',
    title: 'Luxury Fashion Store',
    category: 'Editorial E-Commerce',
    track: 'Custom Code',
    shortDescription:
      'A high-contrast couture storefront crafted with refined lookbook sections, seasonal collection grids, and tactile product views.',
    fullDescription:
      'Engineered to reflect the atmosphere of a luxury fashion house, pairing dramatic editorial lookbook imagery with clean collection filtering, structured typography, and responsive mobile navigation.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Grid'],
    deliverables: [
      'Editorial seasonal hero and lookbook layout',
      'Interactive category filtering and product showcase',
      'Mobile-first storefront navigation flow',
    ],
    imageUrl: '/src/assets/images/project_crimson_fashion_1795174721325.jpg',
    year: '2026',
  },
  {
    id: 'construction-website',
    title: 'Construction Website',
    category: 'Architecture & Engineering',
    track: 'WordPress & Elementor',
    shortDescription:
      'An authoritative architectural and construction showcase presenting structural capabilities and selected works.',
    fullDescription:
      'Built using WordPress and Elementor with custom CSS refinements to structure commercial and residential portfolio works, service divisions, and direct project inquiry pathways.',
    technologies: ['WordPress', 'Elementor', 'Custom CSS', 'Responsive Design'],
    deliverables: [
      'Modular portfolio grid for architectural builds',
      'Clear commercial & residential service overview',
      'Responsive tablet and mobile layout polish',
    ],
    imageUrl: '/src/assets/images/project_crimson_construction_1795174722014.jpg',
    year: '2026',
  },
  {
    id: 'beauty-salon-website',
    title: 'Beauty & Salon Website',
    category: 'Skincare & Wellness Studio',
    track: 'WordPress & Elementor',
    shortDescription:
      'A serene luxury beauty and skincare showcase highlighting signature treatments, product collections, and bookings.',
    fullDescription:
      'Designed in WordPress and Elementor to balance calm editorial imagery with effortless treatment browsing, showcasing facial rituals, skincare essentials, and clear booking calls to action.',
    technologies: ['WordPress', 'Elementor', 'Custom CSS', 'UI Polish'],
    deliverables: [
      'Curated treatment menu and collection layout',
      'Editorial skincare showcase cards',
      'Streamlined booking call-to-action structure',
    ],
    imageUrl: '/src/assets/images/project_crimson_salon_1795174720710.jpg',
    year: '2025',
  },
  {
    id: 'restaurant-website',
    title: 'Restaurant Website',
    category: 'Fine Dining & Gastronomy',
    track: 'Custom Code',
    shortDescription:
      'An atmospheric fine-dining website pairing moody culinary presentation with an intuitive table reservation flow.',
    fullDescription:
      'Built from scratch with semantic HTML, custom CSS layouts, and JavaScript interactivity, featuring tasting menu highlights, gallery storytelling, and a focused reservation interface.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Custom UI'],
    deliverables: [
      'Interactive reservation date & guest selector',
      'Seasonal dish showcase layout',
      'Responsive single-page scroll experience',
    ],
    imageUrl: '/src/assets/images/project_crimson_restaurant_1795174721398.jpg',
    year: '2025',
  },
  {
    id: 'wedding-event-website',
    title: 'Wedding Event Website',
    category: 'Luxury Celebrations & Events',
    track: 'WordPress & Elementor',
    shortDescription:
      'An expressive wedding and event planning studio showcase blending editorial gallery grids with planning narratives.',
    fullDescription:
      'Crafted with Elementor and bespoke typography hierarchy, highlighting destination celebration galleries across desktop and tablet screens with refined spacing and inquiry pathways.',
    technologies: ['WordPress', 'Elementor', 'Custom CSS', 'Responsive Design'],
    deliverables: [
      'Multi-column celebration gallery showcase',
      'Editorial planning story and service blocks',
      'Cross-device visual consistency',
    ],
    imageUrl: '/src/assets/images/project_crimson_wedding_1795174721923.jpg',
    year: '2025',
  },
  {
    id: 'interior-design-website',
    title: 'Interior Design Website',
    category: 'Spatial Architecture & Interiors',
    track: 'Custom Code',
    shortDescription:
      'A refined interior architecture portfolio framing residential spaces with generous editorial pacing and clean navigation.',
    fullDescription:
      'Developed from scratch using HTML5, CSS Grid, and JavaScript transitions to give spatial photography room to breathe while presenting studio philosophy and residence case details.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Custom Coding'],
    deliverables: [
      'Wide-format architectural residence showcase',
      'Clean studio narrative and material focus',
      'Smooth interactive detail transitions',
    ],
    imageUrl: '/src/assets/images/project_crimson_interior_1795174723282.jpg',
    year: '2026',
  },
];

export const WORDPRESS_FEATURES = [
  {
    title: 'Elementor Layouts',
    detail: 'Structured container systems and bespoke section grids.',
  },
  {
    title: 'Custom Page Design',
    detail: 'Tailored editorial layouts beyond generic pre-built presets.',
  },
  {
    title: 'WordPress Websites',
    detail: 'Complete, easy-to-manage CMS builds built for growth.',
  },
  {
    title: 'Landing Pages',
    detail: 'Focused high-impact pages designed around clear user action.',
  },
  {
    title: 'Theme Customization',
    detail: 'Adapting headers, footers, typography, and global color tokens.',
  },
  {
    title: 'Plugin Integration',
    detail: 'Clean integration of forms, SEO essentials, and performance tools.',
  },
  {
    title: 'Responsive Optimization',
    detail: 'Precision tablet and mobile tuning across every Elementor block.',
  },
  {
    title: 'Custom CSS',
    detail: 'Hand-written CSS overrides for glossy surfaces, hover states, and polish.',
  },
];

export const CUSTOM_CODE_FEATURES = [
  {
    title: 'Custom Layouts',
    detail: 'CSS Grid and Flexbox compositions crafted specifically for each brand.',
  },
  {
    title: 'Clean Code',
    detail: 'Semantic HTML5 and modular stylesheets structured for clarity.',
  },
  {
    title: 'Interactive Elements',
    detail: 'Dynamic menus, tabs, sliders, and modals built with JavaScript.',
  },
  {
    title: 'Responsive Structure',
    detail: 'Fluid typography and breakpoint discipline across all screen sizes.',
  },
  {
    title: 'CSS Animations',
    detail: 'Subtle GPU-accelerated transitions and glossy hover reflections.',
  },
  {
    title: 'JavaScript Functionality',
    detail: 'Client-side validation, state updates, and smooth interactions.',
  },
];

export const WORK_PROCESS_STEPS: WorkflowStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understanding your ideas and goals.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Planning structure and direction.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Creating the visual experience.',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Building with modern technologies.',
  },
  {
    number: '05',
    title: 'Deliver',
    description: 'Testing, polishing, and launch.',
  },
];

export const WHY_CHOOSE_ME: AdvantageItem[] = [
  {
    number: '01',
    title: 'Creative Ideas',
    description: 'Fresh visual concepts tailored to stand apart from ordinary templates.',
    iconKey: 'compass',
  },
  {
    number: '02',
    title: 'Modern Design',
    description: 'Contemporary typography, glossy surfaces, and balanced dark aesthetics.',
    iconKey: 'layers',
  },
  {
    number: '03',
    title: 'Clean Code',
    description: 'Readable, well-organized markup and maintainable styling architecture.',
    iconKey: 'code',
  },
  {
    number: '04',
    title: 'Responsive Layouts',
    description: 'Carefully tested across mobile phones, tablets, and wide displays.',
    iconKey: 'smartphone',
  },
  {
    number: '05',
    title: 'Attention to Detail',
    description: 'Precision alignment, consistent spacing, and refined micro-interactions.',
    iconKey: 'eye',
  },
  {
    number: '06',
    title: 'User-Friendly Experience',
    description: 'Intuitive navigation flows designed so visitors engage effortlessly.',
    iconKey: 'wind',
  },
  {
    number: '07',
    title: 'Reliable Communication',
    description: 'Clear progress updates and responsive collaboration from start to finish.',
    iconKey: 'message',
  },
  {
    number: '08',
    title: 'Continuous Learning',
    description: 'Constantly refining frontend craft, WordPress workflows, and UX polish.',
    iconKey: 'book',
  },
];

export const DEMO_TESTIMONIALS: TestimonialPlaceholder[] = [
  {
    id: 'demo-1',
    quote:
      'Placeholder testimonial: Space reserved for a verified client review describing custom design execution, responsive precision, and launch quality.',
    authorLabel: 'Client Name Placeholder 01',
    roleLabel: 'Demo Entry · Replace With Verified Client Feedback',
    initials: 'C1',
    projectCategory: 'Luxury Fashion Store',
  },
  {
    id: 'demo-2',
    quote:
      'Placeholder testimonial: Easily replaceable sample block designed for future WordPress & Elementor client feedback and project outcomes.',
    authorLabel: 'Client Name Placeholder 02',
    roleLabel: 'Demo Entry · Replace With Verified Client Feedback',
    initials: 'C2',
    projectCategory: 'WordPress & Elementor Build',
  },
  {
    id: 'demo-3',
    quote:
      'Placeholder testimonial: Swap in genuine client commentary highlighting communication, clean code delivery, and mobile optimization.',
    authorLabel: 'Client Name Placeholder 03',
    roleLabel: 'Demo Entry · Replace With Verified Client Feedback',
    initials: 'C3',
    projectCategory: 'Custom Frontend Website',
  },
];
