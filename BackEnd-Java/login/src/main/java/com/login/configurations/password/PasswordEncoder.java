package com.login.configurations.password;

public interface PasswordEncoder {
    String generateSalt();
    String generateHashWithSalt(String password,String salt);
    boolean verifyPassword(String password, String hashedPassword);
}
