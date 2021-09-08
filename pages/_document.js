import Script from 'next/script'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* basic needs */}
          <link rel="stylesheet" href="/assets/css/main.css" />

          <Script async src="/assets/js/jquery-3.6.0.min.js"></Script>
          <Script src="/assets/js/swiper.min.js"></Script>
          <Script src="/assets/js/main.js"></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument