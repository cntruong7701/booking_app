import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./Layout";
import axios from "axios";
import { UserContextProvider } from "./UserContext.jsx";
import AccountPage from "./pages/Account";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/account/:subpage?' element={<AccountPage />} />
          <Route path='/account/:subpage/:action' element={<AccountPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
