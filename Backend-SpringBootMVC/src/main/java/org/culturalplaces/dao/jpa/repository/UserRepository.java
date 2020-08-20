package org.culturalplaces.dao.jpa.repository;


import java.util.List;

import org.culturalplaces.dao.jpa.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;




public interface UserRepository extends CrudRepository<User, Long>{
    
	@Query(value = "SELECT b FROM User b")
	public List<User> getAllUserList();
	
	@Query(value = "SELECT b FROM User b WHERE b.username=:username")
	public List<User> findByUserName(@Param("username") String username);
	
	@Query(value = "SELECT b FROM User b WHERE b.password=:password")
	public List<User> findByPassword(@Param("password") String password);
	
	@Query(value = "SELECT MAX(b.userId) FROM User b")
	public Long findMaxId();
	
	@Query(value = "FROM User b WHERE b.userId = :userId")
	public User findWithUserId(@Param("userId") Long userId);
	
	@Query(value = "SELECT u2 FROM User u2 WHERE u2.username =:username AND u2.password =:password")
	public List<User> checkUser(@Param("username") String username,@Param("password") String password);
	
}

