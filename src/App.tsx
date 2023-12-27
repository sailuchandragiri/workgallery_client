import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import UserOnBoarding from './pages/UserOnBoarding';
import Hero from './pages/Hero';
import RequireAuth from './components/auth/RequireAuth';
import { subscription } from './constants/constants';
import UserList from './pages/UserList';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import PersistLogin from './components/auth/PersistLogin';
import OAuthController from './components/auth/OAuthController';
//TODO:Disable react dev tools here
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*public routes*/}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<UserOnBoarding />} />
        <Route path="/" element={<Hero />} />
        {/*protected routes*/}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRole={subscription.free} />}>
            <Route path="/users" element={<UserList />} />
          </Route>
        </Route>
        <Route path="oauth/authorization" element={<OAuthController />} />

        {/* catch all */}
        <Route
          path="*"
          element={
            <div>
              <p>404</p>
              <h1>Not found</h1>
            </div>
          }
        />
      </Route>
    </Routes>
          <Route path="/about" element={<LandingPage />} />
          <Route path="/register" element={<UserOnBoarding />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
