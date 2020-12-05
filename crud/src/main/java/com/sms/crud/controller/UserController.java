package com.sms.crud.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.sms.crud.model.Users;
import com.sms.crud.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")

public class UserController{
    @Autowired
    UserRepository userRepository;

    //Read
    @GetMapping("/users")
    public ResponseEntity<List<Users>> getAllUsers(@RequestParam(required = false) String email){
        try{
            List<Users> users = new ArrayList<Users>();

            userRepository.findAll().forEach(users::add);

            if(Users.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    //Read By Id
    @GetMapping("/users/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable("id") long id){
        Optional<Users> userData = userRepository.findById(id);

        if(userData.isPresent()){
            return new ResponseEntity<>(userData.get(),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    //Create User
    @PostMapping("/users")
    public ResponseEntity<Users> createUser(@RequestBody Users users){
        try{
            Users _users = userRepository
            .save(new Users(users.getFirstname(),users.getLastname(),users.getEmail(),users.getPassword(),users.getDob(),users.getAccessLevel(),users.getCompanyId()));
            return new ResponseEntity<>(_users, HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //Update User
    @PutMapping("/users/{id}")
    public ResponseEntity<Users> updateUser(@PathVariable("id") long id, @RequestBody Users users){
        Optional<Users> userData =  userRepository.findById(id);

        if(userData.isPresent()){
            Users _users = userData.get();
            _users.setFirstname(users.getFirstname());
            _users.setLastname(users.getLastname());
            _users.setEmail(users.getEmail());
            _users.setPassword(users.getPassword());
            _users.setCompanyId(users.getCompanyId());
            _users.setDob(users.getDob());
            _users.setAccessLevel(users.getAccessLevel());
           // _users.setUpdatedBy(users.getUpdatedBy());
           // _users.setUpdatedAt(users.getUpdatedAt());
            return new ResponseEntity<>(userRepository.save(_users), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") long id){
        try{
            userRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}