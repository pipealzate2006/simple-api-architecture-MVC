import { checkConnection } from "../models/index.model.js";

export const connection = async (req, res) => {
  try {
    const result = await checkConnection();
    res.json(result);
  } catch {
    res.json({ message: "Ocurrio un error" });
  }
};
