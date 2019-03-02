import Head from 'next/head';

const Header = () => (
  <Head>
    <title>UUID Generator</title>
    <meta name="description" content="Online UUID Generator with API and easy command line (CLI) usage." />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-69050-17"
    />

    <script
      dangerouslySetInnerHTML={{
        __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());
      gtag('config', 'UA-69050-17');`
      }}
    />
  </Head>
);

export default Header;
