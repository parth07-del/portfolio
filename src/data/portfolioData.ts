export interface EducationItem {
  id: string;
  institution: string;
  institutionEditableNote?: string;
  location: string;
  degree: string;
  branch: string;
  period: string;
  entryType: string;
  summary: string;
  learningJourney: string;
  subjectsAndSkills: string[];
  logoPlaceholderCode: string;
  achievementsPlaceholder: string;
}

export type SkillStage =
  | 'Practicing'
  | 'Fundamentals'
  | 'Learning'
  | 'Exploring'
  | 'Beginner';

export interface SkillItem {
  name: string;
  stage: SkillStage;
  note: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  summary: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI & Security' | 'Networking' | 'Optimization' | 'Web';
  status: 'Prototype' | 'Learning Project' | 'Experimental Concept' | 'Active Build';
  shortDescription: string;
  objective: string;
  concept: string;
  learningOutcomes: string[];
  technologies: string[];
  imageUrl: string;
  imageAlt: string;
  githubUrlPlaceholder: string;
  liveUrlPlaceholder?: string;
}

export type MilestoneFocus = 'In Focus' | 'Practicing' | 'Ongoing';

export interface JourneyMilestone {
  id: string;
  title: string;
  detail: string;
  focus: MilestoneFocus;
}

export interface VisionHorizon {
  horizon: string;
  title: string;
  description: string;
  goals: string[];
}

export interface InterestItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  span?: 'wide' | 'normal';
}

export interface CertificationItem {
  id: string;
  title: string;
  platform: string;
  status: string;
  description: string;
  topics: string[];
  certificateImagePlaceholderNote: string;
  verifyUrlPlaceholder: string;
}

export const portfolioData = {
  identity: {
    name: 'Parth Nandyalkar',
    shortMark: 'Parth Nandyalkar',
    location: 'Belagavi, Karnataka',
    currentDegree: 'B.E. in CSE (Artificial Intelligence & Machine Learning)',
    diplomaFoundation: 'Diploma in Computer Science',
    copyrightYear: new Date().getFullYear(),
  },

  hero: {
    kicker: 'Computer Science · AI & ML · Builder in Progress',
    headline: 'Turning Curiosity Into Code.',
    subHeadline: 'Building my future, one line of code at a time.',
    intro:
      "Hey, I'm Parth — a Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning, with a foundation in Computer Science and a passion for technology, creative problem-solving and building ideas.",
    statusText: 'Currently learning. Constantly building. Always evolving.',
    heroImage: '/src/assets/images/hero_abstract_architecture_1795014678049.jpg',
    heroImageAlt:
      'Minimalist matte black architectural sculpture with electric cobalt blue refraction and a precision acid lime accent line',
    highlights: [
      {
        label: 'Academic Path',
        value: 'Diploma to Engineering',
        detail: 'Lateral entry into CSE (AI & ML)',
        targetSection: 'education',
      },
      {
        label: 'Core Focus',
        value: 'Python, DSA & Systems',
        detail: 'Strengthening software fundamentals',
        targetSection: 'skills',
      },
      {
        label: 'Applied Exploration',
        value: 'AI & Cybersecurity',
        detail: 'Building practical prototypes',
        targetSection: 'projects',
      },
      {
        label: 'Mindset',
        value: 'Self-Driven Learner',
        detail: 'Curious, persistent, builder-focused',
        targetSection: 'about',
      },
    ],
  },

  about: {
    heading: 'More Than a Student.',
    paragraphs: [
      'My path into technology started with a Diploma in Computer Science at KLS Shri Vasantrao Potdar Polytechnic, Belagavi, where I built an early grounding in programming logic, computer systems, and structured problem-solving.',
      'Continuing through diploma lateral entry into a Bachelor of Engineering in Computer Science and Engineering (Artificial Intelligence & Machine Learning), I am focused on understanding how software, data, and intelligent systems work beneath the surface.',
      'I enjoy learning by experimenting, making mistakes, refining my approach, and turning rough ideas into tangible prototypes. Over time, my goal is to pair strong technical fundamentals with creativity and entrepreneurship to build products that solve real problems.',
    ],
    narrativeStages: [
      {
        step: '01',
        title: 'Diploma Foundation',
        detail:
          'Started with core programming, computing fundamentals, and practical lab discipline.',
      },
      {
        step: '02',
        title: 'Engineering Transition',
        detail:
          'Entered B.E. Computer Science & Engineering (AI & ML) via lateral entry to deepen architectural thinking.',
      },
      {
        step: '03',
        title: 'Current Learning',
        detail:
          'Sharpening DSA, Java, Python, SQL, cybersecurity awareness, and applied AI workflows.',
      },
      {
        step: '04',
        title: 'Long-Term Ambition',
        detail:
          'Grow into a capable software engineer and eventually build independent technology ventures.',
      },
    ],
  },

  education: [
    {
      id: 'jcer-be',
      institution: 'Jain College of Engineering and Research (JCER), Belagavi',
      institutionEditableNote:
        'Editable institution placeholder — update official college formatting if needed.',
      location: 'Belagavi, Karnataka',
      degree: 'Bachelor of Engineering (B.E.)',
      branch: 'Computer Science and Engineering — Artificial Intelligence & Machine Learning',
      period: 'Currently Pursuing',
      entryType: 'Diploma Lateral Entry',
      summary:
        'Advancing from foundational computer science into artificial intelligence, machine learning, algorithms, and software systems engineering.',
      learningJourney:
        'Bridging practical diploma-level computing with engineering rigor in data structures, object-oriented design, database systems, cybersecurity concepts, and emerging AI applications.',
      subjectsAndSkills: [
        'Data Structures & Algorithms',
        'Artificial Intelligence & Machine Learning',
        'Object-Oriented Programming (Java)',
        'Database Management & SQL',
        'Web Development Fundamentals',
        'Applied Security Awareness',
      ],
      logoPlaceholderCode: 'JCER',
      achievementsPlaceholder:
        'Space reserved for academic milestones, hackathon participation, and project recognitions as they are completed.',
    },
    {
      id: 'kls-diploma',
      institution: 'KLS Shri Vasantrao Potdar Polytechnic, Belagavi',
      location: 'Belagavi, Karnataka',
      degree: 'Diploma in Computer Science',
      branch: 'Computer Science & Engineering',
      period: 'Completed Foundation',
      entryType: 'Technical Foundation',
      summary:
        'Built my earliest technical foundation in programming, computing principles, logical reasoning, and hands-on problem-solving.',
      learningJourney:
        'Developed comfort working with code, understanding how computers execute instructions, debugging systematically, and collaborating on foundational academic builds.',
      subjectsAndSkills: [
        'Programming Fundamentals',
        'Computer Systems & Architecture',
        'Database Basics & SQL',
        'Problem-Solving Logic',
        'Operating Systems & Unix Basics',
        'Microsoft Office & Documentation',
      ],
      logoPlaceholderCode: 'KLS VPP',
      achievementsPlaceholder:
        'Space reserved for diploma coursework highlights and technical project archives.',
    },
  ] as EducationItem[],

  skillCategories: [
    {
      id: 'programming',
      label: 'Programming',
      summary:
        'Languages I write code in today while building cleaner syntax fluency and algorithmic reasoning.',
      skills: [
        {
          name: 'Python',
          stage: 'Practicing',
          note: 'Primary language for scripting, security experiments, and AI API prototypes.',
        },
        {
          name: 'Java',
          stage: 'Learning',
          note: 'Practicing object-oriented programming principles and structured problem-solving.',
        },
        {
          name: 'C++',
          stage: 'Beginner',
          note: 'Building comfort with syntax, memory concepts, and basic algorithmic exercises.',
        },
      ],
    },
    {
      id: 'cs-core',
      label: 'Computer Science',
      summary:
        'Core computing principles carried forward from my diploma into engineering coursework.',
      skills: [
        {
          name: 'Data Structures & Algorithms',
          stage: 'Fundamentals',
          note: 'Studying arrays, linked structures, recursion, sorting, and complexity basics.',
        },
        {
          name: 'Object-Oriented Programming',
          stage: 'Fundamentals',
          note: 'Applying encapsulation, inheritance, polymorphism, and modular class design.',
        },
        {
          name: 'Database Fundamentals & SQL',
          stage: 'Fundamentals',
          note: 'Designing relational schemas and writing structured queries for data retrieval.',
        },
        {
          name: 'Web Development Fundamentals',
          stage: 'Learning',
          note: 'Building responsive interfaces using HTML, CSS, JavaScript, and modern tooling.',
        },
      ],
    },
    {
      id: 'ai-ml',
      label: 'AI & Machine Learning',
      summary:
        'Specializing academically in AI & ML while exploring practical tools and real-world workflows.',
      skills: [
        {
          name: 'Artificial Intelligence Fundamentals',
          stage: 'Learning',
          note: 'Studying core AI reasoning concepts, search strategies, and modern LLM usage.',
        },
        {
          name: 'Machine Learning Fundamentals',
          stage: 'Exploring',
          note: 'Understanding supervised concepts, data preparation, and model evaluation basics.',
        },
        {
          name: 'AI-Assisted Productivity & APIs',
          stage: 'Practicing',
          note: 'Integrating AI APIs into web prototypes and accelerating research workflows.',
        },
      ],
    },
    {
      id: 'cybersecurity',
      label: 'Cybersecurity',
      summary:
        'Developing defensive security awareness alongside networking and Unix fundamentals.',
      skills: [
        {
          name: 'Cyber Security Foundation',
          stage: 'Fundamentals',
          note: 'Completed Infosys Springboard foundation covering threats, hygiene, and defense.',
        },
        {
          name: 'Network & Packet Concepts',
          stage: 'Exploring',
          note: 'Inspecting traffic behavior and protocol headers in controlled learning setups.',
        },
        {
          name: 'Unix Basics & Security Mindset',
          stage: 'Learning',
          note: 'Practicing command-line workflows, permissions, and safe system practices.',
        },
      ],
    },
    {
      id: 'tools',
      label: 'Technology & Tools',
      summary:
        'Everyday development, productivity, and version control environments I work with.',
      skills: [
        {
          name: 'VS Code',
          stage: 'Practicing',
          note: 'Primary code editor for Python, web projects, and debugging workflows.',
        },
        {
          name: 'Git & GitHub',
          stage: 'Learning',
          note: 'Learning repository management, commits, branching, and clean project documentation.',
        },
        {
          name: 'Excel & Microsoft Office',
          stage: 'Practicing',
          note: 'Organizing structured spreadsheets, presentations, and technical documentation.',
        },
        {
          name: 'Modern AI Tools',
          stage: 'Practicing',
          note: 'Using AI thoughtfully for ideation, code review learning, and rapid prototyping.',
        },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: 'phishing-detector',
      title: 'Phishing Message Detector',
      category: 'AI & Security',
      status: 'Prototype',
      shortDescription:
        'A web-based prototype exploring how AI language models can analyze text patterns to flag potentially suspicious or phishing messages.',
      objective:
        'Understand how social engineering cues appear in emails and SMS messages and test an accessible interface where users can check suspicious text.',
      concept:
        'Built around a lightweight Flask backend connected to an AI API that evaluates urgency cues, deceptive phrasing, and suspicious link patterns, returning clear human-readable reasoning.',
      learningOutcomes: [
        'Connecting Python Flask routes with external AI APIs cleanly',
        'Structuring clear prompt criteria for risk indicators without false certainty',
        'Designing a straightforward web interface for security awareness',
      ],
      technologies: ['Python', 'Flask', 'AI API Integration', 'Web Interface'],
      imageUrl: '/src/assets/images/project_phishing_detector_1795014679314.jpg',
      imageAlt:
        'Abstract smoked glass prism filtering electric cobalt blue light rays representing message security analysis',
      githubUrlPlaceholder: '#github-phishing-detector',
      liveUrlPlaceholder: '',
    },
    {
      id: 'packet-sniffer',
      title: 'Packet Sniffer Concept',
      category: 'Networking',
      status: 'Learning Project',
      shortDescription:
        'An educational cybersecurity and networking project exploring live packet capture and protocol inspection in a desktop interface.',
      objective:
        'Move beyond textbook networking diagrams by observing how packets, IP addresses, and transport protocols behave in practice.',
      concept:
        'Uses Python and Scapy to capture and parse packet metadata in controlled local environments, paired with a Tkinter interface to filter and inspect traffic clearly.',
      learningOutcomes: [
        'Understanding TCP, UDP, and IP header fields at a practical level',
        'Handling background packet capture cleanly inside a Tkinter GUI loop',
        'Building awareness of unencrypted traffic risks on local networks',
      ],
      technologies: ['Python', 'Scapy', 'Tkinter'],
      imageUrl: '/src/assets/images/project_packet_sniffer_1795014680714.jpg',
      imageAlt:
        'Isometric obsidian metal network routing pathways with fine cobalt blue traces',
      githubUrlPlaceholder: '#github-packet-sniffer',
      liveUrlPlaceholder: '',
    },
    {
      id: 'greenq-scheduler',
      title: 'GreenQ — Hybrid Quantum Renewable Energy Scheduler',
      category: 'Optimization',
      status: 'Experimental Concept',
      shortDescription:
        'An experimental sustainability prototype exploring flexible demand scheduling and quantum-inspired optimization for renewable energy usage.',
      objective:
        'Investigate how fluctuating renewable supply (solar/wind windows) can be matched more efficiently with shiftable energy demands.',
      concept:
        'Framed as a research-oriented prototype studying how combinatorial scheduling problems can be modeled and explored through quantum-inspired optimization heuristics alongside classical constraints.',
      learningOutcomes: [
        'Translating real-world sustainability problems into scheduling constraints',
        'Understanding where quantum-inspired optimization fits conceptually vs. classical heuristics',
        'Communicating early-stage experimental prototypes honestly without overclaiming',
      ],
      technologies: ['Python', 'Optimization Modeling', 'Quantum-Inspired Concept', 'Sustainability'],
      imageUrl: '/src/assets/images/project_greenq_scheduler_1795014681077.jpg',
      imageAlt:
        'Sculptural harmonic energy waves in acid lime intersecting a cobalt geometric grid',
      githubUrlPlaceholder: '#github-greenq-scheduler',
      liveUrlPlaceholder: '',
    },
    {
      id: 'personal-portfolio',
      title: 'Personal Portfolio Website',
      category: 'Web',
      status: 'Active Build',
      shortDescription:
        'A modular digital portfolio designed to document my diploma-to-engineering journey, technical foundations, projects, and long-term ambitions.',
      objective:
        'Create an authentic, adaptable personal brand on the web that avoids exaggerated claims and grows cleanly alongside my engineering degree.',
      concept:
        'Structured around a single centralized data module and clean modular React components, pairing dark obsidian surfaces with electric cobalt and restrained acid lime highlights.',
      learningOutcomes: [
        'Organizing scalable, data-driven UI components so content updates take seconds',
        'Balancing visual hierarchy, typography, and motion performance across devices',
        'Using AI-assisted workflows responsibly while refining design and code structure',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'AI-Assisted Workflow'],
      imageUrl: '/src/assets/images/project_portfolio_craft_1795014681118.jpg',
      imageAlt:
        'Macro architectural grid planes with brushed titanium rulers and smoked glass accents',
      githubUrlPlaceholder: '#github-personal-portfolio',
      liveUrlPlaceholder: '#home',
    },
  ] as ProjectItem[],

  journeyMilestones: [
    {
      id: 'dsa',
      title: 'Strengthening Data Structures & Algorithms',
      detail: 'Practicing core logic, problem decomposition, and time/space awareness consistently.',
      focus: 'In Focus',
    },
    {
      id: 'programming',
      title: 'Improving Core Programming Fluency',
      detail: 'Writing cleaner Python and Java code while building C++ fundamentals.',
      focus: 'In Focus',
    },
    {
      id: 'ai-ml',
      title: 'Learning AI & Machine Learning Foundations',
      detail: 'Connecting engineering coursework with hands-on exploration of applied AI.',
      focus: 'Practicing',
    },
    {
      id: 'projects',
      title: 'Developing Practical Software Projects',
      detail: 'Turning curiosity and classroom concepts into small, working builds.',
      focus: 'Practicing',
    },
    {
      id: 'problem-solving',
      title: 'Sharpening Analytical Problem-Solving',
      detail: 'Learning from debugging mistakes and approaching unfamiliar challenges calmly.',
      focus: 'Ongoing',
    },
    {
      id: 'cybersecurity',
      title: 'Exploring Cybersecurity Fundamentals',
      detail: 'Building on Infosys Springboard foundations with networking and security awareness.',
      focus: 'Practicing',
    },
    {
      id: 'portfolio',
      title: 'Building & Maintaining My Portfolio',
      detail: 'Documenting honest progress, code experiments, and technical milestones.',
      focus: 'In Focus',
    },
    {
      id: 'internships',
      title: 'Preparing for Future Internships & Placements',
      detail: 'Developing project readiness, communication clarity, and technical depth.',
      focus: 'Ongoing',
    },
  ] as JourneyMilestone[],

  futureVision: [
    {
      horizon: 'Near-Term · Engineering Years',
      title: 'Solidify Core Foundations',
      description:
        'Build undeniable command over data structures, programming languages, databases, and clean engineering habits before chasing complexity.',
      goals: [
        'Deepen proficiency in Python, Java, and DSA',
        'Build practical end-to-end academic and personal projects',
        'Secure meaningful internship exposure in software or AI',
      ],
    },
    {
      horizon: 'Mid-Term · Early Career',
      title: 'Software Craft & AI/ML Depth',
      description:
        'Gain real industry experience working on production software, understanding team architecture, and applying AI & ML thoughtfully.',
      goals: [
        'Become a reliable, well-rounded software developer',
        'Explore applied machine learning and intelligent systems deeply',
        'Contribute to meaningful technology products with real users',
      ],
    },
    {
      horizon: 'Long-Term · Builder & Venture Horizon',
      title: 'Entrepreneurship & Meaningful Ventures',
      description:
        'Combine technical engineering capability with business thinking, design sensibility, and persistence to launch technology-driven ventures.',
      goals: [
        'Identify high-impact real-world problems worth solving',
        'Develop leadership, product strategy, and execution discipline',
        'Build an independent technology business or product venture',
      ],
    },
  ] as VisionHorizon[],

  beyondCode: [
    {
      id: 'cricket',
      title: 'Cricket',
      subtitle: 'Strategy & Discipline',
      description:
        'Passionate about cricket — appreciating the focus, reading game situations under pressure, and team rhythm.',
      span: 'wide',
    },
    {
      id: 'fitness',
      title: 'Fitness & Gym',
      subtitle: 'Consistency',
      description:
        'Training regularly to stay sharp, build long-term discipline, and carry steady energy into daily study and building.',
      span: 'normal',
    },
    {
      id: 'painting',
      title: 'Painting & Creativity',
      subtitle: 'Visual Expression',
      description:
        'Exploring color, composition, and visual craft on canvas — which naturally shapes how I think about UI and design.',
      span: 'normal',
    },
    {
      id: 'ai-tools',
      title: 'Exploring AI Tools & Tech',
      subtitle: 'Curiosity',
      description:
        'Testing emerging software tools, workflows, and modern AI utilities to see how technology changes everyday work.',
      span: 'normal',
    },
    {
      id: 'learning',
      title: 'Learning New Things',
      subtitle: 'Growth Mindset',
      description:
        'Enjoying the process of starting as a beginner in new tools, subjects, and skills without fear of getting things wrong.',
      span: 'normal',
    },
    {
      id: 'entrepreneurship',
      title: 'Business & Venture Ideas',
      subtitle: 'Builder Mindset',
      description:
        'Thinking about how technology translates into useful products, sustainable business models, and future entrepreneurial paths.',
      span: 'wide',
    },
  ] as InterestItem[],

  certifications: [
    {
      id: 'infosys-cybersecurity',
      title: 'Cyber Security Foundation',
      platform: 'Infosys Springboard',
      status: 'Completed',
      description:
        'Foundational certification covering core cybersecurity principles, common threat vectors, digital hygiene, and defensive security awareness.',
      topics: ['Security Fundamentals', 'Threat Awareness', 'Risk & Defense Basics'],
      certificateImagePlaceholderNote:
        'Certificate image placeholder — attach your scanned Infosys Springboard certificate image here.',
      verifyUrlPlaceholder: '#certificate-verify-cybersecurity',
    },
    {
      id: 'infosys-unix',
      title: 'Introduction To Unix',
      platform: 'Infosys Springboard',
      status: 'Completed',
      description:
        'Foundational learning covering Unix architecture, essential shell commands, file system structure, permissions, and command-line workflows.',
      topics: ['Unix File System', 'Shell Commands', 'Permissions & Processes'],
      certificateImagePlaceholderNote:
        'Certificate image placeholder — attach your scanned Infosys Springboard certificate image here.',
      verifyUrlPlaceholder: '#certificate-verify-unix',
    },
  ] as CertificationItem[],

  contact: {
    heading: "Let's Connect.",
    subheading:
      'Open to learning conversations, student collaborations, feedback on my projects, and future internship opportunities.',
    emailPlaceholder: 'your.email@example.com',
    isEmailPlaceholder: true,
    links: [
      {
        id: 'linkedin',
        label: 'LinkedIn',
        handlePlaceholder: 'linkedin.com/in/your-profile',
        url: '',
      },
      {
        id: 'github',
        label: 'GitHub',
        handlePlaceholder: 'github.com/your-username',
        url: '',
      },
      {
        id: 'instagram',
        label: 'Instagram (Optional)',
        handlePlaceholder: 'instagram.com/your-handle',
        url: '',
      },
    ],
  },
};
