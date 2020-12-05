package com.sms.crud.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sms.crud.model.Stockledger;

public interface StockledgerRepository extends JpaRepository<Stockledger, Long> {
    Optional<Stockledger> findById(Long id);
    //List<Stockledger> findByOwnerId(Integer owner_id);
}
