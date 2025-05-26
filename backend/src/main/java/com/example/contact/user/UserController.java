package com.example.contact.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class UserController {

    @Autowired
    private UserRepository repository;

    @PostMapping("/postappuser")
    public ResponseEntity<AppUser> createUser(@RequestBody AppUser user) {
        AppUser savedUser = repository.save(user);
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
