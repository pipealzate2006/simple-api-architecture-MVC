import {
  getAllEmployees,
  getOneEmployeeByID,
  createEmployees,
  deleteOneEmployee,
  updateOneEmployee,
} from "../models/employees.model.js";

export const getEmployees = async (req, res) => {
  try {
    const employees = await getAllEmployees();
    res.status(200).json(employees);
  } catch {
    res.status(500).json({ message: "Ocurrio un error en el servidor" });
  }
};

export const getEmployeeByID = async (req, res) => {
  try {
    const employeeByID = await getOneEmployeeByID(req.params);
    if (employeeByID.length === 0) {
      res.status(404).json({ message: "No se pudo encontrar el dato" });
    } else {
      res.status(200).json(employeeByID);
    }
  } catch {
    res.status(500).json({ message: "Ocurrio un error en el servidor" });
  }
};

export const addEmployees = async (req, res) => {
  try {
    const newEmployee = await createEmployees(req.body);
    res
      .status(200)
      .json({ message: "employee creado exitosamente", data: newEmployee });
  } catch {
    res.status(500).json({ message: "Ocurrio un error en el servidor" });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const deleteEmployee = await deleteOneEmployee(req.params);
    if (deleteEmployee.affectedRows === 0) {
      res
        .status(404)
        .json({ message: "No se pudo encontrar el registro para eliminarlo" });
    } else {
      res.status(200).json({ message: "Registro eliminado correctamente" });
    }
  } catch {
    res.status(500).json({ message: "Ocurrio un error en el servidor" });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const updateEmployee = await updateOneEmployee(req.params, req.body);
    if (updateEmployee.affectedRows === 0) {
      res
        .status(404)
        .json({ message: "No se pudo encontrar el registro para actualizar" });
    } else {
      res
        .status(200)
        .json({ message: "Se actualizo el registro exitosamente" });
    }
  } catch {
    res.status(500).json({ message: "Ocurrio un error en el servidor" });
  }
};
