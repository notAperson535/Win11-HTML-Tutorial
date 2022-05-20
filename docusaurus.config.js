// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Windows 11 in HTML Tutorial',
  tagline: 'A tutorial on how to create Windows 11 in HTML',
  url: 'https://win11-tutorial.notaperson535.is-a.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'notAperson535', // Usually your GitHub org/user name.
  projectName: 'Win11-HTML-Tutorial', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/notAperson535/Win11-HTML-Tutorial/tree/website/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Windows 11 in HTML Tutorial',
        logo: {
          alt: 'Windows 11 in HTML Tutorial Logo',
          src: 'img/icon.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'basefiles',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/notAperson535/Win11-HTML-Tutorial',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/basefiles',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/notAperson535/Win11-HTML-Tutorial',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} notAperson535.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
