import MasterLayout from "../share/layout/Master";
import api from "../services/api";
import Link from "next/link";

const Item = ({ item }) => (
  <li>
    <Link href="/batman/[id]" as={`/batman/${item.id}`}>
      <a title={item.name}>
        {item.name} ({item.id})
      </a>
    </Link>
  </li>
);

const ShowsList = ({ shows }) => (
  <MasterLayout>
    <ul>
      {shows.map(show => (
        <Item key={show.id} item={show} />
      ))}
    </ul>
  </MasterLayout>
);

ShowsList.getInitialProps = async () => {
  const { data } = await api.get("search/shows?q=batman");
  // console.log(data);
  return {
    shows: data.map(item => item.show)
  };
};

export default ShowsList;
