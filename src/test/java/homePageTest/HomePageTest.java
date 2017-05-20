package homePageTest;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class HomePageTest {

	@Given("^Open Browser as (.*)$")
	public void OpenBrowser(String Browser)
	{
		System.out.println("Opening the Browser "+Browser );
	}
	@Then ("^Enter URL as (.*)$")
	public void EnterURL(String URL)
	{
		System.out.println("Enter the URL "+URL);
	}
	@Then ("^Enter Username as (.*)$")
	public void EnterUsername(String username)
	{
		System.out.println("Enter user name "+username);
	}
	@Then ("^Enter Mobile number as (.*)$")
	public void EnterMobilenumber(String mobileno)
	{
		System.out.println("Enter Mobile number "+mobileno);
	}
	@And ("^Enter Pickup Address as (.*)$")
	public void EnterPickupAddress(String pickupAddress)
	{
		System.out.println("Enter Pickup Address "+pickupAddress);
	}
	@And ("^Enter Drop Address as (.*)$")
	public void EnterDropAddress(String dropAddress)
	{
		System.out.println("Enter Drop Address "+dropAddress);
	}
	@Then ("^Select Vehicle Type as (.*)$")
	public void SelectVehicleType(String vehicleType)
	{
		System.out.println("Select Vehicle Type "+vehicleType);
	}
	@And ("^Click Booklater checkbox$")
	public void ClickBooklater()
	{
		System.out.println("Click Booklater checkbox");
	}
	@But ("^dont click button$")
	public void Dontclick()
	{
		System.out.println("dont click button");
	}

}
