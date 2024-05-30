import {defineConfig} from 'sanity'

import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {colorInput} from '@sanity/color-input'
import {deskTool} from 'sanity/desk'
import {languages} from './../languages'
import {projectId, adminTitle} from './environment'
import structure from './structure'
import {defaultDocumentNode} from './structure/defaultDocumentNode'
import {structureTool} from 'sanity/structure'

const langByDefault = languages.find((lang) => lang.default)?.id || languages[0].id

export default defineConfig({
  name: 'default',
  title: adminTitle,

  projectId: projectId,
  dataset: 'production',

  plugins: [
    // deskTool({structure, defaultDocumentNode}),
    structureTool({structure, defaultDocumentNode}),
    visionTool(),
    colorInput(),
    internationalizedArray({
      languages: languages,
      defaultLanguages: [langByDefault],
      buttonAddAll: false,
      fieldTypes: ['string', 'text', 'content', 'image', 'article'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
