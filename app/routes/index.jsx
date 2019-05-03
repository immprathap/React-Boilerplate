//import Pages from "layouts/Pages.jsx";
//import RTL from "layouts/RTL.jsx";
import Dashboard from "layouts/Dashboard.jsx";
import Signin from "views/Signin";

var indexRoutes = [
  //{ path: "/rtl", name: "RTL", component: RTL },
  //{ path: "/pages", name: "Pages", component: Pages },
  { path: "/signin", name: "Login", component: Signin },
  { path: "/", name: "Home", component: Dashboard }
];

export default indexRoutes;
