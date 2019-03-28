import routes from "../routes";
import History from "../models/History";

export const vision = (req, res) => res.render("vision", { pageTitle: "비전" });

export const history = async (req, res) => {
  try {
    const histories = await History.find({}).sort({ _id: -1 });
    res.render("history", { pageTitle: "주요연혁", histories });
  } catch (error) {
    console.log(error);
    res.render("history", { pageTitle: "주요연혁", histories: [] });
  }
};

export const historyDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const history = await History.findById(id);
    res.render("historyDetail", { pageTitle: history.title, history });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "주요연혁 등록" });

export const postUpload = async (req, res) => {
  const {
    body: { date, title, description },
    file: { path }
  } = req;
  const newHistory = await History.create({
    fileUrl: path,
    date,
    title,
    description
  });
  res.redirect(routes.historyDetail(newHistory.id));
};

export const getEditHistory = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const history = await History.findById(id);
    res.render("editHistory", { pageTitle: `${history.title} 편집`, history });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditHistory = async (req, res) => {
  const {
    params: { id },
    body: { date, title, description }
  } = req;
  try {
    await History.findOneAndUpdate({ _id: id }, { date, title, description });
    res.redirect(routes.historyDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteHistory = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await History.findOneAndRemove({ _id: id });
  } catch (error) {}
  res.redirect(routes.home);
};
