package org.team10.dao.jpa.entity;

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

	@Column(name = "city_photo")
	private String cityPhoto;

	public Long getCityId() {
		return cityId;
	}

	public void setCityId(Long cityId) {
		this.cityId = cityId;
	}

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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((cityDescription == null) ? 0 : cityDescription.hashCode());
		result = prime * result + ((cityId == null) ? 0 : cityId.hashCode());
		result = prime * result + ((cityName == null) ? 0 : cityName.hashCode());
		result = prime * result + ((cityPhoto == null) ? 0 : cityPhoto.hashCode());
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
		if (cityPhoto == null) {
			if (other.cityPhoto != null)
				return false;
		} else if (!cityPhoto.equals(other.cityPhoto))
			return false;
		return true;
	}

	

}
