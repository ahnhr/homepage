export const vision = (req, res) => res.render("vision", { pageTitle: "비전" });
export const history = (req, res) =>
  res.render("history", { pageTitle: "주요연혁" });
export const historyDetail = (req, res) =>
  res.render("historyDetail", { pageTitle: "주요연혁" });
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "주요연혁 등록" });
export const editHistory = (req, res) =>
  res.render("editHistory", { pageTitle: "주요연혁 편집" });
export const deleteHistory = (req, res) =>
  res.render("deleteHistory", { pageTitle: "주요연혁 삭제" });
