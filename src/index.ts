import express from "express";
import usersRoute from "./routes/users.route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(usersRoute);

app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000!");
});
