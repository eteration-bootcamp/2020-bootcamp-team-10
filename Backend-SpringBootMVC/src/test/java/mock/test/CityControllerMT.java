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
import org.culturalplaces.controller.CityController;
import org.culturalplaces.dao.jpa.entity.City;
import org.culturalplaces.service.CityService;



@RunWith(MockitoJUnitRunner.class)
public class CityControllerMT {

	@Mock
	private CityService cityService;
	
	@InjectMocks
	private CityController cityController;
	
	
	@Before
	public void setUp() {
		MockitoAnnotations.initMocks(this);
	}
	
	
	@Test
	public void getAllCityList() {

		City city = new City();
		city.setCityDescription("abc");
		city.setCityId(4L);
		

		
		List<City> citysList1 = Arrays.asList(city);

	
		Mockito.when(cityService.getAllCityList())
				
				.thenReturn(citysList1);

		List<City> citysList = cityController.getAllCityList();
		
		Assert.assertNotNull(citysList);

	}

	
}
