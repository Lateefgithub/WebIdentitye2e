package indentitye2e.objRep;


import org.openqa.selenium.WebDriver;

public class BasePage {
	protected WebDriver driver;
	public BasePage(WebDriver driver){
		this.driver = driver;
	}
	
	public DvlaHomepage navigateTo(){
		 driver.navigate().to("https://www.gov.uk/get-vehicle-information-from-dvla");
		 //assertEquals("Get vehicle information from DVLA - GOV.UK", driver.getTitle());
		return new DvlaHomepage(driver);
		
	}

}
