package com.example.demo;

import java.util.regex.Pattern;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Cs151DataScraperApplication {

	public static void main(String[] args) {
		SpringApplication.run(Cs151DataScraperApplication.class, args);
	}

	@CrossOrigin
	@GetMapping("/authenticate")
	public String authenticate(@RequestParam (name = "email", defaultValue = "") String email,
		@RequestParam (name = "password", defaultValue = "") String password) {
		// currently this is just some dummy code
		// should be replaced by accessing database and checking there
		if (email.equals("dfs") && password.equals("dfs")) {
			return "Authentication successful!";
		}
		return "Nonexistent user or incorrect password";
	}

	@CrossOrigin
	@GetMapping("/checkValidUser")
	public String checkValidUser(@RequestParam (name = "firstName", defaultValue = "") String firstName,
		@RequestParam (name = "lastName", defaultValue = "") String lastName,
		@RequestParam (name = "email", defaultValue = "") String email,
		@RequestParam (name = "password", defaultValue = "") String password) {
		try {
			char[] passwordCharArray = password.toCharArray();
			verifyPassword(passwordCharArray);
			User user = new User(firstName, lastName, email, password);
			// create new user in database
			return "New user created!";
		} catch (PasswordException pE) {
			return pE.printIssue();
		}
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
