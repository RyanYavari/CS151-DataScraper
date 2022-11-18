package CS151_DataScraper;

public class SpecialCharacterMissing extends PasswordException {
	
	public SpecialCharacterMissing() {
		printIssue();
	}
	
	public String printIssue() {
		return "User needs at least one special character in password";
	}

}