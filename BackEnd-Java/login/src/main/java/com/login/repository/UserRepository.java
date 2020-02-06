package com.login.repository;


import com.login.annotations.RepoExecutionTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.login.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{

	User findByUserName(String userName);
	@RepoExecutionTime
	@Query(
			value = "SELECT hash FROM USER u WHERE u.user_name = ?1",
			nativeQuery = true)
	String findHashByEmail(String email);

}
