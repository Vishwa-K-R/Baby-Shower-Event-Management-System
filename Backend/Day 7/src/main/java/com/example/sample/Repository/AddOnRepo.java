package com.example.sample.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sample.Model.Add_on;

@Repository
public interface AddOnRepo extends JpaRepository <Add_on,Integer> {

}
