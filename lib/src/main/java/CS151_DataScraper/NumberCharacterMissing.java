package CS151_DataScraper;

public class NumberCharacterMissing extends PasswordException {
	
	public NumberCharacterMissing() {
		printIssue();
	}
	
	public String printIssue() {
		return "User needs at least one number character in password";
	}

}