import React from 'react';
import Document, {
  Html, Main, NextScript, Head, DocumentContext, DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core';
import { NextComponentType, RenderPageResult } from 'next/dist/shared/lib/utils';

/* eslint-disable */
let cleanCSS: { minify: (arg0: string) => { (): any; new(): any; styles: string } };
if (process.env.NODE_ENV === 'production') {
  /* eslint-disable global-require */
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const CleanCSS = require('clean-css');
  cleanCSS = new CleanCSS();
  /* eslint-enable global-require */
}

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
/* eslint-disable @typescript-eslint/ban-ts-comment */
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
  if (css && process.env.NODE_ENV === 'production') {
    css = cleanCSS.minify(css).styles;
  }
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
