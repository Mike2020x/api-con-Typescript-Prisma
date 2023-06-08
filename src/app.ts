import express from "express";
const app = express()

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App running in http://localhost:${PORT}`);
})

app.get("/", (req, res) => {
  res.send("Hello")
})
