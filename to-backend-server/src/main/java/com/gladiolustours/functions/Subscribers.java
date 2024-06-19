package com.gladiolustours.functions;

import com.gladiolustours.model.Subscriber;
import com.gladiolustours.service.SubscriberService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.function.Consumer;
import java.util.function.Supplier;

@Configuration
public class Subscribers {

    private final SubscriberService subscriberService;

    public Subscribers(SubscriberService subscribers) {
        this.subscriberService = subscribers;
    }

    @Bean
    public Consumer<String> create() {
        return subscriberService::create;
    }

    @Bean
    public Supplier<List<Subscriber>> findAll() {
        return subscriberService::findAll;
    }
}
