package com.login;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



//@ComponentScan("com")
//@ComponentScan({"com.login.controller","com.login.service", "com.login.model"})
//@EnableJpaRepositories({"com.login.repository"})
@SpringBootApplication
public class LoginApplication {

	public static void main(String[] args) {
		
		SpringApplication.run(LoginApplication.class, args);


	}

}
