package com.example.demo;

public abstract class PasswordException extends Exception {
	
	public abstract String printIssue();
	
}

class UpperCaseCharacterMissing extends PasswordException {
	
	public UpperCaseCharacterMissing() {
		printIssue();
	}
	
	public String printIssue() {
		return "Password requires at least one upper case character";
	}
	
}

class SpecialCharacterMissing extends PasswordException {
	
	public SpecialCharacterMissing() {
		printIssue();
	}
	
	public String printIssue() {
		return "Password requires at least one special character";
	}

}

class NumberCharacterMissing extends PasswordException {
	
	public NumberCharacterMissing() {
		printIssue();
	}
	
	public String printIssue() {
		return "Password requires at least one number character";
	}

}

class Minimum8CharactersRequired extends PasswordException {
	
	public Minimum8CharactersRequired() {
		printIssue();
	}
	
	public String printIssue() {
		return "Password requires at least 8 characters";
	}

}

class LowerCaseCharacterMissing extends PasswordException {
	
	public LowerCaseCharacterMissing() {
		printIssue();
	}
	
	public String printIssue() {
		return "Password requires at least one lower case character";
	}

}
