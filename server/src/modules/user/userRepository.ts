import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type website_user = {
  id: number;
  name: string;
  email: string;
  hashed_password: string;
  is_admin: boolean;
};

class userRepository {
  async create(website_user: Omit<website_user, "id" | "is_admin">) {
    const [result] = await databaseClient.query<Result>(
      "insert into website_user (name, email, hashed_password) values (?, ?, ?)",
      [website_user.name, website_user.email, website_user.hashed_password],
    );

    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from website_user where id = ?",
      [id],
    );

    return rows[0] as website_user;
  }

  async readByEmailWithPassword(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from website_user where email = ?",
      [email],
    );

    return rows[0] as website_user;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "select * from website_user",
    );

    return rows as website_user[];
  }
}

export default new userRepository();
