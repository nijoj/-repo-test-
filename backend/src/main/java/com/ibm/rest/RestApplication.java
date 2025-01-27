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
    // @Inject
    // GreetingService service;

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "hello";
    }

    // @GET
    // @Produces(MediaType.TEXT_PLAIN)
    // @Path("/greeting/{name}")
    // public String greeting(String name) {
    //     return service.greeting(name);
    // }
}