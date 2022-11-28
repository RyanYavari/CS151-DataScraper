package com.example.demo;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class MySQLcommands {
	
    public static void AddUser(String BuisnessName	, String Hashtag, String Keyword,String Handles, String Tweet ) throws SQLException{
        String Query = String.format("INSERT INTO `buisnesses` (`firstname`, `lastname`, `pass`, `email`) VALUES ('%s', '%s', '%s', '%s','%s')", BuisnessName, Hashtag, Keyword, Handles,Tweet ); 
        Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/datascrappers","root", "");
        Statement stmt=con.createStatement();
        stmt.execute(Query);
        con.close();
        System.out.println("Query executed.....");
         
    }
         
         
         
     
 
     public static void main(String[] args) throws SQLException{
         // TODO Auto-generated method stub
         String Buinessname = "Mcdonalds";
         String hashtags = "[\"India\",\"Australia\",\"England\",\"South Africa\",\"West Indies\",\"Newzealand\"]";
         String keywords ="[\"India\",\"Australia\",\"England\",\"South Africa\",\"West Indies\",\"Newzealand\"]";
         String handles = "[\"India\",\"Australia\",\"England\",\"South Africa\",\"West Indies\",\"Newzealand\"]";
         String tweet = "[\"India\",\"Australia\",\"England\",\"South Africa\",\"West Indies\",\"Newzealand\"]";
         AddUser(Buinessname,hashtags,keywords, handles,tweet);
         
 
     }
 
 }
