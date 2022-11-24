package com.example.demo;
import java.util.HashMap;
import java.util.List;

import javax.swing.JPasswordField;

public class User {
	
	private String firstName;
	private String lastName;
	private String email;
	private String password; 
	private HashMap<Business, List<String>> handles;
	
	public User(String firstName, String lastName, String email, String password) {
		this.setFirstName(firstName);
		this.setLastName(lastName);
		this.setEmail(email);
		this.setPassword(password);
		setHandles(new HashMap<>());
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public HashMap<Business, List<String>> getHandles() {
		return handles;
	}

	public void setHandles(HashMap<Business, List<String>> handles) {
		this.handles = handles;
	}
	

}
