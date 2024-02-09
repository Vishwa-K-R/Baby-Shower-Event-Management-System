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

import com.example.sample.Model.Menu;
import com.example.sample.Service.FoodMenuService;

@RestController
//@CrossOrigin(origins = "http://localhost:8080")
@CrossOrigin("*")
public class FoodMenuController {
	
	@Autowired
	FoodMenuService service;
	
	@PostMapping("/fpost")
	public String add(@RequestBody Menu menu) {
		return service.addMenu(menu);
	}
	
	@GetMapping("/fget")
	public List<Menu> read(){
		return service.getMenu();
	}
	@DeleteMapping("/menu/{id}")
	public String delete(@PathVariable int id) {
		return service.deleteMenuById(id);
	}
	@PutMapping("/eMenu/{id}")
	public Menu Update(@RequestBody Menu menu) {
		return service.editMenuById(menu);
	}

}

