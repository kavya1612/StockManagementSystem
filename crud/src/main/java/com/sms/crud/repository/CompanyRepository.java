package com.sms.crud.repository;

//import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sms.crud.model.Company;

public interface CompanyRepository extends JpaRepository<Company, Long> {
    Optional<Company> findById(Long id);
}