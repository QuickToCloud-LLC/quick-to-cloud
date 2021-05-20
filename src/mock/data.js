import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Andru Estes', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Andru Estes',
  subtitle: 'I am a Cloud Architect and Instructor',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'Andru Estes is an Enterprise Cloud Architect and Consultant. He has more than a decade of experience with enterprise systems, ranging from single VMware clusters to globally distributed public cloud applications.',
  paragraphTwo: 'In addition to his technical work, Andru also enjoys creating content for people to consume to better their skillsets.',
  paragraphThree: 'In his spare time, Andru enjoys working out, playing golf, and working with his two Australian Shepherds (Archie and Zoey).',
  linkedin: 'https://linkedin.com/in/robertandruestes', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'blog.png',
    title: 'Blog',
    info: 'If you are interested in my thoughts, ideas, and rants, then feel free to check out my blog posts!',
    info2: '',
    url: 'https://medium.com/@andruestes',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'q2c.png',
    title: 'Quick To Cloud Courses',
    info: 'I run my own store for instructional content.',
    info2: 'Check it out when you get time!',
    url: 'https://learn.quicktocloud.io/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pluralsight.png',
    title: 'Pluralsight',
    info: 'Check out my video courses focused on cloud computing',
    info2: 'My courses range from deep dives into specific services, all the way to certification prep.',
    url: 'https://app.pluralsight.com/profile/author/andru-estes',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Let\'s Connect!',
  email: 'andru.estes@quicktocloud.io',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/andru_estes',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/robertandruestes',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/andru-estes',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
