package com.example.demo;

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
		return "Authentication not successful :(";
	}

}
