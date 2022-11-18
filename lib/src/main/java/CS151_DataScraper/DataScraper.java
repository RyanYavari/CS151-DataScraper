package CS151_DataScraper;
import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Component;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.GridLayout;
import java.awt.Insets;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.HashMap;
import java.util.Random;
import java.util.regex.Pattern;

import javax.swing.BorderFactory;
import javax.swing.Box;
import javax.swing.BoxLayout;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.WindowConstants;

public class DataScraper extends JFrame {
	
	private HashMap<String, User> users;
	
	public DataScraper() {
		this.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
		this.setTitle("DataScraper");
		this.setSize(800, 800);
		setUsers(new HashMap<String, User>());
		
		openingPage();
	}
	
	private void openingPage() {
		JPanel signUpButtonPanel = new JPanel();
		signUpButtonPanel.setSize(800, 800);
		
		signUpButtonPanel.setLayout(new BoxLayout(signUpButtonPanel, BoxLayout.Y_AXIS));
		signUpButtonPanel.setBorder(BorderFactory.createEmptyBorder(200, 200, 200, 200));
		signUpButtonPanel.setComponentOrientation(getComponentOrientation());
		signUpButtonPanel.setAlignmentX(Component.CENTER_ALIGNMENT);
		
		this.getContentPane().setBackground(Color.pink);
		signUpButtonPanel.setBackground(Color.pink);
		
		//signUpButtonPanel.setLayout(new GridLayout(0, 1));
		//signUpButtonPanel.setSize(this.getWidth(), this.getHeight());

		
		JLabel welcomeTitle = new JLabel("DataScraper", JLabel.CENTER);
		welcomeTitle.setFont(new Font("Comic Sans", Font.BOLD, 50));
		welcomeTitle.setAlignmentX(CENTER_ALIGNMENT);
		signUpButtonPanel.add(welcomeTitle);
		
		signUpButtonPanel.add(Box.createVerticalStrut(30));

		
	
		
		JButton loginButton = new JButton();
		loginButton.setText("Login");
		loginButton.setAlignmentX(CENTER_ALIGNMENT);
		loginButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				signUpButtonPanel.setVisible(false);
				signUpButtonPanel.removeAll();
				loginPage();
			}
		});
		loginButton.setVisible(true);
		signUpButtonPanel.add(loginButton);


		signUpButtonPanel.add(Box.createVerticalStrut(30));
		

		JButton signUpButton = new JButton();
		signUpButton.setText("Sign up");
		//signUpButton.setPreferredSize(new Dimension(200, 100));
		signUpButton.setAlignmentX(CENTER_ALIGNMENT);
		signUpButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				signUpButtonPanel.setVisible(false);
				signUpButtonPanel.removeAll();
				signUpPage();
			}
		});
		signUpButton.setVisible(true);
		signUpButtonPanel.add(signUpButton);

		this.add(signUpButtonPanel);
		this.setVisible(true);
		this.setLocationRelativeTo(null);
		
	}
	
	private void signUpPage() {
		JPanel signUpPagePanel = new JPanel();
		signUpPagePanel.setBackground(Color.pink);
		signUpPagePanel.setLayout(new GridBagLayout());
		GridBagConstraints gbc = new GridBagConstraints();
		gbc.gridx = 0;
		gbc.gridy = 0;
		gbc.anchor = GridBagConstraints.WEST;
		gbc.insets = new Insets(0, 0, 5, 0);
		signUpPagePanel.setSize(this.getWidth(), this.getHeight());

		JLabel firstNameLabel = new JLabel();
		JLabel lastNameLabel = new JLabel();
		JLabel emailLabel = new JLabel();
		JLabel passwordLabel = new JLabel();
		
		firstNameLabel.setText("First Name");
		lastNameLabel.setText("Last Name");
		emailLabel.setText("Email");
		passwordLabel.setText("Password");
		
		JTextField firstNameField = new JTextField(15);
		JTextField lastNameField = new JTextField(15);
		JTextField emailField = new JTextField(15);
		JTextField passwordField = new JPasswordField(15);
		
		JPanel firstName = new JPanel();
		firstName.setBackground(Color.pink);
		firstName.setLayout(new GridBagLayout());
		firstName.add(firstNameLabel, gbc);
		gbc.gridy = 1;
		firstName.add(firstNameField, gbc);
		
		gbc.gridy = 0;
		gbc.anchor = GridBagConstraints.CENTER;
		signUpPagePanel.add(firstName, gbc);
		gbc.anchor = GridBagConstraints.WEST;
		
		JPanel lastName = new JPanel();
		lastName.setBackground(Color.pink);
		lastName.setLayout(new GridBagLayout());
		lastName.add(lastNameLabel, gbc);
		gbc.gridy = 1;
		lastName.add(lastNameField, gbc);
		
		gbc.anchor = GridBagConstraints.CENTER;
		signUpPagePanel.add(lastName, gbc);
		gbc.anchor = GridBagConstraints.WEST;
		
		JPanel email = new JPanel();
		email.setBackground(Color.pink);
		email.setLayout(new GridBagLayout());
		gbc.gridy = 0;
		email.add(emailLabel, gbc);
		gbc.gridy = 1;
		email.add(emailField, gbc);
		
		gbc.gridy = 2;
		gbc.anchor = GridBagConstraints.CENTER;
		signUpPagePanel.add(email, gbc);
		gbc.anchor = GridBagConstraints.WEST;
		
		JPanel password = new JPanel();
		password.setBackground(Color.pink);
		password.setLayout(new GridBagLayout());
		gbc.gridy = 0;
		password.add(passwordLabel, gbc);
		gbc.gridy = 1;
		password.add(passwordField, gbc);
		
		gbc.gridy = 3;
		gbc.anchor = GridBagConstraints.CENTER;
		signUpPagePanel.add(password, gbc);
		gbc.anchor = GridBagConstraints.WEST;
		
		JLabel pEMessage = new JLabel();
		
		JButton signUpButton = new JButton();
		signUpButton.setSize(100, 50);
		signUpButton.setText("Sign up");
		signUpButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				try {
					verifyPassword(((JPasswordField) passwordField).getPassword());
					signUpPagePanel.setVisible(false);
					signUpPagePanel.removeAll();
					StringBuilder s = new StringBuilder();
					s.append(((JPasswordField) passwordField).getPassword());
					User user = createUser(firstNameField.getText(), lastNameField.getText(), emailField.getText(), s.toString());
					postSignUpPage(user);
				} catch (PasswordException pE) {
					System.out.println(pE.printIssue());
					pEMessage.setText(pE.printIssue());
					pEMessage.setSize(signUpPagePanel.getWidth(), 50);
					pEMessage.setVisible(true);
				}
				
			}
		});
		signUpButton.setVisible(true);
		gbc.gridy = 4;
		gbc.anchor = GridBagConstraints.CENTER;
		gbc.insets = new Insets(5, 0, 0, 0);
		signUpPagePanel.add(signUpButton, gbc);
		
		pEMessage.setVisible(false);
		gbc.gridy = 5;
		gbc.anchor = GridBagConstraints.CENTER;
		gbc.insets = new Insets(5, 0, 0, 0);
		signUpPagePanel.add(pEMessage, gbc);
		
		super.add(signUpPagePanel);
		
	}
	
	private void verifyPassword(char[] password) throws PasswordException {
		int upperCase = 0;
		int lowerCase = 0;
		Pattern regex = Pattern.compile("[$&+,:;=\\\\?@#|/'<>.^*()%!-]");
		int numChar = 0;
		
		if (password.length < 8) {
			throw new Minimum8CharactersRequired();
		}
		
		for (int i = 0; i < password.length; i++) {
			if (Character.isUpperCase(password[i])) {
				upperCase++;
			} else if (Character.isLowerCase(password[i])) {
				lowerCase++;
			} else if (Character.isDigit(password[i])) {
				numChar++;
			} 
		}
		
		if (upperCase == 0) {
			throw new UpperCaseCharacterMissing();
		}
		
		if (lowerCase == 0) {
			throw new LowerCaseCharacterMissing();
		}
		
		if (numChar == 0) {
			throw new NumberCharacterMissing();
		}
		
		StringBuilder s = new StringBuilder();
		s.append(password);
		if (!regex.matcher(s).find()) {
			throw new SpecialCharacterMissing();
		}
	
	}
	
	private User createUser(String firstName, String lastName, String email, String password) {
		StringBuilder s = new StringBuilder();
		s.append(Character.toUpperCase(firstName.charAt(0)));
		s.append(Character.toUpperCase(lastName.charAt(0)));
		s.append('-');
		for (int i = 0; i < 4; i++) {
			Random random = new Random();
			int digit = random.nextInt(10);
			s.append(digit);
		}
		return new User(firstName, lastName, email, password, s.toString());
	}
	
	private void postSignUpPage(User user) {
		getUsers().put(user.getEmail(), user);
		userHomePage(user);
	}
	
	private void loginPage() {
		JPanel loginPagePanel = new JPanel();
		loginPagePanel.setBackground(Color.pink);
		loginPagePanel.setLayout(new GridBagLayout());
		GridBagConstraints gbc = new GridBagConstraints();
		gbc.gridx = 0;
		gbc.gridy = 0;
		gbc.anchor = GridBagConstraints.WEST;
		gbc.insets = new Insets(0, 0, 5, 0);
		loginPagePanel.setSize(this.getWidth(), this.getHeight());
		
		JLabel emailLabel = new JLabel();
		emailLabel.setText("Email");
		
		JLabel passwordLabel = new JLabel();
		passwordLabel.setText("Password");
		
		JTextField emailField = new JTextField(15);
		JPasswordField passwordField = new JPasswordField(15);
		
		JPanel email = new JPanel();
		email.setBackground(Color.pink);
		email.setLayout(new GridBagLayout());
		email.add(emailLabel, gbc);
		gbc.gridy = 1;
		email.add(emailField, gbc);
		
		gbc.gridy = 0;
		gbc.anchor = GridBagConstraints.CENTER;
		loginPagePanel.add(email, gbc);
		gbc.anchor = GridBagConstraints.WEST;
		
		JPanel password = new JPanel();
		password.setBackground(Color.pink);
		password.setLayout(new GridBagLayout());
		password.add(passwordLabel, gbc);
		gbc.gridy = 1;
		password.add(passwordField, gbc);
		
		gbc.anchor = GridBagConstraints.CENTER;
		loginPagePanel.add(password, gbc);
		
		JLabel loginFailed = new JLabel();
		
		JButton loginButton = new JButton();
		loginButton.setSize(100, 50);
		loginButton.setText("Login");
		loginButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				String loginFailedMsg = loginUser(emailField.getText(), passwordField.getPassword());
				if (!loginFailedMsg.isEmpty()) {
					loginFailed.setText(loginFailedMsg);
					loginFailed.setSize(loginPagePanel.getWidth(), 50);
					loginFailed.setVisible(true);
				} else {
					loginPagePanel.setVisible(false);
					loginPagePanel.removeAll();
					userHomePage(users.get(emailField.getText()));
				}
			}
		});
		loginButton.setVisible(true);
		gbc.gridy = 2;
		gbc.insets = new Insets(5, 0, 0, 0);
		loginPagePanel.add(loginButton, gbc);
		
		loginFailed.setVisible(false);
		gbc.gridy = 3;
		gbc.anchor = GridBagConstraints.CENTER;
		gbc.insets = new Insets(5, 0, 0, 0);
		loginPagePanel.add(loginFailed, gbc);
		
		this.add(loginPagePanel);
	}
	
	private String loginUser(String email, char[] password) {
		User user = users.get(email);
		StringBuilder s = new StringBuilder();
		s.append(password);
		if (user == null) {
			return "User does not exist";
		} 
		if (!user.getPassword().equals(s.toString())) {
			return "Entered password was incorrect";
		}
		return "";
	}
	
	private void userHomePage(User user) {
		JPanel postSignUpPanel = new JPanel();
		postSignUpPanel.setBackground(Color.pink);
		postSignUpPanel.setLayout(new GridBagLayout());
		GridBagConstraints gbc = new GridBagConstraints();
		gbc.gridx = 0;
		gbc.gridy = 0;
		gbc.anchor = GridBagConstraints.WEST;

		
		JLabel welcomeUser = new JLabel("Welcome, " + user.getFirstName() + "!");
		welcomeUser.setFont(new Font("Comic Sans", Font.BOLD, 30));
		gbc.gridy = 1;
		postSignUpPanel.add(welcomeUser, gbc);
		
		JLabel tagsLabel = new JLabel("Enter hashtags");
		gbc.gridy = 2;
		postSignUpPanel.add(tagsLabel, gbc);
		
		JTextField tagsField = new JTextField(15);
		gbc.gridy = 3;
		postSignUpPanel.add(tagsField, gbc);
		
		JLabel keyWordLabel = new JLabel("Enter Keywords");
		gbc.gridy = 4;
		postSignUpPanel.add(keyWordLabel, gbc);
		
		JTextField keyWordField = new JTextField(15);
		gbc.gridy = 5;
		postSignUpPanel.add(keyWordField, gbc);
		
		JButton parse = new JButton();
		parse.setSize(100, 50);
		parse.setText("Parse data");
		parse.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				postSignUpPanel.setVisible(false);
				System.out.println("Data parsed!");
				//openingPage();
			}
		});
		parse.setVisible(true);
		gbc.gridy = 6;
		gbc.anchor = GridBagConstraints.CENTER;
		gbc.insets = new Insets(10, 0, 0, 0);
		postSignUpPanel.add(parse, gbc);

		

		JButton logout = new JButton();
		logout.setSize(100, 50);
		logout.setText("Logout");
		logout.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				postSignUpPanel.setVisible(false);
				openingPage();
			}
		});
		logout.setVisible(true);
		gbc.gridy = 7;
		gbc.anchor = GridBagConstraints.CENTER;
		gbc.insets = new Insets(20, 0, 0, 0);
		postSignUpPanel.add(logout, gbc);

		this.add(postSignUpPanel);
		
		InstagramAPIService iAS = new InstagramAPIService();
		iAS.start();
	}

	public HashMap<String, User> getUsers() {
		return users;
	}

	public void setUsers(HashMap<String, User> users) {
		this.users = users;
	}
	
	public static void main(String[] args) {
		DataScraper dataScraper = new DataScraper();
		dataScraper.getUsers().put("SL-9648", new User("shirley", "li", "sli@gmail.com", "abcDEF123:", "SL-9648"));
	}

}
