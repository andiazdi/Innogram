import '@/styles/globals.scss';
import Layout from '@/components/Layout';
import { CookiesProvider } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.css'


const MyApp = ({ Component, pageProps }) => (
    <Layout>
      <CookiesProvider>
      <Component {...pageProps} />
      </CookiesProvider>
    </Layout>
);

export default MyApp;