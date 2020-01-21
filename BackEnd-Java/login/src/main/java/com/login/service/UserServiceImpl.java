package com.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.login.model.User;
import com.login.repository.UserRepository;


@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserRepository userRepository;


	@Override
	public void save(User user) {

		userRepository.save(user);

	}

	@Override
	public User getUser(String email) {

		User user = userRepository.findByEmail(email);
		return user;

	}


}
