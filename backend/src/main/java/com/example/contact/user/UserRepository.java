package com.example.contact.user;

import java.lang.StackWalker.Option;
import java.util.Optional;

import org.springframework.data.repository.ListCrudRepository;

public interface UserRepository extends ListCrudRepository<AppUser, Long> {

    // AppUser findByUsername(String appUser);

    Optional<AppUser> findByAppUser(String username);

    boolean existsByEmail(String email);

    Optional<AppUser> findByEmail(String email);

}
