import { useEffect, useState } from "react";
import "./VehicleLocation.css";
import FormLoc from "./formLocation";

interface Vehicle {
  id: number;
  famille: string;
  catégorie: string;
  équipement: string;
  quantité: number;
  disponible: boolean;
}

const VehicleLocation = () => {
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
    <section className="page-loc">
      <div className="loc-intro">
        <h2>Location de véhicule</h2>
        <p>
          Vous êtes bénéficiaires des minima sociaux, ou demandeur d’emploi avec
          des ressources inférieures à 950 € par mois, et vous avez
          l’opportunité d’un emploi, d’une mission d’intérim, d’un stage
          professionnel, d’un entretien d’embauche ou toute autre démarche liée
          à la vie professionnelle mais qui nécessite un moyen de transport que
          vous n’avez pas… le service « location de voiture » de l’association
          peut répondre à votre besoin pour un tarif de 7,50 €/jour (dans la
          limite d’un véhicule disponible).
        </p>
        <h2>Conditions de location :</h2>
        <p>
          Etre orienté par un prescripteur du département de la Marne (voir : «
          accéder aux services »), être possesseur d’un permis de conduire en
          cours de validité de plus de 3 ans, présenter un justificatif qui
          nécessite le besoin d’un véhicule, déposer une caution de 450 € (3
          chèques de 150 € qui ne sont pas encaissés). Le contrat de location
          est à renouveler toutes les semaines dans une limite cumulée de 3
          mois.
        </p>
        <h2>Condition particulière :</h2>
        <p>
          Le contrat de location prévoit un kilométrage limité entre le domicile
          et le lieu de travail, de formation…
        </p>
      </div>
      <div className="loc-container">
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
                  <th>Famille</th>
                  <th>Catégorie</th>
                  <th>Disponible</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id}>
                    <td>{vehicle.famille}</td>
                    <td>{vehicle.catégorie}</td>
                    <td>{vehicle.disponible ? "Yes" : "No"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Aucun véhicule disponible </p>
          )}
        </div>
        <div>
          <FormLoc />
        </div>
      </div>
    </section>
  );
};

export default VehicleLocation;
