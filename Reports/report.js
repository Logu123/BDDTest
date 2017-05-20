$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homePageTest/home.feature");
formatter.feature({
  "line": 2,
  "name": "Validating the NTL taxi Application",
  "description": "",
  "id": "validating-the-ntl-taxi-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HomeTest"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: Validation the application with positive data"
    },
    {
      "line": 4,
      "value": "#Given Open Browser as firefox"
    },
    {
      "line": 5,
      "value": "#Then Enter URL as http://www.ntltaxi.com/"
    },
    {
      "line": 6,
      "value": "#Then Enter Username as VMetry"
    },
    {
      "line": 7,
      "value": "#Then Enter Mobile number as 8956235612"
    },
    {
      "line": 8,
      "value": "#And Enter Pickup Address as ADYAR"
    },
    {
      "line": 9,
      "value": "#And Enter Drop Address as AGARAM"
    },
    {
      "line": 10,
      "value": "#Then Select Vehicle Type as Sedan"
    },
    {
      "line": 11,
      "value": "#And Click Booklater checkbox"
    },
    {
      "line": 12,
      "value": "#But dont click button"
    }
  ],
  "line": 15,
  "name": "Validation the application with positive data",
  "description": "",
  "id": "validating-the-ntl-taxi-application;validation-the-application-with-positive-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "Open Browser as \u003cBROWSER\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Enter URL as \u003cURL\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Enter Username as \u003cUSERNAME\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Enter Mobile number as \u003cMOBILENO\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Enter Pickup Address as \u003cPICKUPADDRESS\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter Drop Address as \u003cDROPADDRESS\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Select Vehicle Type as \u003cVEHICLETYPE\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click Booklater checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "dont click button",
  "keyword": "But "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "validating-the-ntl-taxi-application;validation-the-application-with-positive-data;",
  "rows": [
    {
      "cells": [
        "BROWSER",
        "URL",
        "USERNAME",
        "MOBILENO",
        "PICKUPADDRESS",
        "DROPADDRESS",
        "VEHICLETYPE"
      ],
      "line": 26,
      "id": "validating-the-ntl-taxi-application;validation-the-application-with-positive-data;;1"
    },
    {
      "cells": [
        "Firefox",
        "http://www.ntltaxi.com/",
        "VMetryA",
        "7845124512",
        "ADYAR",
        "AGARAM",
        "Sedan"
      ],
      "line": 27,
      "id": "validating-the-ntl-taxi-application;validation-the-application-with-positive-data;;2"
    },
    {
      "cells": [
        "Firefox",
        "http://www.ntltaxi.com/",
        "VMetryB",
        "7845124512",
        "ADYAR",
        "AGARAM",
        "Sedan"
      ],
      "line": 28,
      "id": "validating-the-ntl-taxi-application;validation-the-application-with-positive-data;;3"
    },
    {
      "cells": [
        "Firefox",
        "http://www.ntltaxi.com/",
        "VMetryC",
        "7845124512",
        "ADYAR",
        "AGARAM",
        "Sedan"
      ],
      "line": 29,
      "id": "validating-the-ntl-taxi-application;validation-the-application-with-positive-data;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Validation the application with positive data",
  "description": "",
  "id": "validating-the-ntl-taxi-application;validation-the-application-with-positive-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HomeTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Open Browser as Firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Enter Username as VMetryA",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Enter Mobile number as 7845124512",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Enter Pickup Address as ADYAR",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter Drop Address as AGARAM",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Select Vehicle Type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click Booklater checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "dont click button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 102253634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 124225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VMetryA",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 153298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7845124512",
      "offset": 23
    }
  ],
  "location": "HomePageTest.EnterMobilenumber(String)"
});
formatter.result({
  "duration": 112897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 234856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AGARAM",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 124602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 23
    }
  ],
  "location": "HomePageTest.SelectVehicleType(String)"
});
formatter.result({
  "duration": 129888,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.ClickBooklater()"
});
formatter.result({
  "duration": 182749,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclick()"
});
formatter.result({
  "duration": 189168,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Validation the application with positive data",
  "description": "",
  "id": "validating-the-ntl-taxi-application;validation-the-application-with-positive-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HomeTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Open Browser as Firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Enter Username as VMetryB",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Enter Mobile number as 7845124512",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Enter Pickup Address as ADYAR",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter Drop Address as AGARAM",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Select Vehicle Type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click Booklater checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "dont click button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 147257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 210691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VMetryB",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 180484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7845124512",
      "offset": 23
    }
  ],
  "location": "HomePageTest.EnterMobilenumber(String)"
});
formatter.result({
  "duration": 88354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 107611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AGARAM",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 82313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 23
    }
  ],
  "location": "HomePageTest.SelectVehicleType(String)"
});
formatter.result({
  "duration": 69853,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.ClickBooklater()"
});
formatter.result({
  "duration": 52106,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclick()"
});
formatter.result({
  "duration": 45688,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Validation the application with positive data",
  "description": "",
  "id": "validating-the-ntl-taxi-application;validation-the-application-with-positive-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HomeTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Open Browser as Firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Enter Username as VMetryC",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Enter Mobile number as 7845124512",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Enter Pickup Address as ADYAR",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter Drop Address as AGARAM",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Select Vehicle Type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click Booklater checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "dont click button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 161227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 190679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VMetryC",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 104590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7845124512",
      "offset": 23
    }
  ],
  "location": "HomePageTest.EnterMobilenumber(String)"
});
formatter.result({
  "duration": 100059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 71363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AGARAM",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 174065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 23
    }
  ],
  "location": "HomePageTest.SelectVehicleType(String)"
});
formatter.result({
  "duration": 89487,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.ClickBooklater()"
});
formatter.result({
  "duration": 60791,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.Dontclick()"
});
formatter.result({
  "duration": 174443,
  "status": "passed"
});
});