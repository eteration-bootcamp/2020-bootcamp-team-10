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
	private String culturalPlace;
	private String cityCoordinates;
	
	public String getCityName() {
		return cityName;
	}
	public String getCityDescription() {
		return cityDescription;
	}
	public String getCityPhoto() {
		return cityPhoto;
	}
	public String getCulturalPlace() {
		return culturalPlace;
	}
	public String getCityCoordinates() {
		return cityCoordinates;
	}
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}
	public void setCityDescription(String cityDescription) {
		this.cityDescription = cityDescription;
	}
	public void setCityPhoto(String cityPhoto) {
		this.cityPhoto = cityPhoto;
	}
	public void setCulturalPlace(String culturalPlace) {
		this.culturalPlace = culturalPlace;
	}
	public void setCityCoordinates(String cityCoordinates) {
		this.cityCoordinates = cityCoordinates;
	}
	
	


}

