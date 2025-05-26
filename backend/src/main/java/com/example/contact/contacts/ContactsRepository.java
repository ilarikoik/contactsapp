package com.example.contact.contacts;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.ListCrudRepository;

public interface ContactsRepository extends ListCrudRepository<Contacts, Long> {

    List<Contacts> findByAppUserId(Long appUserId);

}
