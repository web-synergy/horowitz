import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {languages} from './../languages'
import {projectId} from './environment'

export default defineConfig({
  name: 'default',
  title: 'Horowitz dev',

  projectId: projectId,
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    internationalizedArray({
      languages: languages,
      defaultLanguages: [languages[0].id],
      buttonAddAll: false,
      fieldTypes: ['string', 'text', 'content'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
