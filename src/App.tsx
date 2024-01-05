import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import UserOnBoarding from './pages/UserOnBoarding';
import Hero from './pages/Hero';
import RequireAuth from './components/auth/RequireAuth';
import { subscription } from './constants/constants';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<RequireAuth allowedRole={subscription.free} />}>
          <Route path="/" element={<Hero />} />
        </Route>
        <Route path="/register" element={<UserOnBoarding />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
