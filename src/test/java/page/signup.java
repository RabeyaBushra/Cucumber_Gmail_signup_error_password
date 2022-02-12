package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class signup {

    WebDriver driver;

    @FindBy(id="firstName")
    WebElement firstName;
    @FindBy(id="lastName")
    WebElement lastName;
    @FindBy(id="username")
    WebElement Username;
    @FindBy(name="Passwd")
    WebElement Passwd;
    @FindBy(name="ConfirmPasswd")
    WebElement ConfirmPasswd;
    @FindBy(xpath = "//span[contains(text(),'Next')]")
    WebElement btnNext;
    @FindBy(xpath = "//span[contains(text(),'Use 8 characters or more for your password')]")
    WebElement ErrorMsg1;
    @FindBy(xpath = "//span[contains(text(),'Please choose a stronger password. Try a mix of le')]")
    WebElement ErrorMsg2;

    public signup(WebDriver driver)
    {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
    public void doSignUp(String firstname,String Lastname,String username,String password,String confirmPassword) {


        firstName.sendKeys(firstname);
        lastName.sendKeys(Lastname);
        Username.sendKeys(username);
        Passwd.sendKeys(password);
        ConfirmPasswd.sendKeys(confirmPassword);
        btnNext.click();




    }
    public String ErrorMsg1() throws InterruptedException {   Thread.sleep(1500);
        return ErrorMsg1.getText() ;
    }
    public String ErrorMsg2() throws InterruptedException {    Thread.sleep(1500);
        return ErrorMsg2.getText() ;
    }


}
