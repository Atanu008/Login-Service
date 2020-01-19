package com.login.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.login.repository.UserRepository;
import com.login.service.UserService;

//@ComponentScan("com.login")
//@ComponentScan({"com.login.controller","com.login.service", "com.login.model"})
//@EnableJpaRepositories({"com.login.repository"})
@SpringBootApplication(scanBasePackages = {"com"})
public class LoginApplication {
	
	
	@Autowired
	UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(LoginApplication.class, args);
		System.out.println("HI");
		
		
	}

}
