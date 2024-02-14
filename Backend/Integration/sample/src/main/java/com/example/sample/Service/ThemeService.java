package com.example.sample.Service;

import java.util.List;
import java.util.Optional;

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

    public List<Theme> getsignup() {
        return repository.findAll();
    }

    public String deletesignupById(int id) {
        repository.deleteById(id);
        return "deleted";
    }

    public String Updatesignup(int id, Theme theme) {
        Optional<Theme> existingThemeOptional = repository.findById(id);
        if (existingThemeOptional.isPresent()) {
            Theme existingTheme = existingThemeOptional.get();
            existingTheme.setThemeName(theme.getThemeName());
            existingTheme.setThemeURL(theme.getThemeURL());
            existingTheme.setThemeCost(theme.getThemeCost());
            repository.save(existingTheme); // Save the updated theme
            return "updated";
        }
        return "not found";
    }
}
