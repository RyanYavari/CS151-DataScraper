package com.example.demo;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.mashape.unirest.http.exceptions.UnirestException;

/*
 * This class stores information in the userInfo HashMap by taking an input from the Parser class.
 * The userInfo:
 * 		Key: Twitter Handle
 * 		Value: Link to tweet containing keyword 
 * 
 * In the main method, a Parser object is created that intakes (query,max_results): Ex: ("ostrich,egg", 20)
 * 		Restrictions to Parser: 
 * 				Maximum query is 512 characters
 * 				Cannot contain white spaces, keywords must be separated by commas. Example: "ostrich egg" won't work. 
 * 				max_results can only accept values between 10 and 100. 
 * 								
 */

public class Formatter {

	
	private StringBuilder unformatted;
	private Map<String, String> userInfo;
	

	public Formatter(String unformat) {
		unformatted = new StringBuilder(unformat);
		userInfo = new HashMap<>();
		
	}

	public void format() throws JsonMappingException, JsonProcessingException, JSONException, UnirestException {

		JSONArray array = new JSONArray(unformatted.toString().substring(8));  
		String tempPlacer;
		String currentUser;
		for(int i=0; i < array.length(); i++)   
		{  
			JSONObject object = array.getJSONObject(i); 
			
			
			
			
			tempPlacer = Parser.searchUsername(object.getString("author_id"));
			currentUser = tempPlacer.substring(tempPlacer.indexOf("\"username\":")+12, tempPlacer.length()-3);
			
			userInfo.put(currentUser, formURL(currentUser,object.getString("id")));
			
			
		}  
		
	}  

	public String formURL(String username, String tweetID) {
		return ("https://twitter.com/" + username + "/status/" + tweetID);
	}

	public StringBuilder getUnformatted() {
		return unformatted;
	}

	public void setUnformatted(StringBuilder unformatted) {
		this.unformatted = unformatted;
	}
	
	public void print() {
		for(String username: userInfo.keySet()) {
			System.out.println("Handle:" + username + ", Tweet URL: " + userInfo.get(username));
		}
	}

	public static void main(String[] args) throws IOException, URISyntaxException, UnirestException {
		Parser data = new Parser("Ostrich,egg", 20);
		Formatter formattedData = new Formatter(data.getOutput());

		data.print();
		
		System.out.println();

		formattedData.format();
		
		formattedData.print();

		System.out.println();
		System.out.println();
		System.out.println();
	}

	public Map<String, String> getUserInfo() {
		return userInfo;
	}

	public void setUserInfo(Map<String, String> userInfo) {
		this.userInfo = userInfo;
	}


}
