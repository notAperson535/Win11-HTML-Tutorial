// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [

        {
            type: 'category',
            label: 'Creating the basics',
            link: {
              type: 'generated-index',
            },
            collapsed: false,
            items: [
                'basefiles',
                'startmenu',
                'taskbar',
                'script',
            ],
          },

          {
            type: 'category',
            label: 'Getting more complicated',
            link: {
              type: 'generated-index',
            },
            collapsed: false,
            items: [
                'searchmenu',
            ],
          },
    
    ],
}
    module.exports = sidebars
