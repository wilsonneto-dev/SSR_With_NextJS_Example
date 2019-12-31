import { useRouter } from "next/router";
import Layout from "../share/layout/Master";

export default props => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <Layout>
      <h1>{title}</h1>
    </Layout>
  );
};
