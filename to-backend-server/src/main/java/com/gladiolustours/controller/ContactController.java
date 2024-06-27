package com.gladiolustours.controller;

import com.gladiolustours.model.Contact;
import com.gladiolustours.service.EmailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/contact")
public class ContactController {

    private final EmailService emailService;

    public ContactController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping(produces = "application/json", consumes = "application/json")
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact) {
        emailService.send(contact);
        return new ResponseEntity<>(contact, HttpStatus.CREATED);
    }
}
