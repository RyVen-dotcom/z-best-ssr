import React from 'react';
import Document, {
  Html, Main, NextScript, Head, DocumentContext, DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core';
import { NextComponentType, RenderPageResult } from 'next/dist/shared/lib/utils';

const SWIPER_MIN_CSS = 'https://unpkg.com/swiper@5.4.5/css/swiper.min.css';
const SWIPER_MIN_JS = 'https://unpkg.com/swiper@5.4.5/js/swiper.min.js';

class MyDocument extends Document {
  render(): React.ReactElement {
    // noinspection HtmlUnknownTarget
    return (
      <Html lang="en">
        <title>最家</title>
        <Head>
          <meta httpEquiv="x-ua-compatible" content="IE=11,IE=10,IE=9" />
          <link rel="stylesheet" href="css/document.css" />
          <link rel="stylesheet" href={SWIPER_MIN_CSS} />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src={SWIPER_MIN_JS} />
        </body>
      </Html>
    );
  }
}
/* eslint-disable */
MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> => originalRenderPage({
    // enhanceApp _app.tsx 导出的APP组件
    // enhanceComponent page下面的每一个导出的 Component
    // @ts-ignore
    enhanceApp: (App: AppType) => (props): React.ReactElement => sheets.collect(<App {...props} />),
    enhanceComponent: (Component: NextComponentType) => Component,
  });

  const initialProps = await Document.getInitialProps(ctx);

  let css = sheets.toString();
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      // sheets.getStyleElement()
      <style
        id="jss-server-side"
        key="jss-server-side"
                // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: css }}
      />,
    ],
  };
};

export default MyDocument;
