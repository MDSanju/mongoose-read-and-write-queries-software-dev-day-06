import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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

// Static methods
userSchema.static('getAdminUsers', async function getAdminUsers() {
    const admin = await this.find({ role: 'admin' });
});

// Instance methods
userSchema.method('fullName', function fullName(): string {
    return this.name.firstName + ' ' + this.name.lastName;   
});

const User = model<IUser, UserModel>('User', userSchema);

export default User;
