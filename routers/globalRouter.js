import express from "express";
import routes from "../routes";
import {
  home,
  aipen,
  beontteut,
  outsource,
  request,
  contact,
  privacyPolicy
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.aipen, aipen);
globalRouter.get(routes.beontteut, beontteut);
globalRouter.get(routes.outsource, outsource);
globalRouter.get(routes.request, request);
globalRouter.get(routes.contact, contact);
globalRouter.get(routes.privacyPolicy, privacyPolicy);

export default globalRouter;
