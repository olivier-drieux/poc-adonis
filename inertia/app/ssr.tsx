import { createInertiaApp } from '@inertiajs/react'
import ReactDOMServer from 'react-dom/server'
import Layout from '~/components/layout'

export default function render(page: any) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = import.meta.glob('../pages/**/*.tsx', { eager: true })
      return pages[`../pages/${name}.tsx`]
    },
    setup: ({ App, props }) => (
      <Layout>
        <App {...props} />
      </Layout>
    ),
  })
}
