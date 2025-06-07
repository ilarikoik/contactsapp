package com.example.contact.meetup;

import java.util.List;

import org.springframework.data.repository.ListCrudRepository;

public interface MeetupRepository extends ListCrudRepository<Meetup, Long> {

    // funktion nimi pitää vastaa entiteetissä olevaa viiteavaimen määrittetlyä? ( _
    // ei tarvitse laittaa) määritelty näin
    // @ManyToOne
    // @JoinColumn(name = "creator_id")
    List<Meetup> findAllByCreatorId(Long creatorId);

}
