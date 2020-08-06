package mock.test;


import java.util.Arrays;
import java.util.List;


import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.culturalplaces.dao.jpa.entity.City;
import org.culturalplaces.dao.jpa.repository.CityRepository;
import org.culturalplaces.service.CityService;
import org.culturalplaces.service.model.CityContext;


@RunWith(MockitoJUnitRunner.class)
public class CityServiceMT {

	@Mock
    private CityRepository cityRepository;
	

	
	@InjectMocks
	private CityService cityService;
	
	
	@Before
	public void setUp() {
		
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	public void queryCity() {
		
		City city = new City();
		city.setCityId(10L);
		city.setCityName("İstanbul");
		
	  
	    
		City city3 = new City();
		city3.setCityId(11L);
		city3.setCityName("Adana");
		
		
	   
		 
	    Mockito
	    	.when(cityRepository.findWithCityId(10L))
	    	.thenReturn(city);
	    
	    Mockito
	    	.when(cityRepository.findWithCityId(11L))
	    	.thenReturn(city3);
	    
		
		City city2 = cityService.findByCityId(11L);
		
		Assert.assertNotNull(city2);
		Assert.assertTrue(city2.getCityId() > 0);
	}
	
	@Test
	public void queryAllCitys() {
		
		City city1 = new City();
		city1.setCityId(10L);
		city1.setCityName("İstanbul");
		
	   
	    
	    City city2 = new City();
	    city2.setCityId(10L);
	    city2.setCityName("Adana");
	    
	   
	    
	    
		List<City> citys = Arrays.asList(city1, city2);
		
		Mockito
			.when(cityRepository.getAllCityList())
			.thenReturn(citys);
		
		
		
		List<City> citys2 = cityService.getAllCityList();
		
		Assert.assertNotNull(citys2);
		Assert.assertTrue(citys2.size() > 0);
	}
	
	@Test
	public void saveCity() {
		
		CityContext cityContext = new CityContext();
		cityContext.setCityName("İstanbul");
		
	   
		
	    Long maxCityId = 100L;
	    
	    City city = new City();
	    city.setCityId(maxCityId + 1);
	    city.setCityName(cityContext.getCityName());
	  
	    
		
	    Mockito
			.when(cityRepository.findMaxId())
			.thenReturn(maxCityId);
	    
		Mockito
			.when(cityRepository.save(city))
			.thenReturn(city);
		
		
		long cityId = cityService.save(cityContext);
		
		Assert.assertEquals(101L, cityId);
	}
	
	
	
	private void prepareMockTestRuleCityQueryByCityNo() {
		
		City city = new City();
		city.setCityId(10L);
		city.setCityName("İstanbul");
		
	   
		 
	    Mockito
	    	.when(cityRepository.findWithCityId(10L))
	    	.thenReturn(city);
		
	}
	
	
	
	private void prepareMockTestRuleCitySave(CityContext cityContext) {
		
		Long cityId = 100L;
		City city = new City();
		city.setCityId(cityId + 1);
		city.setCityName(cityContext.getCityName());
		
	 
	    Mockito
			.when(cityRepository.findMaxId())
			.thenReturn(cityId);
	    
		Mockito
			.when(cityRepository.save(city))
			.thenReturn(city);
	}
	
}