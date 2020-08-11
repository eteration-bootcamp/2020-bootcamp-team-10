package org.culturalplaces.dao.jpa.repository;


import java.util.List;


import org.culturalplaces.dao.jpa.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;



public interface UserRepository extends CrudRepository<User, Long> {


    
    @Query(value = "SELECT e FROM User e WHERE e.username=:username")
	public List<User> findByUsername(@Param("username") String username);
    
    
    
    @Query(value = "SELECT e FROM User e WHERE e.email=:email")
	public List<User> findByEmail(@Param("email") String email);
}
