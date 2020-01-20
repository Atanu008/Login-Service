package com.login.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DummyController {
	
	@GetMapping("/country")
	public String getCountry() {
		
		return "India";
	}

}
