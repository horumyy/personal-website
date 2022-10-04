import React from "react";
import Head from "next/head";

const MetaDefault = () => {
  const meta = {
    title: "Jorge Plasencia Ahm Jorgensen",
    description:
      "Jorge Plasencia is a software engineer and computer science student based in Guadalajara, Jalisco. He is currently working at a startup called misfans.",
    img: "/favicons/favicon.ico",
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="robots" content="follow, index" />

      <meta content={meta.description} name="description" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.img} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={process.env.NEXT_PUBLIC_URL} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.img} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />

      <link rel="shortcut icon" href="/favicons/favicon.ico" />

      <link rel="manifest" href="/manifest.json" />

      <script
        async
        defer
        src="https://tools.luckyorange.com/core/lo.js?site-id=85026437"
      ></script>
    </Head>
  );
};

export default MetaDefault;
