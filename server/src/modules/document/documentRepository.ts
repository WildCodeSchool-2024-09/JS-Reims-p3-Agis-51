import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

interface Document {
  id: number;
  idCard: string;
  driverLicense: string;
}

class DocumentRepository {
  async readAll(): Promise<Document[]> {
    const [rows] = await databaseClient.query<Rows>("select * from document");
    return rows as Document[];
  }
  async read(id: number): Promise<Document | null> {
    const [rows] = await databaseClient.query<Rows>(
      "select * from document where id = ?",
      [id],
    );
    return rows[0] as Document;
  }

  async create(document: Omit<Document, "id">): Promise<number> {
    const [result] = await databaseClient.query<Result>(
      "insert into document (id_card, driver_license) values (?, ?)",
      [document.idCard, document.driverLicense],
    );
    return result.insertId;
  }

  async delete(id: number): Promise<number> {
    const [result] = await databaseClient.query<Result>(
      "delete from document where id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new DocumentRepository();
