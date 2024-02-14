package com.example.sample.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sample.Model.Event;

@Repository
public interface EventRepo extends JpaRepository <Event,Integer> {

}
