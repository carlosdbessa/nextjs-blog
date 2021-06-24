import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello Guys//!</p>
        <p>
          (I'm back, this is a second csance!!!)
        </p>
      </section>
    </Layout>
  )
}
