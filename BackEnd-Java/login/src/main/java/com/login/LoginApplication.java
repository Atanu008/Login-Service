package com.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


import com.login.service.UserService;

//@ComponentScan("com")
//@ComponentScan({"com.login.controller","com.login.service", "com.login.model"})
//@EnableJpaRepositories({"com.login.repository"})
@SpringBootApplication
public class LoginApplication {
	

	public static void main(String[] args) {
		SpringApplication.run(LoginApplication.class, args);
		System.out.println("HI");
		
		
	}

}
