package indentitye2e.partB;


import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import indentitye2e.objRep.DvlaCarDetailsPage;
import indentitye2e.objRep.DvlaConfirmPage;
import indentitye2e.objRep.DvlaHomepage;
import indentitye2e.objRep.TempPage;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import base.BaseUtil;

public class FindVehicl_Stepdef extends BaseUtil {
	
	private BaseUtil base;
	public FindVehicl_Stepdef(BaseUtil base){
		this.base=base;
	}
	
	
  	   
	@Given("^User is on the dvla site$")
	public void user_is_on_the_dvla_site() throws Throwable {
	
			base.Driver.navigate().to("https://www.gov.uk/get-vehicle-information-from-dvla");
			Thread.sleep(2000);
			TempPage tmpage = new TempPage(base.Driver);
			tmpage.clickStartButton();
	}

	
	@When("^User enters \"([^\"]*)\"$")
	public void user_enters(String str) throws Throwable {
		Thread.sleep(2000);
		
		TempPage tmpage = new TempPage(base.Driver);
		tmpage.inputCarRegistration(str);
		tmpage.clickContinueButton();
	}

	@Then("^The make and model matches \"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_make_and_model_matches_and(String arg1, String arg2) throws Throwable {
		Thread.sleep(2000);
		TempPage tmpage = new TempPage(base.Driver);
		

		if (tmpage.getMakeOfCar().equalsIgnoreCase(arg1)){
		System.out.println("Passed, Make of Car is " + arg1);
	} else{
		Assert.fail("Failed, Make of Car is " + tmpage.getMakeOfCar() +" instead of " + arg1);

	}
		
		if (tmpage.getColourOfCar().equalsIgnoreCase(arg2)){
		System.out.println("Passed, Color of Car is " + arg2);
	} else{
		Assert.fail("Failed, Color of Car is " + tmpage.getColourOfCar() +" instead of " + arg2);

	}
	   // driver.close();
	}
	
	


/**
 * 
 *
  	WebDriver driver = null;
	
	@Before public void setup(){
		String chromeDriverLocation = "src/main/resources/drivers/chromedriver.exe"; 
		System.setProperty("webdriver.chrome.driver", chromeDriverLocation);
		driver = new ChromeDriver();
	}
	
	  
	   
	@Given("^User is on the dvla site$")
	public void user_is_on_the_dvla_site() throws Throwable {

		   driver.get("https://www.gov.uk/get-vehicle-information-from-dvla");
		   driver.findElement(By.xpath(".//*[@id='get-started']/a")).click();
		   System.out.print("Clicking Start button ");
	}

	
	@When("^User enters \"([^\"]*)\"$")
	public void user_enters(String str) throws Throwable {
	    driver.findElement(By.xpath(".//*[@id='Vrm']")).clear();
	    driver.findElement(By.xpath(".//*[@id='Vrm']")).sendKeys(str);
	    System.out.print("entering " + str);
	    driver.findElement(By.xpath(".//*[@id='content']/form/div/div/div[2]/fieldset/button")).click();
	    
	}

	@Then("^The make and model matches \"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_make_and_model_matches_and(String arg1, String arg2) throws Throwable {
		Thread.sleep(2000);
	WebElement elem1 = driver.findElement(By.xpath(".//*[@id='pr3']/div/ul/li[2]/span[2]/strong"));
		if (elem1.getText().equalsIgnoreCase(arg1)){
		System.out.println("Passed, Make of Car is " + arg1);
	} else{
		Assert.fail("Failed, Make of Car is " + elem1.getText() +" instead of " + arg1);

	}
		
		WebElement elem2 = driver.findElement(By.xpath(".//*[@id='pr3']/div/ul/li[3]/span[2]/strong"));
		if (elem2.getText().equalsIgnoreCase(arg2)){
		System.out.println("Passed, Color of Car is " + arg2);
	} else{
		Assert.fail("Failed, Color of Car is " + elem2.getText() +" instead of " + arg2);
		System.out.println("Failed, Color of Car is " + elem2.getText() +" instead of " + arg2);
	}
	    driver.close();
	}
	
	

	
	@After public void cleanUp(){
		driver.quit();
	}
 */
	
}
