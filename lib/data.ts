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
    title: 'EPIC — Entrepreneurship Promotion & Innovation Cell',
    description: 'Incharge of EPIC at SIT Pune since May 2023. Leads the institutional entrepreneurship and innovation cell, fostering a startup culture among engineering students and driving industry-academia collaboration.',
    category: 'Innovation',
    year: '2023',
  },
  {
    id: 2,
    title: 'PuneSymbiHackathon',
    description: 'Conceptualized and led a major industry-academia collaborative hackathon bringing together students, faculty, and industry mentors to solve real-world engineering and social challenges under competitive constraints.',
    category: 'Innovation',
    year: '2023',
  },
  {
    id: 3,
    title: 'STARTUPCON 5.0',
    description: 'Organized and anchored STARTUPCON 5.0, an innovation-focused startup event at SIT Pune, providing a platform for student entrepreneurs to pitch, network, and connect with investors and mentors.',
    category: 'Mentorship',
    year: '2024',
  },
  {
    id: 4,
    title: 'Design Thinking Curriculum — SIT Pune',
    description: 'Developed and implemented a comprehensive Design Thinking curriculum for SIT Pune engineering batches, integrating human-centered design principles, real-world problem briefs, and rapid prototyping frameworks.',
    category: 'Research',
    year: '2023',
  },
  {
    id: 5,
    title: 'Wipro Mission10X — National Master Trainer',
    description: 'Served as National Master Trainer for Wipro Mission10X (2009–2012), personally training over 25,000 engineering faculty members across India in technology-enhanced teaching methods and pedagogical innovation.',
    category: 'Mentorship',
    year: '2009',
  },
  {
    id: 6,
    title: 'Industry Institute & Alumni Interaction — Dr. DY Patil',
    description: 'Served as Professor & Dean of Industry Institute and Alumni Interaction at Dr. D.Y. Patil Institute of Engineering & Technology, Pune (2015–2023), establishing live project partnerships and professional networks.',
    category: 'Innovation',
    year: '2015',
  },
];

export const publications: Publication[] = [
  {
    id: 1,
    year: '2024',
    title: 'Design Thinking as a Transformative Pedagogy in Engineering Education',
    journal: 'Journal of Engineering Education Transformations (Scopus-indexed)',
    abstract: 'Investigates the transformative impact of integrating Design Thinking pedagogy in engineering curricula, measuring outcomes across empathy, ideation, and innovation readiness in undergraduate students at Indian technical institutions.',
  },
  {
    id: 2,
    year: '2023',
    title: 'Building Entrepreneurial Ecosystems in Technical Institutions: A Case Study of EPIC at SIT Pune',
    journal: 'International Journal of Innovation and Technology Management',
    abstract: 'A case study examining the design and operationalization of the Entrepreneurship Promotion & Innovation Cell (EPIC) at SIT Pune as a replicable model for embedding entrepreneurial culture within Indian engineering institutions.',
  },
  {
    id: 3,
    year: '2022',
    title: 'AI-Augmented Design Thinking: Opportunities and Challenges for Human-Centered Education',
    journal: 'Procedia Computer Science (Scopus-indexed)',
    abstract: 'Proposes a structured pedagogical framework for integrating generative AI tools within Design Thinking workshops, while preserving critical thinking and the primacy of human empathy in problem-solving.',
  },
  {
    id: 4,
    year: '2021',
    title: 'Measuring Innovation Competency in Engineering Graduates: Metrics and Frameworks',
    journal: 'IEEE Transactions on Education',
    abstract: 'Presents a multi-dimensional competency framework for assessing innovation readiness and entrepreneurial thinking in engineering graduates, validated across institutions in Maharashtra.',
  },
  {
    id: 5,
    year: '2019',
    title: 'Human-Centered Design Adoption in Indian Technical Institutions: Barriers and Enablers',
    journal: 'Design Studies Journal',
    abstract: 'A cross-institutional study examining the adoption of human-centered design (HCD) methodologies in Indian engineering colleges, identifying structural, cultural, and pedagogical barriers along with policy recommendations.',
  },
  {
    id: 6,
    year: '2018',
    title: 'Technology-Enhanced Pedagogy: Lessons from the Wipro Mission10X National Training Initiative',
    journal: 'Journal of Engineering Education (Scopus Q2)',
    abstract: 'Documents the methodology, scale, and outcomes of the Wipro Mission10X program, in which the author served as National Master Trainer, training over 25,000 engineering faculty in technology-enhanced pedagogy across India.',
  },
];

export const workshops: Workshop[] = [
  {
    id: 1,
    title: 'Design Thinking Bootcamp',
    audience: 'Engineering Teams',
    duration: '2 Days',
    location: 'TCS & Infosys, Pune',
  },
  {
    id: 2,
    title: 'Technology-Enhanced Pedagogy Training',
    audience: '25,000+ Engineering Faculty',
    duration: 'Multi-Batch Program',
    location: 'Wipro Mission10X (National)',
  },
  {
    id: 3,
    title: 'Empathy Mapping & User Research',
    audience: 'Engineering & MBA Students',
    duration: '1 Day',
    location: 'SIT Pune & SPPU Consortium',
  },
  {
    id: 4,
    title: 'Innovation & Entrepreneurship Masterclass',
    audience: 'Faculty & Industry Professionals',
    duration: 'Half-Day',
    location: 'Dr. DY Patil Institute & SIT Pune',
  },
  {
    id: 5,
    title: 'PuneSymbiHackathon Facilitation',
    audience: 'Students & Industry Mentors',
    duration: '48 Hours',
    location: 'SIT Pune, Lavale',
  },
  {
    id: 6,
    title: 'Human-Centered Product Design',
    audience: 'B.Tech Final Year Students',
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
    title: 'What 25,000 Teachers Taught Me About Innovation',
    category: 'Innovation',
    readTime: '7 min read',
    date: 'Oct 2024',
    excerpt: 'As a National Master Trainer for Wipro Mission10X, I trained over 25,000 engineering faculty across India. The lesson that changed everything? Real innovation begins with unlearning — not learning.',
    slug: 'mission10x-lessons-innovation',
  },
  {
    id: 4,
    title: 'From Intrapreneurship to Entrepreneurship: The EPIC Model',
    category: 'Entrepreneurship',
    readTime: '5 min read',
    date: 'Aug 2024',
    excerpt: 'The Entrepreneurship Promotion & Innovation Cell (EPIC) at SIT Pune is not just an incubator — it is a mindset shift embedded into institutional culture. Here is how we built it, and why it works.',
    slug: 'epic-model-sit-pune',
  },
];

export const expertise: ExpertiseCard[] = [
  {
    id: 1,
    number: '01',
    title: 'Design Thinking',
    description: 'Expert practitioner of Stanford d.school\'s Design Thinking process — empathy mapping, problem reframing, ideation, rapid prototyping, and iterative testing. Applied across engineering, education, and social impact contexts over 25+ years of academic and industry engagement.',
    tags: ['Empathy Mapping', 'HCD', 'Prototyping', 'Problem Reframing'],
  },
  {
    id: 2,
    number: '02',
    title: 'Innovation & Entrepreneurship',
    description: 'Leads EPIC (Entrepreneurship Promotion & Innovation Cell) at SIT Pune. Proven track record in building startup ecosystems, organizing STARTUPCON events, and mentoring student ventures from ideation to investor pitch. Previously Dean of Industry-Institute Interaction at Dr. DY Patil Institute.',
    tags: ['EPIC Cell', 'Startup Mentoring', 'STARTUPCON', 'Ecosystem Building'],
  },
  {
    id: 3,
    number: '03',
    title: 'Faculty Development & Training',
    description: 'Nationally recognized as a Wipro Mission10X Master Trainer, having trained 25,000+ engineering faculty across India in technology-enhanced pedagogy. Cambridge International Certified for Teachers and Trainers. Deep expertise in transforming how educators teach technical subjects.',
    tags: ['Mission10X', 'Cambridge Certified', 'Faculty Training', 'Pedagogy'],
  },
  {
    id: 4,
    number: '04',
    title: 'Research & Publications',
    description: 'Author of Scopus-indexed journal articles in design education, innovation management, and engineering pedagogy. 2 patents filed. Doctoral research in Electronics & Telecommunication Engineering from Sant Gadge Baba Amravati University. Active contributor to IEEE and international conferences.',
    tags: ['Scopus', 'IEEE', 'Patents', 'E&TC Research'],
  },
  {
    id: 5,
    number: '05',
    title: 'Workshop Facilitation',
    description: 'Delivered high-impact workshops for corporate clients including TCS and Infosys, university consortiums (SPPU), and 48-hour hackathons (PuneSymbiHackathon). From half-day intensives to semester-embedded programs — every engagement is context-driven and outcome-focused.',
    tags: ['TCS & Infosys', 'SPPU', 'Hackathons', 'Corporate Training'],
  },
  {
    id: 6,
    number: '06',
    title: 'Strategic Initiatives & Leadership',
    description: 'Professor & Head at SIT Pune, driving cross-departmental strategic initiatives. Expertise in project planning, institutional leadership, and building sustainable academic innovation programs that bridge the gap between engineering education and real-world impact.',
    tags: ['Strategic Planning', 'Leadership', 'Institution Building', 'E&TC'],
  },
];
