import Header from "../Header";
import Footer from "../Footer";

export default Page => () => (
  <>
    <Header />
    <Page />
    <Footer />
  </>
);
