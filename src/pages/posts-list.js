import Layout from "../share/layout/Master";
import Link from "next/link";
import data from "../data/mock";

export default () => (
  <Layout>
    <ul>
      {data.map(article => (
        <li>
          <Link href="/p/[id]" as={`/p/${article.title}`}>
            <a>{article.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);
