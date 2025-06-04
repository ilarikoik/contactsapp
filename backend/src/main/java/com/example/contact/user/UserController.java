package com.example.contact.user;

import java.util.List;
import java.util.Optional;

import org.slf4j.helpers.Reporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    // @PostMapping("/create")
    // public ResponseEntity<String> createUser(@RequestBody AppUser user) {
    // boolean existing = repository.existsByEmail(user.getEmail());

    // if (existing) {
    // return ResponseEntity.badRequest().body("Email already in use");
    // }

    // AppUser u = new AppUser();
    // u.setAppUser(user.getAppUser());
    // u.setEmail(user.getEmail());
    // u.setId(user.getId());
    // u.setContacts(user.getContacts());
    // u.setPassword(passwordEncoder.encode(user.getPassword()));
    // AppUser savedUser = repository.save(u);
    // return ResponseEntity.ok().body("New user created");
    // }

    @PostMapping("/create")
    public ResponseEntity<String> createUser(@RequestBody AppUser user) {
        boolean existing = repository.existsByEmail(user.getEmail());

        if (existing) {
            return ResponseEntity.badRequest().body("Email already in use");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        repository.save(user);
        return ResponseEntity.ok().body("New user created");
    }

    @GetMapping("/appusers")
    public List<AppUser> all() {
        return repository.findAll();
    }

    @GetMapping("/appusers/{id}")
    public AppUser getByUser(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Optional<AppUser> appUser = repository.findByEmail(loginRequest.getEmail());

        // System.out.println("Raw password: " + loginRequest.getPassword());
        // System.out.println("Encoded password from DB: " +
        // appUser.get().getPassword());
        // System.out.println(
        // "Match result: " + passwordEncoder.matches(loginRequest.getPassword(),
        // appUser.get().getPassword()));

        if (!appUser.isPresent()) {
            return ResponseEntity.badRequest().body("User doesent exists");
            // return null;
        }

        boolean passwordMatches = passwordEncoder.matches(
                loginRequest.getPassword(),
                appUser.get().getPassword());

        if (!passwordMatches) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Wrong email or password");
            // return null;
        }

        return ResponseEntity.ok(appUser.get());
        // return appUser;
    }

}
