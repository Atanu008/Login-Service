package com.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.login.model.Account;

public interface AccountRepository extends JpaRepository<Account, String>{

}
