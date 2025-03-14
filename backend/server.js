import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js"; // Importa las rutas de usuario

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Rutas principales
app.get("/", (req, res) => {
  res.send("API funcionando correctamente");
});

// Rutas de usuarios
app.use("/api/users", userRoutes);

// Conectar a MongoDB
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.set("strictQuery", false); // Evita advertencias en MongoDB

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ Conectado a MongoDB Atlas");
    app.listen(PORT, () => console.log(`🚀 Servidor corriendo en el puerto ${PORT}`));
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error);
    process.exit(1); // Detiene el proceso en caso de error grave
  }
};

connectDB();
