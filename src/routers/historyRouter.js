import express from "express";
import routes from "../routes";
import {
  deleteHistory,
  historyDetail,
  history,
  vision,
  postUpload,
  getUpload,
  getEditHistory,
  postEditHistory
} from "../controllers/historyController";
import { uploadHistory, onlyPrivate } from "../middlewares";

const historyRouter = express.Router();

//history
historyRouter.get(routes.history, history);
historyRouter.get(routes.vision, vision);

//history Detail
historyRouter.get(routes.historyDetail(), historyDetail);

//Upload History
historyRouter.get(routes.upload, onlyPrivate, getUpload);
historyRouter.post(routes.upload, onlyPrivate, uploadHistory, postUpload);

//Edit History
historyRouter.get(routes.editHistory(), onlyPrivate, getEditHistory);
historyRouter.post(routes.editHistory(), onlyPrivate, postEditHistory);

//Delete History
historyRouter.get(routes.deleteHistory(), onlyPrivate, deleteHistory);

export default historyRouter;
