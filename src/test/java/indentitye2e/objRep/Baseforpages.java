package indentitye2e.objRep;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Baseforpages {
	WebDriver driver;
	WebDriverWait wait;
	public Baseforpages(WebDriver driver){
		this.driver=driver;
		this.wait = new WebDriverWait(driver,10);
	}

	/**
	 * Common explicit wait methods;
	 */
	public void waitForVisibilityOfElement(WebElement element){
		wait.until(ExpectedConditions.visibilityOf(element));
	}
	/**
	 * Common explicit wait methods;
	 */
	public void waitForClickabilityOfElement(WebElement element){
		wait.until(ExpectedConditions.elementToBeClickable(element));
	}
	
	public boolean isElementPresent(WebElement element){
		waitForVisibilityOfElement(element);
		return element.isDisplayed();
	}
	
	public void click(WebElement element){
		waitForVisibilityOfElement(element);
		element.click();
	}
	
	public void sendKeys(WebElement element, String keyword){
		waitForVisibilityOfElement(element);
		element.clear();
		element.sendKeys(keyword);
	}
	
	public String getAttributeValue(WebElement element, String attribute){
		waitForVisibilityOfElement(element);
		return element.getAttribute(attribute);
	}
	public String getURL(){
		return driver.getCurrentUrl();
	}
}
