package com.example.contact.security;

import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TokenController {

    // tokeni pitää olla mukana ku tehää CRUD pyyntöjä
    // @CrossOrigin(origins = "http://192.168.10.230:19000")
    @GetMapping("/csrf-token")
    public CsrfToken csrf(CsrfToken token) {
        return token;
    }

}
