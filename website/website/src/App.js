import loadingIcon from './Rolling-1s-200px.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from './pages/Loading';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Layout from './pages/Layout';

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<Loading />} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
