import React from "react";

// material-ui-icons
import CardTravel from "material-ui-icons/CardTravel";
import Extension from "material-ui-icons/Extension";
import Fingerprint from "material-ui-icons/Fingerprint";
import FlightLand from "material-ui-icons/FlightLand";
import Build from "material-ui-icons/Build";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";

// ##############################
// // // stories for RTLSupport view
// #############################

const rtlStories = [
  {
    // First story
    inverted: true,
    badgeColor: "danger",
    badgeIcon: CardTravel,
    title: "جهة أي",
    titleColor: "danger",
    body: (
      <p>
        قام كل ماذا العصبة اوروبا. أي جورج العالمي أخر, كان تم أطراف القوى
        استبدال. أسر ميناء تكتيكاً الجديدة، كل. جُل اللا التكاليف بـ, عرفها
        النزاع لليابان بـ أضف. انتهت المدن الثالث من وقد.وقبل قادة إحتار عن أخر.
        حين ونتج أخرى قد. بالعمل بالمطالبة فقد قد. عن جنوب ومضى الشتاء.
      </p>
    ),
    footerTitle: "مدن أن هُزم سكان, مكن."
  },
  {
    // Second story
    inverted: true,
    badgeColor: "success",
    badgeIcon: Extension,
    title: "جُل حكومة",
    titleColor: "success",
    body: (
      <p>
        عل فكانت الثقيلة بلا. شيء بخطوط بالرّغم التبرعات عن, يطول بأيدي لم كلّ.
        معقل الغالي واتّجه لم وتم, أن الصفحة بالمحور حول, بال مرمى الصفحات
        قُدُماً و. الأخذ سبتمبر العالم من ذلك. ان يبق شدّت الأبرياء, الى الربيع،
        والمانيا كل. ودول الأهداف التقليدي عل أضف, كلا يقوم الأخذ الآلاف بل.
      </p>
    )
  },
  {
    // Third story
    inverted: true,
    badgeColor: "info",
    badgeIcon: Fingerprint,
    title: "هذا غينيا",
    titleColor: "info",
    body: (
      <p>
        جهة المارق والديون التقليدية في, هو وترك المجتمع بريطانيا ذلك, لمّ ما
        العالم، اليابان،. ٣٠ فقامت أوروبا مشاركة بعد, ٢٠٠٤ الجو مساعدة ما حدى.
        في عليها وبحلول معارضة بعض. عن الأرض وبداية العمليات ولم. الجو جديداً
        الأوروبيّون أم به،. ثم التي نتيجة الآلاف جعل, عن المارق السادس قام. ما
        أخر فقامت الأجل الشرق،, فصل كل وسوء الأرواح. ثم بعد وشعار بأيدي. قبل
        وكسبت الغالي الولايات بل, ٣٠ أمّا أخرى لأداء أضف. هو منتصف معزّزة على.
        بـ أفريقيا التغييرات مما, أثره،.
      </p>
    ),
    footer: (
      <CustomDropdown
        rtlActive
        buttonColor="info"
        buttonIcon={Build}
        buttonProps={{
          round: true,
          style: { marginBottom: "0" }
        }}
        dropdownList={[
          "ان",
          "إجلاء لفرنسا",
          "أواخر الأرض بل",
          { divider: true },
          "عل اليها"
        ]}
      />
    )
  }
];

// ##############################
// // // stories for Widgets view
// #############################

const widgetStories = [
  {
    // First story
    inverted: true,
    badgeColor: "danger",
    badgeIcon: CardTravel,
    title: "Some Title",
    titleColor: "danger",
    body: (
      <p>
        Wifey made the best Father's Day meal ever. So thankful so happy so
        blessed. Thank you for making my family We just had fun with the
        “future” theme !!! It was a fun night all together ... The always rude
        Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in
        downtown.
      </p>
    ),
    footerTitle: "11 hours ago via Twitter"
  },
  {
    // Second story
    inverted: true,
    badgeColor: "success",
    badgeIcon: Extension,
    title: "Another One",
    titleColor: "success",
    body: (
      <p>
        Thank God for the support of my wife and real friends. I also wanted to
        point out that it’s the first album to go number 1 off of streaming!!! I
        love you Ellen and also my number one design rule of anything I do from
        shoes to music to homes is that Kim has to like it....
      </p>
    )
  },
  {
    // Third story
    inverted: true,
    badgeColor: "info",
    badgeIcon: Fingerprint,
    title: "Another Title",
    titleColor: "info",
    body: (
      <div>
        <p>
          Called I Miss the Old Kanye That’s all it was Kanye And I love you
          like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown
          LA 11:10PM
        </p>
        <p>
          What if Kanye made a song about Kanye Royère doesn't make a Polar bear
          bed but the Polar bear couch is my favorite piece of furniture we own
          It wasn’t any Kanyes Set on his goals Kanye
        </p>
      </div>
    ),
    footer: (
      <CustomDropdown
        buttonColor="info"
        buttonIcon={Build}
        buttonProps={{
          round: true,
          style: { marginBottom: "0" }
        }}
        dropdownList={[
          "Action",
          "Another action",
          "Something else here",
          { divider: true },
          "Separated link"
        ]}
      />
    )
  }
];

// ##############################
// // // stories for Timeline view
// #############################

const stories = [
  {
    // First story
    inverted: true,
    badgeColor: "danger",
    badgeIcon: CardTravel,
    title: "Some Title",
    titleColor: "danger",
    body: (
      <p>
        Wifey made the best Father's Day meal ever. So thankful so happy so
        blessed. Thank you for making my family We just had fun with the
        “future” theme !!! It was a fun night all together ... The always rude
        Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in
        downtown.
      </p>
    ),
    footerTitle: "11 hours ago via Twitter"
  },
  {
    // Second story
    badgeColor: "success",
    badgeIcon: Extension,
    title: "Another One",
    titleColor: "success",
    body: (
      <p>
        Thank God for the support of my wife and real friends. I also wanted to
        point out that it’s the first album to go number 1 off of streaming!!! I
        love you Ellen and also my number one design rule of anything I do from
        shoes to music to homes is that Kim has to like it....
      </p>
    )
  },
  {
    // Third story
    inverted: true,
    badgeColor: "info",
    badgeIcon: Fingerprint,
    title: "Another Title",
    titleColor: "info",
    body: (
      <div>
        <p>
          Called I Miss the Old Kanye That’s all it was Kanye And I love you
          like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown
          LA 11:10PM
        </p>
        <p>
          What if Kanye made a song about Kanye Royère doesn't make a Polar bear
          bed but the Polar bear couch is my favorite piece of furniture we own
          It wasn’t any Kanyes Set on his goals Kanye
        </p>
      </div>
    ),
    footer: (
      <CustomDropdown
        buttonColor="info"
        buttonIcon={Build}
        buttonProps={{
          round: true,
          style: { marginBottom: "0" }
        }}
        dropdownList={[
          "Action",
          "Another action",
          "Something else here",
          { divider: true },
          "Separated link"
        ]}
      />
    )
  },
  {
    // Fourth story
    badgeColor: "warning",
    badgeIcon: FlightLand,
    title: "Another One",
    titleColor: "warning",
    body: (
      <p>
        Tune into Big Boy's 92.3 I'm about to play the first single from Cruel
        Winter also to Kim’s hair and makeup Lorraine jewelry and the whole
        style squad at Balmain and the Yeezy team. Thank you Anna for the invite
        thank you to the whole Vogue team
      </p>
    )
  }
];

// ##############################
// // // data for populating the calendar in Calendar view
// #############################

/*var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDate();

const events = [
  {
    title: "All Day Event",
    allDay: true,
    start: new Date(y, m, 1),
    end: new Date(y, m, 1),
    color: "default"
  },
  {
    title: "Meeting",
    start: new Date(y, m, d - 1, 10, 30),
    end: new Date(y, m, d - 1, 11, 30),
    allDay: false,
    color: "green"
  },
  {
    title: "Lunch",
    start: new Date(y, m, d + 7, 12, 0),
    end: new Date(y, m, d + 7, 14, 0),
    allDay: false,
    color: "red"
  },
  {
    title: "Nud-pro Launch",
    start: new Date(y, m, d - 2),
    end: new Date(y, m, d - 2),
    allDay: true,
    color: "azure"
  },
  {
    title: "Birthday Party",
    start: new Date(y, m, d + 1, 19, 0),
    end: new Date(y, m, d + 1, 22, 30),
    allDay: false,
    color: "azure"
  },
  {
    title: "Click for Creative Tim",
    start: new Date(y, m, 21),
    end: new Date(y, m, 22),
    color: "orange"
  },
  {
    title: "Click for Google",
    start: new Date(y, m, 21),
    end: new Date(y, m, 22),
    color: "rose"
  }
];*/

// ##############################
// // // Tasks for TasksCard - see Widget view
// #############################

var bugs = [
  'Sign contract for "What are conference organizers afraid of?"',
  "Lines From Great Russian Literature? Or E-mails From My Boss?",
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  "Create 4 Invisible User Experiences you Never Knew About"
];
var website = [
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  'Sign contract for "What are conference organizers afraid of?"'
];
var server = [
  "Lines From Great Russian Literature? Or E-mails From My Boss?",
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  'Sign contract for "What are conference organizers afraid of?"'
];

// ##############################
// // // Tasks for TasksCard - see RTLSupport view
// #############################

var rtlBugs = [
  "فقد لمحاكم الاندونيسية, بلاده بالتوقيع تم يبق. جعل السبب وفرنسا الصينية أي.",
  "بحث. كل مما ٢٠٠٤ شاسعة العسكري جعل السبب وفرنسا الصينية أي.",
  "تسبب أفريقيا ضرب عن, عن إنطلاق جعل السبب وفرنسا الصينية أي.",
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي."
];
var rtlWebsite = [
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.",
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي."
];
var rtlServer = [
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.",
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.",
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي."
];

// ##############################
// // // data for thinClients
// #############################

const thinClients = {
  headerRow: ["Name", "IP Address", "MAC Address", "Health", "Firmware version", "Firmwaredate", "Power", "Lock", "Device State", "Serial No", "VM", "User Name"],
  footerRow: ["Name", "IP Address", "MAC Address", "Health", "Firmware version", "Firmwaredate", "Power", "Lock", "Device State", "Serial No", "VM", "User Name"],
  dataRows: [["AMI00E04C6B1331", "165.23.56.5", "52:58:D4:12:B3:F5", 0, "2.3.1", "23-Feb-2019", 0, 0, 0, "AMZ00e04c6b123", "win8.1", "admin@snapvue.com"],
  ["AMI00E04C6B1332", "125.56.2.38", "ED:B3:58:8F:59:45", 1, "2.3.1", "23-Feb-2019", 1, 0, 1, "AMZ00e04c6b123", "win8.1", "xyz@snapvue.com"],
  ["AMI00E04C6B1333", "125.56.2.58", "TD:B3:58:8F:59:95", 2, "2.3.1", "23-Feb-2019", 1, 1, 2, "AMZ00e04c6b124", "win7", "admin@snapvue.com"],
  ["AMI00E04C6B1334", "155.56.2.48", "JD:B3:58:8F:59:16", 0, "2.3.1", "23-Feb-2019", 1, 0, 3, "AMZ00e04c6b125", "win10", "aadminstrator@snapvue.com"],
  ["AMI00E04C6B1335", "225.56.25.38", "EJ:B3:58:8F:59:92", 0, "2.3.1", "23-Feb-2019", 0, 0, 4, "AMZ00e04c6b126", "win10", "mno@snapvue.com"],
  ["AMI00E04C6B1341", "45.66.23.3", "EU:B3:58:8F:59:59", 2, "2.3.1", "23-Feb-2019", 0, 0, 5, "AMZ00e04c6b127", "win10", "abc@snapvue.com"],
  ["AMI00E04C6B1342", "95.59.2.38", "ED:B3:58:8F:59:16", 1, "2.3.1", "23-Feb-2019", 1, 0, 6, "AMZ00e04c6b128", "win7", "abc@snapvue.com"],
  ["AMI00E04C6B1343", "68.12.2.38", "EH:B3:58:8F:59:51", 2, "2.3.1", "23-Feb-2019", 1, 0, 7, "AMZ00e04c6b129", "win7", "admin@snapvue.com"],
  ["AMI00E04C6B1344", "192.6.2.48", "UD:B3:58:8F:59:62", 0, "2.3.1", "23-Feb-2019", 0, 0, 1, "AMZ00e04c6b140", "win8.1", "admin@snapvue.com"],
  ["AMI00E04C6B1345", "135.56.2.98", "IK:B3:58:8F:59:34", 0, "2.3.1", "23-Feb-2019", 1, 1, 2, "AMZ00e04c6b141", "win8.1", "admin@snapvue.com"],
  ["AMI00E04C6B1346", "195.56.2.68", "DD:B3:58:8F:59:76", 0, "2.3.1", "23-Feb-2019", 1, 1, 3, "AMZ00e04c6b142", "win8.1", "aadminstrator@snapvue.com"],
  ["AMI00E04C6B1347", "125.56.2.38", "CG:B3:58:8F:59:43", 2, "2.3.1", "23-Feb-2019", 0, 0, 4, "AMZ00e04c6b143", "win10", "aadminstrator@snapvue.com"],
  ["AMI00E04C6B1348", "145.56.2.48", "HT:B3:58:8F:59:56", 1, "2.3.1", "23-Feb-2019", 0, 0, 5, "AMZ00e04c6b144", "win10", "admin@snapvue.com"],
  ["AMI00E04C6B1349", "155.66.2.38", "EL:B3:58:8F:59:18", 1, "2.3.1", "23-Feb-2019", 1, 0, 6, "AMZ00e04c6b145", "win8.1", "admin@snapvue.com"],
  ["AMI00E04C6B1350", "123.56.2.18", "PA:B3:58:8F:59:75", 2, "2.3.1", "23-Feb-2019", 0, 0, 0, "AMZ00e04c6b146", "win8.1", "admin@snapvue.com"],
  ["AMI00E04C6B1351", "120.56.2.35", "XT:B3:58:8F:59:59", 1, "2.3.1", "23-Feb-2019", 0, 0, 7, "AMZ00e04c6b147", "win8.1", "xyz@snapvue.com"],
  ]
}

// ##############################
// // // IPs for discovery
// #############################

const StartIpEndIp = {
  headerRow: ["Start IP", "End IP"],
  footerRow: ["Start IP", "End IP"],
  dataRows: [["10.0.197.1", "10.0.197.20"],
  ["10.0.197.51", "10.0.197.70"],
 
  ]
}

const SubnetPrefix = {
  headerRow: ["Start IP", "Subnet"],
  footerRow: ["Start IP", "Subnet"],
  dataRows: [["10.0.197.31", "40"],
  ["10.0.197.81", "40"],
 
  ]
}

const IPs = {
  headerRow: ["Start IP"],
  footerRow: ["Start IP"],
  dataRows: [["10.0.197.100"],
  ["10.0.197.200"],
 
  ]
}

// ##############################
// // // data for Plicy name
// #############################

const ClientPolicy = {
  headerRow: ["Policy Name", "description"],
  footerRow: ["Policy Name", "description"],
  dataRows: [["policy1", "Client Policy 1"],
  ["policy2", "Client Policy 2"],
  ["policy3", "Client Policy 3"],
 
  ]
}

// ##############################
// // // user and group name for client policy
// #############################

const UserGroupNameClientPolicy = {
  headerRow: ["User Or Name", "Account Name", "Domain", "Validity", "Policy", "Type"],
  footerRow: ["User Or Name", "Account Name", "Domain", "Validity", "Policy", "Type"],
  dataRows: [["Ashutosh Sharma", "ashutoshs", "amzetta.co.in", "Ok", "Guest (Lowest Priority)", "User"],
  ["Vignesh C", "cvignesh", "amzetta.co.in", "Ok", "Guest (Lowest Priority)", "User"],
  ["Xyz Abc", "xyza", "amzetta.co.in", "Missing", "Administrator(Highest Priority)", "User"],
  ["Conference Room India", "conferenceroom1", "amzetta.co.in", "Ok", "Guest (Lowest Priority)", "Group"],
  ["Domain Admins", "domaina", "amzetta.co.in", "Ok", "Administrator(Highest Priority)", "Group"],
  ["Domain Guests", "domaing", "amzetta.co.in", "Ok", "Administrator(Highest Priority)", "Group"],
 
  ]
}


// ##############################
// // // data for VPNProfiles
// #############################

const VpnProfiles = {
  headerRow: ["Profile Name", "Protocol", "Server IP/Host name", "Group"],
  footerRow: ["Profile Name", "Protocol", "Server IP/Host name", "Group"],
  dataRows: [["ashu1", "SSL VPN", "10.0.197.121", "Tiger Nixon"],
  ["ashu2", "SSL VPN", "10.0.197.121", "Tiger Nixon"],
  ["ashu3", "SSL VPN", "10.0.197.121", "Tiger Nixon"],
  ["ashu4", "SSL VPN", "10.0.198.111", "Garrett Winters"],
 
  ]
}

const AppliedVpnProfiles = {
  headerRow: ["Profile Name", "Protocol", "Server IP/Host name", "Group"],
  footerRow: ["Profile Name", "Protocol", "Server IP/Host name", "Group"],
  dataRows: [["ashu1", "SSL VPN", "10.0.197.121", "Tiger Nixon"],
  ["ashu2", "SSL VPN", "10.0.197.121", "Tiger Nixon"],
  ["ashu3", "SSL VPN", "10.0.197.121", "Tiger Nixon"],
 
  ]
}

// ##############################
// // // data for ConnectionProfiles
// #############################

const ConnectionProfiles = {
  headerRow: ["Profile Name", "Protocol", "description", "domain"],
  footerRow: ["Profile Name", "Protocol", "description", "domain"],
  dataRows: [["profile1", "Microsoft Profile", "SC03150T based profile", "snapvdi.local"],
  ["profile2", "Microsoft Profile", "SC0310T thin client", "snapvdi.local"],
  ["profile3", "Citrix Profile", "SC0310T thin client citrix", "snapvue.com"],
  ["profile4", "Citrix Profile", "SC0310T thin client citrix", "snapvue.com"],
 
  ]
}

const AppliedConnectionProfiles = {
  headerRow: ["Profile Name", "Protocol", "description", "domain"],
  footerRow: ["Profile Name", "Protocol", "description", "domain"],
  dataRows: [["profile1", "Microsoft Profile", "SC03150T based profile", "snapvdi.local"],
  ["profile2", "Microsoft Profile", "SC0310T thin client", "snapvdi.local"],
  ["profile3", "Citrix Profile", "SC0310T thin client citrix", "snapvue.com"],
 
  ]
}

// ##############################
// // // data for FTPProfiles
// #############################
const FtpProfiles = {
  headerRow: ["FTP Name", "Port", "Username", "Password", "FTP Path"],
  footerRow: ["FTP Name", "Port", "Username", "Password", "FTP Path"],
  dataRows: [["10.0.197.21", "21", "Solutions", "password@123", "/firmware"],
  ["10.0.197.21", "21", "admin", "password@123", "/firmware"],
  ["50.0.0.21", "21", "administrator", "password@123", "/root"],
 
  ]
}

// ##############################
// // // data for thinClientGroups
// #############################

const userList = {
  headerRow: ["Profile Name", "Protocol", "description", "domain"],
  footerRow: ["Profile Name", "Protocol", "description", "domain"],
  dataRows: [["profile1", "Microsoft Profile", "SC03150T based profile", "snapvdi.local"],
  ["profile2", "Microsoft Profile", "SC0310T thin client", "snapvdi.local"],
  ["profile3", "Citrix Profile", "SC0310T thin client citrix", "snapvue.com"],
 
  ]
}



// ##############################
// // // data for SCM Users
// #############################

const scmuserList = {
  headerRow: ["Name", "Privilege"],
  footerRow: ["Name", "Privilege"],
  dataRows: [["profile1", "Microsoft Profile"],
  ["profile2", "Microsoft Profile"],
  ["profile3", "Citrix Profile"],
 
  ]
}

// ##############################
// // // data for thinClientGroups
// #############################

// const thinClientGroups = {
//   headerRow: ["Name", "Description"],
//   footerRow: ["Name", "Description"],
//   dataRows: [["Tiger Nixon", "System Architect"],
//   ["Garrett Winters", "Accountant"],
//   ["Ashton Cox", "Junior Technical Author"],
//   ["Cedric Kelly", "Senior Javascript Developer"]]
// };
const thinClientGroups = {
  headerRow: ["Name", "Description"],
  footerRow: ["Name", "Description"],
  dataRows: [["Default", "This group belong to default users"],
  ["Admin", "This group belong to admin users"],
  ["Programmer", "This group belong to programmers"]]
};

// ##############################
// // // data for firmwareList
// #############################

const firmwareList = {
  headerRow: ["Name", "Uploaded File", "Description", "Uploaded Date"],
  footerRow: ["Name", "Uploaded File", "Description", "Uploaded Date"],
  dataRows: [["Firmware 1.0.2", "firmware_1.0.1.zip", "Custimized Xenial Xerus", "4/1/2019, 07:23:16 PM"],
  ["Firmware 1.1.0", "firmware_1.1.0.zip", "Custimized Xenial Xerus patch", "3/25/2019, 12:23:46 PM"],
  ["Firmware 2.1.0", "firmware_2.1.0.zip", "Custimized Bionic Beaver", "1/10/2019, 11:05:40 AM"]]
};

// ##############################
// // // data for taskList
// #############################

const taskList = [
	{
    name: "Discovering the devices",
    status: 0, // 0-running, 1-failed, 2-success
    started: "11 APR, 2019 12:24 PM",
    message: "Discovery in progress",
    schedule: 0,
    progress: 40
  },
  {
    name: "Installing firmware (Firmware_2.0.3) to group (Writers)",
    status: 0, // 0-running, 1-failed, 2-success
    started: "25 MAR, 2019 12:24 AM",
    message: "Installing firmware",
    schedule: 0,
    progress: 40
  },
  {
    name: "Applying settings (Authors settings) to group (Authors)",
    status: 1, // 0-running, 1-failed, 2-success
    started: "22 MAR, 2019 06:24 PM",
    ended: "22 MAR, 2019 06:54 PM",
    message: "Conflict with another task",
    schedule: 1,
    progress: 80
  },
  {
    name: "Applying profle (Editors profile) to group(Editors)",
    status: 2, // 0-running, 1-failed, 2-success
    started: "20 MAR, 2019 11:10 PM",
    ended: "21 MAR, 2019 12:10 AM",
    message: "Profile added successfully",
    schedule: 2,
    progress: 100
  }
];

// ##############################
// // // data for datatables.net in DataTables view
// #############################

const dataTable = {
  headerRow: ["Name", "Position", "Office", "Age", "Actions"],
  footerRow: ["Name", "Position", "Office", "Age", "Actions"],
  dataRows: [["Tiger Nixon", "System Architect", "Edinburgh", "61"],
  ["Garrett Winters", "Accountant", "Tokyo", "63"],
  ["Ashton Cox", "Junior Technical Author", "San Francisco", "66"],
  ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22"],
  ["Airi Satou", "Accountant", "Tokyo", "33"],
  ["Brielle Williamson", "Integration Specialist", "New York", "61"],
  ["Herrod Chandler", "Sales Assistant", "San Francisco", "59"],
  ["Rhona Davidson", "Integration Specialist", "Tokyo", "55"],
  ["Colleen Hurst", "Javascript Developer", "San Francisco", "39"],
  ["Sonya Frost", "Software Engineer", "Edinburgh", "23"],
  ["Jena Gaines", "Office Manager", "London", "30"],
  ["Quinn Flynn", "Support Lead", "Edinburgh", "22"],
  ["Charde Marshall", "Regional Director", "San Francisco", "36"],
  ]
};

var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDate();

const events ={
headerRow:["Eventdate","Name or IP","Source","Event Type","Event Data","Severity"],
footerRow:["Eventdate","Name or IP","Source","Event Type","Event Data","Severity"],
dataRows:[[new Date(y, m, d - 6, 10, 30),"172.164.12.10","Discovery Manager","New ip added","Device (AMI00E04C6B1332) got added",0],
 [new Date(y, m, d - 1, 50, 10),"172.164.12.10","Discovery Manager","New ip added","Device (AMI00E04C6B1333) is known",0],
 [new Date(y, m, d - 5, 45, 41),"172.164.12.10","Discovery Manager","New ip added","Device (AMI00E04C6B1332) is unknown",2],
 [new Date(y, m, d - 7, 14, 20),"172.164.12.10","FTP Profile Manager","FTP profile created","New FTP profile (10.0.97.21) got created",0],
 [new Date(y, m, d - 4, 50, 30),"172.164.12.10","VPN Profile Manager","VPN profile created","New VPN profile (ashu2) got created",0],
 [new Date(y, m, d - 6, 16, 52),"172.164.12.10","Discovery Manager","Device got removed","Device (AMI00E04C6B1331) got removed",2],
 [new Date(y, m, d - 7, 14, 19),"172.164.12.10","Time Manager","Time changed","TimeZone got changed from (UTC-05:00) to (UTC+05:30)",1],
 [new Date(y, m, d - 4, 33, 41),"172.164.12.10","Display Manager","Display settings","Display settings got changed from Display-1 to Display-2",1],
 [new Date(y, m, d - 5, 47, 27),"172.164.12.10","Discovery Manager","New ip added","Device (AMI00E04C6B1330) got added",0],
 // [new Date(y, m, d - 8, 58, 18),"172.164.12.10","Display Manager","Display settings","Display settings got changed from Display-1 to Display-2",1],
 [new Date(y, m, d - 3, 37, 53),"172.164.12.10","Discovery Manager","New ip added","Device (AMI00E04C6B1334) got added",0],
 // [new Date(y, m, d - 5, 43, 18),"172.164.12.10","Time Manager","Time changed","TimeZone got changed from (UTC-05:00) to (UTC+05:30)",1],
 [new Date(y, m, d - 7, 29, 17),"172.164.12.10","Discovery Manager","New ip added","Device (AMI00E04C6B1335) got added",0],
 // [new Date(y, m, d - 7, 39, 20),"172.164.12.10","Discovery Manager","Device got removed","Device (AMI00E04C6B1334) got removed",2],
 // [new Date(y, m, d - 7, 52, 20),"172.164.12.10","Time Manager","Time changed","TimeZone got changed from (UTC-05:00) to (UTC+05:30)",1],
 [new Date(y, m, d - 7, 29, 20),"172.164.12.10","Discovery Manager","New ip added","Device (AMI00E04C6B1337) got added",0],
 // [new Date(y, m, d - 7, 45, 20),"172.164.12.10","Discovery Manager","Device got removed","Device (AMI00E04C6B1337) got removed",2],
]
};

const certificateList = {
  headerRow: ["Name", "Type","Uploaded File", "Description", "Uploaded Date"],
  footerRow: ["Name","Type", "Uploaded File", "Description", "Uploaded Date"],
  dataRows: [["Certificate 1.0.2", "citrix certificate","firmware_1.0.1.zip", "Custimized Xenial Xerus", "February 16, 2017"],
  ["Certificate 1.1.0","citrix certificate", "certificate_1.1.0.zip", "Custimized Xenial Xerus patch", "October 16, 2017"],
  ["Certificate 2.1.0","VMware certificate", "certificate_2.1.0.zip", "Custimized Bionic Beaver", "December 16, 2018"]]
};
const RepositoryList = {
  headerRow: ["Name", "Uploaded File", "Description", "Uploaded Date"],
  footerRow: ["Name", "Uploaded File", "Description", "Uploaded Date"],
  dataRows: [["Repository1", "Repository_1.0.1.zip", "Custimized Xenial Xerus", "February 16, 2017"],
  ["Repository1.1.0", "Repositorye_1.1.0.zip", "Custimized Xenial Xerus patch", "October 16, 2017"],
  ["Repository2.1.0", "Repository_2.1.0.zip", "Custimized Bionic Beaver", "December 16, 2018"]]
};
const Ldapinfo={
  Host:"172.16.98.89",
  Port:"389",
  AccountDomainName:"ami.com",
  BindDN:"cn=riverdale,dc=com",
  BaseDN:"dc=riverdale,dc=com"
}

const Settingsrepo = {
  headerRow: ["Name", "Description"],
  footerRow: ["Name", "Uploaded File"],
  dataRows: [["Settingsrepo1.0.0", "Custimized Xenial Xerus"],
  ["Settingsrepo1.1.0", "Custimized Xenial Xerus patch"],
  ["Settingsrepo2.1.0",  "Custimized Bionic Beaver"]]
};

export {
  // data for React Big Calendar in Calendar view
  //events,
  // stories for RTLSupport view
  rtlStories,
  // stories for Widgets view
  widgetStories,
  // stories for Timeline view
  stories,
  // these 3 are used to create the tasks lists in TasksCard - Widget view
  bugs,
  website,
  server,
  // these 3 are used to create the tasks lists in TasksCard - RTLSupport view
  rtlBugs,
  rtlWebsite,
  rtlServer,
  // data for datatables.net in DataTables view
  dataTable,
  // thinClients list
  thinClients,
  // thinClientGroups list
  thinClientGroups,
  // firmware list
  firmwareList,
  // task list
  taskList,
  //event list
// vpn profiles
  VpnProfiles,
  AppliedVpnProfiles,
  ConnectionProfiles,
  AppliedConnectionProfiles,
  ClientPolicy,
  events,
userList,
scmuserList,
  FtpProfiles,
  StartIpEndIp,
  SubnetPrefix,
  IPs,
  UserGroupNameClientPolicy,
  certificateList,
  RepositoryList,
  Ldapinfo,
  Settingsrepo
};
