package com.ibm.rest;

import jakarta.inject.Inject;
import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Application;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;
import java.time.LocalDateTime;

/**
 * REST API application that provides greeting endpoints
 */
@ApplicationPath("/api")
@Path("/")
public class RestApplication extends Application {
    private final GreetingService service;

    public RestApplication(GreetingService service) {
        this.service = service;
    }

    /**
     * Simple hello world endpoint
     * @return A hello world message
     */
    @GET
    @Path("/hello")
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "hello world";
    }

    /**
     * Personalized greeting endpoint
     * @param name The name to greet
     * @return A personalized greeting with timestamp
     */
    @GET
    @Path("/greeting/{name}")
    @Produces(MediaType.TEXT_PLAIN)
    public String greeting(@PathParam("name") String name) {
        return service.greeting(name);
    }

    /**
     * JSON greeting endpoint
     * @param name The name to greet
     * @return A JSON response with greeting and timestamp
     */
    @GET
    @Path("/greeting-json/{name}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response greetingJson(@PathParam("name") String name) {
        try {
            String greeting = service.greeting(name);
            GreetingResponse response = new GreetingResponse(greeting, LocalDateTime.now().toString(), true);
            return Response.ok(response).build();
        } catch (IllegalArgumentException e) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity(new ErrorResponse("Invalid input", e.getMessage()))
                    .build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(new ErrorResponse("Server error", "An unexpected error occurred"))
                    .build();
        }
    }

    /**
     * Response class for greeting
     */
    public static class GreetingResponse {
        private String message;
        private String timestamp;
        private boolean success;

        public GreetingResponse() {
        }

        public GreetingResponse(String message, String timestamp, boolean success) {
            this.message = message;
            this.timestamp = timestamp;
            this.success = success;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        public String getTimestamp() {
            return timestamp;
        }

        public void setTimestamp(String timestamp) {
            this.timestamp = timestamp;
        }

        public boolean isSuccess() {
            return success;
        }

        public void setSuccess(boolean success) {
            this.success = success;
        }
    }

    /**
     * Error response class
     */
    public static class ErrorResponse {
        private String error;
        private String message;
        private String timestamp;

        public ErrorResponse() {
        }

        public ErrorResponse(String error, String message) {
            this.error = error;
            this.message = message;
            this.timestamp = LocalDateTime.now().toString();
        }

        public String getError() {
            return error;
        }

        public void setError(String error) {
            this.error = error;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        public String getTimestamp() {
            return timestamp;
        }

        public void setTimestamp(String timestamp) {
            this.timestamp = timestamp;
        }
    }

    /**
     * Global exception mapper for handling uncaught exceptions
     */
    @Provider
    public static class GeneralExceptionMapper implements ExceptionMapper<Exception> {
        @Override
        public Response toResponse(Exception exception) {
            ErrorResponse errorResponse = new ErrorResponse(
                    "Server Error",
                    "An unexpected error occurred"
            );
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(errorResponse)
                    .type(MediaType.APPLICATION_JSON)
                    .build();
        }
    }
}

