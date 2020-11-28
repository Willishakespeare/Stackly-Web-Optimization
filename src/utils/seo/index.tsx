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
      {/* <meta httpEquiv="refresh" content="0; url=https://stacklycode.com" /> */}
      <meta name="canonical" content="https://stacklycode.com" />
      <meta
        name="keywords"
        content="stacklycode, stackly, code, development, frontend, backend, database, enterprice, community, discord, freenlacers"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="author" content="StacklyCode" />
      <meta name="copyright" content="StacklyCode" />
      <meta name="robots" content="index" />
    </Head>
  );
};

export default Seo;
