package org.culturalplaces.dao.jpa.repository;

import org.culturalplaces.dao.jpa.entity.Role;
import org.springframework.data.repository.CrudRepository;


public interface RoleRepository extends CrudRepository<Role, Long> {
    Role findByRole(String role);
}