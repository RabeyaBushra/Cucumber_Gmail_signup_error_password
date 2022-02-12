import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import org.openqa.selenium.support.ui.WebDriverWait;
import page.signup;

import java.util.concurrent.TimeUnit;

public class stepDefination {
 public WebDriver driver;
    WebDriverWait wait;
    @Given("^User visits gmail account$")
    public void user_visits_gmail_account() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        System.setProperty("webdriver.chrome.driver", "./src/test/resources/chromedriver.exe");
        ChromeOptions ops=new ChromeOptions();
        ops.addArguments("--headed"); //uncomment if you want to run in headless mode
        driver = new ChromeDriver(ops);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp");

    }

    @When("^User enters valid \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and invalid \"([^\"]*)\"  invalid \"([^\"]*)\"$")
    public void user_enters_valid_and_and_and_invalid_and(String firstname,String lastname,String username,String password,String confirmPassword) throws Exception {
        // Write code here that turns the phrase above into concrete actions
        signup signUp=new signup(driver);
        signUp.doSignUp(firstname,lastname,username,password,confirmPassword);

    }

    @Then("^User can not SignUp$")
    public void user_can_not_SignUp() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        signup signUp=new signup(driver);
        signUp.ErrorMsg1();


    }

    @Then("^User can not SignUp again$")
    public void user_can_not_SignUp_again() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        signup signUp=new signup(driver);
        signUp.ErrorMsg2();

        driver.quit();


    }

}
