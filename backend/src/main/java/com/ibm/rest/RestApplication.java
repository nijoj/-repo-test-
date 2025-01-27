package com.ibm.rest;

import jakarta.inject.Inject;
import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Application;
import jakarta.ws.rs.core.MediaType;

@ApplicationPath("/api")
public class RestApplication extends Application {
    GreetingService service;

    public RestApplication(GreetingService service) {
        this.service = service;
    }

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "hello world";
    }

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    @Path("/greeting/{id}")
    public String greeting(String id) {
        return service.greeting(id);
    }
}