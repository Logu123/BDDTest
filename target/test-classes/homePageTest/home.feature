@HomeTest
Feature: Validating the NTL taxi Application
#Scenario: Validation the application with positive data
#Given Open Browser as firefox
#Then Enter URL as http://www.ntltaxi.com/
#Then Enter Username as VMetry
#Then Enter Mobile number as 8956235612
#And Enter Pickup Address as ADYAR
#And Enter Drop Address as AGARAM
#Then Select Vehicle Type as Sedan
#And Click Booklater checkbox
#But dont click button


Scenario Outline: Validation the application with positive data
Given Open Browser as <BROWSER>
Then Enter URL as <URL>
Then Enter Username as <USERNAME>
Then Enter Mobile number as <MOBILENO>
And Enter Pickup Address as <PICKUPADDRESS>
And Enter Drop Address as <DROPADDRESS>
Then Select Vehicle Type as <VEHICLETYPE>
And Click Booklater checkbox
But dont click button
Examples:
|BROWSER|URL|USERNAME|MOBILENO|PICKUPADDRESS|DROPADDRESS|VEHICLETYPE|
|Firefox|http://www.ntltaxi.com/|VMetryA|7845124512|ADYAR|AGARAM|Sedan|
|Firefox|http://www.ntltaxi.com/|VMetryB|7845124512|ADYAR|AGARAM|Sedan|
|Firefox|http://www.ntltaxi.com/|VMetryC|7845124512|ADYAR|AGARAM|Sedan|
