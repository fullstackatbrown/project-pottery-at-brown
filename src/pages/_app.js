import Layout from "../components/Layout";
import "../app/globals.css";
import "../app/join-us.css"; 

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
