import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./pageAdmin.css";

interface Vehicle {
  id: number;
  type: string;
  available: boolean;
}
const pageAdmin = () => {
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
        {/* <Link to
            📨Messages       
             </Link>
          
        
        <li> */}
          <a href="#parc-automobiles">🚗Parc automobiles</a>
          {vehicles.length > 0 ? (
            <table className="vehicle-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Type</th>
                  <th>Disponible</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id}>
                    <td>{vehicle.id}</td>
                    <td>{vehicle.type}</td>
                    <td>{vehicle.available ? "Yes" : "No"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Aucun véhicule disponible.</p>
          )}
        </li>
        <li>
          <a href="#demandes">💼Demandes reçue </a>
        </li>
      </div>
    </div>
  );
};

const Messages = () => {
  return (
    <div>
      <h2>Messages</h2>
      <ul>
        <li>Message 1</li>
        <li>Message 2</li>
        <li>Message 3</li>
      </ul>
    </div>
  );
};

export default pageAdmin;
