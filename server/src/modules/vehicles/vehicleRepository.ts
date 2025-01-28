import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Vehicle = {
  id: number;
  famille: string;
  catégorie: string;
  équipement: string;
  quantité: number;
  disponible: boolean;
};

class VehicleRepository {
  async create(vehicle: Omit<Vehicle, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into vehicle ( famille, catégorie, équipement, quantité, disponible) values (?, ?, ?, ?, ?)",
      [
        vehicle.famille,
        vehicle.catégorie,
        vehicle.équipement,
        vehicle.quantité,
        vehicle.disponible,
      ],
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from vehicle");
    return rows as Vehicle[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from vehicle where id = ?",
      [id],
    );
    return rows[0] as Vehicle;
  }
  async update(vehicleToUpdate: Vehicle) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE vehicle SET famille = ?, catégorie = ?, équipement = ?, quantité = ?, disponible = ? WHERE id = ?",
      [
        vehicleToUpdate.famille,
        vehicleToUpdate.catégorie,
        vehicleToUpdate.équipement,
        vehicleToUpdate.quantité,
        vehicleToUpdate.disponible,
        vehicleToUpdate.id,
      ],
    );

    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from vehicle where id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new VehicleRepository();
