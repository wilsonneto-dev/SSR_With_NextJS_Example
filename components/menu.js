import Link from "next/link";

export default () => (
  <div>
    menu:
    <nav>
      <Link href="/">
        <a title="home">home</a>
      </Link>
      &nbsp;
      <Link href="/about">
        <a title="home">about</a>
      </Link>
    </nav>
  </div>
);
