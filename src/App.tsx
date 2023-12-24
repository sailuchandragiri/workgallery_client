import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import UserOnBoarding from './pages/UserOnBoarding';
import Hero from './pages/Hero';
import RequireAuth from './components/auth/RequireAuth';
import { subscription } from './constants/constants';
import UserList from './pages/UserList';
import Header from './components/Header';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route element={<RequireAuth allowedRole={subscription.free} />}>
            <Route path="/" element={<Hero />} />
            <Route path="/users" element={<UserList />} />
          </Route>
          <Route path="/register" element={<UserOnBoarding />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
