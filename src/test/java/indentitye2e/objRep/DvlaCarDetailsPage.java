package indentitye2e.objRep;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class DvlaCarDetailsPage extends BasePage {
	
	public DvlaCarDetailsPage(WebDriver driver){
		super(driver);
	}
	
	
	By input_car_reg_field= By.id("get-started");
	By input_car_reg_enter_button_field= By.xpath(".//*[@id='content']/form/div/div/div[2]/fieldset/button");
	
	
	public WebElement input_car_reg(){
		return driver.findElement(input_car_reg_field);
		
	} 
	
	public WebElement input_car_reg_enter_button(){
		return driver.findElement(input_car_reg_enter_button_field);
		
	} 
	
	
	
	
		/*	driver.findElement(By.xpath(".//*[@id='Vrm']")).clear();
    driver.findElement(By.xpath(".//*[@id='Vrm']")).sendKeys(str);
    System.out.print("entering " + str);
    driver.findElement(By.xpath(".//*[@id='content']/form/div/div/div[2]/fieldset/button")).click();
*/
}
