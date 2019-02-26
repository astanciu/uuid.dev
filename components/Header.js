import Head from 'next/head';

const Header = () => (
  <Head>
    <title>uuid.dev</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

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
