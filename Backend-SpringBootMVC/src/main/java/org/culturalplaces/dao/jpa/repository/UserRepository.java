package org.culturalplaces.dao.jpa.repository;





import org.culturalplaces.dao.jpa.entity.User;
import org.springframework.data.repository.CrudRepository;




public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);

    User findByEmail(String email);
}