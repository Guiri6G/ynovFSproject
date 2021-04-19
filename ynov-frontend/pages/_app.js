import '../styles/globals.css'
import Layout from '../components/Layout'
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../middlewares/apolloClient";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return(
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
    )
}

export default MyApp
