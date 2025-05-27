package com.example.contact;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.example.contact.contacts.ContactsRepository;
import com.example.contact.user.AppUser;
import com.example.contact.user.UserRepository;

@SpringBootApplication
public class ContactApplication {

	private final ContactsRepository contactsRepository;

	ContactApplication(ContactsRepository contactsRepository) {
		this.contactsRepository = contactsRepository;
	}

	@Autowired
	private UserRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(ContactApplication.class, args);

		System.out.println("hello world");
		System.out.println("hello world");
		System.out.println("hello world");
		System.out.println("hello world");

		// BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		// String encoded = encoder.encode("salasana123");
		// System.out.println(encoded);

	}
}
