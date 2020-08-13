package org.culturalplaces.dao.jpa.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "role")
public class Role {
  
	@Id
	@Column(name = "role_id")
	private String roleId;
	
	
	@Column(name = "role_type")
	private String role;
	
	@ManyToMany(mappedBy = "role", fetch = FetchType.LAZY)
	private List<User> user;	
    

    public String getRoleId() {
		return roleId;
	}

	public String getRole() {
		return role;
	}

	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public List<User> getUser() {
        return user;
    }

    public void setUser(List<User> user) {
        this.user = user;
    }
}