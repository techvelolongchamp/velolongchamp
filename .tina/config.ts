import { defineConfig } from 'tinacms'

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'master'

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.NEXT_PUBLIC_TINA_TOKEN || '',
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'media',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        label: 'Posts',
        name: 'posts',
        path: 'posts',
        format: 'mdx',
        defaultItem: () => {
          return {
            shouldBePublished: false,
            date: new Date().toISOString(),
          }
        },
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
            required: true,
          },
          {
            type: 'datetime',
            label: 'Date de publication',
            name: 'date',
            required: true,
            ui: {
              dateFormat: 'DD/MM/YYYY',
            },
          },
          {
            type: 'boolean',
            label: 'Publier',
            name: 'shouldBePublished',
            description:
              'Si activé, le post sera publié sur le site (à activer uniquement quand le post est prêt)',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
            templates: [
              {
                name: 'Button',
                label: 'Button',
                fields: [
                  {
                    name: 'buttonText',
                    label: 'Message button',
                    type: 'string',
                  },
                  {
                    name: 'href',
                    label: 'Nom du fichier avec extension ou url complète',
                    type: 'string',
                  },
                ],
              },
              {
                name: 'SmallImg',
                label: 'Image dans texte',
                fields: [
                  {
                    name: 'src',
                    label: 'Nom du fichier avec extension',
                    type: 'string',
                  },
                ],
              },
              {
                name: 'VideoYoutube',
                label: 'Vidéo Youtube',
                fields: [
                  {
                    name: 'src',
                    label: 'Url vidéo',
                    type: 'string',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
})
