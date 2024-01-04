import {defineCliConfig} from 'sanity/cli'
import {projectId} from './environment'

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: 'production',
  },
})
