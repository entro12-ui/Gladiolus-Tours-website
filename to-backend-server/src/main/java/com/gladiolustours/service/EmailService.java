package com.gladiolustours.service;

import com.gladiolustours.model.Booking;
import com.gladiolustours.model.Contact;

public interface EmailService {
    void send(Booking book);
    void send(Contact book);
}
