package org.culturalplaces.controller;

import org.culturalplaces.dao.jpa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.culturalplaces.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.culturalplaces.dao.jpa.entity.User;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/application")
public class LoginController {

	

	@Autowired
	private UserRepository userRepository;


	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public boolean login(@RequestBody LoginFrom loginForm) {

		if(userRepository.checkUser(loginForm.getUsername(),loginForm.getPassword()).size() == 1) {
			return true;
		}else {
			System.out.println("Yanlış kullanıcı adı veya şifre");
			return false;
		}
	}

}
