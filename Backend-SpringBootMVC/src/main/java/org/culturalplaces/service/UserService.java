package org.culturalplaces.service;

import java.util.List;

import org.culturalplaces.dao.jpa.entity.User;
import org.culturalplaces.dao.jpa.repository.UserRepository;
import org.culturalplaces.service.model.UserContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public Long register(UserContext userContext) {

		Long maxId = userRepository.findMaxId() + 1;

		User user = new User();
		user.setUserId(maxId);
		user.setFirstName(userContext.getFirstName());
		user.setLastName(userContext.getLastName());
		user.setPassword(userContext.getPassword());
		user.setUsername(userContext.getPassword());

		user = userRepository.save(user);

		return user.getUserId();
	}

	public List<User> findByUserName(String username) {
		return userRepository.findByUserName(username);
	}

	public boolean validate(String username, String password) {
		
		UserContext userContext = new UserContext();
		
		username = userContext.getUsername();
		String password1 = userContext.getPassword();

		if ( username != null && password1.equals(password)) {
			return true;
		} else {
			System.out.println("Geçersiz kullanıcı veya şifre");

			return false;
		}

	}

}
