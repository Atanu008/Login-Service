package com.login.service;

import com.login.configurations.password.BcryptPasswordEncoderImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.login.model.Account;
import com.login.model.User;
import com.login.repository.UserRepository;

import java.util.logging.Logger;


@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserRepository userRepository;

	@Autowired
	BcryptPasswordEncoderImpl bcryptPasswordEncoder;

	private final static Logger LOGGER = Logger.getLogger(UserServiceImpl.class.getName());

	@Override
	public void save(User user) {

		userRepository.save(user);

	}

	@Override
	public User getUser(String userName) {
		LOGGER.info("Getting User Information for ["+userName+"]");
		User user = userRepository.findByUserName(userName);
		return user;

	}

	@Override
	public boolean authenticate(String email, String password) {
		LOGGER.info("Authenticating User ["+email+"]");
		String hash = getHashForUser(email);
		return bcryptPasswordEncoder.verifyPassword(password,hash);
	}

	private String getHashForUser(String email){
		return userRepository.findHashByEmail(email);
	}


}
