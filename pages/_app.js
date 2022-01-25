import '../public/Resource/Stylesheets/reset.css';
import '../public/Resource/Stylesheets/config.css';
import '../public/Resource/Stylesheets/fontiran.css';
import '../public/Resource/Stylesheets/responsive.css';
import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
