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
