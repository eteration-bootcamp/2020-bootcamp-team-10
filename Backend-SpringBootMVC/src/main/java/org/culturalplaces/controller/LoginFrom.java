package org.culturalplaces.controller;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
public class LoginFrom {
	private String username;
	private String password;
	
    public String getUsername() {
		return username;
	}
    
	public String getPassword() {
		return password;
	}
}
