package org.culturalplaces.service.model;

import java.io.Serializable;

public class CityContext implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String cityName;
	private String cityDescription;
	private String cityPhoto1;
	private String cityPhoto2;
	private String cityPhoto3;
	private String culturalPlace;
	private String cityCoordinatesX;
	private String cityCoordinatesY;
	public String getCityName() {
		return cityName;
	}
	public String getCityDescription() {
		return cityDescription;
	}
	public String getCityPhoto1() {
		return cityPhoto1;
	}
	public String getCityPhoto2() {
		return cityPhoto2;
	}
	public String getCityPhoto3() {
		return cityPhoto3;
	}
	public String getCulturalPlace() {
		return culturalPlace;
	}
	public String getCityCoordinatesX() {
		return cityCoordinatesX;
	}
	public String getCityCoordinatesY() {
		return cityCoordinatesY;
	}
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}
	public void setCityDescription(String cityDescription) {
		this.cityDescription = cityDescription;
	}
	public void setCityPhoto1(String cityPhoto1) {
		this.cityPhoto1 = cityPhoto1;
	}
	public void setCityPhoto2(String cityPhoto2) {
		this.cityPhoto2 = cityPhoto2;
	}
	public void setCityPhoto3(String cityPhoto3) {
		this.cityPhoto3 = cityPhoto3;
	}
	public void setCulturalPlace(String culturalPlace) {
		this.culturalPlace = culturalPlace;
	}
	public void setCityCoordinatesX(String cityCoordinatesX) {
		this.cityCoordinatesX = cityCoordinatesX;
	}
	public void setCityCoordinatesY(String cityCoordinatesY) {
		this.cityCoordinatesY = cityCoordinatesY;
	}
	
	

}

