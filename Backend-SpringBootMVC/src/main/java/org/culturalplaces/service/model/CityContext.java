package org.culturalplaces.service.model;

import java.io.Serializable;

public class CityContext implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String cityName;
	private String cityDescription;
	private String cityPhoto;
	public String getCityName() {
		return cityName;
	}
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}
	public String getCityDescription() {
		return cityDescription;
	}
	public void setCityDescription(String cityDescription) {
		this.cityDescription = cityDescription;
	}
	public String getCityPhoto() {
		return cityPhoto;
	}
	public void setCityPhoto(String cityPhoto) {
		this.cityPhoto = cityPhoto;
	}

	
}
