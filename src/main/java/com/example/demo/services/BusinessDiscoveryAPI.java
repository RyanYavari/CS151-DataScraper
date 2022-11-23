package com.example.demo.services;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Headers;
import retrofit2.http.POST;
import retrofit2.http.Path;
import retrofit2.http.Query;
import retrofit2.http.Url;

public interface BusinessDiscoveryAPI {
	
	@POST
	public void authenticate(@Url String url);
	
	@GET
	public Call<Followers> getFollowersData(@Url String url);

	@GET
	public Call<Business> getBusinessId(@Url String url);

}
