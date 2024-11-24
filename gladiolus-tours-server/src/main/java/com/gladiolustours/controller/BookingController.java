package com.gladiolustours.controller;

import com.gladiolustours.model.Booking;
import com.gladiolustours.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/booking")
public class BookingController {

    private final EmailService emailService;

    @Autowired
    public BookingController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping(produces = "application/json", consumes = "application/json")
    public ResponseEntity<Booking> createBooking(@RequestBody Booking booking) {
        emailService.send(booking);
        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }
}
