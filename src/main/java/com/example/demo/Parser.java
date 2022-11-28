package com.example.demo;


import java.io.IOException;
import java.net.URISyntaxException;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

/*
 * Code sampled from and credited to: https://github.com/twitterdev/Twitter-API-v2-sample-code
 */



public class Parser{
	
	//Attributes
	private static String query;
	private static String bearerToken = "AAAAAAAAAAAAAAAAAAAAAK72jQEAAAAAb8Ztc3RNyaHKv3pK87WmdXD21OY%3DK6suYuVRXwAbzG5Twy5E8jfWcEnW3gvVbK1q8nr3YHsI5rSV42"; 
	private String output;
	private static int max_results;
	
	public Parser(String query, int max_results) throws IOException, URISyntaxException, UnirestException{
		Parser.max_results = max_results;
		Parser.query = query;
		output = search();
	}
	
//	public static void main(String[] args) throws IOException, URISyntaxException, UnirestException {
//		Parser test = new Parser("ostrich,egg");
//		test.print();
//
//	}

  public String getQuery() {
		return query;
	}

	public void setQuery(String query) {
		Parser.query = query;
	}

	public String getBearerToken() {
		return bearerToken;
	}

	public void setBearerToken(String bearerToken) {
		Parser.bearerToken = bearerToken;
	}

	public String getOutput() {
		return output;
	}

	public void setOutput(String output) {
		this.output = output;
	}
	
	
	public void print() {
		System.out.println(output);
	}
  
  public static String search() throws UnirestException {
	  Unirest.setTimeouts(0, 0);
	  com.mashape.unirest.http.HttpResponse<String> response = 
			  Unirest.get("https://api.twitter.com/2/tweets/search/recent?max_results=" + max_results + "&expansions="
			  		+ "author_id"
			  		+ "&query=" + query)
			  
	    .header("Authorization", "Bearer " + bearerToken)
	    .header("Cookie", "guest_id=v1%3A166927603438120108; "
	    		+ "guest_id_ads=v1%3A166927603438120108; "
	    		+ "guest_id_marketing=v1%3A166927603438120108; "
	    		+ "personalization_id=\"v1_/U2whbVZ7r3qGH9DnE7qVw==\"")
	    .asString();
	  return response.getBody();

  }
  
  public static String searchUsername(String userID) throws UnirestException {
	  Unirest.setTimeouts(0, 0);
	  HttpResponse<String> response = Unirest.get("https://api.twitter.com/2/users/" + userID)
	    .header("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAK72jQEAAAAAb8Ztc3RNyaHKv3pK87WmdXD21OY%3DK6suYuVRXwAbzG5Twy5E8jfWcEnW3gvVbK1q8nr3YHsI5rSV42")
	    .header("Cookie", "guest_id=v1%3A166927603438120108; guest_id_ads=v1%3A166927603438120108; guest_id_marketing=v1%3A166927603438120108; personalization_id=\"v1_/U2whbVZ7r3qGH9DnE7qVw==\"")
	    .asString();
	  return response.getBody();
  }
  

}
