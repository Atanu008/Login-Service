package com.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.login.model.User;
import com.login.repository.UserRepository;


@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserRepository repo;


	@Override
	public void save(User user) {
		
		//userRepository.save(user);
		System.out.println("Koll");
		
	}
	
	public User getUser(String email) {
		
		/*
		 * User user = new User(); user.setEmail("inkl@gmail.com");
		 * user.setFirstName("Riju"); user.setLastName("Mondal");
		 */
	
		User user = repo.findByEmail(email);
		return user;
		
		//return "Riju";
	}

	@Override
	public String getUser() {
		// TODO Auto-generated method stub
		return null;
	}
	
 
	
}
