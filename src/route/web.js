import express from "express";

import crawlController from "../controllers/crawlController";
import crawlMiddleware from "../middlewares/crawlMiddleware";

let router = express.Router();

let initWebRoutes = (app) => {
  
  router.get(
    "/get-instagram",crawlMiddleware.midInsta,
    crawlController.getInstagram
  );

  router.get(
    "/get-hello",
    crawlController.getHello
  );

  return app.use("/", router);
};

module.exports = initWebRoutes;
