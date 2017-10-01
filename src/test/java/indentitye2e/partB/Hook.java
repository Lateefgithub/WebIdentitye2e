package indentitye2e.partB;

import java.io.File;
import java.io.IOException;

import org.codehaus.plexus.util.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.chrome.ChromeDriver;

import base.BaseUtil;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook extends BaseUtil{
	
	private BaseUtil base;
	public Hook(BaseUtil base){
		this.base=base;
	}
	
	@Before 
	public void InitializeTest(){
		System.out.println("Opening the browser: ChromeBrowser");
		String chromeDriverLocation = "src/main/resources/drivers/chromedriver.exe"; 
		System.setProperty("webdriver.chrome.driver", chromeDriverLocation);
		
		base.Driver = new ChromeDriver();
	}
	
	@After public void cleanUp(Scenario scenario){
		/*if (scenario.isFailed()== true){
			File srcF=((TakesScreenshot)base.Driver).getScreenshotAs(OutputType.FILE);
			try{
				FileUtils.copyFile(srcF, new File("C:\\Tools\\TempF\\screenshot.png"));
			}
			catch(IOException e)
			{
				System.out.println(e.getMessage());
				
			}
			finally{
				 base.Driver.close();
			}
			
		}
		*/
		
		System.out.println("Closing the browser");
		
		 base.Driver.close();
		base.Driver.quit();
		
	}

}
