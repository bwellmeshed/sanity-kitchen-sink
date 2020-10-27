export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f97aba433372c8aa257f8b5',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4gwmqgtk',
                  apiId: 'a0329f8a-5128-4f42-b51b-37557cef794e'
                },
                {
                  buildHookId: '5f97aba5e88654867ed4c092',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-np131rp1',
                  apiId: 'e720197b-8e97-4e89-a196-fd0fcf16313c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bwellmeshed/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-np131rp1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
