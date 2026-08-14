import { PORT } from "./config/env.js";
import app from "./app.js";
import { connectDB } from "./config/database.js";

async function startServer() {
    connectDB().then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    });
}

startServer().catch((err) => {
    console.error("Error starting server", err);
    process.exit(1);
});
