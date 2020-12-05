package com.sms.crud.repository;

//import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sms.crud.model.Stocks;

public interface StocksRepository extends JpaRepository<Stocks, Long> {
    Optional<Stocks> findById(Long id);
}