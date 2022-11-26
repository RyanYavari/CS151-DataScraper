package com.example.demo;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.swing.JPasswordField;

import org.springframework.boot.autoconfigure.domain.EntityScan;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

public class User {
	
	private String firstName;
	private String lastName;
	private String email;
	private String password; 
	private List<Business> businesses;
	
	public User(String firstName, String lastName, String email, String password) {
		this.setFirstName(firstName);
		this.setLastName(lastName);
		this.setEmail(email);
		this.setPassword(password);
		this.businesses = new ArrayList<>();
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@JsonIgnore
	public String getPassword() {
		return password;
	}

	@JsonProperty
	public void setPassword(String password) {
		this.password = password;
	}

	public List<Business> getBusinesses() {
		return this.businesses;
	}

	public void addBusiness(Business newBusiness) {
		businesses.add(newBusiness);
	}
	

}
