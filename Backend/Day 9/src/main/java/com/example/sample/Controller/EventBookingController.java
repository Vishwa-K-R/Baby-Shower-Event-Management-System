package com.example.sample.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.sample.Model.Event;
import com.example.sample.Service.EventService;

@RestController
public class EventBookingController {
    @Autowired
	EventService service;
	
	@PostMapping("/bookevent")
	public String bookEvent(@RequestBody Event event) {
		return service.bookEvents(event);
	}
	
	@GetMapping("/getevent")
	public List<Event> viewEvent(){
		return service.getEvent();
	}
	@DeleteMapping("/deleteEvent/{id}")
	public String delete(@PathVariable int id) {
		return service.deleteEventById(id);
	}
	@PutMapping("/editEvent/{id}")
	public Event Update(@RequestBody Event event) {
		return service.editEventById(event);
	}
}
