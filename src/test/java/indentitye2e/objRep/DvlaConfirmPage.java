package indentitye2e.objRep;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class DvlaConfirmPage extends BasePage {
	
	
	public DvlaConfirmPage(WebDriver driver){
		super(driver);
	}
	
	
	By make_of_car_field = By.xpath(".//*[@id='pr3']/div/ul/li[2]/span[2]/strong");
	By colour_of_car_field = By.xpath(".//*[@id='pr3']/div/ul/li[3]/span[2]/strong");
	
	
	public WebElement make_of_car(){
		return driver.findElement(make_of_car_field);
	}
	
	public WebElement colour_of_car(){
		return driver.findElement(colour_of_car_field);
	}


}
