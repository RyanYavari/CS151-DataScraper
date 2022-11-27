package com.example.demo;

import java.io.IOException;
import java.util.HashMap;
import java.util.regex.Pattern;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootApplication
@RestController
public class Cs151DataScraperApplication {

	private User user;

	public static void main(String[] args) {
		SpringApplication.run(Cs151DataScraperApplication.class, args);
	}

	@CrossOrigin
	@GetMapping("/authenticate")
	public String authenticate(@RequestParam(name = "email", defaultValue = "") String email,
			@RequestParam(name = "password", defaultValue = "") String password) {
		// currently this is just some dummy code
		// should be replaced by accessing database and checking there
		if (email.equals("dfs") && password.equals("dfs")) {
			user = new User("dfs", "dfs", email, password);
			return "Authentication successful!";
		}
		return "Nonexistent user or incorrect password";
	}

	@CrossOrigin
	@GetMapping("/checkValidUser")
	public String checkValidUser(@RequestParam(name = "firstName", defaultValue = "") String firstName,
			@RequestParam(name = "lastName", defaultValue = "") String lastName,
			@RequestParam(name = "email", defaultValue = "") String email,
			@RequestParam(name = "password", defaultValue = "") String password) {
		try {
			char[] passwordCharArray = password.toCharArray();
			verifyPassword(passwordCharArray);
			user = new User(firstName, lastName, email, password);
			// create new user in database
			return "New user created!";
		} catch (PasswordException pE) {
			return pE.printIssue();
		}
	}

	@CrossOrigin
	@GetMapping("/getUser")
	public String getUser() throws IOException {
		ObjectMapper objectMapper = new ObjectMapper();
		// Commented out code was used to test if frontend was receiving user's
		// businesses info
		// Business business = new Business("McDonalds", null, null);
		// Business business1 = new Business("Burger King", null, null);
		// Business business2 = new Business("In-N-Out", null, null);
		// user.addBusiness(business);
		// user.addBusiness(business1);
		// user.addBusiness(business2);
		return objectMapper.writeValueAsString(user);
	}

	@CrossOrigin
	@GetMapping("/addNewBusiness")
	public String addNewBusiness(@RequestParam(name = "businessName", defaultValue = "") String businessName,
			@RequestParam(name = "keywords", defaultValue = "") String keywords,
			@RequestParam(name = "hashtags", defaultValue = "") String hashtags) throws IOException {
		createBusiness(businessName, keywords, hashtags);
		ObjectMapper objectMapper = new ObjectMapper();
		return objectMapper.writeValueAsString(user);
	}

	private void createBusiness(String businessName, String keywords, String hashtags) {
		String[] temp = keywords.split(",");
		String[] temp1 = hashtags.split(",");
		List<String> k = new ArrayList<>();
		Collections.addAll(k, temp);
		List<String> h = new ArrayList<>();
		Collections.addAll(h, temp1);
		Business business = new Business(businessName, h, k);
		user.getBusinesses().add(business);
	}

	private void verifyPassword(char[] password) throws PasswordException {
		int upperCase = 0;
		int lowerCase = 0;
		Pattern regex = Pattern.compile("[$&+,:;=\\\\?@#|/'<>.^*()%!-]");
		int numChar = 0;

		if (password.length < 8) {
			throw new Minimum8CharactersRequired();
		}

		for (int i = 0; i < password.length; i++) {
			if (Character.isUpperCase(password[i])) {
				upperCase++;
			} else if (Character.isLowerCase(password[i])) {
				lowerCase++;
			} else if (Character.isDigit(password[i])) {
				numChar++;
			}
		}

		if (upperCase == 0) {
			throw new UpperCaseCharacterMissing();
		}

		if (lowerCase == 0) {
			throw new LowerCaseCharacterMissing();
		}

		if (numChar == 0) {
			throw new NumberCharacterMissing();
		}

		StringBuilder s = new StringBuilder();
		s.append(password);
		if (!regex.matcher(s).find()) {
			throw new SpecialCharacterMissing();
		}

	}

}
