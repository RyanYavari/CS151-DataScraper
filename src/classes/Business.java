package classes;

import java.util.List;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

class Business {

	private Businesses businesses;
	private String id;

	public Businesses getBusinesses() {
		return businesses;
	}

	public void setBusinesses(Businesses businesses) {
		this.businesses = businesses;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}	

}

class BusinessDiscovery {

	private String id;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

}

class Businesses {

	
	private List<Datum> data = null;

	public List<Datum> getData() {
		return data;
	}

	public void setData(List<Datum> data) {
		this.data = data;
	}

}

class Cursors {

	private String before;
	private String after;

	public String getBefore() {
		return before;
	}

	public void setBefore(String before) {
		this.before = before;
	}

	public String getAfter() {
		return after;
	}

	public void setAfter(String after) {
		this.after = after;
	}

}


class Datum {

	@SerializedName("instagram_business_accounts")
	@Expose
	private InstagramBusinessAccounts instagramBusinessAccounts;
	@SerializedName("id")
	@Expose
	private String id;

	public InstagramBusinessAccounts getInstagramBusinessAccounts() {
		return instagramBusinessAccounts;
	}

	public void setInstagramBusinessAccounts(InstagramBusinessAccounts instagramBusinessAccounts) {
		this.instagramBusinessAccounts = instagramBusinessAccounts;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

}

class Datum__1 {

	@SerializedName("business_discovery")
	@Expose
	private BusinessDiscovery businessDiscovery;
	@SerializedName("id")
	@Expose
	private String id;

	public BusinessDiscovery getBusinessDiscovery() {
		return businessDiscovery;
	}

	public void setBusinessDiscovery(BusinessDiscovery businessDiscovery) {
		this.businessDiscovery = businessDiscovery;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

}

class InstagramBusinessAccounts {

	private List<Datum__1> data = null;
	private Paging paging;

	public List<Datum__1> getData() {
		return data;
	}

	public void setData(List<Datum__1> data) {
		this.data = data;
	}

	public Paging getPaging() {
		return paging;
	}

	public void setPaging(Paging paging) {
		this.paging = paging;
	}

}

class Paging {

	@SerializedName("cursors")
	@Expose
	private Cursors cursors;

	public Cursors getCursors() {
		return cursors;
	}

	public void setCursors(Cursors cursors) {
		this.cursors = cursors;
	}

}