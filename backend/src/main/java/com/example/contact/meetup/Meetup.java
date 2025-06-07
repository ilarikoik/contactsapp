package com.example.contact.meetup;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import org.hibernate.annotations.ManyToAny;

import com.example.contact.user.AppUser;
import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

@Entity
public class Meetup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private LocalDateTime date;
    private String location; // mitä tehdään
    private String todo; // mitä tehdään
    private String info; // muuta tarkempaa tietoa

    // onks linkkejä API:ssa jota vois lisätä
    // taustakuva ?
    @ManyToOne
    @JoinColumn(name = "creator_id")
    @JsonBackReference
    private AppUser creator;

    @ManyToMany
    @JoinTable(name = "meetup_participants", // yhdistämistaulun nimi
            joinColumns = @JoinColumn(name = "meetup_id"), // viittaa tähän entiteettiin (Meetup)
            inverseJoinColumns = @JoinColumn(name = "user_id") // viittaa toiseen entiteettiin (AppUser)
    )
    private List<AppUser> participants; // odottaa listaa objekteja (objektin sisään vaan id)

    public Meetup() {
    }

    public Meetup(long id, LocalDateTime date, String location, String todo, String info, AppUser creator,
            List<AppUser> participants) {
        this.id = id;
        this.date = date;
        this.location = location;
        this.todo = todo;
        this.info = info;
        this.creator = creator;
        this.participants = participants;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public String getLocation() {
        return location;
    }

    public void setWhere(String location) {
        this.location = location;
    }

    public String getTodo() {
        return todo;
    }

    public void setTodo(String todo) {
        this.todo = todo;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public AppUser getCreator() {
        return creator;
    }

    public void setCreator(AppUser creator) {
        this.creator = creator;
    }

    public List<AppUser> getParticipants() {
        return participants;
    }

    public void setParticipants(List<AppUser> participants) {
        this.participants = participants;
    }

}
