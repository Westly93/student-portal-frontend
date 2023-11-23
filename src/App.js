import "./App.css";
import Layout from "./layouts/Layout";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <div className="App">
      <Layout>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Dashboard />} path="/dashboard" />
      </Layout>
    </div>
  );
}

export default App;
