import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

// Create an instance of Express
const app: Application = express();

// Middlewares

// Use cors
app.use(cors());

// Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  /*
    step 1: Interface
    step 2: Schema
    step 3: Model
    step 4: Database Query
  */

  // step 1 (create an interface)
  interface IUser {
    id: string;
    role: 'student';
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: 'male' | 'female';
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

  // step 2 (create a schema using the interface)
  const userSchema = new Schema<IUser>({
    id: {
      type: String,
      required: true,
      unique: true
    },
    role: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      firstName: {
        type: String,
        required: true
      },
      middleName: {
        type: String
      },
      lastName: {
        type: String,
        required: true
      },
    },
    dateOfBirth: {
      type: String
    },
    gender: {
      type: String,
      enum: ['male', 'female']
    },
    email: {
      type: String
    },
    contactNo: {
      type: String,
      required: true
    },
    emergencyContactNo: {
      type: String,
      required: true
    },
    presentAddress: {
      type: String,
      required: true
    },
    permanentAddress: {
      type: String,
      required: true
    },
  });

  // step 3 (create a model)
  const User = model<IUser>('User', userSchema);
  
  const createUserToDB = async () => {
    const user = new User(
      {
        id: 'g-4-6969374',
        role: 'student',
        password: 'strong-password',
        name: {
          firstName: 'GL',
          middleName: 'Abs',
          lastName: "John"
        },
        dateOfBirth: '08 July 1996',
        gender: 'male',
        email: 'example@gmail.com',
        contactNo: '+54654521454524',
        emergencyContactNo: '+54654521454524',
        presentAddress: 'Washington',
        permanentAddress: 'California',
      }
    );
  
    await user.save();
  }

  createUserToDB();

});

export default app;
