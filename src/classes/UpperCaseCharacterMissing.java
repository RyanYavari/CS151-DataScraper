package classes;

public class UpperCaseCharacterMissing extends PasswordException {
	
	public UpperCaseCharacterMissing() {
		printIssue();
	}
	
	public String printIssue() {
		return "User needs at least one upper case character in password";
	}
	
}
