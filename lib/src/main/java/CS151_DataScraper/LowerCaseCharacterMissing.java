package CS151_DataScraper;

public class LowerCaseCharacterMissing extends PasswordException {
	
	public LowerCaseCharacterMissing() {
		printIssue();
	}
	
	public String printIssue() {
		return "User needs at least one lower case character in password";
	}

}
