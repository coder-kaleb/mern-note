import e from "express";
import { configDotenv } from "dotenv";
configDotenv({ path: "./backend/.env" });
import noteRouter from "./routes/notes.js";
import connectToMongodb from "./db.js";
import cors from "cors";
const PORT = process.env.PORT;
const app = e();

// middleware
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://4fpfkn86-3000.uks1.devtunnels.ms",
    ],
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
  })
);
app.use(e.json());
app.use("/api/note", noteRouter);

app.get("/", (req, res) => {
  res.send("it worked");
});

try {
  connectToMongodb();
} catch (error) {
  console.log(error);
}
app.listen(PORT, () => {
  console.log(`server start running on ${PORT}`);
});
