import dynamic from 'next/dynamic'
import { Builder } from '@builder.io/react'

const Text = dynamic(async () => {
  return (await import('./Text')).default
})

Builder.registerComponent(Text, {
  name: 'Text element',
  inputs: [
    {
      name: 'headline',
      type: 'string',
      defaultValue: 'Galerija slika',
    },
    {
      name: 'description',
      type: 'string',
    },
  ],
})
