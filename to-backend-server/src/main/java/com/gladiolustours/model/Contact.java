package com.gladiolustours.model;

public class Contact {
    private String firstName;
    private String lastName;
    private String subject;
    private String email;
    private String phoneNumber;
    private String message;

    public Contact(String firstName, String lastName, String subject, String email, String phoneNumber, String message) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.subject = subject;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.message = message;
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

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
