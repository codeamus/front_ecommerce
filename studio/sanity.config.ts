import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'
import {media, mediaAssetSource} from 'sanity-plugin-media'
import {customDocumentActions} from './plugins/customDocumentActions'
import Navbar from './components/studio/Navbar'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'default',
  title: 'test',

  // 👇 usa envs y deja fallback seguro a prod/dev
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? '8v549uft',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? (isDev ? 'development' : 'production'),

  // 👇 importante para que el Studio funcione en /studio
  basePath: '/studio',

  plugins: [
    structureTool({structure}),
    colorInput(),
    imageHotspotArrayPlugin(),
    customDocumentActions(),
    media(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {types: schemaTypes},

  form: {
    file: {
      assetSources: (prev) => prev.filter((s) => s !== mediaAssetSource),
    },
    image: {
      assetSources: (prev) => prev.filter((s) => s === mediaAssetSource),
    },
  },

  studio: {components: {navbar: Navbar}},
})
