package com.sms.crud.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.sms.crud.model.Stockledger;
import com.sms.crud.repository.StockledgerRepository;

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

public class StockledgerController {

    @Autowired
    StockledgerRepository stockledgerRepository;

    //Read
    @GetMapping("/stockledger")
    public ResponseEntity<List<Stockledger>> getAllStockledger(@RequestParam(required = false) String owner_id){
        try{
            List<Stockledger> Stockledger = new ArrayList<Stockledger>();
            stockledgerRepository.findAll().forEach(Stockledger::add);
            if(Stockledger.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(Stockledger, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //Read By Id
    @GetMapping("/stockledger/{id}")
    public ResponseEntity<Stockledger> getStockledgerById(@PathVariable("id") long id){
        Optional<Stockledger> StockledgerData = stockledgerRepository.findById(id);
        if(StockledgerData.isPresent()){
            return new ResponseEntity<>(StockledgerData.get(),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    //Create User
    @PostMapping("/stockledger")
    public ResponseEntity<Stockledger> createStockledger(@RequestBody Stockledger Stockledger){
        try{
            Stockledger _Stockledger = stockledgerRepository
            .save(new Stockledger(
            Stockledger.getPurchaseStockId(),
            Stockledger.getPurchaseStockName(), 
            Stockledger.getOwnerId(),
            Stockledger.getDateOfPurchase(),
            Stockledger.getStockPrice(),
            Stockledger.getStockCompany()
            ));
            return new ResponseEntity<>(_Stockledger, HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //Update User
    @PutMapping("/stockledger/{id}")
    public ResponseEntity<Stockledger> updateStockledger(@PathVariable("id") long id, @RequestBody Stockledger Stockledger){
        Optional<Stockledger> StockledgerData =  stockledgerRepository.findById(id);

        if(StockledgerData.isPresent()){
            Stockledger _Stockledger = StockledgerData.get();
            _Stockledger.setPurchaseStockId(Stockledger.getPurchaseStockId());
            _Stockledger.setPurchaseStockName(Stockledger.getPurchaseStockName());
            _Stockledger.setOwnerId(Stockledger.getOwnerId());
            _Stockledger.setDateOfPurchase(Stockledger.getDateOfPurchase());
            _Stockledger.setStockPrice(Stockledger.getStockPrice());
            _Stockledger.setStockCompany(Stockledger.getStockCompany());
           
            return new ResponseEntity<>(stockledgerRepository.save(_Stockledger), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/stockledger/{id}")
    public ResponseEntity<HttpStatus> deleteStockledger(@PathVariable("id") long id){
        try{
            stockledgerRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
