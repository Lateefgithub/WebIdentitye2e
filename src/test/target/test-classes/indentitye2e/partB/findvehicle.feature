@SystemTest
Feature: Search for Vehicle on dvla website


Scenario Outline: Check that correct vehicle details are returned from dvla website

Given User is on the dvla site
When User enters "<registration_number>"
Then The make and model matches "<v_make>" and "<v_colour>"

Examples:
|registration_number	|v_make 				|v_colour	|
|LM07KJV 				|FORD					|GREY		|
|LM08KJV				|TOYOTA					|GREY		|
|LM57KJV 				|VOLKSWAGEN				|BLUE		|
|LM09KJV				|MERCEDES-BENZ			|WHITE		|
|LM59KJV 				|MINI					|WHITE		|
