package com.example.sample.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Theme {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String ThemeName;
    private String ThemeURL;
    private int ThemeCost;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getThemeName() {
        return ThemeName;
    }
    public void setThemeName(String themeName) {
        ThemeName = themeName;
    }
    public String getThemeURL() {
        return ThemeURL;
    }
    public void setThemeURL(String themeURL) {
        ThemeURL = themeURL;
    }
    public int getThemeCost() {
        return ThemeCost;
    }
    public void setThemeCost(int themeCost) {
        ThemeCost = themeCost;
    }
    @Override
    public String toString() {
        return "Signin [id=" + id + ", ThemeName=" + ThemeName + ", ThemeURL=" + ThemeURL + ", ThemeCost=" + ThemeCost
                + "]";
    }
    public Theme(int id, String ThemeName, String ThemeURL, int ThemeCost) {
		super();
		this.id = id;
		this.ThemeName = ThemeName;
		this.ThemeURL = ThemeURL;
		this.ThemeCost = ThemeCost;
	}
	public Theme() {
		super();
		// TODO Auto-generated constructor stub
	}


}

