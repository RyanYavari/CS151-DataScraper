package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class TwitterFollowersAPIService implements Callback<Followers> {
	
	public static final String BASE_URL = "https://api.twitter.com/";
	private List<Datum> followersList;
	
	public void start(String companyId) {
		Gson gson = new GsonBuilder()
                .create();

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create(gson))
                .build();

        BusinessDiscoveryAPI businessDiscoveryAPI = retrofit.create(BusinessDiscoveryAPI.class);
        Call<Followers> call = businessDiscoveryAPI.getFollowersData(BASE_URL + "users/" + companyId + "/followers");
        call.enqueue(this);
        // Gets id of business: "https://api.twitter.com/2/users/by/username/walmart?tweet.fields="
        // Uses id to get follower's list: "https://api.twitter.com/2/users/17137891/followers"
	}

	@Override
	public void onFailure(Call<Followers> call, Throwable t) {
		t.printStackTrace();
	}

	@Override
	public void onResponse(Call<Followers> call, Response<Followers> response) {
		followersList = new ArrayList();
		followersList.addAll(response.body().getData());
	}

}
