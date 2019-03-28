import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });
export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});
export const logout = (req, res) => {
  // To Do: Process Log Out
  req.logout();
  res.redirect(routes.home);
};

export const admin = (req, res) => {
  res.render("adminDetail", { pageTitle: "Admin Detail", user: req.user });
};

export const home = (req, res) => res.render("home", { pageTitle: "홈" });
export const aipen = (req, res) =>
  res.render("aipen", { pageTitle: "A.I.Pen" });
export const beontteut = (req, res) =>
  res.render("beontteut", { pageTitle: "번뜻" });
export const outsource = (req, res) =>
  res.render("outsource", { pageTitle: "외주개발" });
export const request = (req, res) =>
  res.render("request", { pageTitle: "프로젝트 의뢰" });
export const contact = (req, res) =>
  res.render("contact", { pageTitle: "오시는 길" });
export const privacyPolicy = (req, res) =>
  res.render("privacyPolicy", { pageTitle: "개인정보처리방침" });
