// import Link from 'next/link';
import Header from '../components/Header';
import { css } from '@emotion/react';

const footer = css`
  background: rgba(49, 27, 1, 0.31);
  text-align: center;

  .contact {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding-right: 50px;
    padding-bottom: 30px;
  }
`;

export default function Footer() {
  return (
    <footer css={footer}>
      <div>
        <div>
          <h4>fdiosnvdnvdf</h4>
          <h5>All right not reserved</h5>
        </div>
        <div className="contact">
          <p>contact :</p>
          <p>1 rue de la fleur</p>
          <p>10000</p>
          <p>Cheverny</p>
        </div>
      </div>
    </footer>
  );
}
