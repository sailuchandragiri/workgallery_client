
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {
  return (
    <main className="max-container w-[95%] xl:w-[90%]">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
