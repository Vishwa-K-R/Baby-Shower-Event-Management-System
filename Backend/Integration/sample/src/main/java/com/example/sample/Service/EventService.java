package com.example.sample.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sample.Model.Event;
import com.example.sample.Repository.EventRepo;
@Service
public class EventService {
    @Autowired
    EventRepo repository;

    public String bookEvents(Event event) {
	repository.save(event);
	return "added";
}

public List<Event> getEvent(){
	return repository.findAll();
}

public String deleteEventById(int id) {
	repository.deleteById(id);;
	return "deleted";
}

public Event editEventById(Event event) {
	repository.save(event);
	return event;
}

}
