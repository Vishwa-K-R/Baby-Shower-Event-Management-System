package com.example.sample.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Add_on {
    @Id
    @Column(name="add_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int addonId;
    private String addonName;
    private String addonDescription;
    private String addonPrice;
    public int getAddonId() {
        return addonId;
    }
    public void setAddonId(int addonId) {
        this.addonId = addonId;
    }
    public String getAddonName() {
        return addonName;
    }
    public void setAddonName(String addonName) {
        this.addonName = addonName;
    }
    public String getAddonDescription() {
        return addonDescription;
    }
    public void setAddonDescription(String addonDescription) {
        this.addonDescription = addonDescription;
    }
    public String getAddonPrice() {
        return addonPrice;
    }
    public void setAddonPrice(String addonPrice) {
        this.addonPrice = addonPrice;
    }
    @Override
    public String toString() {
        return "Add_on [addonId=" + addonId + ", addonName=" + addonName + ", addonDescription=" + addonDescription
                + ", addonPrice=" + addonPrice + "]";
    }

    
}
