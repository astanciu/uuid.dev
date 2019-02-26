import Header from './Header';
import Link from 'next/link';
import '../styles/index.scss';

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="page">
      <section>
        {children}
        <div className="links">
          <Link href="/">
            <a>Generate</a>
          </Link>
        </div>
      </section>
    </div>
  </>
);

export default Layout;
