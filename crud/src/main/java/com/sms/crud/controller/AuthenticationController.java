package com.sms.crud.controller;

//import java.util.List;
import java.util.Optional;

import com.sms.crud.model.Users;
import com.sms.crud.repository.UserRepository;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")

public class AuthenticationController{

    @Autowired
    UserRepository userRepository;
    
    //Register User
    @PostMapping("/authentication/register")
    public ResponseEntity<Users> createUser(@RequestBody Users registerusers){
        try{
            Users _users = userRepository
            .save(new Users(registerusers.getFirstname(),registerusers.getLastname(),registerusers.getEmail(),registerusers.getPassword(),registerusers.getDob(),registerusers.getAccessLevel(),registerusers.getCompanyId()));
            return new ResponseEntity<>(_users, HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // //Register User
    // @PostMapping("/authentication/login")
    // public ResponseEntity<Users> userLogin1(@RequestBody Users loginusers){
    //     try{
    //         String email=loginusers.getEmail();
    //         Optional<Users> userData = userRepository.findByEmail(email);
            
    //         if(userData.isPresent()){
    //             if((userData.get().getPassword())==loginusers.getPassword()){
    //                 return new ResponseEntity<>(userData.get(),HttpStatus.OK);
    //             }
    //         }

    //     } catch (Exception e){
    //         return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    //     return null;
    // }

    @PostMapping("/authentication/login")
    public ResponseEntity<Users> userLogin(@RequestBody Users loginusers){
        
            String email=loginusers.getEmail();
            Optional<Users> userData = userRepository.findByEmail(email);
                return new ResponseEntity<>(userData.get(),HttpStatus.OK);                   
    }

    @GetMapping("/authentication/all")
    public ResponseEntity<Users> getAllDBusers(){
        //Integer id= 155;
        Optional<Users> userData =userRepository.findAllUsers();

        
        
        if(userData.isPresent()){
            return new ResponseEntity<>(userData.get(),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    

    @GetMapping("/authentication/register/{email}")
    public ResponseEntity<Users> getUserById(@PathVariable("email") String email){
        //Optional<Users> userData = userRepository.findByEmail(email);
        Optional<Users> userData = userRepository.findByEmail(email);

        if(userData.isPresent()){
            return new ResponseEntity<>(userData.get(),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

