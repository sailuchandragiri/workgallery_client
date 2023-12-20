import Header from '../Header';
const Layout = ({ children }) => {
  return (
    <main className="max-container w-[95%] xl:w-[90%]">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
