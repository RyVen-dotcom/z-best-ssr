import React from 'react';
import Document, {
  Html, Main, NextScript, Head,
} from 'next/document';

class MyDocument extends Document {
  render(): React.ReactElement {
    // noinspection HtmlUnknownTarget
    return (
        <Html lang="en">
          <Head>
            <meta httpEquiv="x-ua-compatible" content="IE=11,IE=10,IE=9" />
            <link rel="stylesheet" href="css/document.css" />
            <title>最家</title>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
    );
  }
}

export default MyDocument;
