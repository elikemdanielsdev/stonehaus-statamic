// This is all you.
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import "../css/site.css"
import BaseLayout from './Layouts/BaseLayout'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    const page = pages[`./Pages/${name}.jsx`]
    page.default.layout = page.default.layout || ((page) => <BaseLayout children={page} />)
    return page

  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})