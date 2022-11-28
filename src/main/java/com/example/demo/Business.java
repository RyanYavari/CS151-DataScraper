package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class Business {
	
	private String name;
	private List<String> hashtags;
	private List<String> keywords;
	private List<String> handles = new ArrayList<>();
	private List<String> tweets = new ArrayList<>();
	
	public Business(String name, List<String> hashtags, List<String> keywords) {
		this.name = name;
		this.setHashtags(hashtags);
		this.setKeywords(keywords);
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<String> getHashtags() {
		return hashtags;
	}

	public void setHashtags(List<String> hashtags) {
		this.hashtags = hashtags;
	}

	public List<String> getKeywords() {
		return keywords;
	}

	public void setKeywords(List<String> keywords) {
		this.keywords = keywords;
	}
	
	public List<String> getHandles() {
		return this.handles;
	}

	public void setHandles(List<String> newHandles) {
		this.handles = newHandles;
	}

	public List<String> getTweets() {
		return this.tweets;
	}

	public void setTweets(List<String> newTweets) {
		this.tweets = newTweets;
	}
}
