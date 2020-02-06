package com.login.configurations;

import com.login.controller.v1.RegistrationController;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.logging.Logger;

@Component
@Order(1)
public class LoginFilter extends OncePerRequestFilter {

    private final static Logger LOGGER = Logger.getLogger(LoginFilter.class.getName());

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        LOGGER.info("Custom Login Filter successfully passed");
        filterChain.doFilter(request,response);
    }
}
