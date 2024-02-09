package com.example.sample.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int foodMenuid;
    private String foodMenuType;
    private String foodMenuItems;
    private int foodMenuCost;
    public int getFoodMenuid() {
        return foodMenuid;
    }
    public void setFoodMenuid(int foodMenuid) {
        this.foodMenuid = foodMenuid;
    }
    public String getFoodMenuType() {
        return foodMenuType;
    }
    public void setFoodMenuType(String foodMenuType) {
        this.foodMenuType = foodMenuType;
    }
    public String getFoodMenuItems() {
        return foodMenuItems;
    }
    public void setFoodMenuItems(String foodMenuItems) {
        this.foodMenuItems = foodMenuItems;
    }
    public int getFoodMenuCost() {
        return foodMenuCost;
    }
    public void setFoodMenuCost(int foodMenuCost) {
        this.foodMenuCost = foodMenuCost;
    }
    @Override
    public String toString() {
        return "Menu [foodMenuid=" + foodMenuid + ", foodMenuType=" + foodMenuType + ", foodMenuItems=" + foodMenuItems
                + ", foodMenuCost=" + foodMenuCost + "]";
    }
    

}
