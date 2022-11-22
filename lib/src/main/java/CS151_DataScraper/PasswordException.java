package CS151_DataScraper;

public abstract class PasswordException extends Exception {
	
	public abstract String printIssue();
	
}

class UpperCaseCharacterMissing extends PasswordException {
	
	public UpperCaseCharacterMissing() {
		printIssue();
	}
	
	public String printIssue() {
		return "User needs at least one upper case character in password";
	}
	
}

class SpecialCharacterMissing extends PasswordException {
	
	public SpecialCharacterMissing() {
		printIssue();
	}
	
	public String printIssue() {
		return "User needs at least one special character in password";
	}

}

class NumberCharacterMissing extends PasswordException {
	
	public NumberCharacterMissing() {
		printIssue();
	}
	
	public String printIssue() {
		return "User needs at least one number character in password";
	}

}

class Minimum8CharactersRequired extends PasswordException {
	
	public Minimum8CharactersRequired() {
		printIssue();
	}
	
	public String printIssue() {
		return "User needs at least 8 characters in password";
	}

}

class LowerCaseCharacterMissing extends PasswordException {
	
	public LowerCaseCharacterMissing() {
		printIssue();
	}
	
	public String printIssue() {
		return "User needs at least one lower case character in password";
	}

}
