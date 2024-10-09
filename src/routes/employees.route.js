import { Router } from "express";
import {
  getEmployees,
  getEmployeeByID,
  addEmployees,
  deleteEmployee,
  updateEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployeeByID);

router.post("/employees", addEmployees);

router.delete("/employees/:id", deleteEmployee);

router.patch("/employees/:id", updateEmployee);

export default router;
