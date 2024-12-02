import mysql from 'mysql';

let connection;

export const connectDB = async () => {
    return new Promise((resolve, reject) => {
        try {
            connection = mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME
            });
            connection.connect((err) => {
                if (err) {
                    console.error("Database connection failed:", err);
                    return reject(err);
                }
                console.log("Database Connected Successfully");
                resolve();
            });
        } catch (error) {
            console.error("Database connection failed:", error);
            reject(error);
        }
    });
};

export const getConnection = () => connection;