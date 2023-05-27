import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = new User(payload);
    await user.save();
    // Custom instance methods
    console.log(user.fullName());
    return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
};

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload });
    // Custom instance methods
    console.log(user?.fullName());
    return user;
};

export const getAdminUsersFromDB = async () => {
    const admins = await User.getAdminUsers();
    return admins;
};

// Find only { name: 1, email: 1, presentAddress: 1 } these 3
// export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
//     const user = await User.findOne({ id: payload }, { name: 1, email: 1, presentAddress: 1 });
//     return user;
// };

// Find without only passwprd
// export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
//     const user = await User.findOne({ id: payload }, { password: 0 });
//     return user;
// };
