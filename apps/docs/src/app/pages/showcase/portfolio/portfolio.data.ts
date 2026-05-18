import type {
  AboutCard,
  NavLink,
  Project,
  Skill,
  TimelineEntry,
} from './portfolio.types';

export const ASSET_PATH = '/showcase/portfolio';

export const NAV_LINKS: NavLink[] = [
  { href: '/showcase/portfolio#home', label: 'Home', external: false },
  { href: '/showcase/portfolio#journey', label: 'Journey', external: false },
  { href: '/showcase/portfolio#projects', label: 'Projects', external: false },
  { href: '#', label: 'Blogs', external: true },
];

export const SKILLS: Skill[] = [
  { text: 'Angular', iconSlug: 'angular', iconLabel: 'Angular' },
  { text: 'TypeScript', iconSlug: 'typescript', iconLabel: 'TypeScript' },
  { text: 'JavaScript', iconSlug: 'javascript', iconLabel: 'JavaScript' },
  { text: 'ReactJS', iconSlug: 'react', iconLabel: 'React' },
  { text: 'Node.js', iconSlug: 'nodedotjs', iconLabel: 'Node.js' },
  { text: 'Python', iconSlug: 'python', iconLabel: 'Python' },
  { text: 'Java', iconSlug: 'openjdk', iconLabel: 'Java' },
  { text: 'Quarkus', iconSlug: 'quarkus', iconLabel: 'Quarkus' },
  { text: 'Docker', iconSlug: 'docker', iconLabel: 'Docker' },
  { text: 'Claude Code', iconSlug: 'claude', iconLabel: 'Claude' },
];

export const ABOUT_CARDS: AboutCard[] = [
  {
    title: 'About Me',
    description:
      "I'm currently working as a Geospatial Software Engineer at Camptocamp, where I specialize in geospatial software development.",
    image: 'Character1.svg',
    imageAlt: 'Character1',
    imagePosition: 'right',
  },
  {
    title: 'Geospatial Development',
    description:
      'I thrive on continuously learning various geospatial technologies, from GIS software to spatial databases, to shape ideas into functional applications.',
    image: 'Character2.svg',
    imageAlt: 'Character2',
    imagePosition: 'left',
  },
  {
    title: 'Interest in Technology',
    description:
      'Technology has fascinated me since I was young, especially the joy of building things. Combining tech with hands-on creation has always felt just right for me.',
    image: 'Character3.svg',
    imageAlt: 'Character3',
    imagePosition: 'right',
  },
  {
    title: 'Other Hobbies',
    description:
      'Here are some of my other passions: I like to dance, play chess, love watching F1, and am a Potterhead.',
    image: 'Character4.svg',
    imageAlt: 'Character4',
    imagePosition: 'left',
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    id: 1,
    title: 'Lorem Ipsum @ Dolor Sit',
    date: 'Oct 2023 - Present',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae sem sed neque facilisis cursus, sed tempor justo.',
    location: [108.2022, 16.0471],
    locationName: 'Da Nang, Vietnam',
    popupTitle: 'Dolor Sit',
    popupDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nibh at arcu posuere tempor.',
  },
  {
    id: 2,
    title: 'Consectetur Elit @ Amet Magna',
    date: '2022 - 2024',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    location: [106.6297, 10.8231],
    locationName: 'Ho Chi Minh, Vietnam',
    popupTitle: 'Amet Magna',
    popupDescription:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Curabitur blandit tempus porttitor.',
  },
  {
    id: 3,
    title: 'Integer Vitae @ Sem Cursus',
    date: '2019 - 2022',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    location: [105.7469, 10.0452],
    locationName: 'Can Tho, Vietnam',
    popupTitle: 'Sem Cursus',
    popupDescription:
      'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui.',
  },
  {
    id: 4,
    title: 'Sed Tempor @ Justo Labs',
    date: '2019 - 2019',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    location: [7.4474, 46.948],
    locationName: 'Bern, Switzerland',
    popupTitle: 'Justo Labs',
    popupDescription:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
  },
  {
    id: 5,
    title: 'Facilisis Magna @ Cursus Nulla',
    date: '2017 - 2019',
    description:
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla.',
    location: [13.405, 52.52],
    locationName: 'Berlin, Germany',
    popupTitle: 'Cursus Nulla',
    popupDescription:
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla.',
  },
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    title: 'Frontend Component Lab',
    description:
      'A placeholder project for polished UI experiments, reusable components, and responsive interaction patterns built around my current frontend stack.',
    tech: ['Angular', 'TypeScript', 'JavaScript', 'ReactJS'],
    github: '#',
    live: '#',
    image: 'project-frontend-lab.svg',
  },
  {
    title: 'Full-Stack Service Starter',
    description:
      'A dummy backend-focused project for API design, service orchestration, and containerized development using the languages and runtimes I work with.',
    tech: ['Node.js', 'Python', 'Java', 'Quarkus', 'Docker'],
    github: '#',
    live: '#',
    image: 'project-service-starter.svg',
  },
  {
    title: 'AI-Assisted Dev Workflow',
    description:
      'A placeholder for tooling, automation, and rapid prototyping workflows that combine strong typing, modern web apps, containers, and AI coding assistance.',
    tech: ['Claude Code', 'TypeScript', 'Angular', 'Docker'],
    github: '#',
    live: '#',
    image: 'project-ai-workflow.svg',
  },
];
