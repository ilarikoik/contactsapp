package com.example.contact.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
        // MÄÄRITTÄÄ MISTÄ IP-OSOITTEESTA SAA TULLA PYYNTÖJÄ
        @Bean
        public WebMvcConfigurer corsConfigurer() {
                return new WebMvcConfigurer() {
                        @Override
                        public void addCorsMappings(CorsRegistry registry) {
                                registry.addMapping("/csrf-token")
                                                .allowedOrigins("http://192.168.10.230:19000")
                                                .allowedMethods("GET")
                                                .allowCredentials(true);
                                registry.addMapping("/contacts/id")
                                                .allowedOrigins("http://192.168.10.230:19000")
                                                .allowedMethods("GET")
                                                .allowCredentials(true);
                                registry.addMapping("/meetups/{id}")
                                                .allowedOrigins("http://192.168.10.230:19000")
                                                .allowedMethods("GET")
                                                .allowCredentials(true);
                                registry.addMapping("/meetups/user/{userId}")
                                                .allowedOrigins("http://192.168.10.230:19000")
                                                .allowedMethods("GET")
                                                .allowCredentials(true);
                                registry.addMapping("/meetups/contacts/user/{userId}")
                                                .allowedOrigins("http://192.168.10.230:19000")
                                                .allowedMethods("GET")
                                                .allowCredentials(true);
                                registry.addMapping("/create")
                                                .allowedOrigins("http://192.168.10.230:19000")
                                                .allowedMethods("POST")
                                                .allowCredentials(true);
                                registry.addMapping("/postcontact")
                                                .allowedOrigins("http://192.168.10.230:19000")
                                                .allowedMethods("POST")
                                                .allowCredentials(true);
                                registry.addMapping("/postmeetup")
                                                .allowedOrigins("http://192.168.10.230:19000")
                                                .allowedMethods("POST")
                                                .allowCredentials(true);
                        }
                };
        }
}
