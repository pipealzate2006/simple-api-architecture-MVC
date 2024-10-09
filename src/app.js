import express from "express";
import apiRouter from "./routes/employees.route.js";
import connectionRouter from "./routes/index.route.js";

const app = express();

const PORT = 7020;

app.use(express.json());

app.use("/api", apiRouter);

app.use("/api", connectionRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
