package org.culturalplaces.dao.jpa.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "city")
public class City {

	@Id
	@org.springframework.data.annotation.Id
	@Column(name = "city_id")
	private Long cityId;

	@Column(name = "city_name")
	private String cityName;

	@Column(name = "city_description")
	private String cityDescription;

	@Column(name = "city_photo1")
	private String cityPhoto1;
	
	@Column(name = "city_photo2")
	private String cityPhoto2;
	
	@Column(name = "city_photo3")
	private String cityPhoto3;
	
	@Column(name = "cultural_place")
	private String culturalPlace;
	
	@Column(name = "city_coordinatesX")
	private String cityCoordinatesX;
	
	@Column(name = "city_coordinatesY")
	private String cityCoordinatesY;

	public Long getCityId() {
		return cityId;
	}

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

	public void setCityId(Long cityId) {
		this.cityId = cityId;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((cityCoordinatesY == null) ? 0 : cityCoordinatesY.hashCode());
		result = prime * result + ((cityCoordinatesX == null) ? 0 : cityCoordinatesX.hashCode());
		result = prime * result + ((cityDescription == null) ? 0 : cityDescription.hashCode());
		result = prime * result + ((cityId == null) ? 0 : cityId.hashCode());
		result = prime * result + ((cityName == null) ? 0 : cityName.hashCode());
		result = prime * result + ((cityPhoto1 == null) ? 0 : cityPhoto1.hashCode());
		result = prime * result + ((cityPhoto2 == null) ? 0 : cityPhoto2.hashCode());
		result = prime * result + ((cityPhoto3 == null) ? 0 : cityPhoto3.hashCode());
		result = prime * result + ((culturalPlace == null) ? 0 : culturalPlace.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		City other = (City) obj;
		if (cityCoordinatesY == null) {
			if (other.cityCoordinatesY != null)
				return false;
		} else if (!cityCoordinatesY.equals(other.cityCoordinatesY))
			return false;
		if (cityCoordinatesX == null) {
			if (other.cityCoordinatesX != null)
				return false;
		} else if (!cityCoordinatesX.equals(other.cityCoordinatesX))
			return false;
		if (cityDescription == null) {
			if (other.cityDescription != null)
				return false;
		} else if (!cityDescription.equals(other.cityDescription))
			return false;
		if (cityId == null) {
			if (other.cityId != null)
				return false;
		} else if (!cityId.equals(other.cityId))
			return false;
		if (cityName == null) {
			if (other.cityName != null)
				return false;
		} else if (!cityName.equals(other.cityName))
			return false;
		if (cityPhoto1 == null) {
			if (other.cityPhoto1 != null)
				return false;
		} else if (!cityPhoto1.equals(other.cityPhoto1))
			return false;
		if (cityPhoto2 == null) {
			if (other.cityPhoto2 != null)
				return false;
		} else if (!cityPhoto2.equals(other.cityPhoto2))
			return false;
		if (cityPhoto3 == null) {
			if (other.cityPhoto3 != null)
				return false;
		} else if (!cityPhoto3.equals(other.cityPhoto3))
			return false;
		if (culturalPlace == null) {
			if (other.culturalPlace != null)
				return false;
		} else if (!culturalPlace.equals(other.culturalPlace))
			return false;
		return true;
	}

	

}
