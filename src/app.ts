import express from "express";
import configExpress from "./config/express";

import routes from "./routes"
const app = express()
const PORT = process.env.PORT || 8080

configExpress(app)
routes(app)

app.listen(PORT, () => {
  console.log(`App running in http://localhost:${PORT}`);
})
