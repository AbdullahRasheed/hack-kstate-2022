import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from './pages/Loading';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Layout from './pages/Layout';

function App() {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Loading />} />
        </Route>
      </Routes>
    </Router>
    );
}

export default App;
