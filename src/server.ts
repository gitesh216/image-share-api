import { PORT } from "./config/env.js";
import app from "./app.js";

async function startServer() {
    app.listen(PORT, () => {
        console.log(`[server]: Running on port ${PORT}`);
    });
}

startServer().catch((err) => {
    console.error("Error starting server", err);
    process.exit(1);
});
