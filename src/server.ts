import mongoose from 'mongoose';

import app from './app';

// Port
const port: string | number = process.env.PORT || 5000;

// Database connection
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('Successfully database connected!');

        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log('Failed to connect database', error);
    }
};

main();
