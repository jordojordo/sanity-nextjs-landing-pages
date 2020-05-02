export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5ead8ab8d8d2b7aea99e11f6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7tagtrj3',
                  apiId: '224d42e5-5eae-4b35-b744-0bccf341d4f1'
                },
                {
                  buildHookId: '5ead8ab9bc7396c413ceb1d0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-d9yhjv2w',
                  apiId: 'd9ce73c1-83bb-4b09-837e-beb4675592ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jordojordo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-d9yhjv2w.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
