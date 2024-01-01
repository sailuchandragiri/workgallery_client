import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import UserOnBoarding from './pages/UserOnBoarding';
import RequireAuth from './components/auth/RequireAuth';
import { subscription } from './constants/constants';
// import UserList from './pages/UserList';
import PersistLogin from './components/auth/PersistLogin';
import OAuthController from './components/auth/OAuthController';
import LandingPage from './pages/LandingPage';
import Lobby from './pages/Lobby';
import Connections from './pages/Connections';
//TODO:Disable react dev tools here
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<Layout />}>
        {/*public routes*/}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<UserOnBoarding />} />

        <Route path="/connections" element={<Connections />} />

        {/*protected routes*/}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRole={subscription.free} />}>
            <Route path="/lobby" element={<Lobby />} />
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
  );
}

export default App;
