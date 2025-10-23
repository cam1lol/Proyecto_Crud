import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuarioRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>PROBANDO MI APP</h1>");
});

app.use("/api", usuarioRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
