package com.example.contact.meetup;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.contact.contacts.Contacts;
import com.example.contact.user.AppUser;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class MeetupController {

    @Autowired
    private MeetupRepository repository;

    // @PostMapping("/postmeetup")
    // public ResponseEntity<?> createMeetup(@RequestBody Meetup meetup) {

    // List<AppUser> list = meetup.getParticipants();
    // for (AppUser item : list) {
    // if (!repository.findById(item.getId()).isPresent()) {
    // return ResponseEntity.badRequest().body("Some participant ID not found");
    // }
    // }

    // repository.save(meetup);
    // return ResponseEntity.ok().body("meetup added (hopefully)");
    // }

    @PostMapping("/postmeetup")
    public ResponseEntity<?> createMeetup(@RequestBody Meetup meetup) {
        System.out.println("Received meetup request with participants: " + meetup.getParticipants());
        for (Contacts item : meetup.getParticipants()) {
            System.out.println("Checking participant ID: " + item.getId());
            if (!repository.findById(item.getId()).isPresent()) {
                return ResponseEntity.badRequest().body("Participant ID " + item.getId() + " not found");
            }

        }
        repository.save(meetup);
        System.out.println("Meetup saved successfully");
        return ResponseEntity.ok().body("meetup added (hopefully)");
    }

    @GetMapping("/meetups/{id}")
    public Optional<Meetup> getUserMeetups(@PathVariable Long id) {
        return repository.findById(id);
    }

    @GetMapping("/meetups")
    public List<Meetup> getMeetups() {
        return repository.findAll();
    }

    @GetMapping("/meetups/user/{creatorId}")
    public List<Meetup> getAllByCreatorId(@PathVariable Long creatorId) {
        return repository.findAllByCreatorId(creatorId);
    }

}
