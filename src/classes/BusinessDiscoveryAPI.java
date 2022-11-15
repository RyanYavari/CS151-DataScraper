package classes;

import java.util.List;

public interface BusinessDiscoveryAPI {
	
	@GET
	public Call<Business> getData(@Url String url);

}
