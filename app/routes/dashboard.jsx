import Explorer from "views/Explorer/Explorer.jsx";
import Dashboard from "views/Dashboard/Dashboard.jsx";
import FirmwareWizard from "views/FirmwareWizard";
import SettingsWizard from "views/SettingsWizard";
import Events from "views/Events";
import VpnWizard from "views/VpnWizard";
import ConnectionProfileWizard from "views/ConnectionProfileWizard";
import ClientPolicyWizard from "views/ClientpolicyWizard";
import FtpConfiguration from "views/FtpDetail";
import Discovery from "views/Discovery";
import SslManage from "views/SslManage";
import ControlPanel from "views/ControlPanel";
import ScmUsersConfiguration from "views/ScmUsers";
import ClientLibConfiguration from "views/ClientLibrary";
import LdapAuthManagement from "views/LDAP";
import CertificateWizard from "views/CertificateWizard";

/*import Buttons from "views/Components/Buttons.jsx";
import GridSystem from "views/Components/GridSystem.jsx";
import Panels from "views/Components/Panels.jsx";
import SweetAlert from "views/Components/SweetAlert.jsx";
import Notifications from "views/Components/Notifications.jsx";
import Icons from "views/Components/Icons.jsx";
import Typography from "views/Components/Typography.jsx";
import RegularForms from "views/Forms/RegularForms.jsx";
import ExtendedForms from "views/Forms/ExtendedForms.jsx";
import ValidationForms from "views/Forms/ValidationForms.jsx";
import Wizard from "views/Forms/Wizard.jsx";
import RegularTables from "views/Tables/RegularTables.jsx";
import ExtendedTables from "views/Tables/ExtendedTables.jsx";
import ReactTables from "views/Tables/ReactTables.jsx";
import GoogleMaps from "views/Maps/GoogleMaps.jsx";
import FullScreenMap from "views/Maps/FullScreenMap.jsx";
import VectorMap from "views/Maps/VectorMap.jsx";
import Charts from "views/Charts/Charts.jsx";
import Calendar from "views/Calendar/Calendar.jsx";
import Widgets from "views/Widgets/Widgets.jsx";
import UserProfile from "views/Pages/UserProfile.jsx";
import TimelinePage from "views/Pages/Timeline.jsx";
import RTLSupport from "views/Pages/RTLSupport.jsx";

import pagesRoutes from "./pages.jsx";*/

// material-ui-icons
import DashboardIcon from "material-ui-icons/Dashboard";
import {GoTools as ControlPanelIcon} from "react-icons/go"
import ExploreIcon from "material-ui-icons/Explore";
import EventIcon from "material-ui-icons/Event";
import { MdSystemUpdate as DeploymentIcon } from "react-icons/md";
import { MdSystemUpdate as SslManageIcon } from "react-icons/md";
import { MdSystemUpdate as FtpDetailIcon } from "react-icons/md";
import { MdSystemUpdate as DiscoveryIcon } from "react-icons/md";
import { MdSystemUpdate as ScmUsersIcon } from "react-icons/md";
import { MdSystemUpdate as ClientLibraryIcon } from "react-icons/md";
import { MdSystemUpdate as LdapIcon } from "react-icons/md";

/*import Image from "material-ui-icons/Image";
import Apps from "material-ui-icons/Apps";
import ContentPaste from "material-ui-icons/ContentPaste";
import GridOn from "material-ui-icons/GridOn";
import Place from "material-ui-icons/Place";
import WidgetsIcon from "material-ui-icons/Widgets";
import Timeline from "material-ui-icons/Timeline";
import DateRange from "material-ui-icons/DateRange";*/

/*var pages = [
  {
    path: "/timeline-page",
    name: "Timeline Page",
    mini: "TP",
    component: TimelinePage
  },
  {
    path: "/user-page",
    name: "User Profile",
    mini: "UP",
    component: UserProfile
  },
  {
    path: "/rtl/rtl-support-page",
    name: "RTL Support",
    mini: "RS",
    component: RTLSupport
  }
].concat(pagesRoutes);*/

var dashRoutes = [
  /*{
    path: "/Home",
    name: "Home",
    icon: HomeIcon,
    component: Home
  },*/
  {
    path: "/Home/dashboard",
    exact: true,
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard
  },
  {
    path: "/Home/control_panel",
    exact: true,
    name: "Control Panel",
    icon: ControlPanelIcon,
    component: ControlPanel,
    isInFooter: true,
    childRoutes: [
      {
        path: "/discovery",
        exact: true,
        name: "Client Discovery Configuration",
        icon: DiscoveryIcon,
        component: Discovery,
      },
      {
        path: "/Security_configuration",
        exact: true,
        name: "Security Configuration",
        icon: SslManageIcon,
        component: SslManage
      },
      {
        path: "/FTP_configuration",
        exact: true,
        name: "FTP Configuration",
        icon: FtpDetailIcon,
        component: FtpConfiguration
      },
      {
        path: "/SCM_users",
        exact: true,
        name: "SCM Users Configuration",
        icon: ScmUsersIcon,
        component: ScmUsersConfiguration
      },
	  {
        path: "/Client_library",
        exact: true,
        name: "Client Library Configuration",
        icon: ClientLibraryIcon,
        component: ClientLibConfiguration
      },
	  {
        path: "/LDAP_configuration",
        exact: true,
        name: "LDAP Authentication Management",
        icon: LdapIcon,
        component: LdapAuthManagement
      }
	  
    ]
  },
  {
    path: "/Home/events",
    exact: true,
    name: "Events",
    icon: EventIcon,
    component: Events
  },
  {
    path: "/Home/explorer",
    exact: true,
    name: "Explorer",
    icon: ExploreIcon,
    component: Explorer
  },
  {
    collapse: true,
    path: "/Home/deployment",
    name: "Deployment",
    state: "openDeployment",
    icon: DeploymentIcon,
    views: [
      {
        path: "/VPN_profile_wizard",
        exact: true,
        name: "VPN Profile Wizard",
        mini: "VPN",
        component: VpnWizard
      },
      {
        path: "/Connection_profile_wizard",
        exact: true,
        name: "Connection Profile Wizard",
        mini: "CPP",
        component: ConnectionProfileWizard
      },
      {
        path: "/Client_policy_wizard",
        exact: true,
        name: "Client Policy Wizard",
        mini: "CLP",
        component: ClientPolicyWizard
      },
      {
        path: "/Firmware_wizard",
        exact: true,
        name: "Firmware Wizard",
        mini: "FD",
        component: FirmwareWizard
      },
      {
        path: "/Settings_wizard",
        exact: true,
        name: "Settings Wizard",
        mini: "SD",
        component: SettingsWizard
      },
	  {
        path: "/Certificate_wizard",
        exact: true,
        name: "Certificate Wizard",
        mini: "CD",
        component: CertificateWizard
      },
	  ]
  },

  /*

  {
    collapse: true,
    path: "-page",
    name: "Pages",
    state: "openPages",
    icon: Image,
    views: pages
  },
  {
    collapse: true,
    path: "/components",
    name: "Components",
    state: "openComponents",
    icon: Apps,
    views: [
      {
        path: "/components/buttons",
        name: "Buttons",
        mini: "B",
        component: Buttons
      },
      {
        path: "/components/grid-system",
        name: "Grid System",
        mini: "GS",
        component: GridSystem
      },
      {
        path: "/components/panels",
        name: "Panels",
        mini: "P",
        component: Panels
      },
      {
        path: "/components/sweet-alert",
        name: "Sweet Alert",
        mini: "SA",
        component: SweetAlert
      },
      {
        path: "/components/notifications",
        name: "Notifications",
        mini: "N",
        component: Notifications
      },
      { path: "/components/icons", name: "Icons", mini: "I", component: Icons },
      {
        path: "/components/typography",
        name: "Typography",
        mini: "T",
        component: Typography
      }
    ]
  },
  {
    collapse: true,
    path: "/forms",
    name: "Forms",
    state: "openForms",
    icon: ContentPaste,
    views: [
      {
        path: "/forms/regular-forms",
        name: "Regular Forms",
        mini: "RF",
        component: RegularForms
      },
      {
        path: "/forms/extended-forms",
        name: "Extended Forms",
        mini: "EF",
        component: ExtendedForms
      },
      {
        path: "/forms/validation-forms",
        name: "Validation Forms",
        mini: "VF",
        component: ValidationForms
      },
      { path: "/forms/wizard", name: "Wizard", mini: "W", component: Wizard }
    ]
  },
  {
    collapse: true,
    path: "/tables",
    name: "Tables",
    state: "openTables",
    icon: GridOn,
    views: [
      {
        path: "/tables/regular-tables",
        name: "Regular Tables",
        mini: "RT",
        component: RegularTables
      },
      {
        path: "/tables/extended-tables",
        name: "Extended Tables",
        mini: "ET",
        component: ExtendedTables
      },
      {
        path: "/tables/react-tables",
        name: "React Tables",
        mini: "RT",
        component: ReactTables
      }
    ]
  },
  {
    collapse: true,
    path: "/maps",
    name: "Maps",
    state: "openMaps",
    icon: Place,
    views: [
      {
        path: "/maps/google-maps",
        name: "Google Maps",
        mini: "GM",
        component: GoogleMaps
      },
      {
        path: "/maps/full-screen-maps",
        name: "Full Screen Map",
        mini: "FSM",
        component: FullScreenMap
      },
      {
        path: "/maps/vector-maps",
        name: "Vector Map",
        mini: "VM",
        component: VectorMap
      }
    ]
  },
  { path: "/widgets", name: "Widgets", icon: WidgetsIcon, component: Widgets },
  { path: "/charts", name: "Charts", icon: Timeline, component: Charts },
  { path: "/calendar", name: "Calendar", icon: DateRange, component: Calendar },*/
  { redirect: true, path: "/", pathTo: "/Home/dashboard", name: "Home" }
];
export default dashRoutes;
