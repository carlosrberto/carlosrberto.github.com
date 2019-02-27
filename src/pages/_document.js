import Document, { Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="title" content="Carlos Roberto Gomes Junior - Front-End Software Developer" />
          <meta name="description" content="I'm a Software Developer from Ribeirão Preto, Brazil. Currently I'm working on JavaScript projects mainly using the <strong>React JS</strong> ecosystem." />
          <meta name="keywords" content="javascript,developer,front-end,ribeirao preto,react,js,redux,software,web,programmer,programming" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:400,700" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default CustomDocument;
