package CS151_DataScraper;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;
import retrofit2.http.Query;
import retrofit2.http.Url;

public interface BusinessDiscoveryAPI {
	
	@GET
	public Call<Business> getData(@Url String url);

}
