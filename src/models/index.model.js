import { pool } from "../config/db.js";

export const checkConnection = async () => {
  try {
    const result = await pool.query("SELECT 1 + 9 AS RESULT");
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
