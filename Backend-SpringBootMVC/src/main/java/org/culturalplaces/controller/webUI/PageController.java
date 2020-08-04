package org.culturalplaces.controller.webUI;

import java.util.List;


import org.culturalplaces.dao.jpa.entity.City;
import org.culturalplaces.dao.jpa.repository.CityRepository;
import org.culturalplaces.service.CityService;
import org.culturalplaces.service.model.CityContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;




@Controller
@RequestMapping("/pages")
public class PageController {

	@Autowired
	private CityService cityService;
	
	
	
	@RequestMapping(value = "/city/list", method = RequestMethod.GET)
	public String getCity(Model model) {
		
		List<City> city = cityService.getAllCityList();
		model.addAttribute("city", city);
		
		return "city_list";
	}
	
	
	@RequestMapping(value = "/city", method = RequestMethod.GET)
	public String getCitySavePage(CityContext cityContext) {
		
		return "city_save";
	}
	
	
	@RequestMapping(value = "/city", method = RequestMethod.POST)
    public String save(CityContext cityContext, BindingResult result, Model model) {
  
		
		cityService.save(cityContext);
        
		model.addAttribute("city", cityService.getAllCityList());
        
        return "city_list";
    }
	
	@GetMapping("/search")
	public String delete(@RequestParam("cityName") String cityName, Model model) {

		
		List<City> city = cityService.searchBy(cityName);

		
		model.addAttribute("city", city);

		
		return "city_list";

	}

		

	}
