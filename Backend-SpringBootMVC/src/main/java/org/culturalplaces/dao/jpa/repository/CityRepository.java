package org.culturalplaces.dao.jpa.repository;

import java.util.List;

import org.culturalplaces.dao.jpa.entity.City;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends CrudRepository<City, Long>{
	
	
		@Query(value = "FROM City e WHERE e.cityId = :cityId")
		public City findWithCityId(@Param("cityId") Long cityId);
		
		@Query(value = "SELECT MAX(e.cityId) FROM City e")
		public Long findMaxId();
		
		@Query(value = "SELECT e FROM City e")
		public List<City> getAllCityList();
		
		@Query(value = "SELECT e FROM City e WHERE e.cityName=:cityName")
		public List<City> findByCityName(@Param("cityName") String cityName);
		
		@Query(value = "SELECT e FROM City e WHERE e.culturalPlace=:culturalPlace")
		public List<City> findByCulturalPlaceName(@Param("culturalPlace") String culturalPlace);

}
