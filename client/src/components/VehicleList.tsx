import { useEffect, useState } from "react";
import "./VehicleList.css";

interface Vehicle {
  id: number;
  type: string;
  available: boolean;
}

const VehicleList = () => {
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
    <div className="vehicle-list">
      <h2>Liste des véhicules</h2>
      <p>
        Vous trouverez ici la liste des véhicules disponibles à la location,
        ainsi que quelques informations les concernants.
      </p>
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
    </div>
  );
};

export default VehicleList;
