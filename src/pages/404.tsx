import { GetStaticProps } from "next";

const ErrorPage = () => <h1>404 Sal de Aqui Puto</h1>;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ["common"],
    },
  };
};

export default ErrorPage;
