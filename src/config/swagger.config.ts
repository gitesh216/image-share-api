import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "ImageShare API",
            version: "1.0.0",
            description: "API documentation for the ImageShare application",
        },
        servers: [
            {
                url: "/api/v1",
                description: "API Version 1",
            },
        ],
    },
    apis: ["./src/routers/*.ts"], // Path to the API routes
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express): void => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
