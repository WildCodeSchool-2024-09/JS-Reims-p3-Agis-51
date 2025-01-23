import { Link } from "react-router-dom";
import "./pageAdmin.css";
import VehicleList from "../pages/Vehicles";
import Messages from "./Messages";

const AdminPage = () => {
  return (
    <div>
      <h1> 👤Page Admin</h1>
      <div className="admin-espace">
        <Link to={"/messages/"}>📨Messages</Link>
        <Messages />
        <li>
          <Link to={"/admin/vehicles"}>🚗Parc automobiles</Link>
          <VehicleList />
        </li>
      </div>
    </div>
  );
};

export default AdminPage;
