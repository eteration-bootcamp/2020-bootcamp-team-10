package integration.test;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.culturalplaces.dao.jpa.entity.City;
import org.culturalplaces.dao.jpa.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.annotation.Order;

import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;


@RunWith(SpringRunner.class)
@SpringBootTest
@TestPropertySource({ "classpath:application.properties" })
public class CityRepositoryIT {

	@Autowired
	private CityRepository cityRepository;
	
	
	@Test
	@Order(1)
	public void selectCityByCityNo() {
		
		Long maxId = cityRepository.findMaxId();
		City city = cityRepository.findWithCityId(maxId);
		
		Assert.assertNotNull(city);
		Assert.assertTrue(city.getCityId() > 0);
	}
	
	
	
	@Test
	@Transactional
	@Rollback(false)
	@Order(4)
	public void updateCity() {
		
		Long maxId = cityRepository.findMaxId();
		City city = cityRepository.findWithCityId(maxId);
		
		city.setCityName("İstanbul");
		city.setCityDescription("Tarihi şehir ...");
		
		
		cityRepository.save(city);
		
		city = cityRepository.findWithCityId(maxId);
		
		Assert.assertEquals("İstanbul", city.getCityName());
		Assert.assertEquals("Tarihi şehir ...", city.getCityDescription());
	}
	
	@Test
	@Transactional
	@Rollback(false)
	@Order(5)
	public void deleteCity() {
		
		Long maxId = cityRepository.findMaxId();
		City city = cityRepository.findWithCityId(maxId);
		
		cityRepository.delete(city);
		
		city = cityRepository.findWithCityId(maxId);
		
		Assert.assertNull(city);
	}
}