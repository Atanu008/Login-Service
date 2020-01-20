package com.login.service;

import org.springframework.stereotype.Service;

import com.login.model.User;

@Service
public interface UserService {
	
	void save(User user);
	
	String getUser();

	User getUser(String email);

}