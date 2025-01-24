import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone_number: string;
  address: string;
  hashed_password: string;
  is_admin: boolean;
};

class userRepository {
  async create(website_user: Omit<User, "id" | "is_admin">) {
    const [result] = await databaseClient.query<Result>(
      "insert into website_user (name, email, hashed_password) values (?, ?, ?)",
      [
        website_user.firstname,
        website_user.lastname,
        website_user.email,
        website_user.phone_number,
        website_user.address,
        website_user.hashed_password,
      ],
    );

    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from website_user where id = ?",
      [id],
    );
    return rows[0] as User;
  }

  async readByEmailWithPassword(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from website_user where email = ?",
      [email],
    );
    return rows[0] as User;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "select * from website_user",
    );
    return rows as User[];
  }
  async findById(userId: string | undefined) {
    // Execute the SQL SELECT query to retrieve a user by email
    const [rows] = await databaseClient.query<Rows>(
      "select * from website_user where id = ?",
      [userId],
    );
    return rows[0] as User | null;
  }
}

export default new userRepository();
