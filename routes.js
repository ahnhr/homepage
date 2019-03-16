const HOME = "/";

//business
const AIPEN = "/business/aipen";
const BEONTTEUT = "/business/beontteut";
const OUTSOURCE = "/business/outsource";

//contact
const REQUEST = "/contact/request";
const CONTACT = "/contact/contact";

//historyRouter
const ABOUT = "/about";
const VISION = "/vision";
const HISTORY = "/history";
const UPLOAD = "/upload";
const HISTORY_DETAIL = "/:id";
const EDIT_HISTORY = "/:id/edit";
const DELETE_HISTORY = "/:id/delete";

const routes = {
  home: HOME,
  about: ABOUT,
  vision: VISION,
  history: HISTORY,
  historyDetail: HISTORY_DETAIL,
  upload: UPLOAD,
  editHistory: EDIT_HISTORY,
  deleteHistory: DELETE_HISTORY,
  aipen: AIPEN,
  beontteut: BEONTTEUT,
  outsource: OUTSOURCE,
  request: REQUEST,
  contact: CONTACT
};

export default routes;
