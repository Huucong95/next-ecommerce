import React, { Fragment } from "react";
import Router from "next/router";
import { wrapper } from "../store";

// types
import type { AppProps } from "next/app";

// global styles
// import 'swiper/swiper.scss';
import "swiper/css";

import "swiper/css/navigation";
import "rc-slider/assets/index.css";
import "react-rater/lib/react-rater.css";
import "../assets/css/styles.scss";
import "react-toastify/dist/ReactToastify.css";
// import "../styles/globals.css"

import * as gtag from "./../utils/gtag";
import { ToastContainer } from "react-toastify";
import { ConfigProvider } from "antd";

const isProduction = process.env.NODE_ENV === "production";

// only events on production
if (isProduction) {
  // Notice how we track pageview when route is changed
  Router.events.on("routeChangeComplete", (url: string) => gtag.pageview(url));
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <ToastContainer />
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "orange",
        },
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  </Fragment>
);

export default wrapper.withRedux(MyApp);
