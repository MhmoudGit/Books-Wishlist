import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { ProductsProvider } from "../components/layout/context";

function MyApp({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductsProvider>
  );
}

export default MyApp;
