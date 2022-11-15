package classes;

import java.util.List;
import retrofit2.converter.gson.GsonConverterFactory;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import CS151_DataScraper.Business;
import CS151_DataScraper.BusinessDiscoveryAPI;
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

        Call<Business> call = businessDiscoveryAPI.getData(BASE_URL + "1153755195234085?fields=businesses{instagram_business_accounts{business_discovery.username(bluebottle)}}&access_token=EAALNhuLcnO8BADbZA1xzoPm3jR3EhMKGaPAjeZC5yc8UPvFNpj7ygjphrMrJfOrltZCxwJGMxhYpqmiDozjbUQUjdwq0ZAAK6Tj8nEs2oZBYIBlTaWGBIXIi2IEo0ZBDpvPdzMEpE6j0qGwCc4qmZB8M6kMAYgciJZALlX0Sqi6FIInhiXNR8pQZBZAuT0Q0roYR84kG8QxTja6wZDZD");
        call.enqueue(this);
	}

	@Override
	public void onFailure(Call<Business> call, Throwable t) {
		t.printStackTrace();
	}

	@Override
	public void onResponse(Call<Business> call, Response<Business> response) {
		System.out.println(response.body().getBusinesses().getData().get(0).getInstagramBusinessAccounts().getData().get(0).getId());
	}
	
	

}
