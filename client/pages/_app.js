import TopNav from "../components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/styles.css";
import 'antd/dist/antd'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopNav />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
