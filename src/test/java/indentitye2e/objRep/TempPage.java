package indentitye2e.objRep;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class TempPage {
	
public TempPage(WebDriver driver){
	PageFactory.initElements(driver, this);
	
}
	@FindBy(how=How.XPATH, using = ".//*[@id='get-started']/a")
	public WebElement btnStart;

	@FindBy(how=How.XPATH, using = ".//*[@id='Vrm']")
	public WebElement inpRegistration;
	
	@FindBy(how=How.NAME, using = "Continue")
	public WebElement btnContinue;

	@FindBy(how=How.XPATH, using = ".//*[@id='pr3']/div/ul/li[2]/span[2]/strong")
	public WebElement textMake;
	
	
	@FindBy(how=How.XPATH, using = ".//*[@id='pr3']/div/ul/li[3]/span[2]/strong")
	public WebElement textColour;
	

	public void clickStartButton(){
		btnStart.click();
	}
	
	public void inputCarRegistration(String arg){
		inpRegistration.sendKeys(arg);
	}
	public void clickContinueButton(){
		btnContinue.submit();
	}
	
	public String getMakeOfCar(){
		return textMake.getText();
	}
	public String getColourOfCar(){
		return textColour.getText();
	}
	
}
