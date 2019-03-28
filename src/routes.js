const HOME = "/";
const JOIN = "/admin/join";
const LOGIN = "/admin/login";
const LOGOUT = "/logout";
const ADMIN = "/admin";

//business
const AIPEN = "/business/aipen";
const BEONTTEUT = "/business/beontteut";
const OUTSOURCE = "/business/outsource";

//contact
const REQUEST = "/contact/request";
const CONTACT = "/contact/contact";

//historyRouter
const ABOUT = "/about";
const HISTORY = "/history";
const UPLOAD = "/upload";
const VISION = "/history/vision";
const HISTORY_DETAIL = "/history/:id";
const EDIT_HISTORY = "/history/:id/edit";
const DELETE_HISTORY = "/history/:id/delete";

//policy/privacypolicy
const PRIVACY_POLICY = "/policy/privacypolicy";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  about: ABOUT,
  vision: VISION,
  history: HISTORY,
  historyDetail: id => {
    if (id) {
      return `/about/history/${id}`;
    } else {
      return HISTORY_DETAIL;
    }
  },
  upload: UPLOAD,
  editHistory: id => {
    if (id) {
      return `/about/history/${id}/edit`;
    } else {
      return EDIT_HISTORY;
    }
  },
  deleteHistory: id => {
    if (id) {
      return `/about/history/${id}/delete`;
    } else {
      return DELETE_HISTORY;
    }
  },
  aipen: AIPEN,
  beontteut: BEONTTEUT,
  outsource: OUTSOURCE,
  request: REQUEST,
  contact: CONTACT,
  privacyPolicy: PRIVACY_POLICY,
  admin: ADMIN
};

export default routes;
