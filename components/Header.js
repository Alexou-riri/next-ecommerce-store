import Link from 'next/link';
import { css } from '@emotion/react';

const headerStyles = css`
  background: rgba(49, 27, 1, 0.31);
  padding: 10px;
  padding-right: 40px;
  display: flex;
  justify-content: flex-end;
  margin-top: 0;

  a + a {
    margin-left: 20px;
    cursor: pointer;
    transition: transform 0.2s ease-out;
  }
  a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;

    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }
  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after {
    width: 100%;
    left: 0;
  }
`;
export default function Header() {
  return (
    <header css={headerStyles}>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/products">
          {/* <select></select> */}
          <a data-test-id="products=link">Products</a>
        </Link>
        {/* menu deroulant? */}
        <Link href="/cart">
          <a>Cart</a>
        </Link>
      </p>
    </header>
  );
}
