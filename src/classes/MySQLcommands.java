package classes;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;


public class MySQLcommands {
	
   public static void AddUser(String FirstName, String LastName, String Password,String Email ) throws SQLException{
	   String Query = String.format("INSERT INTO `users` (`firstname`, `lastname`, `pass`, `email`) VALUES ('%s', '%s', '%s', '%s')", FirstName, LastName, Password, Email); 
	   Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/datascrappers","root", "");
	   Statement stmt=con.createStatement();
	   stmt.execute(Query);
	   con.close();
	   System.out.println("Query executed.....");
		
   }
		
		
		
	

	public static void main(String[] args) throws SQLException{
		// TODO Auto-generated method stub
		String FirstName = "Mariana";
		String LastName = "Navarro";
		String passwaord ="12345";
		String Email = "annetorres@gmail.com";
		AddUser(FirstName,LastName,passwaord, Email);
		

	}

}
