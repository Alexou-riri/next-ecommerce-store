// import Link from 'next/link';
import Header from '../components/Header';

export default function Footer() {
  return (
    <>
      <Header />
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
        </a>
      </footer>
    </>
  );
}
