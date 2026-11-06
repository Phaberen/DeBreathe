import express from "express";
import authRouter from "./routers/authRouter.js";
import usersRouter from "./routers/usersRouter.js";
import exercisesRouter from "./routers/exercisesRouter.js";
import sessionsRouter from "./routers/sessionsRouter.js";

const app = express();
app.use(express.json());

app.use(authRouter);
app.use(usersRouter);
app.use(exercisesRouter);
app.use(sessionsRouter);

const PORT = process.env.PORT ?? 8080;

const server = app.listen(PORT, (error) => {
  if (error) {
    console.log("Error starting the server", error);
    return;
  }
  console.log("Server is running on port", server.address().port);
});
