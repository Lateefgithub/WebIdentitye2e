package indentitye2e.partB;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
//import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(//features="src/test/java/indentitye2e/partB",
				//glue={"src/test/java/indentitye2e/partB"}, 
				plugin = {"html:target/ReportsDestination", "pretty", "junit:target/junitrep"})

public class RunTest {

}
