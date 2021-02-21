import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
    <link rel="stylesheet" type="text/css" href="/static/style.css" />
    <title>Paddywack Homemade Gifts</title>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-138044372-3"></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
    
          gtag('config', 'UA-138044372-3');
        `
      }}
    >
    </script>
  </Head>
);

export default Meta;
