import { Fragment } from "react";
import Document, { Html, Head, Main, NextScript, DocumentInitialProps } from "next/document";
import { ToastContainer } from "react-toastify";

interface DocumentProps extends DocumentInitialProps {
  isProduction: boolean;
}

export default class CustomDocument extends Document<DocumentProps> {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="ico.png" />
          {/* We only want to add the scripts if in production */}
          <Fragment>
            <ToastContainer />
          </Fragment>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
