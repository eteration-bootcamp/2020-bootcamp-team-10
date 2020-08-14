package org.culturalplaces.controller;

import org.culturalplaces.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/application")
public class LoginController {

	@Autowired
	private UserService userService;
	
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public boolean validate(String username, String password) {

		return userService.validate(username,password);
	}
}
