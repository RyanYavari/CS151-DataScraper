package CS151_DataScraper;

import java.util.List;
import retrofit2.converter.gson.GsonConverterFactory;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;

public class TwitterBusinessIdAPIService implements Callback<Business> {
	
	public static final String BASE_URL = "https://api.twitter.com/";
	
	public void start() {
		Gson gson = new GsonBuilder()
                .create();

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create(gson))
                .build();

        BusinessDiscoveryAPI businessDiscoveryAPI = retrofit.create(BusinessDiscoveryAPI.class);
        businessDiscoveryAPI.authenticate(BASE_URL + "oauth2/token?grant_type=client_credentials");
        String companyName = "walmart";
        Call<Business> call = businessDiscoveryAPI.getBusinessId(BASE_URL + "users/by/username/" + companyName + "?tweet.fields=");
        call.enqueue(this);
        // Gets id of business: "https://api.twitter.com/2/users/by/username/walmart?tweet.fields="
        // Uses id to get follower's list: "https://api.twitter.com/2/users/17137891/followers"
	}

	@Override
	public void onFailure(Call<Business> call, Throwable t) {
		t.printStackTrace();
	}

	@Override
	public void onResponse(Call<Business> call, Response<Business> response) {
		TwitterFollowersAPIService followersService = new TwitterFollowersAPIService();
		followersService.start(response.body().getData().getId());
		System.out.println(response.body().getData().getId());
	}
	
	

}
