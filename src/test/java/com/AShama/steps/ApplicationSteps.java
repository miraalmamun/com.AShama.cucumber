package com.AShama.steps;

import java.util.Map;

import com.AShama.webdriver.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class ApplicationSteps {
	WebConnector con;

	public ApplicationSteps(WebConnector con) {
		this.con = con;
	}

	@And("^I login inside application$")
	public void login(Map<String, String> data) {
		con.login(data.get("Username"), data.get("Password"));
	}

	@Then("^Login should be (.*)$")
	public void login_should_be(String expectedResult) {
		con.waitForPageToLoad();
		con.validateLogin(expectedResult);
	}

//=======================================================================

	@Then("^I see login (.*)$")
	public void validateLogin(String expectedResult) {
		con.validateLogin(expectedResult);
	}

}
