const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const routes = require("./routes/routes");

const app = express();

app.use("/", routes);

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Demo API",
      version: "1.0.0",
      description: "A demo API for integration providers",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(3000, () => console.log("Server running on port 3000"));
