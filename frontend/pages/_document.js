import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="AI study assistant" />
        <meta name="og:title" content="AI study assistant" />
        <meta name="twitter:card" content="AI study assistant" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <title>Study Buddy</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
