package com.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.login.dto.AccountDto;
import com.login.model.Account;
import com.login.model.User;
import com.login.repository.AccountRepository;

@Service
public class RegistrationServiceImpl implements RegistrationService{
	
	@Autowired
	AccountRepository accountRepository;
	
	
	public Account save(AccountDto accountDto) {
		
		Account account = new Account();
		User user = new User();
		
		account.setFirstName(accountDto.getFirstName());
		account.setLastName(accountDto.getFirstName());
		account.setEmail(accountDto.getEmail());
		
		user.setUserName(account.getEmail());
		user.setPassword(accountDto.getPassword());
		
		account.setUser(user);
		
		user.setAccount(account);
		
		accountRepository.save(account);
		
		return account;
		
	}

}
