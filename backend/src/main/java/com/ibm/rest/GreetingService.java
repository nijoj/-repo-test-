package com.ibm.rest;

import jakarta.enterprise.context.ApplicationScoped;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;
import org.eclipse.microprofile.config.inject.ConfigProperty;

/**
 * Service that provides greeting functionality with validation and timestamp
 */
@ApplicationScoped
public class GreetingService {

    @ConfigProperty(name = "greeting.message", defaultValue = "Hello")
    private String greetingMessage;

    /**
     * Creates a personalized greeting with timestamp
     * 
     * @param name The name to greet, must not be null or empty
     * @return A greeting message with timestamp
     * @throws IllegalArgumentException if name is null or empty
     */
    public String greeting(String name) {
        // Validate input
        String validName = Optional.ofNullable(name)
                .filter(n -> !n.trim().isEmpty())
                .orElseThrow(() -> new IllegalArgumentException("Name cannot be null or empty"));
        
        // Get current timestamp
        String timestamp = LocalDateTime.now()
                .format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
        
        // Return formatted greeting
        return String.format("%s %s! Current time: %s", 
                greetingMessage, validName, timestamp);
    }
}
