import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'promoBanner',
  title: 'Promo Banner',
  type: 'document',
  fields: [
    defineField({name: 'active', title: 'Activo', type: 'boolean', initialValue: true}),
    defineField({name: 'title', title: 'Título', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'subtitle', title: 'Subtítulo', type: 'string'}),
    defineField({name: 'ctaText', title: 'CTA Text', type: 'string'}),
    defineField({name: 'ctaUrl', title: 'CTA URL', type: 'url'}),
    defineField({name: 'image', title: 'Imagen', type: 'image', options: {hotspot: true}}),
  ],
})
