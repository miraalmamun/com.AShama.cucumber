$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Login.feature");
formatter.feature({
  "name": "Login into Rediff Money App",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login in App",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "I open \u003cBrowser\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "I go to loginURL",
  "keyword": "And "
});
formatter.step({
  "name": "I login inside application",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "Username",
        "miraalmamun"
      ]
    },
    {
      "cells": [
        "Password",
        "Mimo949658"
      ]
    }
  ]
});
formatter.step({
  "name": "Login should be \u003cResult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Browser",
        "Result"
      ]
    },
    {
      "cells": [
        "Chrome",
        "success"
      ]
    },
    {
      "cells": [
        "Mozilla",
        "success"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login in App",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "GenericSteps.openBrowser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go to loginURL",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.navigate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login inside application",
  "rows": [
    {
      "cells": [
        "Username",
        "miraalmamun"
      ]
    },
    {
      "cells": [
        "Password",
        "Mimo949658"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ApplicationSteps.login(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login should be success",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplicationSteps.login_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login in App",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Mozilla",
  "keyword": "Given "
});
formatter.match({
  "location": "GenericSteps.openBrowser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go to loginURL",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.navigate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login inside application",
  "rows": [
    {
      "cells": [
        "Username",
        "miraalmamun"
      ]
    },
    {
      "cells": [
        "Password",
        "Mimo949658"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ApplicationSteps.login(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login should be success",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplicationSteps.login_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});