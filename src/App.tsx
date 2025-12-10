import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import {
  URL_FRONT_HOME,
  URL_FRONT_LOGIN,
  URL_FRONT_PASSWORD_LOST,
} from './utils/urls/urlFront';
import PasswordLost from './pages/PasswordLost';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={URL_FRONT_HOME} element={<Home />} />
        <Route path={URL_FRONT_LOGIN} element={<Login />} />
        <Route path={URL_FRONT_PASSWORD_LOST} element={<PasswordLost />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1}
      />
    </BrowserRouter>
  );
}

export default App;
