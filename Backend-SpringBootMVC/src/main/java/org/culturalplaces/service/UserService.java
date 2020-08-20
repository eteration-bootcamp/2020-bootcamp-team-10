package org.culturalplaces.service;

import java.util.List;

import org.culturalplaces.dao.jpa.entity.User;
import org.culturalplaces.dao.jpa.repository.UserRepository;
import org.culturalplaces.service.model.UserContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public User findByUserId(Long userId) {

		return userRepository.findWithUserId(userId);
	}
	

	public List<User> getAllUserList() {

		return userRepository.getAllUserList();
	}
	
	@Transactional
	public Long register(UserContext userContext) {

		Long maxId = userRepository.findMaxId() + 1;

		User user = new User();
		user.setUserId(maxId);
		user.setFirstName(userContext.getFirstName());
		user.setLastName(userContext.getLastName());
		user.setUsername(userContext.getUsername());
		user.setPassword(userContext.getPassword());
		

		user = userRepository.save(user);

		return user.getUserId();
	}
	

	public List<User> findByUserName(String username) {
		return userRepository.findByUserName(username);
	}

	public boolean login(String username, String password) {

		if(userRepository.checkUser(username, password) != null) {
			return true;
		}else {
			System.out.println("Yanlış kullanıcı adı veya şifre");

			return false;
		}
	}

}
