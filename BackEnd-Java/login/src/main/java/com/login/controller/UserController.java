package com.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.login.model.User;
import com.login.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	@GetMapping("/user/{email}")
	public User getUser(@PathVariable String email) {
		
		return userService.getUser(email);
		
	}
	
	@GetMapping("/id")
	public String getName() {
		
		return "Atanu";
	}
	
	@PostMapping
	public User registerUser(User user) {
		
		userService.save(user);
		//userService.
		return user;
		
		
		
	}

}
