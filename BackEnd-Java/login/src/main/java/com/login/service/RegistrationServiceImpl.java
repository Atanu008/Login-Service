package com.login.service;

import com.login.configurations.password.BcryptPasswordEncoderImpl;
import com.login.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.login.dto.AccountDto;
import com.login.model.Account;
import com.login.model.User;
import com.login.repository.AccountRepository;

import java.util.Calendar;
import java.util.Date;

@Service
public class RegistrationServiceImpl implements RegistrationService{
	
	@Autowired
	AccountRepository accountRepository;

	@Autowired
	BcryptPasswordEncoderImpl passwordEncoder;
	
	public Account save(AccountDto accountDto) {
		
		Account account = new Account();
		User user = new User();
		
		account.setFirstName(accountDto.getFirstName());
		account.setLastName(accountDto.getFirstName());
		account.setEmail(accountDto.getEmail());
		account.setDateCreated(Utils.getCurrentDateInUTC());
		account.setDateUpdated(Utils.getCurrentDateInUTC());
		
		user.setUserName(account.getEmail());
		String salt = passwordEncoder.generateSalt();
		user.setPasswordSalt(salt);
		user.setPasswordHash(passwordEncoder.generateHashWithSalt(accountDto.getPassword(),salt));
		user.setDateCreated(Utils.getCurrentDateInUTC());
		user.setDateUpdated(Utils.getCurrentDateInUTC());
		account.setUser(user);
		user.setAccount(account);
		accountRepository.save(account);
		return account;
		
	}



	@Override
	public Account getAccountInfo(String email) {
		return accountRepository.getAccountByEmail(email);
	}

}
