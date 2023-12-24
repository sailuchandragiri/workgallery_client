import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <main className="max-container w-[95%] xl:w-[90%]">
      <Outlet />
    </main>
  );
};

export default Layout;
