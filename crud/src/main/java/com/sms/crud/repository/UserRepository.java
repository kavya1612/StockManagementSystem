package com.sms.crud.repository;

//import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sms.crud.model.Users;

public interface UserRepository extends JpaRepository<Users, Long> {
    Optional<Users> findById(Long id);
    Optional<Users> findByEmail(String email);
    
    
    @Query(value = "SELECT * FROM users WHERE id = 155",nativeQuery = true)
    Optional<Users> findAllUsers();

    // @Query("FROM users u WHERE u.id = 155")
    // Optional<Users> findAllUsers();
    
}