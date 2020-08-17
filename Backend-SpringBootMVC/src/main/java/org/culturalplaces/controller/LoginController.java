package org.culturalplaces.controller;

import org.culturalplaces.dao.jpa.repository.UserRepository;
import org.culturalplaces.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/application")
public class LoginController {

	

	@Autowired
	private UserRepository userRepository;


	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public boolean login(String username, String password) {

		if (userRepository.findByUserName(username) != null && userRepository.findByPassword(password) != null) {
			return true;
		} else {
			System.out.println("Kullanıcı veya şifre geçersiz");
			return false;
		}
	}
}
