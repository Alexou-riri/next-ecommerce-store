import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <p>
        <Link href="/home">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
        {/* menu deroulant? */}
        <Link href="/cart">
          <a>Cart</a>
        </Link>
      </p>
    </header>
  );
}
