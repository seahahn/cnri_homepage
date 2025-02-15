import "../styles/globals.css";
import type {AppProps} from "next/app";
import {memo, useEffect} from "react";
import {useRouter} from "next/router";
import {DefaultSeo} from "next-seo";
import Layout from "../components/Layout";
import SEO from "../next-seo.config";
import * as ga from "../lib/gtag";

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default memo(MyApp);
