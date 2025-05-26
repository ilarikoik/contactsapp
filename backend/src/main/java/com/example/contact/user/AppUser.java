package com.example.contact.user;

import java.util.List;

import com.example.contact.contacts.Contacts;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String appUser;
    private String email;
    private String password;

    @OneToMany(mappedBy = "appUser", cascade = CascadeType.ALL) // mikä luokka toisessa entiteetissä on määritelty
    @JsonManagedReference
    private List<Contacts> contacts;

    public AppUser() {
    }

    public AppUser(Long id, String appUser, String email, String password, List<Contacts> contacts) {
        this.id = id;
        this.appUser = appUser;
        this.email = email;
        this.password = password;
        this.contacts = contacts;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAppUser() {
        return appUser;
    }

    public void setAppUser(String appUser) {
        this.appUser = appUser;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Contacts> getContacts() {
        return contacts;
    }

    public void setContacts(List<Contacts> contacts) {
        this.contacts = contacts;
    }

    @Override
    public String toString() {
        return "AppUser [id=" + id + ", appUser=" + appUser + ", email=" + email + ", password=" + password
                + ", contacts=" + contacts + "]";
    }

}
