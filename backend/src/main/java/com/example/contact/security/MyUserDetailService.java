package com.example.contact.security;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.contact.user.AppUser;
import com.example.contact.user.UserRepository;

// Tämä luokka on annotoitu @Service, eli se on Springin hallinnoima palveluluokka.
// Se toteuttaa UserDetailsService-rajapinnan,jota Spring Security käyttää etsiessään käyttäjän tietoja kirjautumista varten.
@Service
public class MyUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    // Tämä metodii kutsutaa automaattisesti kirjautumisen yhteydessä
    // AuthenticationManager käyttää ettiäksee käyttäjän tietokannasta
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser user = userRepository.findByAppUser(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // Palauttaa Spring Securityn UserDetails-olion, jos käyttäjä löytyy
        // Käytetään autentikointiin: sisältää käyttäjätunnuksen, salatun salasanan ja
        // roolit
        return new User(
                user.getAppUser(),
                user.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority("USER")));
    }

}
