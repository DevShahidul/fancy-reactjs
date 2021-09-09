import Script from 'next/script'
import { Layout } from '../components/Layout'
import '../styles/globals.css'
import '../public/assets/css/main.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Script async src="/assets/js/jquery-3.6.0.min.js"></Script>
        <Script src="/assets/js/swiper.min.js"></Script>
        <Script src="/assets/js/main.js"></Script>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
