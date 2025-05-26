package com.example.contact.user;

import org.springframework.data.repository.ListCrudRepository;

public interface UserRepository extends ListCrudRepository<AppUser, Long> {
    // AppUser findByUsername(String appUser);
}
