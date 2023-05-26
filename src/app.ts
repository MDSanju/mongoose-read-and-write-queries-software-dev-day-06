import express, { Application } from "express";
import cors from "cors";

// Create an instance of Express
const app: Application = express();

// Application routes
import userRoutes from './app/modules/user/user.route';

// Middlewares

// Use cors
app.use(cors());

// Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

  /*
    step 1: Interface
    step 2: Schema
    step 3: Model
    step 4: Database Query
  */

  /*
    Breakdown to:

    step 1 (create an interface) - user.interface.ta

    step 2 (create a schema using the interface) |
    step 3 (create a model)                      | - user.model.ts 

    step 4 (database query on model) - user.service.ts

    Others - user.route.ts(all routes) & user.controller.ts(all logics, operations, functionalities)

    Pattern
    user.route.ts -> user.controller.ts -> user.service.ts
  */

export default app;
