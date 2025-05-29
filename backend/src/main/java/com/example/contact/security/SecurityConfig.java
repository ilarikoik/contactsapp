package com.example.contact.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
        // https://spring.io/guides/gs/securing-web
        // https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/index.html#servlet-authentication-unpwd
        private final MyUserDetailService myUserDetailsService;

        public SecurityConfig(MyUserDetailService myUserDetailsService) {
                this.myUserDetailsService = myUserDetailsService;
        }

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
                http
                                // CSRF (Cross-Site Request Forgery) suojaa haitallisilta pyyntöyrityksiltä
                                .csrf(csrf -> csrf
                                                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()))
                                // .csrf(csrf -> csrf.disable())
                                .authorizeHttpRequests((requests) -> requests
                                                // pääsy seuraaville sivuille ilman autentikaatiota
                                                .requestMatchers("/", "/login", "/csrf-token", "/create").permitAll()
                                                .anyRequest().authenticated())
                                .formLogin((form) -> form
                                                .loginPage("/login")
                                                .defaultSuccessUrl("/home", true)
                                                .permitAll())
                                .logout((logout) -> logout.permitAll());
                return http.build();
        }

        // userDetailsService hakee tietokannasta käyttäjän tiedot (esim. käyttäjänimen
        // perusteella)
        // passwordEncoder vertaa käyttäjän antamaa salasanaa tietokannassa olevaan
        // hashattuun salasanaan
        // build luo ja palauttaa AuthenticationManager-instanssin, joka hoitaa
        // kirjautumislogiikan:
        // se hakee käyttäjän tiedot ja sallii kirjautumisen, jos käyttäjänimi ja
        // salasana täsmäävät
        @Bean
        public AuthenticationManager authManager(HttpSecurity http) throws Exception {
                return http.getSharedObject(AuthenticationManagerBuilder.class)
                                .userDetailsService(
                                                myUserDetailsService)
                                .passwordEncoder(passwordEncoder())
                                .and()
                                .build();
        }

        // PasswordEncoder vertaa käyttäjän antamaa salasanaa
        // tietokannan hashattuun salasanaan.
        // Jos täsmää, tunnistus onnistuu ja käyttäjän tiedot palautetaan.
        @Bean
        public PasswordEncoder passwordEncoder() {
                return new BCryptPasswordEncoder();
        }

}
