package org.culturalplaces;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@ComponentScan(basePackages = {
		"org.culturalplaces",
		"org.culturalplaces.service",
		"org.culturalplaces.service.model",
		"org.culturalplaces.controller",
		"org.culturalplaces.dao.jpa.entity",
		"org.culturalplaces.dao.jpa.repository"})

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
