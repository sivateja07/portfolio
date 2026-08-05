import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import tcmHelpDesk from '../images/certifications/tcm-helpdesk.jpg';
import linuxEssentials from '../images/certifications/linux-essentials.jpg';
import networkPlus from '../images/certifications/network-plus.jpg';
import comptiaA from '../images/certifications/comptia-a.jpg';
import {
  About,
  Hero,
  Certification,
  ContactSection,
  ContactType,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Siva Teja Mattaparthi | IT Support & Systems Administration Portfolio',
  description:
    'Portfolio of Siva Teja Mattaparthi showcasing IT Support, Systems Administration, Microsoft 365, Active Directory, Azure, Networking, PowerShell, home labs, certifications, and technical projects.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Resume: 'resume',
  Certifications: 'certifications',
  Portfolio: 'portfolio',
  Contact: 'contact',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,

  name: `Hi, I'm Siva Teja Mattaparthi.`,

  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">
          IT Support • Systems Administration • Cyber Security
        </strong>
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I build hands-on IT labs and projects in Windows Server, Active Directory,
        Microsoft 365, Ticketing, Networking, Remote Desktop and PowerShell. This website showcases my
        projects, technical labs, certifications, and learning journey in IT.
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Away from the keyboard, you'll usually find me exploring aerospace and space
        technology or writing original movie and story concepts.
      </p>
    </>
  ),

  actions: [
    {
      href: "/assets/resume.pdf",
      text: "Resume",
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: "#portfolio",
      text: "Labs",
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm an IT graduate with a Master's in Information Technology from RMIT University and a Bachelor's in Computer Science and Engineering from SRM Institute of Science and Technology. I hold an Australian Subclass 485 Graduate Visa and am seeking an entry-level IT Support or Help Desk role to begin my professional career in Australia. I enjoy building hands-on labs, exploring enterprise technologies, and documenting practical solutions.`,
  aboutItems: [
    {
      label: 'Location',
      text: 'Melbourne, Victoria',
      Icon: MapIcon,
    },
    {
      label: 'Age',
      text: '24',
      Icon: CalendarIcon,
    },
    {
      label: 'Nationality',
      text: 'Indian',
      Icon: FlagIcon,
    },
    {
      label: 'Interests',
      text: 'Aerospace, Aviation & Creative Writing',
      Icon: SparklesIcon,
    },
    {
      label: 'Study',
      text: 'RMIT University',
      Icon: AcademicCapIcon,
    },
    {
      label: 'Career Focus',
      text: 'IT Support & Cyber Security',
      Icon: BuildingOffice2Icon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Core IT',
    skills: [
      {
        name: 'Windows 10/11',
        level: 9,
      },
      {
        name: 'Linux',
        level: 9,
      },
      {
        name: 'Remote Support',
        level: 9,
      },
      {
        name: 'Windows Active Directory',
        level: 9,
      },
      {
        name: 'Microsoft 365',
        level: 9,
      },
    ],
  },
  {
    name: 'IT Support',
    skills: [
      {
        name: 'Microsoft Intune',
        level: 8,
      },
      {
        name: 'Microsoft Entra ID',
        level: 8,
      },
      {
        name: 'ServiceNow',
        level: 8,
      },
      {
        name: 'Jira Service Management',
        level: 8,
      },
    ],
  },
  {
    name: 'Networking',
    skills: [
      {
        name: 'TCP/IP',
        level: 9,
      },
      {
        name: 'DNS & DHCP',
        level: 9,
      },
      {
        name: 'VPN & VLANs',
        level: 8,
      },
      {
        name: 'Routing & Switching',
        level: 8,
      },
    ],
  },
  {
    name: 'Cloud & Automation',
    skills: [
      {
        name: 'Microsoft Azure',
        level: 9,
      },
      {
        name: 'PowerShell',
        level: 9,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Microsoft Sentinel',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Microsoft 365 Administration Lab',
    description: 'Hands-on Microsoft 365 administration lab. Coming soon.',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Windows Active Directory Home Lab',
    description: 'Configured a Windows Server domain with Active Directory, DNS, Group Policy, and domain-joined clients.',
    url: '/labs/active-directory',
    image: porfolioImage2,
  },
  {
    title: 'OSI Model: Networking Explained Like a Bro Before an Exam',
    description: 'A beginner-friendly article explaining the seven layers of the OSI Model using simple analogies and practical networking examples. Published on LinkedIn as part of my technical writing series.',
    url: 'https://www.linkedin.com/pulse/osi-model-networking-explained-like-bro-before-exam-mattaparthi--lf4gc',
    image: porfolioImage3,
  },
  {
    title: 'Ticketing Lab-Peppermint',
    description: 'Deployed and managed a containerised Peppermint Help Desk platform while practicing real-world ITSM ticket creation, troubleshooting, escalation, and resolution workflows.',
    url: '/pdfs/ticketing_lab.pdf',
    image: porfolioImage4,
  },
  {
    title: 'SOHO Router Configuration & Network Troubleshooting Lab',
    description: 'Configured a TP-Link router and performed network diagnostics.',
    url: '/labs/soho-router',
    image: porfolioImage5,
  },
  {
    title: 'Linux System Administration Lab',
    description: 'Ubuntu administration & Core Linux administration tasks and commands',
    url: '/pdfs/linux_lab.pdf',
    image: porfolioImage6,
  },
  {
    title: 'Windows System Administration and Troubleshooting Lab',
    description: 'Windows 10 administration and troubleshooting lab with user management, permissions, Task Scheduler, Event Viewer, Registry, CMD, and networking.',
    url: '/pdfs/windows_lab.pdf',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Azure Honeypot Threat Monitoring',
    description: 'Azure honeypot with Microsoft Sentinel threat monitoring.',
    url: 'https://github.com/sivateja07/SOC_Honeypot_Azure/blob/main/Report/Sentinel_HP_Report.pdf',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Microsoft Intune Administration Lab',
    description: 'Microsoft Intune administration lab coming soon.',
    url: '',
    image: porfolioImage11,
  },
];

/**
 * Resume section
 */

export const education: TimelineItem[] = [
  {
    date: 'July 2023 – December 2025',
    location: 'RMIT University • Melbourne, Australia',
    title: 'Master of Information Technology',
    content: (
      <p>
        Specialised in cloud computing, algorithms, databases, machine learning,
        and software development while completing practical projects and
        industry-focused coursework.
      </p>
    ),
  },
  {
    date: 'July 2019 – May 2023',
    location: 'SRM Institute of Science and Technology • Chennai, India',
    title: 'Bachelor of Computer Science and Engineering',
    content: (
      <p>
        Built a strong foundation in computer science through coursework in
        programming, data structures, algorithms, compiler design, artificial
        intelligence, operating systems, software engineering, engineering
        mathematics, and management principles for engineers.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2025 – November 2025',
    location: 'Australian Red Cross Lifeblood • Melbourne, Australia',
    title: 'Software Engineering Intern',
    content: (
      <p>
        Contributed to the development of a proof-of-concept Retrieval-Augmented
        Generation (RAG) solution by implementing AWS Lambda backend services
        for document processing workflows. Worked with Amazon S3, AWS Lambda,
        Amazon OpenSearch, and DynamoDB to support document ingestion,
        processing, indexing, and semantic retrieval for enterprise knowledge
        search.
      </p>
    ),
  },
];

/**
 * Certifications
 */
export const certifications: Certification[] = [
  {
    title: 'Practical Help Desk',
    issuer: 'TCM Security',
    image: tcmHelpDesk,
    credentialUrl: '',
  },
  {
    title: 'Linux Essentials',
    issuer: 'Cisco Networking Academy',
    image: linuxEssentials,
    credentialUrl:
      'https://www.credly.com/badges/3ce7fd8c-1f14-450b-91af-940aea76b506/linked_in_profile',
  },
  {
    title: 'CompTIA Network+',
    issuer: 'Udemy • Jason Dion',
    image: networkPlus,
    credentialUrl:
      'https://www.udemy.com/certificate/UC-1f1e3cff-81ef-4e3a-b58f-16209cea8f30/',
  },
  {
    title: 'CompTIA A+ Core 1',
    issuer: 'Udemy • Jason Dion',
    image: comptiaA,
    credentialUrl:
      'https://www.udemy.com/certificate/UC-89dbc461-2bfe-420b-8963-aaa733c8d212/',
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in Touch',

  description:
    "Whether you're recruiting for an IT Support, Systems Administration, or simply want to connect, feel free to reach out. I'm always happy to discuss technology, projects and new opportunities.",

  items: [
    {
      type: ContactType.Email,
      text: 'mattaparthisivateja@gmail.com',
      href: 'mailto:mattaparthisivateja@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '+61 0466622051',
      href: 'tel:+610466622051',
    },
    {
      type: ContactType.Location,
      text: 'Melbourne, Victoria, Australia',
      href: 'https://maps.google.com/?q=Melbourne,+Victoria,+Australia',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Sivateja Mattaparthi',
      href: 'https://www.linkedin.com/in/sivateja-mattaparthi-2ba302230/',
    },
    {
      type: ContactType.Github,
      text: 'sivateja07',
      href: 'https://github.com/sivateja07',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/sivateja07'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sivateja-mattaparthi-2ba302230/'},
];
