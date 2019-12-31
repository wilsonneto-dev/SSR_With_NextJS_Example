import Link from "next/link";

const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#dadada"
  }
};

export default () => (
  <div style={styles.container}>
    menu:
    <nav>
      <Link href="/">
        <a title="home">home</a>
      </Link>
      &nbsp;
      <Link href="/posts-list">
        <a title="Posts List">posts list</a>
      </Link>
      &nbsp;
      <Link href="/about">
        <a title="home">about</a>
      </Link>
      &nbsp;
      <Link href="/batman">
        <a title="batman">batman</a>
      </Link>
    </nav>
  </div>
);
