package com.gladiolustours.service;

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

    @Override
    public void send(Booking book) {

    }

    @Override
    public void send(Contact book) {

    }

    private void sendEmail(String fromEmail, String subject, String bodyHtml, String bodyText) {
        AmazonSimpleEmailService client = AmazonSimpleEmailServiceClientBuilder.standard()
                .withRegion(Regions.valueOf(region))
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