package CS151_DataScraper;

public class Minimum8CharactersRequired extends PasswordException {
	
	public Minimum8CharactersRequired() {
		printIssue();
	}
	
	public String printIssue() {
		return "User needs at least 8 characters in password";
	}

}