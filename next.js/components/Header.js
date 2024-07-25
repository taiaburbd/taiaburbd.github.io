// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      {/* Other links */}
    </header>
  );
}
