package indentitye2e.objRep;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class DvlaHomepage extends BasePage {

	public DvlaHomepage(WebDriver driver){
		super(driver);
	}
	
	By start_buttonFeild= By.id("get-started");
	
	
	public WebElement start_button(){
		
		return driver.findElement(start_buttonFeild);
		
	}
	public DvlaHomepage clickStartButton(){
		start_button().click();
		return new DvlaHomepage(driver);
		
	}
	

}
