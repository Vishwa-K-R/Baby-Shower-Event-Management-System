package com.example.sample.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Event {
    @Id
    private int eventId;
    private String eventName;
    private String applicantName;
    private String applicantAddress;
    private String applicantMobile;
    private String applicantEmail;
    private String eventDate;
    private String eventTime;
    private int eventMenuId;
    private int addonId;
    private String eventCost;
    

}
