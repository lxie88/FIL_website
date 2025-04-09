import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Research',
      links: [
        {
          text: 'Current Projects',
          href: getPermalink('/research/projects'),
        },
        {
          text: 'Publications',
          href: getPermalink('/research/publications'),
        },
        {
          text: 'Lab Resources',
          href: getPermalink('/resources/lab'),
        },
      ],
    },
    {
      text: 'Team',
      links: [
        {
          text: 'Current Members',
          href: getPermalink('/team/current'),
        },
        {
          text: 'Alumni',
          href: getPermalink('/team/alumni'),
        },
      ],
    },
    {
      text: 'Teaching & Outreach',
      links: [
        {
          text: 'Teaching',
          href: getPermalink('/teaching'),
        },
        {
          text: 'Outreach',
          href: getPermalink('/outreach'),
        },
      ],
    },
    {
      text: 'News',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Join Our Lab', href: getPermalink('/join'), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Research',
      links: [
        { text: 'Current Projects', href: getPermalink('/research/projects') },
        { text: 'Publications', href: getPermalink('/research/publications') },
        { text: 'Lab Resources', href: getPermalink('/resources/lab') },
      ],
    },
    {
      title: 'Team',
      links: [
        { text: 'Current Members', href: getPermalink('/team/current') },
        { text: 'Alumni', href: getPermalink('/team/alumni') },
      ],
    },
    {
      title: 'Teaching & Outreach',
      links: [
        { text: 'Teaching', href: getPermalink('/teaching') },
        { text: 'Outreach', href: getPermalink('/outreach') },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'News', href: getBlogPermalink() },
        { text: 'Join Our Lab', href: getPermalink('/join') },
        { text: 'Social Media', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Google Scholar', icon: 'tabler:book', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/fluidinnovationlab' },
  ],
  footNote: `
    <span class="text-sm">© ${new Date().getFullYear()} Fluid Innovation Lab. All rights reserved.</span>
  `,
};
