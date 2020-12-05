package com.sms.crud.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.sms.crud.model.Stocks;
import com.sms.crud.repository.StocksRepository;

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

public class StocksController {

    @Autowired
    StocksRepository stocksRepository;

    //Read
    @GetMapping("/stocks")
    public ResponseEntity<List<Stocks>> getAllStocks(@RequestParam(required = false) String stock_name){
        try{
            List<Stocks> stocks = new ArrayList<Stocks>();
            stocksRepository.findAll().forEach(stocks::add);
            if(Stocks.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(stocks, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //Read By Id
    @GetMapping("/stocks/{id}")
    public ResponseEntity<Stocks> getStocksById(@PathVariable("id") long id){
        Optional<Stocks> stocksData = stocksRepository.findById(id);
        if(stocksData.isPresent()){
            return new ResponseEntity<>(stocksData.get(),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    //Create User
    @PostMapping("/stocks")
    public ResponseEntity<Stocks> createStocks(@RequestBody Stocks stocks){
        try{
            Stocks _stocks = stocksRepository
            .save(new Stocks(
            stocks.getStockName(),
            stocks.getStockType(), 
            stocks.getStockCount(),
            stocks.getStockPrice(),
            stocks.getStockOwner(),
            stocks.getStockHolder()
            //stocks.getCreatedBy(),
            //stocks.getCreatedAt(),
            //stocks.getUpdatedBy(),
            //stocks.getUpdatedAt()
            ));
            return new ResponseEntity<>(_stocks, HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //Update User
    @PutMapping("/stocks/{id}")
    public ResponseEntity<Stocks> updateStocks(@PathVariable("id") long id, @RequestBody Stocks stocks){
        Optional<Stocks> stocksData =  stocksRepository.findById(id);

        if(stocksData.isPresent()){
            Stocks _stocks = stocksData.get();
            _stocks.setStockName(stocks.getStockName());
            _stocks.setStockType(stocks.getStockType());
            _stocks.setStockCount(stocks.getStockCount());
            _stocks.setStockPrice(stocks.getStockPrice());
            _stocks.setStockOwner(stocks.getStockOwner());
            _stocks.setStockHolder(stocks.getStockHolder());
            //_stocks.setUpdatedBy(stocks.getUpdatedBy());
            //_stocks.setUpdatedAt(stocks.getUpdatedAt());
            return new ResponseEntity<>(stocksRepository.save(_stocks), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/stocks/{id}")
    public ResponseEntity<HttpStatus> deleteStocks(@PathVariable("id") long id){
        try{
            stocksRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
