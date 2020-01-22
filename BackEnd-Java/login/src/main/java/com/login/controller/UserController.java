package com.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

	@PostMapping(path ="/user", consumes = MediaType.APPLICATION_JSON_VALUE )
	public User registerUser(@RequestBody User user) {

		userService.save(user);

		return user;



	}

}
