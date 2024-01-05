import { Outlet } from "react-router-dom";
import Header from "../Header";
const Layout = () => {
  return (
    <main className="max-container w-[95%] xl:w-[90%]">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
