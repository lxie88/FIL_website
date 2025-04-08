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
          text: 'Research Areas',
          href: getPermalink('/research/areas'),
        },
        {
          text: 'Lab Equipment',
          href: getPermalink('/research/equipment'),
        },
      ],
    },
    {
      text: 'Team',
      links: [
        {
          text: 'Current Members',
          href: getPermalink('/team/current-members'),
        },
        {
          text: 'Alumni',
          href: getPermalink('/team/alumni'),
        },
      ],
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'Lab Resources',
          href: getPermalink('/resources/lab'),
        },
        {
          text: 'Publications',
          href: getPermalink('/resources/publications'),
        },
        {
          text: 'Data Repository',
          href: getPermalink('/resources/data'),
        },
        {
          text: 'Code Repository',
          href: getPermalink('/resources/code'),
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
        { text: 'Research Areas', href: getPermalink('/research/areas') },
        { text: 'Lab Equipment', href: getPermalink('/research/equipment') },
      ],
    },
    {
      title: 'Team',
      links: [
        { text: 'Faculty', href: getPermalink('/team/currentmembers') },
        { text: 'Alumni', href: getPermalink('/team/alumni') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Lab Resources', href: getPermalink('/resources/lab') },
        { text: 'Publications', href: getPermalink('/resources/publications') },
        { text: 'Data Repository', href: getPermalink('/resources/data') },
        { text: 'Code Repository', href: getPermalink('/resources/code') },
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
    { ariaLabel: 'Google Scholar', icon: 'tabler:school', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    <span class="text-sm">© ${new Date().getFullYear()} Fluid Innovation Lab. All rights reserved.</span>
  `,
};
