package com.example.contact.contacts;

import java.util.Optional;

import org.hibernate.annotations.ManyToAny;

import com.example.contact.user.AppUser;
import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Contacts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String phone;
    private String firstName;
    private String lastName;

    @ManyToOne
    @JoinColumn(name = "app_user_id") // name on siis mikä tulee foreing keylle
    @JsonBackReference
    private AppUser appUser;

    public Contacts() {
    }

    public Contacts(Long id, String email, String phone, String firstName, String lastName, AppUser appUser) {
        this.id = id;
        this.email = email;
        this.phone = phone;
        this.firstName = firstName;
        this.lastName = lastName;
        this.appUser = appUser;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser2) {
        this.appUser = appUser2;
    }

    @Override
    public String toString() {
        return "Contacts [id=" + id + ", email=" + email + ", phone=" + phone + ", firstName=" + firstName
                + ", lastName=" + lastName + ", appUser=" + appUser + "]";
    }

}
