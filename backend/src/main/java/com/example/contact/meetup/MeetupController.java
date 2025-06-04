package com.example.contact.meetup;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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

}
