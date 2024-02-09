package com.example.sample.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sample.Model.Theme;
import com.example.sample.Repository.ThemeRepo;

@Service
public class ThemeService {
    @Autowired
    ThemeRepo repository;

public String addsignup(Theme theme) {
	repository.save(theme);
	return "added";
}

public List<Theme> getsignup(){
	return repository.findAll();
}

public String deletesignupById(int id) {
	repository.deleteById(id);;
	return "deleted";
}

public String Updatesignup(Theme theme) {
	repository.save(theme);
	return "saved";
}

}
