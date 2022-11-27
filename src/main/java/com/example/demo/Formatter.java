package com.example.demo;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Formatter {
	

	private StringBuilder unformatted;
	//private Map<String, String> ids;
	private ArrayList<String> ids;
	private ArrayList<String> handles;
	
	public Formatter(String unformat) {
		unformatted = new StringBuilder(unformat);
		//ids = new HashMap<>();
		ids = new ArrayList<>();
		handles = new ArrayList<>();
	}
	
	
	public void formatID() {
	
		int startPoint;
		while(unformatted.toString().contains("\"id\"")) {
			startPoint = unformatted.lastIndexOf("\"id\"");
			ids.add(unformatted.substring(startPoint+6, startPoint+24));
			unformatted.delete(startPoint, startPoint+27);
		}
		System.out.println(ids);
		
	}
	
	public void formatHandle() {
		int startPoint;
		while(unformatted.toString().contains("\"id\"")) {
			startPoint = unformatted.lastIndexOf("\"id\"");
			ids.add(unformatted.substring(startPoint+6, startPoint+24));
			unformatted.delete(startPoint, startPoint+27);
		}
		System.out.println(ids);
	}
	
	public static void main(String[] args) throws IOException, URISyntaxException {
		Parser data = new Parser("dog cat");
		Formatter formattedData = new Formatter(data.getOutput());
		data.print();
		
		formattedData.formatID();
	}
	

}
