import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Research',
      links: [
        {
          text: 'Current Projects',
          href: getPermalink('/research/projects'),
          icon: 'tabler:microscope',
        },
        {
          text: 'Publications',
          href: getPermalink('/research/publications'),
          icon: 'tabler:book',
        },
        {
          text: 'Lab Resources',
          href: getPermalink('/resources/lab'),
          icon: 'tabler:tools',
        },
      ],
    },
    {
      text: 'Team',
      links: [
        {
          text: 'Current Members',
          href: getPermalink('/team/current'),
          icon: 'tabler:users',
        },
        {
          text: 'Alumni',
          href: getPermalink('/team/alumni'),
          icon: 'tabler:graduation-cap',
        },
      ],
    },
    {
      text: 'Teaching & Outreach',
      links: [
        {
          text: 'Teaching',
          href: getPermalink('/teaching'),
          icon: 'tabler:school',
        },
        {
          text: 'Outreach',
          href: getPermalink('/outreach'),
          icon: 'tabler:world',
        },
      ],
    },
    {
      text: 'News',
      href: getPermalink('/news'),
      icon: 'tabler:news',
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
      icon: 'tabler:mail',
    },
  ],
  actions: [
    { 
      text: 'UNLV', 
      href: 'https://www.unlv.edu', 
      target: '_blank',
      icon: 'tabler:building-university',
      variant: 'primary',
      image: '/images/logos/UNLV-186.png',
      className: 'hover:scale-105 transition-transform duration-300'
    }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Research',
      links: [
        { text: 'Current Projects', href: getPermalink('/research/projects'), icon: 'tabler:microscope' },
        { text: 'Publications', href: getPermalink('/research/publications'), icon: 'tabler:book' },
        { text: 'Lab Resources', href: getPermalink('/resources/lab'), icon: 'tabler:tools' },
      ],
    },
    {
      title: 'Team',
      links: [
        { text: 'Current Members', href: getPermalink('/team/current'), icon: 'tabler:users' },
        { text: 'Alumni', href: getPermalink('/team/alumni'), icon: 'tabler:graduation-cap' },
      ],
    },
    {
      title: 'Teaching & Outreach',
      links: [
        { text: 'Teaching', href: getPermalink('/teaching'), icon: 'tabler:school' },
        { text: 'Outreach', href: getPermalink('/outreach'), icon: 'tabler:world' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'Contact', href: getPermalink('/contact'), icon: 'tabler:mail' },
        { text: 'News', href: getPermalink('/news'), icon: 'tabler:news' },
        { text: 'Join Our Lab', href: getPermalink('/join'), icon: 'tabler:user-plus' },
        { text: 'Social Media', href: '#', icon: 'tabler:share' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms'), icon: 'tabler:file-text' },
    { text: 'Privacy Policy', href: getPermalink('/privacy'), icon: 'tabler:shield-lock' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#', className: 'hover:text-blue-400 transition-colors duration-300' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#', className: 'hover:text-blue-600 transition-colors duration-300' },
    { ariaLabel: 'Google Scholar', icon: 'tabler:book', href: 'https://scholar.google.com/citations?user=JFecTysAAAAJ&hl=en', className: 'hover:text-green-600 transition-colors duration-300' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/fluidinnovationlab', className: 'hover:text-gray-600 transition-colors duration-300' },
  ],
  footNote: `
    <div class="flex flex-col items-center space-y-2">
      <span class="text-sm">© ${new Date().getFullYear()} Fluid Innovation Lab</span>
      <span class="text-xs text-gray-500">Advancing Fluid Dynamics Research</span>
    </div>
  `,
};
