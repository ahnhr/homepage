import multer from "multer";
import routes from "./routes";

export const multerHistory = multer({ dest: "uploads/histories/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "빈즈소프트";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadHistory = multerHistory.single("historyImgFile");
