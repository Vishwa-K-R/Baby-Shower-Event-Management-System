package com.example.sample.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.sample.Model.Add_on;
import com.example.sample.Service.AddOnService;

@RestController
@CrossOrigin("*")
public class AddOnController {
    @Autowired
	AddOnService service;
	
	@PostMapping("/addpost")
	public String addAddOn(@RequestBody Add_on addon) {
		return service.addAddon(addon);
	}
	
	@GetMapping("/addget")
	public List<Add_on> read(){
		return service.getAddon();
	}
	@DeleteMapping("/add/{id}")
	public String delete(@PathVariable int id) {
		return service.deleteAddonById(id);
	}
	@PutMapping("/eadd/{id}")
	public Add_on Update(@RequestBody Add_on addon) {
		return service.editAddonById(addon);
	}
}
