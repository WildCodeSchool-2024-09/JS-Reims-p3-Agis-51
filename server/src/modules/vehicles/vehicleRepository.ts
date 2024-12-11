import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Vehicle = {
  id: number;
  type: string;
  available: boolean;
};

class VehicleRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from vehicle");

    // Return the array of items
    return rows as Vehicle[];
  }
}

export default new VehicleRepository();
