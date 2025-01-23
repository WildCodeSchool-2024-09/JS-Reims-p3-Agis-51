import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./pageAdmin.css";

interface Vehicle {
  id: number;
  type: string;
  available: boolean;
}
const AdminPage = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/vehicles");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Vehicle[] = await response.json();
        setVehicles(data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div>
      <h1> 👤Page Admin</h1>
      <div className="admin-espace">
        {/* <Link to={"/Messages/"}>📨Messages</Link> */}

        <li>
          <Link to={"/VehicleList"}>🚗Parc automobiles</Link>
        </li>
        <li>
          <a href="#demandes">💼Demandes reçue </a>
        </li>
      </div>
    </div>
  );
};

export default AdminPage;
