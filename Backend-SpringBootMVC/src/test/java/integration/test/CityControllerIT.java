package integration.test;


import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.culturalplaces.dao.jpa.entity.City;
import org.culturalplaces.service.model.CityContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;

import org.springframework.core.annotation.Order;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource({ "classpath:application.properties" })
public class CityControllerIT {

	@Autowired
	private TestRestTemplate restTemplate;

	@LocalServerPort
	private int tomcatPortNo;

	@Test
	@Order(1)
	public void testRestTemplate() {

		ResponseEntity<String> response = restTemplate.getForEntity("https://www.google.com", String.class);

		System.out.println(tomcatPortNo);

		Assert.assertTrue(HttpStatus.OK.equals(response.getStatusCode()));
		Assert.assertTrue(response.getBody().length() > 0);
	}

	@Test
	@Order(2)
	public void findCityById() {

		String url = prepareCityRestServiceRootUrl() + "city/10002";

		ResponseEntity<City> response = restTemplate.getForEntity(url, City.class);

		City city = response.getBody();

		Assert.assertTrue(HttpStatus.OK.equals(response.getStatusCode()));
		Assert.assertTrue(10003 == city.getCityId());
	}

	@Test
	@Order(3)
	public void saveCity() {

		String url = prepareCityRestServiceRootUrl() + "city";

		CityContext cityContext = new CityContext();
		cityContext.setCityName("TestUser1");
		cityContext.setCityDescription("testUser1");

		ResponseEntity<Long> response = restTemplate.postForEntity(url, cityContext, Long.class);

		Long cityNo = response.getBody();

		Assert.assertTrue(HttpStatus.OK.equals(response.getStatusCode()));
		Assert.assertNotNull(cityNo);
	}

	private String prepareCityRestServiceRootUrl() {

		return "http://localhost:" + tomcatPortNo + "/application/";
	}
}