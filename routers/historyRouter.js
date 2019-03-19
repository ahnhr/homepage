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
import { uploadHistory } from "../middlewares";

const historyRouter = express.Router();

//history
historyRouter.get(routes.history, history);
historyRouter.get(routes.vision, vision);

//history Detail
historyRouter.get(routes.historyDetail(), historyDetail);

//Upload History
historyRouter.get(routes.upload, getUpload);
historyRouter.post(routes.upload, uploadHistory, postUpload);

//Edit History
historyRouter.get(routes.editHistory(), getEditHistory);
historyRouter.post(routes.editHistory(), postEditHistory);

//Delete History
historyRouter.get(routes.deleteHistory(), deleteHistory);

export default historyRouter;
