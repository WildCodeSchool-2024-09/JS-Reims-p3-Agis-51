import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Document = {
  id: number;
  idCard: string;
  driverLicense: string;
};

class DocumentRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from document");

    // Return the array of items
    return rows as Document[];
  }
}

export default new DocumentRepository();
