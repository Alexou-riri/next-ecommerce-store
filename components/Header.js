import Link from 'next/link';
import { css } from '@emotion/react';

const headerStyles = css`
  background-image: '';
`;
export default function Header() {
  return (
    <header>
      <p>
        <Link href="/">
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
