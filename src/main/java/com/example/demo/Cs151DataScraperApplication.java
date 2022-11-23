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
	@GetMapping("/hello")
	public String hello(@RequestParam (value = "name", defaultValue = "springboot") String name) {
		return name;
	}

}
