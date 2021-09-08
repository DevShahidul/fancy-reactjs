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

          <script type="text/javascript" src="/assets/js/jquery-3.6.0.min.js"></script>
          <script type="text/javascript" src="/assets/js/swiper.min.js"></script>
          <script type="text/javascript" src="/assets/js/main.js"></script>
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