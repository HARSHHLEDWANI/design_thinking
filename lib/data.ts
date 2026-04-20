export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Innovation' | 'Research' | 'Mentorship';
  year: string;
}

export interface Publication {
  id: number;
  year: string;
  title: string;
  journal: string;
  abstract: string;
  url?: string;
}

export interface Workshop {
  id: number;
  title: string;
  audience: string;
  duration: string;
  location: string;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  slug: string;
}

export interface ExpertiseCard {
  id: number;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'SIT Innovation Cell',
    description: 'Founded and led the college\'s innovation hub, incubating 30+ student startups from ideation to MVP across engineering disciplines.',
    category: 'Innovation',
    year: '2019',
  },
  {
    id: 2,
    title: 'Design Thinking Curriculum',
    description: 'Redesigned the Design Thinking curriculum for 3 engineering batches, integrating AI tooling and real-world problem briefs.',
    category: 'Research',
    year: '2022',
  },
  {
    id: 3,
    title: 'Industry-Academia Bridge',
    description: 'Established live project partnerships with 5 Pune-based companies, enabling 200+ students to work on real product challenges.',
    category: 'Mentorship',
    year: '2021',
  },
  {
    id: 4,
    title: 'Quantum Thinking Lab',
    description: 'Physical prototyping lab for rapid ideation, funded by DST Grant ₹18L — a space where ideas become tangible in 48 hours.',
    category: 'Innovation',
    year: '2020',
  },
  {
    id: 5,
    title: 'Empathy-First Education Study',
    description: 'Published landmark study measuring empathy metrics in engineering pedagogy, cited in 40+ subsequent academic papers.',
    category: 'Research',
    year: '2023',
  },
  {
    id: 6,
    title: 'StartupSIT Cohort Program',
    description: 'Mentored 12 student startups from raw idea to MVP stage, with 3 ventures securing seed funding post-program.',
    category: 'Mentorship',
    year: '2024',
  },
];

export const publications: Publication[] = [
  {
    id: 1,
    year: '2024',
    title: 'Measuring Empathy in Engineering Design Education',
    journal: 'International Journal of Engineering Education',
    abstract: 'A quantitative framework for assessing empathy development in undergraduate engineering students through design thinking interventions.',
  },
  {
    id: 2,
    year: '2023',
    title: 'AI-Augmented Design Thinking: A Pedagogical Framework',
    journal: 'Scopus Q2, Innovation in Education',
    abstract: 'Proposes a structured approach to integrating generative AI tools within design thinking workshops while preserving the primacy of human empathy.',
  },
  {
    id: 3,
    year: '2022',
    title: 'From Classroom to Startup: Lean Innovation in Academic Settings',
    journal: 'IEEE Transactions on Learning Technologies',
    abstract: 'Examines how lean startup methodology can be adapted for academic innovation cells and the conditions under which student ventures succeed.',
  },
  {
    id: 4,
    year: '2021',
    title: 'Human-Centered Design Adoption in Indian Technical Institutions',
    journal: 'Design Studies Journal',
    abstract: 'A cross-institutional study of HCD adoption barriers and enablers in Indian engineering colleges, with policy recommendations.',
  },
  {
    id: 5,
    year: '2019',
    title: 'Building Innovation Ecosystems in Tier-1 Engineering Colleges',
    journal: 'Journal of Engineering Education Transformations',
    abstract: 'Case study of the SIT Innovation Cell as a replicable model for embedding entrepreneurial culture in technical institutions.',
  },
  {
    id: 6,
    year: '2018',
    title: 'Design Thinking as a Core Competency in B.Tech Programs',
    journal: 'Procedia Computer Science',
    abstract: 'Argues for the formal inclusion of design thinking in the undergraduate engineering curriculum, with a proposed credit structure.',
  },
];

export const workshops: Workshop[] = [
  {
    id: 1,
    title: 'Design Thinking Bootcamp',
    audience: 'Engineers',
    duration: '2 Days',
    location: 'Corporate (TCS, Infosys)',
  },
  {
    id: 2,
    title: 'Empathy Mapping Masterclass',
    audience: 'MBA Students',
    duration: '1 Day',
    location: 'SIT Pune',
  },
  {
    id: 3,
    title: 'Rapid Prototyping Sprint',
    audience: 'Startup Founders',
    duration: '3 Hours',
    location: 'Hinjawadi Tech Park',
  },
  {
    id: 4,
    title: 'AI + Design Thinking Fusion',
    audience: 'Faculty',
    duration: 'Half-Day',
    location: 'SPPU Consortium',
  },
  {
    id: 5,
    title: 'Innovation for Social Impact',
    audience: 'NGO Teams',
    duration: 'Full Day',
    location: 'Pune',
  },
  {
    id: 6,
    title: 'Human-Centered Product Design',
    audience: 'B.Tech Final Year',
    duration: 'Semester-long',
    location: 'SIT Pune',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Why Engineers Need to Feel Before They Build',
    category: 'Design Thinking',
    readTime: '6 min read',
    date: 'Mar 2025',
    excerpt: 'The most consequential engineering failures of our time weren\'t technical — they were empathy failures. Here\'s why emotional intelligence is the missing variable in every engineering curriculum.',
    slug: 'engineers-feel-before-build',
  },
  {
    id: 2,
    title: 'The Real Role of AI in Human-Centered Design',
    category: 'AI + Design',
    readTime: '8 min read',
    date: 'Jan 2025',
    excerpt: 'AI is neither the savior nor the destroyer of design thinking. Used well, it compresses the distance between insight and prototype — used poorly, it manufactures the illusion of empathy.',
    slug: 'ai-human-centered-design',
  },
  {
    id: 3,
    title: 'From Jugaad to Systemic Innovation: India\'s Design Opportunity',
    category: 'Innovation',
    readTime: '5 min read',
    date: 'Nov 2024',
    excerpt: 'India\'s genius for frugal innovation is globally celebrated. But jugaad alone won\'t build the next Figma. The country needs a design culture that values systems thinking alongside resourcefulness.',
    slug: 'jugaad-to-systemic-innovation',
  },
  {
    id: 4,
    title: 'Teaching Empathy in a Classroom of 60 Students',
    category: 'Education',
    readTime: '7 min read',
    date: 'Aug 2024',
    excerpt: 'Scaling empathy sounds like a paradox. But over 15 years of practice, I\'ve discovered that constraint breeds methodology — and a room of 60 skeptical engineers can become deeply curious humans.',
    slug: 'teaching-empathy-classroom',
  },
];

export const expertise: ExpertiseCard[] = [
  {
    id: 1,
    number: '01',
    title: 'Design Thinking',
    description: 'Empathy mapping, user journey design, rapid prototyping, and human-centered design methodologies applied across engineering and product contexts.',
    tags: ['Empathy Mapping', 'Journey Design', 'HCD', 'Prototyping'],
  },
  {
    id: 2,
    number: '02',
    title: 'Innovation & Entrepreneurship',
    description: 'Building and sustaining innovation ecosystems within academic institutions. Expertise in lean startup, ideation sprints, and startup mentoring.',
    tags: ['Lean Startup', 'Ideation', 'Ecosystem Building'],
  },
  {
    id: 3,
    number: '03',
    title: 'AI Integration in Education',
    description: 'Developing pedagogical frameworks that integrate generative AI as a creative co-pilot while preserving critical thinking and human-centered outcomes.',
    tags: ['Human-AI Collaboration', 'Pedagogical Design', 'EdTech'],
  },
  {
    id: 4,
    number: '04',
    title: 'Research & Publications',
    description: 'Scopus-indexed journal publications, patent filings, and academic writing at the intersection of design education and innovation management.',
    tags: ['Scopus', 'Patents', 'Academic Writing'],
  },
  {
    id: 5,
    number: '05',
    title: 'Workshop Facilitation',
    description: 'High-impact corporate training, hackathon facilitation, and academic seminars that transform how professionals approach complex, ill-defined problems.',
    tags: ['Corporate Training', 'Hackathons', 'Facilitation'],
  },
  {
    id: 6,
    number: '06',
    title: 'Mentorship',
    description: 'One-on-one and cohort-based mentoring for student startups, emerging researchers, and early-career professionals navigating the innovation landscape.',
    tags: ['Startup Mentoring', 'Career Guidance', 'Research'],
  },
];
