import Layout from "../../share/layout/Master";
import api from "../../services/api";

import { useRouter } from "next/router";

const Detail = ({ show }) => {
  const { name, summary, image } = show;

  return (
    <Layout>
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
      <img src={image.medium} />
    </Layout>
  );
};

Detail.getInitialProps = async context => {
  const { id } = context.query;
  const { data } = await api.get(`/shows/${id}`);
  return { show: data };
};

export default Detail;
