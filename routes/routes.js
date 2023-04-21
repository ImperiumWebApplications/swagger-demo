const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Integration Providers
 *     description: "Main API for Integration Providers. Endpoints: /api/token, /api/register"
 *   - name: Syspro
 *     description: "Integration Provider - Syspro. Endpoints: /syspro/orders"
 *   - name: BPA
 *     description: "Integration Provider - BPA. Endpoints: /bpa/orders"
 */

/**
 * @swagger
 * /api/token:
 *   post:
 *     summary: Issue a JWT token
 *     tags: [Integration Providers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: JWT token issued
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */
router.post("/api/token", (req, res) => {
  // Issue JWT token here
});

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a new provider
 *     tags: [Integration Providers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Provider registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.post("/api/register", (req, res) => {
  // Register provider here
});

/**
 * @swagger
 * /syspro/orders:
 *   get:
 *     summary: Retrieve Syspro orders
 *     tags: [Syspro]
 *     responses:
 *       200:
 *         description: A list of Syspro orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   orderId:
 *                     type: integer
 *                   orderDetails:
 *                     type: string
 */

router.get("/syspro/orders", (req, res) => {
  // Retrieve Syspro orders here
});

/**
 * @swagger
 * /bpa/orders:
 *   get:
 *     summary: Retrieve BPA orders
 *     tags: [BPA]
 *     responses:
 *       200:
 *         description: A list of BPA orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   orderId:
 *                     type: integer
 *                   orderDetails:
 *                     type: string
 */
router.get("/bpa/orders", (req, res) => {
  // Retrieve BPA orders here
});

module.exports = router;
