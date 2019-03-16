import express from "express";
import routes from "../routes";
import {
  upload,
  editHistory,
  deleteHistory,
  historyDetail,
  history,
  vision
} from "../controllers/historyController";

const historyRouter = express.Router();

historyRouter.get(routes.history, history);
historyRouter.get(routes.vision, vision);
historyRouter.get(routes.historyDetail, historyDetail);
historyRouter.get(routes.upload, upload);
historyRouter.get(routes.editHistory, editHistory);
historyRouter.get(routes.deleteHistory, deleteHistory);

export default historyRouter;
