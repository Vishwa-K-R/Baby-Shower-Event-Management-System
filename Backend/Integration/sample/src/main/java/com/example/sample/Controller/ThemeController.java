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

import com.example.sample.Model.Theme;
import com.example.sample.Service.ThemeService;

@RestController
//@CrossOrigin(origins = "http://localhost:8080")
@CrossOrigin("*")
public class ThemeController {
	
	@Autowired
	ThemeService service;
	
	@PostMapping("/post")
	public String add(@RequestBody Theme theme) {
		return service.addsignup(theme);
	}
	
	@GetMapping("/get")
	public List<Theme> read(){
		return service.getsignup();
	}
	@DeleteMapping("/theme/{id}")
	public String delete(@PathVariable int id) {
		return service.deletesignupById(id);
	}
	@PutMapping("/themes/{id}")
	public String Update(@PathVariable int id,@RequestBody Theme theme) {
		return service.Updatesignup(id,theme);
	}

}
