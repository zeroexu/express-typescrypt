import express from "express";
const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/health", (_req, res) => {
  console.log("ok");
  res.send("Todo esta lindo");
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
