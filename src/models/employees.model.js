import { pool } from "../config/db.js";

export const getAllEmployees = async () => {
  try {
    const result = await pool.query("SELECT * FROM employees");
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const getOneEmployeeByID = async (idEmployee) => {
  const { id } = idEmployee;
  try {
    const result = await pool.query("SELECT * FROM employees WHERE id = ?", [
      id,
    ]);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const createEmployees = async (employee) => {
  const { name, salary } = employee;
  try {
    const result = await pool.query(
      "INSERT INTO employees (name, salary) VALUES (?,?)",
      [name, salary]
    );
    return { ...result, insertId: Number(result.insertId) };
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteOneEmployee = async (idEmployee) => {
  const { id } = idEmployee;
  try {
    const result = await pool.query("DELETE FROM employees WHERE id = ?", [id]);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateOneEmployee = async (idEmployeeParams, employeeBody) => {
  const { id } = idEmployeeParams;
  const { name, salary } = employeeBody;
  try {
    const result = await pool.query(
      "UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
