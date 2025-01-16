import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

type User = {
  id: number;
  email: string;
  is_admin: boolean;
};

type Auth = {
  user: User;
  token: string;
};

function App() {
  const [auth, setAuth] = useState(null as Auth | null);

  return (
    <div className="app-container">
      <Header />
      <Outlet context={{ auth, setAuth }} />
      <Footer />
    </div>
  );
}

export default App;
