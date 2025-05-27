package com.example.contact.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class UserController {

    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/create")
    public ResponseEntity<AppUser> createUser(@RequestBody AppUser user) {
        AppUser u = new AppUser();
        u.setAppUser(user.getAppUser());
        u.setEmail(user.getEmail());
        u.setId(user.getId());
        u.setContacts(user.getContacts());
        u.setPassword(passwordEncoder.encode(user.getPassword())); // crypt
        AppUser savedUser = repository.save(u);
        return ResponseEntity.ok(savedUser);
    }

    @GetMapping("/appusers")
    public List<AppUser> all() {
        return repository.findAll();
    }

    @GetMapping("/appusers/{id}")
    public AppUser getByUser(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }

}
