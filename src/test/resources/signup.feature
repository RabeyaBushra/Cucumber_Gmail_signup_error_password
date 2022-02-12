Feature: SignUp to an Gmail

  Scenario Outline:  the Gmail password validation error while signup to Gmail
    Given User visits gmail account
    When User enters valid "<firstname>" and "<lastname>" and "<username>" and invalid "<Password>"  invalid "<confirmPassword>"
    Then User can not SignUp
    Examples:
      | firstname | lastname | username | Password | confirmPassword |
    |Test       |user      | tuser0759| 1234     |1234             |
      |Test       |user      | tuser0759| ammm    |ammm            |


  Scenario Outline:  the Gmail password validation error while signup to Gmail
    Given User visits gmail account
    When User enters valid "<firstname>" and "<lastname>" and "<username>" and invalid "<Password>"  invalid "<confirmPassword>"
    Then User can not SignUp again
    Examples:
      | firstname | lastname | username | Password | confirmPassword |
      |Test       |user      | tuser0759| 12345678     |12345678           |
      |Test       |user      | tuser0759| mmmmmmmm    |mmmmmmmm             |
