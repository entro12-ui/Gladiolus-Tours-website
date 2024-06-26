package com.gladiolustours.service;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.simpleemail.AmazonSimpleEmailService;
import com.amazonaws.services.simpleemail.AmazonSimpleEmailServiceClientBuilder;
import com.amazonaws.services.simpleemail.model.*;
import com.gladiolustours.model.Booking;
import com.gladiolustours.model.Contact;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {
    @Value("${aws.region}")
    private String region;

    @Value("${aws.ses.destinationEmail}")
    private String destinationEmail;

    @Value("${aws.ses.configSet}")
    private String configSet;

    private final String accessKeyId = System.getenv("AWS_ACCESS_KEY_ID_GLADIOLUS_TOURS");
    private final String secretAccessKey = System.getenv("AWS_SECRET_ACCESS_KEY_GLADIOLUS_TOURS");

    // Create credentials object
    BasicAWSCredentials awsCreds = new BasicAWSCredentials(accessKeyId, secretAccessKey);

    @Override
    public void send(Booking book) {
        String subject = book.getSubject() != null ? book.getSubject() : "Booking Form: Booking from Gladiolus Tours Website";

        String bodyHtml = "<h1>Gladiolus Tours Websites Booking Form Submission</h1>"
                + "<p>Full Name: " + book.getFullName() + "</p>"
                + "<p>Email: " + book.getEmail() + "</p>"
                + "<p>Date From " + book.getDateFrom() + " To " + book.getDateTo() + "</p>"
                + "<p>Message: " + book.getMoreInfo() + "</p>"
                + "<p>Adults: " + book.getAdults() + "</p>"
                + "<p>Children: " + book.getChild() + "</p>"
                + "<p>Adventure Code: " + book.getCode() + "</p>";

        String bodyText = "Name: " + book.getFullName() + "\n Email: " + book.getEmail()
                + "\n Message: " + book.getMoreInfo() + "\n Adventure Code: " + book.getCode();

        sendEmail(book.getEmail(), subject, bodyHtml, bodyText);
    }

    @Override
    public void send(Contact book) {
        String subject = book.getSubject() != null ? book.getSubject() : "Contact Form: Message from Gladiolus Tours Website";

        String bodyHtml = "<h1>Gladiolus Tours Websites Contact Form</h1>"
                + "<p>First Name: " + book.getFirstName() + "</p>"
                + "<p>Last Name: " + book.getLastName() + "</p>"
                + "<p>Email: " + book.getEmail() + "</p>"
                + "<p>Phone Number: " + book.getPhoneNumber() + "</p>"
                + "<p>Message: " + book.getMessage() + "</p>";

        String bodyText = "First Name: " + book.getFirstName() + "Last Name: " + book.getLastName() + "\n Email: " + book.getEmail()
                + "\n Phone Number: " + book.getPhoneNumber() + "\n Message: " + book.getMessage();

        sendEmail(book.getEmail(), subject, bodyHtml, bodyText);
    }

    private void sendEmail(String fromEmail, String subject, String bodyHtml, String bodyText) {
        AmazonSimpleEmailService client = AmazonSimpleEmailServiceClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(awsCreds))
                .withRegion(Regions.AF_SOUTH_1)
                .build();

        SendEmailRequest request = new SendEmailRequest()
                .withDestination(new Destination().withToAddresses(destinationEmail))
                .withMessage(new Message()
                        .withSubject(new Content().withCharset("UTF-8").withData(subject))
                        .withBody(new Body()
                                .withHtml(new Content().withCharset("UTF-8").withData(bodyHtml))
                                .withText(new Content().withCharset("UTF-8").withData(bodyText))
                        )
                )
                .withSource(fromEmail);

        if (configSet != null && !configSet.isEmpty()) {
            request.withConfigurationSetName(configSet);
        }

        client.sendEmail(request);
    }
}