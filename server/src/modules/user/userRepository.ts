import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
type User = {
  id: number;
  firstname?: string;
  lastname?: string;
  email: string;
  phone_number?: string;
  address?: string;
  hashed_password: string;
  isAdmin: boolean;
};

class userRepository {
  async create(newUser: Omit<User, "id" | "isAdmin">) {
    const [result] = await databaseClient.query<Result>(
      "insert into website_user (email, hashed_password) values (?, ?)",
      [newUser.email, newUser.hashed_password],
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

  async findByEmail(email: string) {
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
    const [rows] = await databaseClient.query<Rows>(
      "select * from website_user where id = ?",
      [userId],
    );

    return rows[0] as User | null;
  }

  async update(userInfo: Partial<User>) {
    await databaseClient.query<Result>(
      "update website_user set email = ?, phone_number = ?, address = ?, firstname = ?, lastname = ? where id = ?",
      [
        userInfo.email,
        userInfo.phone_number,
        userInfo.address,
        userInfo.firstname,
        userInfo.lastname,
        userInfo.id,
      ],
    );
  }
}

export default new userRepository();
