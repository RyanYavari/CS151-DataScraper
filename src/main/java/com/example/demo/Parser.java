package com.example.demo;


import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;

//
//
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.config.CookieSpecs;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

/*
 * Code sampled from and credited to: https://github.com/twitterdev/Twitter-API-v2-sample-code
 */



public class Parser{
	
	//Attributes
	private String query;
	private String bearerToken = "AAAAAAAAAAAAAAAAAAAAAK72jQEAAAAAb8Ztc3RNyaHKv3pK87WmdXD21OY%3DK6suYuVRXwAbzG5Twy5E8jfWcEnW3gvVbK1q8nr3YHsI5rSV42"; 
	private String output;
	
	
	public Parser(String query) throws IOException, URISyntaxException{	
		this.query = query;
		output = search(query, bearerToken);
	}
	
	public static void main(String[] args) throws IOException, URISyntaxException {
		Parser test = new Parser("Polar bears");
		test.print();
	
	}

//
//  public static void main(String args[]) throws IOException, URISyntaxException {
//    String bearerToken = "AAAAAAAAAAAAAAAAAAAAAK72jQEAAAAAb8Ztc3RNyaHKv3pK87WmdXD21OY%3DK6suYuVRXwAbzG5Twy5E8jfWcEnW3gvVbK1q8nr3YHsI5rSV42";
//    if (null != bearerToken) {
//      //Replace the search term with a term of your choice
//      String response = search("scientology", bearerToken);
//
//      System.out.println(response);
//    } else {
//      System.out.println("There was a problem getting you bearer token. Please make sure you set the BEARER_TOKEN environment variable");
//    }
//  }

  public String getQuery() {
		return query;
	}

	public void setQuery(String query) {
		this.query = query;
	}

	public String getBearerToken() {
		return bearerToken;
	}

	public void setBearerToken(String bearerToken) {
		this.bearerToken = bearerToken;
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

/*
   * This method calls the recent search endpoint with a the search term passed to it as a query parameter
   * */
  private static String search(String searchString, String bearerToken) throws IOException, URISyntaxException {
    String searchResponse = null;

    HttpClient httpClient = HttpClients.custom()
        .setDefaultRequestConfig(RequestConfig.custom()
            .setCookieSpec(CookieSpecs.STANDARD).build())
        .build();

    URIBuilder uriBuilder = new URIBuilder("https://api.twitter.com/2/tweets/search/recent");
    ArrayList<NameValuePair> queryParameters;
    queryParameters = new ArrayList<>();
    queryParameters.add(new BasicNameValuePair("query", searchString));
    uriBuilder.addParameters(queryParameters);

    HttpGet httpGet = new HttpGet(uriBuilder.build());
    httpGet.setHeader("Authorization", String.format("Bearer %s", bearerToken));
    httpGet.setHeader("Content-Type", "application/json");

    HttpResponse response = httpClient.execute(httpGet);
    HttpEntity entity = response.getEntity();
    if (null != entity) {
      searchResponse = EntityUtils.toString(entity, "UTF-8");
    }
    return searchResponse;
  }
  

}
