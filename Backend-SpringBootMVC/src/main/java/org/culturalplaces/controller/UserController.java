package org.culturalplaces.controller;

import java.util.List;

import org.culturalplaces.dao.jpa.entity.User;
import org.culturalplaces.service.UserService;
import org.culturalplaces.service.model.UserContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

@RequestMapping("/application")
public class UserController {
	
	@Autowired
	private UserService userService;

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public Long register(@RequestBody UserContext userContext) {

		return userService.register(userContext);
	}
	
	@RequestMapping(value = "/register/{id}", method = RequestMethod.GET)
	public User findByUserId(@PathVariable("id") Long id) {

		return userService.findByUserId(id);
	}

	@RequestMapping(value = "/register/list", method = RequestMethod.GET)
	public List<User> getAllUserList() {

		return userService.getAllUserList();
	}

	@RequestMapping(value = "/register/search", method = RequestMethod.POST)
	public List<User> searchUser(@RequestBody String userName) {

		return userService.findByUserName(userName);
	}

}