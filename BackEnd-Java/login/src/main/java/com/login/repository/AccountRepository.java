package com.login.repository;

import com.login.dto.AccountDto;
import org.springframework.data.jpa.repository.JpaRepository;

import com.login.model.Account;

public interface AccountRepository extends JpaRepository<Account, String>{

    Account save(AccountDto account);
    Account getAccountByEmail(String email);

}
