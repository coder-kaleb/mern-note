import e from "express";
import { configDotenv } from "dotenv";
import noteRouter from "./routes/notes.js";
configDotenv();

const PORT = process.env.PORT;

const app = e();

// middleware
app.use("/api/note", noteRouter);
app.use(e.json());

app.get("/", (req, res) => {
  res.send("it worked");
});

app.listen(PORT, () => {
  console.log(`server start running on ${PORT}`);
});
