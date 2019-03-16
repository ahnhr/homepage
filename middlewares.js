import routes from "./routes";
import { SSL_OP_NETSCAPE_CA_DN_BUG } from "constants";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "빈즈소프트";
  res.locals.routes = routes;
  next();
};
