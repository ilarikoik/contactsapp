package com.example.contact.meetup;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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

    @PostMapping("/postmeetup")
    public ResponseEntity<?> createMeetup(@RequestBody Meetup meetup) {
        repository.save(meetup);
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
