package com.login.configurations.password;

import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Component;

import java.security.SecureRandom;

/*
This is a Bcrypt implementation of password encoding.
*/

@Component
public class BcryptPasswordEncoderImpl implements PasswordEncoder {

    public static final int LOG_ROUNDS = 12;
    @Override
    public String generateSalt() {
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[16];
        random.nextBytes(salt);
        return BCrypt.gensalt(LOG_ROUNDS, random);
    }

    @Override
    public String generateHashWithSalt(String password, String salt) {
        return  BCrypt.hashpw(password,salt);
    }

    @Override
    public boolean verifyPassword(String password, String hashedPassword) {
        return BCrypt.checkpw(password, hashedPassword);
    }

}
