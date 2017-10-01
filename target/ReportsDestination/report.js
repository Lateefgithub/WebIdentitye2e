$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("indentitye2e/partB/findvehicle.feature");
formatter.feature({
  "line": 2,
  "name": "Search for Vehicle on dvla website",
  "description": "",
  "id": "search-for-vehicle-on-dvla-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SystemTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Check that correct vehicle details are returned from dvla website",
  "description": "",
  "id": "search-for-vehicle-on-dvla-website;check-that-correct-vehicle-details-are-returned-from-dvla-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User is on the dvla site",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters \"\u003cregistration_number\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The make and model matches \"\u003cv_make\u003e\" and \"\u003cv_colour\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "search-for-vehicle-on-dvla-website;check-that-correct-vehicle-details-are-returned-from-dvla-website;",
  "rows": [
    {
      "cells": [
        "registration_number",
        "v_make",
        "v_colour"
      ],
      "line": 12,
      "id": "search-for-vehicle-on-dvla-website;check-that-correct-vehicle-details-are-returned-from-dvla-website;;1"
    },
    {
      "cells": [
        "LM07KJV",
        "FORD",
        "GREY"
      ],
      "line": 13,
      "id": "search-for-vehicle-on-dvla-website;check-that-correct-vehicle-details-are-returned-from-dvla-website;;2"
    },
    {
      "cells": [
        "LM08KJV",
        "TOYOTA",
        "GREY"
      ],
      "line": 14,
      "id": "search-for-vehicle-on-dvla-website;check-that-correct-vehicle-details-are-returned-from-dvla-website;;3"
    },
    {
      "cells": [
        "LM57KJV",
        "VOLKSWAGEN",
        "BLUE"
      ],
      "line": 15,
      "id": "search-for-vehicle-on-dvla-website;check-that-correct-vehicle-details-are-returned-from-dvla-website;;4"
    },
    {
      "cells": [
        "LM09KJV",
        "MERCEDES-BENZ",
        "WHITE"
      ],
      "line": 16,
      "id": "search-for-vehicle-on-dvla-website;check-that-correct-vehicle-details-are-returned-from-dvla-website;;5"
    },
    {
      "cells": [
        "LM59KJV",
        "MINI",
        "WHITE"
      ],
      "line": 17,
      "id": "search-for-vehicle-on-dvla-website;check-that-correct-vehicle-details-are-returned-from-dvla-website;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7947181534,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Check that correct vehicle details are returned from dvla website",
  "description": "",
  "id": "search-for-vehicle-on-dvla-website;check-that-correct-vehicle-details-are-returned-from-dvla-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SystemTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the dvla site",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters \"LM07KJV\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The make and model matches \"FORD\" and \"GREY\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FindVehicl_Stepdef.user_is_on_the_dvla_site()"
});
formatter.result({
  "duration": 12957045283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LM07KJV",
      "offset": 13
    }
  ],
  "location": "FindVehicl_Stepdef.user_enters(String)"
});
formatter.result({
  "duration": 2580015798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FORD",
      "offset": 28
    },
    {
      "val": "GREY",
      "offset": 39
    }
  ],
  "location": "FindVehicl_Stepdef.the_make_and_model_matches_and(String,String)"
});
formatter.result({
  "duration": 2076163812,
  "status": "passed"
});
formatter.after({
  "duration": 1785998646,
  "status": "passed"
});
formatter.before({
  "duration": 3560552057,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Check that correct vehicle details are returned from dvla website",
  "description": "",
  "id": "search-for-vehicle-on-dvla-website;check-that-correct-vehicle-details-are-returned-from-dvla-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SystemTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the dvla site",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters \"LM08KJV\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The make and model matches \"TOYOTA\" and \"GREY\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FindVehicl_Stepdef.user_is_on_the_dvla_site()"
});
formatter.result({
  "duration": 7468283179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LM08KJV",
      "offset": 13
    }
  ],
  "location": "FindVehicl_Stepdef.user_enters(String)"
});
formatter.result({
  "duration": 2436257466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TOYOTA",
      "offset": 28
    },
    {
      "val": "GREY",
      "offset": 41
    }
  ],
  "location": "FindVehicl_Stepdef.the_make_and_model_matches_and(String,String)"
});
formatter.result({
  "duration": 2090506499,
  "status": "passed"
});
formatter.after({
  "duration": 1228877903,
  "status": "passed"
});
formatter.before({
  "duration": 3495604632,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Check that correct vehicle details are returned from dvla website",
  "description": "",
  "id": "search-for-vehicle-on-dvla-website;check-that-correct-vehicle-details-are-returned-from-dvla-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SystemTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the dvla site",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters \"LM57KJV\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The make and model matches \"VOLKSWAGEN\" and \"BLUE\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FindVehicl_Stepdef.user_is_on_the_dvla_site()"
});
formatter.result({
  "duration": 6991657087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LM57KJV",
      "offset": 13
    }
  ],
  "location": "FindVehicl_Stepdef.user_enters(String)"
});
formatter.result({
  "duration": 2533112125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VOLKSWAGEN",
      "offset": 28
    },
    {
      "val": "BLUE",
      "offset": 45
    }
  ],
  "location": "FindVehicl_Stepdef.the_make_and_model_matches_and(String,String)"
});
formatter.result({
  "duration": 2055469791,
  "status": "passed"
});
formatter.after({
  "duration": 1259260069,
  "status": "passed"
});
formatter.before({
  "duration": 3657035763,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Check that correct vehicle details are returned from dvla website",
  "description": "",
  "id": "search-for-vehicle-on-dvla-website;check-that-correct-vehicle-details-are-returned-from-dvla-website;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SystemTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the dvla site",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters \"LM09KJV\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The make and model matches \"MERCEDES-BENZ\" and \"WHITE\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FindVehicl_Stepdef.user_is_on_the_dvla_site()"
});
formatter.result({
  "duration": 5240464890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LM09KJV",
      "offset": 13
    }
  ],
  "location": "FindVehicl_Stepdef.user_enters(String)"
});
formatter.result({
  "duration": 2514365254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MERCEDES-BENZ",
      "offset": 28
    },
    {
      "val": "WHITE",
      "offset": 48
    }
  ],
  "location": "FindVehicl_Stepdef.the_make_and_model_matches_and(String,String)"
});
formatter.result({
  "duration": 2129397660,
  "error_message": "java.lang.AssertionError: Failed, Color of Car is BLACK instead of WHITE\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat indentitye2e.partB.FindVehicl_Stepdef.the_make_and_model_matches_and(FindVehicl_Stepdef.java:71)\r\n\tat ✽.Then The make and model matches \"MERCEDES-BENZ\" and \"WHITE\"(indentitye2e/partB/findvehicle.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 10109291099,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom unknown error: page could not be found: chrome-extension://aapnijgdinlhnhlmodcfapnahmbfebeb/_generated_background_page.html\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.08 seconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027LAPTOP-UPPEUJHV\u0027, ip: \u0027192.168.1.92\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\Lateef\\AppData\\Local\\Temp\\scoped_dir4608_23892}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 07244ed76c5da37ee3475dec95240c5e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:382)\r\n\tat indentitye2e.partB.Hook.cleanUp(Hook.java:34)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 3184867804,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Check that correct vehicle details are returned from dvla website",
  "description": "",
  "id": "search-for-vehicle-on-dvla-website;check-that-correct-vehicle-details-are-returned-from-dvla-website;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SystemTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the dvla site",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters \"LM59KJV\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The make and model matches \"MINI\" and \"WHITE\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FindVehicl_Stepdef.user_is_on_the_dvla_site()"
});
formatter.result({
  "duration": 5613064451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LM59KJV",
      "offset": 13
    }
  ],
  "location": "FindVehicl_Stepdef.user_enters(String)"
});
formatter.result({
  "duration": 2453286388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MINI",
      "offset": 28
    },
    {
      "val": "WHITE",
      "offset": 39
    }
  ],
  "location": "FindVehicl_Stepdef.the_make_and_model_matches_and(String,String)"
});
formatter.result({
  "duration": 2091978673,
  "status": "passed"
});
formatter.after({
  "duration": 3437378435,
  "status": "passed"
});
});