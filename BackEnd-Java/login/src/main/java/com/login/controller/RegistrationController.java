package com.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.login.dto.AccountDto;
import com.login.model.Account;
import com.login.service.RegistrationService;
import com.login.service.UserService;

@RestController
public class RegistrationController {

	@Autowired
	UserService userService;
	
	@Autowired
	RegistrationService registrationService;
	
	

	@GetMapping("/user/{email}")
	public Account getUser(@PathVariable String email) {

		//return userService.getUser(email);
		return null;

	}

	@PostMapping(path ="/user", consumes = MediaType.APPLICATION_JSON_VALUE )
	public Account registerUser(@RequestBody AccountDto accountDto) {

		return registrationService.save(accountDto);

	}

}
