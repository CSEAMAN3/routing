import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/pets">Pets</Link>
      </nav>
    </header>
  );
}
