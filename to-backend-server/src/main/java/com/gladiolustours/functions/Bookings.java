package com.gladiolustours.functions;

import com.gladiolustours.model.Booking;
import com.gladiolustours.service.EmailService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.function.Consumer;

@Configuration
public class Bookings {

    private final EmailService emailService;

    public Bookings(EmailService emailService) {
        this.emailService = emailService;
    }

    @Bean
    public Consumer<Booking> createBooking() {
        return emailService::send;
    }
}
