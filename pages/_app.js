import '../styles/globals.css'

import Layout from '../components/layout/Layout'

function BlogApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default BlogApp
