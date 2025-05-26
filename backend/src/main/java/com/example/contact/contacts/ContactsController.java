package com.example.contact.contacts;

import java.util.List;
import java.util.Optional;

import javax.management.RuntimeErrorException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.example.contact.user.AppUser;
import com.example.contact.user.UserRepository;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class ContactsController {

    @Autowired
    private ContactsRepository repository;
    @Autowired
    private UserRepository userRepository;

    // lisätään olemassa olevalle käyttäjälle kontakteja
    @PostMapping("/postcontacts")
    public Contacts postContacts(@RequestBody Contacts contacts) {
        // otetaan se AppUserin id ja sen perusteella haetaan sen tiedot
        // ja asetetaan Contactiin
        Long appUserId = contacts.getAppUser().getId();
        Optional<AppUser> appUser = userRepository.findById(appUserId);
        if (appUser.isPresent()) {
            contacts.setAppUser(appUser.get());
        } else {
            throw new RuntimeException("appUser not found \n\n\n\n");
        }
        return repository.save(contacts);
    }

    // @GetMapping("/contacts/{appUserId}")
    // public List<Contacts> getContacts(@PathVariable Long appUserId) {
    // return repository.findByAppUserId(appUserId);
    // }
    // }
    // }

}
