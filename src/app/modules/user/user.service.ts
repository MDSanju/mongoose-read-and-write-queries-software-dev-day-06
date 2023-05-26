import User from "./user.model";

export const createUserToDB = async () => {
    const user = await new User(
      {
        id: 's-1-49656255',
        role: 'teacher',
        password: 'strong-password',
        name: {
          firstName: 'Bob',
          lastName: "The Canadian",
        },
        dateOfBirth: '18 February 1962',
        gender: 'male',
        email: 'bobthecanadian@gmail.com',
        contactNo: '+9956545665',
        emergencyContactNo: '+9956545665',
        presentAddress: 'Toronto, Canada',
        permanentAddress: 'Toronto, Canada',
      }
    );
  
    await user.save();
    return user;
};
