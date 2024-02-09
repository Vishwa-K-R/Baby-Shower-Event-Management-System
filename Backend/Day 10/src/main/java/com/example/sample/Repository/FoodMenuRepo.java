package com.example.sample.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sample.Model.Menu;

@Repository
public interface FoodMenuRepo extends JpaRepository <Menu,Integer> {

    

}
