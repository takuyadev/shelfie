import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:ital,wght@0,400;1,700&display=swap" rel="stylesheet"></link>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
