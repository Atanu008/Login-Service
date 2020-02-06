package com.login.configurations;

import springfox.documentation.service.Contact;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import static springfox.documentation.builders.PathSelectors.regex;

@Configuration
@EnableSwagger2
public class SwaggerConfiguration
{
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.login.controller.v1"))
                .paths(regex("/.*"))
                .build();
    }
    private ApiInfo metaData() {
        ApiInfo apiInfo = new ApiInfo(
                "Registration / Login Service [Springboot]",
                "Registration / Login Service written in Java",
                "1.0",
                "Terms of service",
                "Atanu and Bhaskar",
                "License",
                "https://www.apache.org/licenses/LICENSE-2.0");
        return apiInfo;
    }


}
