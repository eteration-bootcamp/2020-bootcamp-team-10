package org.culturalplaces.service;


import java.util.List;

import org.culturalplaces.dao.jpa.entity.City;
import org.culturalplaces.dao.jpa.entity.User;
import org.culturalplaces.dao.jpa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> findByUsername(String username) {
		return userRepository.findByUsername(username);
	}
    
    public List<User> findByEmail(String email) {
		return userRepository.findByEmail(email);
	}
   
   


}
