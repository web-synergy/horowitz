import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {languages} from './../languages'
import {projectId} from './environment'

const langByDefault = languages.find((lang) => lang.default)?.id || languages[0].id

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
      defaultLanguages: [langByDefault],
      buttonAddAll: false,
      fieldTypes: ['string', 'text', 'content'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
