$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signup.feature");
formatter.feature({
  "name": "SignUp to an Gmail",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "the Gmail password validation error while signup to Gmail",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits gmail account",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters valid \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cusername\u003e\" and invalid \"\u003cPassword\u003e\"  invalid \"\u003cconfirmPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User can not SignUp",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "username",
        "Password",
        "confirmPassword"
      ]
    },
    {
      "cells": [
        "Test",
        "user",
        "tuser0759",
        "1234",
        "1234"
      ]
    },
    {
      "cells": [
        "Test",
        "user",
        "tuser0759",
        "ammm",
        "ammm"
      ]
    }
  ]
});
formatter.scenario({
  "name": "the Gmail password validation error while signup to Gmail",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits gmail account",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.user_visits_gmail_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid \"Test\" and \"user\" and \"tuser0759\" and invalid \"1234\"  invalid \"1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.user_enters_valid_and_and_and_invalid_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can not SignUp",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.user_can_not_SignUp()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "the Gmail password validation error while signup to Gmail",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits gmail account",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.user_visits_gmail_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid \"Test\" and \"user\" and \"tuser0759\" and invalid \"ammm\"  invalid \"ammm\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.user_enters_valid_and_and_and_invalid_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can not SignUp",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.user_can_not_SignUp()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "the Gmail password validation error while signup to Gmail",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits gmail account",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters valid \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cusername\u003e\" and invalid \"\u003cPassword\u003e\"  invalid \"\u003cconfirmPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User can not SignUp again",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "username",
        "Password",
        "confirmPassword"
      ]
    },
    {
      "cells": [
        "Test",
        "user",
        "tuser0759",
        "12345678",
        "12345678"
      ]
    },
    {
      "cells": [
        "Test",
        "user",
        "tuser0759",
        "mmmmmmmm",
        "mmmmmmmm"
      ]
    }
  ]
});
formatter.scenario({
  "name": "the Gmail password validation error while signup to Gmail",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits gmail account",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.user_visits_gmail_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid \"Test\" and \"user\" and \"tuser0759\" and invalid \"12345678\"  invalid \"12345678\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.user_enters_valid_and_and_and_invalid_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can not SignUp again",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.user_can_not_SignUp_again()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "the Gmail password validation error while signup to Gmail",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits gmail account",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.user_visits_gmail_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid \"Test\" and \"user\" and \"tuser0759\" and invalid \"mmmmmmmm\"  invalid \"mmmmmmmm\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.user_enters_valid_and_and_and_invalid_and(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can not SignUp again",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.user_can_not_SignUp_again()"
});
formatter.result({
  "status": "passed"
});
});