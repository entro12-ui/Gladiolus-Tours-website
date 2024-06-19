package com.gladiolustours.functions;

import com.gladiolustours.model.Contact;
import com.gladiolustours.service.EmailService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.function.Consumer;

@Configuration
public class Contacts {

    private final EmailService emailService;

    public Contacts(EmailService emailService) {
        this.emailService = emailService;
    }

    @Bean
    public Consumer<Contact> createContact() {
        return emailService::send;
    }
}
