// .tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || "master";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.NEXT_PUBLIC_TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "media",
      publicFolder: "public"
    }
  },
  search: {
    tina: {
      indexerToken: process.env.NEXT_PUBLIC_TINA_SEARCH_TOKEN || "",
      stopwordLanguages: ["fra"]
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
  schema: {
    collections: [
      {
        label: "Posts",
        name: "posts",
        path: "posts",
        format: "mdx",
        defaultItem: () => {
          return {
            shouldBePublished: false,
            date: (/* @__PURE__ */ new Date()).toISOString()
          };
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            required: true
          },
          {
            type: "datetime",
            label: "Date de publication",
            name: "date",
            required: true,
            ui: {
              dateFormat: "DD/MM/YYYY"
            }
          },
          {
            type: "boolean",
            label: "Publier",
            name: "shouldBePublished",
            description: "Si activ\xE9, le post sera publi\xE9 sur le site (\xE0 activer uniquement quand le post est pr\xEAt)"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
            templates: [
              {
                name: "Button",
                label: "Button",
                fields: [
                  {
                    name: "buttonText",
                    label: "Message button",
                    type: "string",
                    required: true
                  },
                  {
                    name: "href",
                    label: "Nom du fichier avec extension ou url compl\xE8te",
                    type: "string",
                    required: true
                  }
                ]
              },
              {
                name: "SmallImg",
                label: "Image dans texte",
                fields: [
                  {
                    name: "src",
                    label: "Nom du fichier avec extension",
                    type: "string",
                    required: true
                  }
                ]
              },
              {
                name: "Img",
                label: "Image",
                fields: [
                  {
                    name: "src",
                    label: "Nom du fichier avec extension",
                    type: "string",
                    required: true
                  },
                  {
                    name: "width",
                    label: "Largeur image en pixel",
                    type: "number"
                  }
                ]
              },
              {
                name: "VideoYoutube",
                label: "Vid\xE9o Youtube",
                fields: [
                  {
                    name: "src",
                    label: "Url vid\xE9o",
                    type: "string",
                    required: true
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: "Events",
        name: "events",
        path: "calendar",
        format: "json",
        fields: [
          {
            type: "string",
            label: "Organisateur",
            name: "organizer",
            required: true,
            list: true,
            options: [
              {
                value: "vl",
                label: "V\xE9lo Longchamp"
              },
              {
                value: "fg",
                label: "France Galop"
              },
              {
                value: "club",
                label: "Club"
              },
              {
                value: "autre",
                label: "Autre"
              }
            ]
          },
          {
            type: "string",
            label: "Date d\xE9but",
            name: "startDate",
            required: true,
            ui: {
              component: "date",
              // @ts-ignore
              dateFormat: "DD/MM/YYYY",
              timeFormat: "HH:mm"
            }
          },
          {
            type: "string",
            label: "Date fin",
            name: "endDate",
            required: true,
            ui: {
              component: "date",
              // @ts-ignore
              dateFormat: "DD/MM/YYYY",
              timeFormat: "HH:mm"
            }
          },
          {
            type: "string",
            label: "Titre",
            name: "title",
            required: true
          },
          {
            type: "string",
            label: "D\xE9scription",
            name: "description"
          },
          {
            type: "string",
            label: "Lien",
            name: "url"
          },
          {
            type: "boolean",
            label: "Toute la journ\xE9e ?",
            name: "all_day"
          },
          {
            type: "boolean",
            label: "R\xE9current ?",
            name: "recurrent"
          },
          {
            type: "datetime",
            label: "Date de fin de r\xE9currence",
            name: "end_date_repeat"
          },
          {
            type: "string",
            list: true,
            label: "Jour de r\xE9currence",
            name: "repeated_day",
            ui: {
              component: "list",
              // @ts-ignore
              field: {
                options: [
                  "Lundi",
                  "Mardi",
                  "Mercredi",
                  "Jeudi",
                  "Vendredi",
                  "Samedi",
                  "Dimanche"
                ],
                component: "select"
              }
            }
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
