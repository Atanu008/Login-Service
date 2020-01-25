package com.login.service;

import org.springframework.stereotype.Service;

import com.login.dto.AccountDto;
import com.login.model.Account;

@Service
public interface RegistrationService {
	
	Account save(AccountDto accountDto);

}
