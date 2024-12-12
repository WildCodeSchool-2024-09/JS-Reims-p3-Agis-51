import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Vehicle = {
  id: number;
  type: string;
  available: boolean;
};

class VehicleRepository {
  async create(vehicle: Omit<Vehicle, "id">) {
    // Execute the SQL INSERT query to add a new vehicle to the "item" table
    const [result] = await databaseClient.query<Result>(
      "insert into vehicle ( type, available) values (?, ?)",
      [vehicle.type, vehicle.available],
    );

    // Return the ID of the newly inserted vehicle
    return result.insertId;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all vehicles from the "vehicle" table
    const [rows] = await databaseClient.query<Rows>("select * from vehicle");

    // Return the array of vehicles
    return rows as Vehicle[];
  }

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific vehicle by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from vehicle where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the vehicle
    return rows[0] as Vehicle;
  }
}

export default new VehicleRepository();
