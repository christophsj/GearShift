package com.gearshift.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.FORBIDDEN)
public class RentException extends RuntimeException{

    public RentException(String message) {
        super(message);
    }
}
