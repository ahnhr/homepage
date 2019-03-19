import multer from "multer";
import routes from "./routes";

export const multerHistory = multer({ dest: "uploads/histories/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "빈즈소프트";
  res.locals.routes = routes;
  next();
};

export const uploadHistory = multerHistory.single("historyImgFile");
