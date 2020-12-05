package com.sms.crud.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.sms.crud.model.Company;
import com.sms.crud.repository.CompanyRepository;

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

public class CompanyController{
    @Autowired
    CompanyRepository companyRepository;

    //Read
    @GetMapping("/company")
    public ResponseEntity<List<Company>> getAllCompany(@RequestParam(required = false) String company_name){
        try{
            List<Company> company = new ArrayList<Company>();

            companyRepository.findAll().forEach(company::add);

            if(Company.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(company, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    //Read By Id
    @GetMapping("/company/{id}")
    public ResponseEntity<Company> getCompanyById(@PathVariable("id") long id){
        Optional<Company> userData = companyRepository.findById(id);

        if(userData.isPresent()){
            return new ResponseEntity<>(userData.get(),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    //Create User
    @PostMapping("/company")
    public ResponseEntity<Company> createCompany(@RequestBody Company company){
        try{
            Company _company = companyRepository
            .save(new Company(company.getCompanyName(),company.getCompanyManager(),company.getStocksId(),company.getStocksCount(),company.getInvestorStocksLimit(),company.getInvestorStocksLimit()));
            return new ResponseEntity<>(_company, HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //Update User
    @PutMapping("/company/{id}")
    public ResponseEntity<Company> updateCompany(@PathVariable("id") long id, @RequestBody Company company){
        Optional<Company> userData =  companyRepository.findById(id);

        if(userData.isPresent()){
            Company _company = userData.get();
            _company.setCompanyName(company.getCompanyName());
            _company.setCompanyManager(company.getCompanyManager());
            _company.setStocksId(company.getStocksId());
            _company.setStocksCount(company.getStocksCount());
            _company.setInvestorStocksLimit(company.getInvestorStocksLimit());
            _company.setInvestorInvestmentLimit(company.getInvestorInvestmentLimit());
            //_company.setCreatedBy(company.getCreatedBy());
            //_company.setCreatedAt(company.getCreatedAt());
            //_company.setUpdatedBy(company.getUpdatedBy());
            //_company.setUpdatedAt(company.getUpdatedAt());
            return new ResponseEntity<>(companyRepository.save(_company), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/company/{id}")
    public ResponseEntity<HttpStatus> deleteCompany(@PathVariable("id") long id){
        try{
            companyRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}