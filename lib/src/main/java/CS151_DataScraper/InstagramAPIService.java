package CS151_DataScraper;

import java.util.List;
import retrofit2.converter.gson.GsonConverterFactory;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;

public class InstagramAPIService implements Callback<Business>{
	
	public static final String BASE_URL = "https://graph.facebook.com/v15.0/";
	
	public void start() {
		Gson gson = new GsonBuilder()
                .create();

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create(gson))
                .build();

        BusinessDiscoveryAPI businessDiscoveryAPI = retrofit.create(BusinessDiscoveryAPI.class);
        String companyName = "sjsu";
        Call<Business> call = businessDiscoveryAPI.getData(BASE_URL + "1153755195234085?fields=businesses{instagram_business_accounts{business_discovery.username(" + companyName +")}}&access_token=EAALNhuLcnO8BAF278ohxE9vDoXTEAB3n2fiNMap0r8ZCukUUlH4qVmhMPFX7N4hT4PZC4BkSb7sjdLFZAvMiaj4L8N5TrYPQa91ilSfQUtIMmxHxtkZBv5Ru55Of37jil33jZB8jdefT2V6YajEnaWkkxkkLcgeWLpfEV5NkS4uXR2Cu4Ly3phIayqIPKdwlZBb7NSZCQZCLQGwnd3Q1pMrdwnk1R9MtbD1dE1ZBouzHE9Wx4MDAZCdcsw");
        call.enqueue(this);
	}

	@Override
	public void onFailure(Call<Business> call, Throwable t) {
		t.printStackTrace();
	}

	@Override
	public void onResponse(Call<Business> call, Response<Business> response) {
		System.out.println(response.body().getBusinesses().getData().get(0).getInstagramBusinessAccounts().getData().get(0).getBusinessDiscovery().getId());
	}
	
	

}
