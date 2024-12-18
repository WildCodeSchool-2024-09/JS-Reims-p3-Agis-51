import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Vehicle = {
  id: number;
  type: string;
  energy: string;
  gearbox: string;
  quantity: number;
  available: boolean;
};

class VehicleRepository {
  async create(vehicle: Omit<Vehicle, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into vehicle ( type, energy, gearbox, quantity, available) values (?, ?, ?, ?, ?)",
      [
        vehicle.type,
        vehicle.energy,
        vehicle.gearbox,
        vehicle.quantity,
        vehicle.available,
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
      "UPDATE vehicle SET type = ?, energy = ?, gearbox = ?, quantity = ?, available = ? WHERE id = ?",
      [
        vehicleToUpdate.type,
        vehicleToUpdate.energy,
        vehicleToUpdate.gearbox,
        vehicleToUpdate.quantity,
        vehicleToUpdate.available,
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
