import React from 'react'
import { Head } from '@inertiajs/react'

export default function SeoMeta({ title, meta_title, meta_image }) {
  return (
    <Head>
      <title>{title ? `${title} - My App` : 'My App'}</title>
      <meta property="og:title" content={meta_title ? `${meta_title}` : `${title}`}></meta>
      <meta property="og:image" content={meta_image}></meta>
    </Head>
  )
}
