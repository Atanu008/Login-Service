package com.login.controller.v1;


import com.login.dto.UserDto;
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
import java.util.logging.Logger;

@RestController
public class RegistrationController {

	@Autowired
	UserService userService;
	
	@Autowired
	RegistrationService registrationService;

	private final static Logger LOGGER = Logger.getLogger(RegistrationController.class.getName());

	@GetMapping("/v1/user/{email}")
	public Account getUser(@PathVariable String email) {
		return registrationService.getAccountInfo(email);
	}

	@PostMapping(path ="/v1/user", consumes = MediaType.APPLICATION_JSON_VALUE )
	public Account registerUser(@RequestBody AccountDto accountDto) {
		LOGGER.info("Registration Controller [POST]: Register New User started");
		return registrationService.save(accountDto);
	}

	@PostMapping(path = "/v1/authenticate",consumes = MediaType.APPLICATION_JSON_VALUE)
	public boolean authenticateUser(@RequestBody UserDto userDto){
		LOGGER.info("Registration Controller [POST]: Authentication of User initiated");
		return userService.authenticate(userDto.getEmail(),userDto.getPassword());

	}










}
