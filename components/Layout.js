import Header from './Header';
import '../styles/index.scss';

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="page">
      <section>{children}</section>
    </div>
  </>
);

export default Layout;
