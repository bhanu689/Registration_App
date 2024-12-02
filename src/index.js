import http from "http";
import "dotenv/config";
import { app } from "./app.js";
import { connectDB } from "./db/db.connect.js";

const server = http.createServer(app);
const PORT = process.env.PORT || 5002;

connectDB()
.then(() => {
        server.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
    });

server.on('error', (error) => {
    console.error("Server error:", error);
});