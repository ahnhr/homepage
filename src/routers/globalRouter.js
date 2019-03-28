import express from "express";
import routes from "../routes";
import {
  home,
  aipen,
  beontteut,
  outsource,
  request,
  contact,
  privacyPolicy,
  postLogin,
  getLogin,
  postJoin,
  getJoin,
  admin,
  logout
} from "../controllers/globalController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.home, home);
globalRouter.get(routes.aipen, aipen);
globalRouter.get(routes.beontteut, beontteut);
globalRouter.get(routes.outsource, outsource);
globalRouter.get(routes.request, request);
globalRouter.get(routes.contact, contact);
globalRouter.get(routes.privacyPolicy, privacyPolicy);

globalRouter.get(routes.admin, admin);

export default globalRouter;
