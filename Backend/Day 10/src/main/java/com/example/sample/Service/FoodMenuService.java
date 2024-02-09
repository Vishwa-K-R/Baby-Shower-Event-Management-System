package com.example.sample.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sample.Model.Menu;
import com.example.sample.Repository.FoodMenuRepo;

@Service
public class FoodMenuService {
    @Autowired
    FoodMenuRepo repository;

    public String addMenu(Menu menu) {
	repository.save(menu);
	return "added";
}

public List<Menu> getMenu(){
	return repository.findAll();
}

public String deleteMenuById(int id) {
	repository.deleteById(id);;
	return "deleted";
}

public Menu editMenuById(Menu menu) {
	repository.save(menu);
	return menu;
}
}
