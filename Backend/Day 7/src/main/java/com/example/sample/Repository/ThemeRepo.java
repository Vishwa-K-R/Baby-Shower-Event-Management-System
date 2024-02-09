package com.example.sample.Repository;

// import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.sample.Model.Theme;
@Repository
public interface ThemeRepo extends JpaRepository <Theme,Integer> {
    
//	Optional <Signup> findByUsernameAndPassword(String username, String password);
}
