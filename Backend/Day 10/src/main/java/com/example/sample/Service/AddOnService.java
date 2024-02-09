package com.example.sample.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sample.Model.Add_on;
import com.example.sample.Repository.AddOnRepo;

@Service
public class AddOnService {
    @Autowired
    AddOnRepo repository;

    public String addAddon(Add_on addo) {
	repository.save(addo);
	return "added";
}

public List<Add_on> getAddon(){
	return repository.findAll();
}

public String deleteAddonById(int id) {
	repository.deleteById(id);;
	return "deleted";
}

public Add_on editAddonById(Add_on addon) {
	repository.save(addon);
	return addon;
}
}
