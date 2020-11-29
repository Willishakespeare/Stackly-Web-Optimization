import Head from "next/head";

interface SeoProps {
  page?: string;
  title?: string;
  description?: string;
}

const Seo: React.FC<SeoProps> = ({ title, page, description }): JSX.Element => {
  return (
    <Head>
      <title>
        {title || (page ? `${page} | Stackly Code` : "Stackly Code")}
      </title>
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=7" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="canonical" content="https://stacklycode.com/" />
      <meta
        name="keywords"
        content="stacklycode, stackly, code, development, frontend, backend, database, enterprice, community, discord, freenlacers"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="author" content="Stackly Code" />
      <meta name="copyright" content="Stackly Code" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://stacklycode.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/preview.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://stacklycode.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="/preview.png" />
      <link rel="manifest" href="manifest.webmanifest" />
    </Head>
  );
};

export default Seo;
