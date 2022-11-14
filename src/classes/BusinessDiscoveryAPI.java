package classes;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;
import retrofit2.http.Query;

public interface BusinessDiscoveryAPI {
	
	@GET("1153755195234085?fields=id,businesses{instagram_business_accounts{business_discovery.username(bluebottle)}}&access_token={access_token}")
	public Call<Business> getId(@Path("username") String username);

}
